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
* @param {Complex64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Complex64Array} B - output matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @returns {Complex64Array} `B`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex64Array( 12 );
*
* clacpy( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex64>
*
* var v = realf( z );
* // returns 3.0
*
* v = imagf( z );
* // returns 4.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex64Array( 12 );
*
* clacpy( 'upper', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex64>
*
* var v = realf( z );
* // returns 3.0
*
* v = imagf( z );
* // returns 4.0
*
* z = B.get( 4 );
* // returns <Complex64>
*
* v = realf( z );
* // returns 0.0
*
* v = imagf( z );
* // returns 0.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
* var B = new Complex64Array( 12 );
*
* clacpy( 'lower', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
*
* var z = B.get( 2 );
* // returns <Complex64>
*
* var v = realf( z );
* // returns 3.0
*
* v = imagf( z );
* // returns 4.0
*
* z = B.get( 1 );
* // returns <Complex64>
*
* v = realf( z );
* // returns 0.0
*
* v = imagf( z );
* // returns 0.0
*/
function clacpy( uplo, M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ) { // eslint-disable-line max-len, max-params
	return base( uplo, M, N, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = clacpy;
