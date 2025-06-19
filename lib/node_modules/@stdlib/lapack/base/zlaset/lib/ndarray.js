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
* Sets the off-diagonal elements and the diagonal elements of a double-precision complex floating-point matrix to specified values.
*
* @param {string} uplo - specifies whether to set the upper or lower triangular/trapezoidal part of matrix `A`
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Complex128} alpha - value assigned to off-diagonal elements
* @param {Complex128} beta - value assigned to diagonal elements
* @param {Complex128Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @returns {Complex128Array} `A`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( 5 );
*
* var alpha = new Complex128( 1.0, 2.0 );
* var beta = new Complex128( 3.0, 4.0 );
*
* zlaset( 'all', 2, 2, alpha, beta, A, 2, 1, 1 );
*
* var z = A.get( 1 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 3.0
*
* var im = imag( z );
* // returns 4.0
*
* z = A.get( 2 );
* // returns <Complex128>
*
* re = real( z );
* // returns 1.0
*
* im = imag( z );
* // returns 2.0
*
* z = A.get( 3 );
* // returns <Complex128>
*
* re = real( z );
* // returns 1.0
*
* im = imag( z );
* // returns 2.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var A = new Complex128Array( 5 );
*
* var alpha = new Complex128( 1.0, 2.0 );
* var beta = new Complex128( 3.0, 4.0 );
*
* zlaset( 'upper', 2, 2, alpha, beta, A, 2, 1, 1 );
*
* var z = A.get( 1 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 3.0
*
* var im = imag( z );
* // returns 4.0
*
* z = A.get( 2 );
* // returns <Complex128>
*
* re = real( z );
* // returns 1.0
*
* im = imag( z );
* // returns 2.0
*
* z = A.get( 3 );
* // returns <Complex128>
*
* re = real( z );
* // returns 0.0
*
* im = imag( z );
* // returns 0.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var A = new Complex128Array( 5 );
*
* var alpha = new Complex128( 1.0, 2.0 );
* var beta = new Complex128( 3.0, 4.0 );
*
* zlaset( 'lower', 2, 2, alpha, beta, A, 2, 1, 1 );
*
* var z = A.get( 1 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 3.0
*
* var im = imag( z );
* // returns 4.0
*
* z = A.get( 2 );
* // returns <Complex128>
*
* re = real( z );
* // returns 0.0
*
* im = imag( z );
* // returns 0.0
*
* z = A.get( 3 );
* // returns <Complex128>
*
* re = real( z );
* // returns 1.0
*
* im = imag( z );
* // returns 2.0
*/
function zlaset( uplo, M, N, alpha, beta, A, strideA1, strideA2, offsetA ) {
	return base( uplo, M, N, alpha, beta, A, strideA1, strideA2, offsetA );
}


// EXPORTS //

module.exports = zlaset;
