/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Layout, MatrixOrientation, MatrixTriangle } from '@stdlib/types/blas';

/**
* Interface describing `dcovmatmtk`.
*/
interface Routine {
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
	* @param order - storage layout
	* @param orient - specifies whether variables are stored along columns or along rows
	* @param uplo - specifies whether to overwrite the upper or lower triangular part of matrix `B`
	* @param M - number of rows in the matrix `A`
	* @param N - number of columns in the matrix `A`
	* @param correction - degrees of freedom adjustment
	* @param means - vector of known means
	* @param strideM - stride length of `means`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param B - output matrix
	* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
	* @returns covariance
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
	( order: Layout, orient: MatrixOrientation, uplo: MatrixTriangle | string, M: number, N: number, correction: number, means: Float64Array, strideM: number, A: Float64Array, LDA: number, B: Float64Array, LDB: number ): Float64Array;

	/**
	* Computes the covariance matrix for an `M` by `N` double-precision floating-point matrix `A` and assigns the results to a matrix `B` when provided known means and using a one-pass textbook algorithm and alternative indexing semantics.
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
	* @param orient - specifies whether variables are stored along columns or along rows
	* @param uplo - specifies whether to overwrite the upper or lower triangular part of matrix `B`
	* @param M - number of rows in the matrix `A`
	* @param N - number of columns in the matrix `A`
	* @param correction - degrees of freedom adjustment
	* @param means - vector of known means
	* @param strideM - stride length of `means`
	* @param offsetM - starting index of `means`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @param B - output matrix
	* @param strideB1 - stride of the first dimension of `B`
	* @param strideB2 - stride of the second dimension of `B`
	* @param offsetB - starting index for `B`
	* @returns covariance
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
	* var out = dcovmatmtk.ndarray( 'rows', 'full', 2, 3, 1, means, 1, 0, A, 3, 1, 0, B, 2, 1, 0 );
	* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
	*
	* var bool = ( B === out );
	* // returns true
	*/
	ndarray( orient: MatrixOrientation, uplo: MatrixTriangle | string, M: number, N: number, correction: number, means: Float64Array, strideM: number, offsetM: number, A: Float64Array, strideA1: number, strideA2: number, offsetA: number, B: Float64Array, strideB1: number, strideB2: number, offsetB: number ): Float64Array;
}

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
* @param order - storage layout
* @param orient - specifies whether variables are stored along columns or along roes
* @param uplo - specifies whether to overwrite the upper or lower triangular part of matrix `B`
* @param M - number of rows in the matrix `A`
* @param N - number of columns in the matrix `A`
* @param correction - degrees of freedom adjustment
* @param means - vector of known means
* @param strideM - stride length of `means`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param B - output matrix
* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @returns covariance
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
* var out = dcovmatmtk.ndarray( 'rows', 'full', 2, 3, 1, means, 1, 0, A, 3, 1, 0, B, 2, 1, 0 );
* // returns <Float64Array>[ ~4.3333, ~3.8333, ~3.8333, ~4.3333 ]
*
* var bool = ( B === out );
* // returns true
*/
declare var dcovmatmtk: Routine;


// EXPORTS //

export = dcovmatmtk;
