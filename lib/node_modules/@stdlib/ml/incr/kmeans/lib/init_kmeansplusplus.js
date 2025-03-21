/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var randint = require( '@stdlib/random/base/discrete-uniform' ).factory;
var randu = require( '@stdlib/random/base/mt19937' ).factory;
var PINF = require( '@stdlib/constants/float64/pinf' );
var dcopy = require( '@stdlib/blas/base/dcopy' ).ndarray;
var squaredEuclidean = require( './squared_euclidean.js' );
var squaredCosine = require( './squared_cosine.js' );
var squaredCorrelation = require( './squared_correlation.js' );


// FUNCTIONS //

/**
* Applies a function for calculating the squared distance between each data point and a specified centroid.
*
* @private
* @param {Array} out - output array
* @param {Function} dist - distance function to apply
* @param {PositiveInteger} npts - number of data points
* @param {PositiveInteger} ndims - number of dimensions
* @param {ndarray} matrix - data point matrix
* @param {NonNegativeInteger} ci - centroid row index
* @returns {Array} output array
*/
function dapply( out, dist, npts, ndims, matrix, ci ) {
	var offsetC;
	var offsetD;
	var strideD;
	var buf;
	var i;

	buf = matrix.data;

	strideD = matrix.strides[ 0 ];
	offsetC = strideD * ci;
	offsetD = 0;

	for ( i = 0; i < npts; i++ ) {
		out[ i ] = dist( ndims, buf, 1, offsetD, buf, 1, offsetC ); // Magic number `1` for stride is based on knowing that the matrix is row-major single-segment contiguous
		offsetD += strideD;
	}
	return out;
}


// MAIN //

