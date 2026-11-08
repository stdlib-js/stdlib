/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Generates a Vandermonde matrix using alternative indexing semantics.
*
* @param {integer} mode - mode indicating whether to generate increasing or decreasing powers
* @param {NonNegativeInteger} M - number of rows in `out`
* @param {NonNegativeInteger} N - number of columns in `out`
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} out - output matrix
* @param {integer} strideOut1 - stride length for the first dimension of `out`
* @param {integer} strideOut2 - stride length for the second dimension of `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @throws {RangeError} second argument must be a nonnegative integer
* @throws {RangeError} third argument must be a nonnegative integer
* @returns {NumericArray} output matrix
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gvander( 1, 3, 3, x, 1, 0, out, 3, 1, 0 );
* // out => [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ]
*/
function gvander( mode, M, N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ) {
	if ( M < 0 ) {
		throw new RangeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%d`.', M ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Third argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( M === 0 || N === 0 ) {
		return out;
	}
	return base( mode, M, N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut );
}


// EXPORTS //

module.exports = gvander;
