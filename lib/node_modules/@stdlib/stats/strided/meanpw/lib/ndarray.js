/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var gsumpw = require( '@stdlib/blas/ext/base/gsumpw' ).ndarray;


// MAIN //

/**
* Computes the arithmetic mean of a strided array using pairwise summation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} arithmetic mean
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = meanpw( 4, x, 2, 1 );
* // returns 1.25
*/
function meanpw( N, x, strideX, offsetX ) {
	if ( N <= 0 ) {
		return NaN;
	}
	return gsumpw( N, x, strideX, offsetX ) / N;
}


// EXPORTS //

module.exports = meanpw;
