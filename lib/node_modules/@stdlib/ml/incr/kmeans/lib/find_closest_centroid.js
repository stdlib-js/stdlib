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

var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Finds the closest centroid.
*
* @private
* @param {Function} dist - distance function
* @param {PositiveInteger} k - number of clusters
* @param {PositiveInteger} ndims - number of dimensions
* @param {NumericArray} C - strided array containing centroids
* @param {PositiveInteger} strideC - centroid row stride
* @param {NonNegativeInteger} offsetC - centroid index offset
* @param {NumericArray} V - strided array containing a data point
* @param {integer} strideV - vector stride
* @param {NonNegativeInteger} offsetV - vector index offset
* @returns {NonNegativeInteger} centroid index
*/
function closestCentroid( dist, k, ndims, C, strideC, offsetC, V, strideV, offsetV ) { // eslint-disable-line max-len
	var cd;
	var c;
	var d;
	var i;

	cd = PINF;
	for ( i = 0; i < k; i++ ) {
		// Why the magic number `1`? Because we know that the centroids matrix should be row-major single-segment contiguous.
		d = dist( ndims, C, 1, offsetC, V, strideV, offsetV );
		if ( d < cd ) {
			cd = d;
			c = i;
		}
		offsetC += strideC;
	}
	return c;
}


// EXPORTS //

module.exports = closestCentroid;
