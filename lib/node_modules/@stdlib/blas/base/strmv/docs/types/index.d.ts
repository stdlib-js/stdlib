/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Layout, MatrixTriangle, TransposeOperation, DiagonalType } from '@stdlib/types/blas';

/**
* Interface describing `strmv`.
*/
interface Routine {
	/**
	* Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether `A` is an upper or lower triangular matrix
	* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param diag - specifies whether `A` has a unit diagonal
	* @param N - number of elements along each dimension in the matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - input vector
	* @param strideX - `x` stride length
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* strmv( 'row-major', 'upper', 'no-transpose', 'non-unit', 3, A, 3, x, 1 );
	* // x => <Float32Array>[ 14.0, 8.0, 3.0 ]
	*/
	( order: Layout, uplo: MatrixTriangle, trans: TransposeOperation, diag: DiagonalType, N: number, A: Float32Array, LDA: number, x: Float32Array, strideX: number ): Float32Array;

	/**
	* Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, using alternative indexing semantics and where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
	*
	* @param uplo - specifies whether `A` is an upper or lower triangular matrix
	* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param diag - specifies whether `A` has a unit diagonal
	* @param N - number of elements along each dimension in the matrix `A`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @param x - input vector
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* strmv.ndarray( 'upper', 'no-transpose', 'non-unit', 3, A, 3, 1, 0, x, 1, 0 );
	* // x => <Float32Array>[ 14.0, 8.0, 3.0 ]
	*/
	ndarray( uplo: MatrixTriangle, trans: TransposeOperation, diag: DiagonalType, N: number, A: Float32Array, strideA1: number, strideA2: number, offsetA: number, x: Float32Array, strideX: number, offsetX: number ): Float32Array;
}

/**
* Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
*
* @param order - storage layout
* @param uplo - specifies whether `A` is an upper or lower triangular matrix
* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param diag - specifies whether `A` has a unit diagonal
* @param N - number of elements along each dimension in the matrix `A`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param x - input vector
* @param strideX - `x` stride length
* @returns `x`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 0.0, 0.0, 2.0, 3.0, 0.0, 4.0, 5.0, 6.0 ] );
* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
*
* strmv( 'row-major', 'lower', 'no-transpose', 'non-unit', 3, A, 3, x, 1 );
* // x => <Float32Array>[ 1.0, 5.0, 15.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 0.0, 0.0, 2.0, 3.0, 0.0, 4.0, 5.0, 6.0 ] );
* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
*
* strmv.ndarray( 'lower', 'no-transpose', 'non-unit', 3, A, 3, 1, 0, x, 1, 0 );
* // x => <Float32Array>[ 1.0, 5.0, 15.0 ]
*/
declare var strmv: Routine;


// EXPORTS //

export = strmv;
