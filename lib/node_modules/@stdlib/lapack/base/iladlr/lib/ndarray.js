/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var base = require( './base.js' );


// MAIN //

/**
* Returns the index of the last non-zero row in a matrix `A` using alternative indexing semantics.
*
* @param {PositiveInteger} M - number of rows in `A`
* @param {PositiveInteger} N - number of columns in `A`
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - index offset for `A`
* @returns {integer} index of the last non-zero row
*
* @example
* var Float64array = require( '@stdlib/array/float64' );
*
* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
*
* var out = iladlr( 3, 2, A, 2, 1, 0 );
* // returns 1
*/
function iladlr( M, N, A, strideA1, strideA2, offsetA ) {
	return base( M, N, A, strideA1, strideA2, offsetA );
}


// EXPORTS //

module.exports = iladlr;
