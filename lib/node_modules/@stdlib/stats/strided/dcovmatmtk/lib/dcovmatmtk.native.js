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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var isOrientation = require( '@stdlib/blas/base/assert/is-matrix-orientation' );
var isLayout = require( '@stdlib/blas/base/assert/is-layout' );
var resolveOrder = require( '@stdlib/blas/base/layout-resolve-enum' );
var resolveTriangle = require( '@stdlib/blas/base/matrix-triangle-resolve-enum' );
var resolveOrientation = require( '@stdlib/blas/base/matrix-orientation-resolve-enum' );
var format = require( '@stdlib/string/format' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm.
*
* ## Notes
*
* -   When `orient(A) = 'columns'`,
*
*     -   each column in `A` represents a variable and each row in `A` represents an observation.
*     -   `B` should be an `N` by `N` matrix.
*     -   the list of known means should be an `N` element vector.
*
* -   When `orient(A) = 'rows'`,
*
*     -   each row in `A` represents a variable and each column in `A` represents an observation.
*     -   `B` should be an `M` by `M` matrix.
*     -   the list of known means should be an `M` element vector.
*
* @param {string} order - storage layout of `A` and `B`
* @param {string} orient - specifies whether variables are stored along columns or along rows
* @param {string} uplo - specifies whether to overwrite the upper or lower triangular part of matrix `B`
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} correction - degrees of freedom adjustment
* @param {Float64Array} means - vector of known means
* @param {integer} strideM - stride length for `means`
* @param {Float64Array} A - input matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Float64Array} B - output matrix
* @param {PositiveInteger} LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must be a valid orientation
* @throws {RangeError} fourth argument must be a nonnegative integer
* @throws {RangeError} fifth argument must be a nonnegative integer
* @returns {Float64Array} `B`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define a 2x3 matrix in which variables are stored along rows in row-major order:
* var A = new Float64Array([
*     1.0, -2.0, 2.0,
*     2.0, -2.0, 1.0
* ]);
*
* // Define a vector of known means:
* var means = new Float64Array( [ 1.0/3.0, 1.0/3.0 ] );
*
* // Allocate a 2x2 output matrix:
* var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* var out = dcovmatmtk( 'row-major', 'rows', 'full', 2, 3, 1, means, 1, A, 3, B, 2 );
* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
*
* var bool = ( B === out );
* // returns true
*/
function dcovmatmtk( order, orient, uplo, M, N, correction, means, strideM, A, LDA, B, LDB ) {
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( !isOrientation( orient ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a valid orientation. Value: `%s`.', orient ) );
	}
	if ( M < 0 ) {
		throw new RangeError( format( 'invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.', M ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Fifth argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	addon( resolveOrder( order ), resolveOrientation( orient ), resolveTriangle( uplo ) || -1, M, N, correction, means, strideM, A, LDA, B, LDB );
	return B;
}


// EXPORTS //

module.exports = dcovmatmtk;
