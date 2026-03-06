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

// MAIN //

/**
* Updates a centroid.
*
* ## Notes
*
* -   Uses Welford's algorithm for updating an arithmetic mean.
*
* @private
* @param {PositiveInteger} ndims - number of dimensions
* @param {PositiveInteger} N - number of data points in a cluster
* @param {NumericArray} C - strided array containing centroids
* @param {PositiveInteger} strideC - centroid column stride
* @param {NonNegativeInteger} offsetC - centroid index offset
* @param {NumericArray} V - strided array containing a data point
* @param {integer} strideV - vector stride
* @param {NonNegativeInteger} offsetV - vector index offset
* @returns {NumericArray} strided array containing centroids
*/
function updateCentroid( ndims, N, C, strideC, offsetC, V, strideV, offsetV ) {
	var delta;
	var ci;
	var i;

	for ( i = 0; i < ndims; i++ ) {
		ci = C[ offsetC ];
		delta = V[ offsetV ] - ci;
		ci += delta / N;
		C[ offsetC ] = ci;

		offsetC += strideC;
		offsetV += strideV;
	}
	return C;
}


// EXPORTS //

module.exports = updateCentroid;
