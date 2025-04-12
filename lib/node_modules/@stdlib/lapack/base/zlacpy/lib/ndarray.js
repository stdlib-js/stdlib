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
* Copies all or part of a matrix `A` to another matrix `B` using alternative indexing semantics.
*
* @param {string} uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Complex128Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Complex128Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Complex128Array} `B`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex128Array( 12 );
*
* zlacpy( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 3.0
*
* v = imag( z );
* // returns 4.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex128Array( 12 );
*
* zlacpy( 'upper', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 3.0
*
* v = imag( z );
* // returns 4.0
*
* z = B.get( 4 );
* // returns <Complex128>
*
* v = real( z );
* // returns 0.0
*
* v = imag( z );
* // returns 0.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex128Array( 12 );
*
* zlacpy( 'lower', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex128>
*
* var v = real( z );
* // returns 3.0
*
* v = imag( z );
* // returns 4.0
*
* z = B.get( 1 );
* // returns <Complex128>
*
* v = real( z );
* // returns 0.0
*
* v = imag( z );
* // returns 0.0
*/
function zlacpy( uplo, M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) { // eslint-disable-line max-len, max-params
	return base( uplo, M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = zlacpy;
