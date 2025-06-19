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
* Sets the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.
*
* @param {string} uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Complex64} alpha - value assigned to off-diagonal elements
* @param {Complex64} beta - value assigned to diagonal elements
* @param {Complex64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Complex64Array} `A`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( 5 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'all', 2, 2, alpha, beta, A, 2, 1, 1 );
*
* var z = A.get( 1 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* z = A.get( 3 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( 5 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'upper', 2, 2, alpha, beta, A, 2, 1, 1 );
*
* var z = A.get( 1 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*
* z = A.get( 3 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 0.0
*
* im = imagf( z );
* // returns 0.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var A = new Complex64Array( 5 );
*
* var alpha = new Complex64( 1.0, 2.0 );
* var beta = new Complex64( 3.0, 4.0 );
*
* claset( 'lower', 2, 2, alpha, beta, A, 2, 1, 1 );
*
* var z = A.get( 1 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns 4.0
*
* z = A.get( 2 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 0.0
*
* im = imagf( z );
* // returns 0.0
*
* z = A.get( 3 );
* // returns <Complex64>
*
* re = realf( z );
* // returns 1.0
*
* im = imagf( z );
* // returns 2.0
*/
function claset( uplo, M, N, alpha, beta, A, strideA1, strideA2, offsetA ) {
	return base( uplo, M, N, alpha, beta, A, strideA1, strideA2, offsetA );
}


// EXPORTS //

module.exports = claset;