/**
* Initializes centroids by performing the k-means++ initialization procedure.
*
* ## Method
*
* The k-means++ algorithm for choosing initial centroids is as follows:
*
* 1.  Select a data point uniformly at random from a data set \\( X \\). This data point is first centroid and denoted \\( c_0 \\).
*
* 2.  Compute the distance from each data point to \\( c_0 \\). Denote the distance between \\( c_j \\) and data point \\( m \\) as \\( d(x_m, c_j) \\).
*
* 3.  Select the next centroid, \\( c_1 \\), at random from \\( X \\) with probability
*
*     ```tex
*     \frac{d^2(x_m, c_0)}{\sum_{j=0}^{n-1} d^2(x_j, c_0)}
*     ```
*
*     where \\( n \\) is the number of data points.
*
* 4.  To choose centroid \\( j \\),
*
*     a.   Compute the distances from each data point to each centroid and assign each data point to its closest centroid.
*
*     b.   For \\( i = 0,\ldots,n-1 \\) and \\( p = 0,\ldots,j-2 \\), select centroid \\( j \\) at random from \\( X \\) with probability
*
*          ```tex
*          \frac{d^2(x_i, c_p)}{\sum_{\{h; x_h \exits C_p\}} d^2(x_h, c_p)}
*          ```
*
*          where \\( C_p \\) is the set of all data points closest to centroid \\( c_p \\) and \\( x_i \\) belongs to \\( c_p \\).
*
*          Stated more plainly, select each subsequent centroid with a probability proportional to the distance from the centroid to the closest centroid already chosen.
*
* 5.  Repeat step `4` until \\( k \\) centroids have been chosen.
*
* ## References
*
* -   Arthur, David, and Sergei Vassilvitskii. 2007. "K-means++: The Advantages of Careful Seeding." In _Proceedings of the Eighteenth Annual Acm-Siam Symposium on Discrete Algorithms_, 1027–35. SODA '07. Philadelphia, PA, USA: Society for Industrial and Applied Mathematics. <http://dl.acm.org/citation.cfm?id=1283383.1283494>.
*
* @private
* @param {ndarray} out - output centroids `kxd` matrix
* @param {ndarray} buffer - data buffer
* @param {string} metric - distance metric
* @param {PositiveInteger} trials - number of potential centroids per iteration
* @param {*} seed - PRNG seed
* @returns {ndarray} centroids
*/
function kmeansplusplus( out, buffer, metric, trials, seed ) {
	var centroids; // array of indices
	var offsetC;
	var randi;
	var ndims;
	var dhash;
	var probs;
	var rand;
	var npts;
	var csum;
	var bsum;
	var dist;
	var obuf;
	var buf;
	var ind;
	var sb1;
	var sb2;
	var so1;
	var so2;
	var oo;
	var d2;
	var bc;
	var d;
	var c;
	var k;
	var r;
	var i;
	var j;
	var t;

	k = out.shape[ 0 ];
	ndims = out.shape[ 1 ];
	npts = buffer.shape[ 0 ];

	obuf = out.data;
	so1 = out.strides[ 0 ];
	so2 = out.strides[ 1 ];
	oo = out.offset;

	buf = buffer.data;
	sb1 = buffer.strides[ 0 ];
	sb2 = buffer.strides[ 1 ];

	// Create seeded PRNGs:
	rand = randu({
		'seed': seed
	});
	randi = randint({
		'seed': rand()
	});
	rand = rand.normalized;

	// Determine the distance functions...
	if ( metric === 'cosine' ) {
		dist = squaredCosine;
	} else if ( metric === 'correlation' ) {
		dist = squaredCorrelation;
	} else {
		dist = squaredEuclidean;
	}
	// 1. Select a data point at random for the first centroid...
	c = randi( 0, npts-1 );
	if ( k === 1 ) {
		// For the trivial case of one centroid, we are done which means we can skip to setting the output centroid data...
		return dcopy( ndims, buf, sb2, sb1*c, obuf, so2, oo );
	}
	centroids = [ c ];

	// Create a scratch array for storing squared distances:
	d2 = new Array( ndims );

	// Create a strided array for storing closest centroid results:
	dhash = new Array( npts*2 );
	ind = 0;
	for ( i = 0; i < npts; i++ ) {
		dhash[ ind ] = PINF; // squared distance
		dhash[ ind+1 ] = 0; // index of the closest centroid
		ind += 2; // +stride
	}
	// Create a scratch array for storing cumulative probabilities:
	probs = new Array( npts );

	// 2-5. For each data point, compute the distances to each centroid, find the closest centroid, and, based on the distance to the closest centroid, assign a probability to the data point to be chosen as centroid `c_j`...
	for ( j = 1; j < k; j++ ) {
		// Note: instead of repeatedly computing centroid distances for each data point, we only need to compute the distances for the most recent centroid and to maintain a hash of closest distance results...
		dapply( d2, dist, npts, ndims, buffer, centroids[ j-1 ] );
		csum = 0.0; // total cumulative distance
		ind = 0;
		for ( i = 0; i < npts; i++ ) {
			if ( d2[ i ] < dhash[ ind ] ) {
				dhash[ ind ] = d2[ i ];
				dhash[ ind+1 ] = j - 1;
				csum += d2[ i ];
			} else {
				csum += dhash[ ind ];
			}
			ind += 2; // +stride
		}
		// Compute the cumulative probabilities...
		probs[ 0 ] = dhash[ 0 ] / csum;
		ind = 2;
		for ( i = 1; i < npts; i++ ) {
			probs[ i ] = probs[ i-1 ] + ( dhash[ ind ] / csum );
			ind += 2; // +stride
		}
		// Based Arthur's and Vassilvitskii's paper "kmeans++: The Advantages of Careful Seeding" (see conclusion), randomly select candidate centroids and pick the candidate which minimizes the total squared distance...
		bsum = PINF; // best sum
		bc = -1; // best candidate
		for ( t = 0; t < trials; t++ ) {
			// Use rejection sampling to handle edge case where the total cumulative probability does not equal unity due to accumulated floating-point errors and is less than `r` (*very* rarely should this require more than one iteration)...
			c = -1;

			// Note: the following should never choose an already chosen centroid (why? because a centroid's minimum squared distance is `0`, which means it will either correspond to a cumulative probability of `0` or will correspond to a cumulative probability equal to the previous cumulative probability, thus leading to the equivalent of a no-op iteration)
			while ( c === -1 ) {
				r = rand(); // Note: `r` exists on the interval `[0,1)`
				for ( i = 0; i < npts; i++ ) {
					if ( r < probs[ i ] ) {
						c = i;
						break;
					}
				}
			}
			// Compute the sum of squared distances were we to include the candidate centroid...
			csum = 0.0;
			offsetC = sb1 * c;
			ind = 0;
			for ( i = 0; i < npts; i++ ) {
				d = dist( ndims, buf, 1, sb1*i, buf, 1, offsetC ); // Magic number `1` for stride as matrix is row-major single-segment contiguous
				if ( d < dhash[ ind ] ) {
					csum += d;
				} else {
					csum += dhash[ ind ];
				}
				ind += 2; // +stride
			}
			// Determine if the candidate is the best candidate we have seen thus far...
			if ( csum < bsum ) {
				bsum = csum;
				bc = c;
			}
		}
		// Push the "best" candidate to our list of centroids:
		centroids.push( bc );
	}
	// 6. Set centroid data...
	for ( i = 0; i < k; i++ ) {
		// Note: the following is likely to be an "out-of-order" copy...
		dcopy( ndims, buf, sb2, sb1*centroids[i], obuf, so2, oo );
		oo += so1;
	}
	return out;
}


// EXPORTS //

module.exports = kmeansplusplus;
