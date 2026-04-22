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
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );
var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


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
* @param {integer} strideM - stride length of `means`
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
	var nsamples;
	var sa1;
	var sa2;
	var sb1;
	var sb2;
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
	if ( orient === 'rows' ) {
		nsamples = M;
	} else { // orient === 'columns'
		nsamples = N;
	}
	if ( isColumnMajor( order ) ) {
		sa1 = 1;
		sa2 = LDA;
		sb1 = 1;
		sb2 = LDB;
	} else { // order === 'row-major'
		sa1 = LDA;
		sa2 = 1;
		sb1 = LDB;
		sb2 = 1;
	}
	return base( orient, uplo, M, N, correction, means, strideM, stride2offset( nsamples, strideM ), A, sa1, sa2, 0, B, sb1, sb2, 0 );
}


// EXPORTS //

module.exports = dcovmatmtk;
