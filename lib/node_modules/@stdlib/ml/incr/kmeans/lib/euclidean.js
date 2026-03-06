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

var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Computes the Euclidean distance between two vectors.
*
* @private
* @param {NonNegativeInteger} N - number of elements
* @param {NumericArray} X - strided array
* @param {PositiveInteger} strideX - stride
* @param {NonNegativeInteger} offsetX - index offset
* @param {NumericArray} Y - strided array
* @param {PositiveInteger} strideY - stride
* @param {NonNegativeInteger} offsetY - index offset
* @returns {number} Euclidean distance
*/
function euclidean( N, X, strideX, offsetX, Y, strideY, offsetY ) { // TODO: remove and use BLAS implementation
	var xi;
	var yi;
	var d;
	var s;
	var i;

	xi = offsetX;
	yi = offsetY;
	s = 0.0;
	for ( i = 0; i < N; i++ ) {
		d = X[ xi ] - Y[ yi ];
		s += d * d;
		xi += strideX;
		yi += strideY;
	}
	return sqrt( s );
}


// EXPORTS //

module.exports = euclidean;
