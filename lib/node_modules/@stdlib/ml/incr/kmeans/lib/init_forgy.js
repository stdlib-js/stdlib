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

var factory = require( '@stdlib/random/base/discrete-uniform' ).factory;
var incrmean = require( '@stdlib/stats/incr/mean' );


// MAIN //

/**
* Initializes centroids by randomly assigning each data point to cluster and computing centroids.
*
* ## References
*
* -   Forgy, E. 1965. "Cluster Analysis of Multivariate Data: Efficiency versus Interpretability of Classification." _Biometrics_ 21 (3): 768–69.
*
* @private
* @param {ndarray} out - output centroids `kxd` matrix
* @param {ndarray} buffer - buffer containing data points
* @param {*} seed - PRNG seed
* @returns {ndarray} centroids
*/
function forgy( out, buffer, seed ) {
	var randi;
	var obuf;
	var npts;
	var buf;
	var sb1;
	var sb2;
	var so1;
	var so2;
	var acc;
	var oo;
	var oa;
	var ob;
	var c;
	var M;
	var N;
	var i;
	var j;

	M = out.shape[ 0 ];
	N = out.shape[ 1 ];

	obuf = out.data;
	so1 = out.strides[ 0 ];
	so2 = out.strides[ 1 ];
	oo = out.offset;

	buf = buffer.data;
	npts = buffer.shape[ 0 ];
	sb1 = buffer.strides[ 0 ];
	sb2 = buffer.strides[ 1 ];
	ob = buffer.offset;

	// Initialize a PRNG for randomly assigning data points to clusters:
	randi = factory( 0, M-1, {
		'seed': seed
	});

	// Initialize a strided (MxN) array for storing accumulated centroids...
	acc = [];
	for ( i = 0; i < M*N; i++ ) {
		acc.push( incrmean() );
	}

	// Randomly assign each data point to a cluster and update the respective cluster's centroid...
	for ( i = 0; i < npts; i++ ) {
		// Generate a random cluster index:
		c = randi();

		// Compute the accumulator index offset:
		oa = N * c;

		// Update the respective cluster centroid:
		for ( j = 0; j < N; j++ ) {
			acc[ oa+j ]( buf[ ob+(sb2*j) ] );
		}
		// Update the data point index offset:
		ob += sb1;
	}
	// Update the output matrix...
	oa = 0;
	for ( i = 0; i < M; i++ ) {
		for ( j = 0; j < N; j++ ) {
			obuf[ oo+(so2*j) ] = acc[ oa ]();
			oa += 1; // We can simply increment the array pointer as we know that the accumulator array is row-major single-segment contiguous
		}
		oo += so1;
	}
	return out;
}


// EXPORTS //

module.exports = forgy;
