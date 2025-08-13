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
var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major-string' );
var resolveOrder = require( '@stdlib/blas/base/layout-resolve-enum' );
var resolveTriangle = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
var format = require( '@stdlib/string/format' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Copies all or part of a matrix `A` to another matrix `B`.
*
* @param {string} order - storage layout of `A` and `B`
* @param {string} uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Float64Array} A - input matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Float64Array} B - output matrix
* @param {PositiveInteger} LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @throws {TypeError} first argument must be a valid order
* @throws {RangeError} sixth argument must be greater than or equal to `N`
* @throws {RangeError} eighth argument must be greater than or equal to `N`
* @returns {Float64Array} `B`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( 4 );
*
* dlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
* // B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( 4 );
*
* dlacpy( 'row-major', 'upper', 2, 2, A, 2, B, 2 );
* // B => <Float64Array>[ 1.0, 2.0, 0.0, 4.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( 4 );
*
* dlacpy( 'row-major', 'lower', 2, 2, A, 2, B, 2 );
* // B => <Float64Array>[ 1.0, 0.0, 3.0, 4.0 ]
*/
function dlacpy( order, uplo, M, N, A, LDA, B, LDB ) {
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( isRowMajor( order ) ) {
		if ( LDA < N ) {
			throw new RangeError( format( 'invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.', N, LDA ) );
		}
		if ( LDB < N ) {
			throw new RangeError( format( 'invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.', N, LDB ) );
		}
	}
	addon( resolveOrder( order ), resolveTriangle( uplo ) || -1, M, N, A, LDA, B, LDB ); // eslint-disable-line max-len
	return B;
}


// EXPORTS //

module.exports = dlacpy;
