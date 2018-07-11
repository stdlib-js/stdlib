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

var closestCentroid = require( './find_closest_centroid.js' );
var updateCentroid = require( './update_centroid.js' );


// MAIN //

/**
* Initializes clusters and associated statistics given a set of centroids.
*
* ## Notes
*
* -   We follow the same approach when calculating cluster statistics as if the centroids had been provided by a user (i.e., not computed internally), as this ensures consistency with how statistics are computed when subsequent data vectors are provided to the accumulator.
*
* @private
* @param {ndarray} data - matrix containing data points
* @param {ndarray} centroids - matrix containing centroids
* @param {ndarray} stats - matrix containing cluster statistics
* @param {Function} acc - cluster statistics accumulator
* @param {Function} dist - distance function
*/
function clusters( data, centroids, stats, acc, dist ) {
	var ndims;
	var cbuf;
	var dbuf;
	var npts;
	var sc;
	var sd;
	var oc;
	var od;
	var N;
	var k;
	var c;
	var d;
	var i;

	k = centroids.shape[ 0 ];
	ndims = centroids.shape[ 1 ];
	npts = data.shape[ 0 ];

	cbuf = centroids.data;
	sc = centroids.strides[ 0 ];

	dbuf = data.data;
	sd = data.strides[ 0 ];
	od = 0;

	for ( i = 0; i < npts; i++ ) {
		// Find the closest centroid by computing the distance from the provided data point to each centroid:
		c = closestCentroid( dist, k, ndims, cbuf, sc, 0, dbuf, 1, od ); // Magic numbers arise from knowing that matrices are row-major single-segment contiguous

		// Compute the centroids buffer index offset to point to the closest centroid:
		oc = sc * c;

		// Update the closest centroid:
		N = stats.get( c, 0 ) + 1;
		updateCentroid( ndims, N, cbuf, 1, oc, dbuf, 1, od ); // Magic number `1` as we know that these matrices are row-major single-segment contiguous

		// Recompute the distance based on the updated centroid position:
		d = dist( ndims, cbuf, 1, oc, dbuf, 1, od ); // Magic number `1` as we know that these matrices are row-major single-segment contiguous

		// Update cluster statistics:
		acc( c, d );

		// Increment the data buffer index offset to point to the next data point:
		od += sd;
	}
}


// EXPORTS //

module.exports = clusters;
