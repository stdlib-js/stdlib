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

var isLayout = require( '@stdlib/blas/base/assert/is-layout' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Copies all or part of a matrix `A` to another matrix `B`.
*
* @param {string} order - storage layout of `A` and `B`
* @param {string} uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Complex64Array} A - input matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Complex64Array} B - output matrix
* @param {PositiveInteger} LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @throws {TypeError} first argument must be a valid order
* @throws {RangeError} sixth argument must be greater than or equal to `N`
* @throws {RangeError} eighth argument must be greater than or equal to `N`
* @returns {Complex64Array} `B`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex64Array( 4 );
*
* clacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
*
* var z = B.get( 0 );
* // returns <Complex64>
*
* var v = realf( z );
* // returns 1.0
*
* v = imagf( z );
* // returns 2.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex64Array( 4 );
*
* clacpy( 'row-major', 'upper', 2, 2, A, 2, B, 2 );
*
* var z = B.get( 0 );
* // returns <Complex64>
*
* var v = realf( z );
* // returns 1.0
*
* v = imagf( z );
* // returns 2.0
*
* z = B.get( 2 );
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
* var A = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var B = new Complex64Array( 4 );
*
* clacpy( 'row-major', 'lower', 2, 2, A, 2, B, 2 );
*
* var z = B.get( 0 );
* // returns <Complex64>
*
* var v = realf( z );
* // returns 1.0
*
* v = imagf( z );
* // returns 2.0
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
function clacpy( order, uplo, M, N, A, LDA, B, LDB ) {
	var sa1;
	var sa2;
	var sb1;
	var sb2;
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( order === 'column-major' ) {
		sa1 = 1;
		sa2 = LDA;
		sb1 = 1;
		sb2 = LDB;
	} else { // order === 'row-major'
		if ( LDA < N ) {
			throw new RangeError( format( 'invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.', N, LDA ) );
		}
		if ( LDB < N ) {
			throw new RangeError( format( 'invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.', N, LDB ) );
		}
		sa1 = LDA;
		sa2 = 1;
		sb1 = LDB;
		sb2 = 1;
	}
	return base( uplo, M, N, A, sa1, sa2, 0, B, sb1, sb2, 0 );
}


// EXPORTS //

module.exports = clacpy;
