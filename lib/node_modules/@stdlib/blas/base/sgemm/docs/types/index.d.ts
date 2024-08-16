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

import { Layout, TransposeOperation } from '@stdlib/types/blas';

/**
* Interface describing `sgemm`.
*/
interface Routine {
	/**
	* Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.
	*
	* @param order - storage layout
	* @param transA - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param transB - specifies whether `B` should be transposed, conjugate-transposed, or not transposed
	* @param M - number of rows in the matrix `op(A)` and in the matrix `C`
	* @param N - number of columns in the matrix `op(B)` and in the matrix `C`
	* @param K - number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`
	* @param alpha - scalar constant
	* @param A - first matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param B - second matrix
	* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
	* @param beta - scalar constant
	* @param C - third matrix
	* @param LDC - stride of the first dimension of `C` (a.k.a., leading dimension of the matrix `C`)
	* @returns `C`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Float32Array( [ 1.0, 1.0, 0.0, 1.0 ] );
	* var C = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* sgemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
	* // C => <Float32Array>[ 2.0, 5.0, 6.0, 11.0 ]
	*/
	( order: Layout, transA: TransposeOperation, transB: TransposeOperation, M: number, N: number, K: number, alpha: number, A: Float32Array, LDA: number, B: Float32Array, LDB: number, beta: number, C: Float32Array, LDC: number ): Float32Array;

	/**
	* Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C`, using alternative indexing semantics and where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.
	*
	* @param transA - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param transB - specifies whether `B` should be transposed, conjugate-transposed, or not transposed
	* @param M - number of rows in the matrix `op(A)` and in the matrix `C`
	* @param N - number of columns in the matrix `op(B)` and in the matrix `C`
	* @param K - number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`
	* @param alpha - scalar constant
	* @param A - first matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @param B - second matrix
	* @param strideB1 - stride of the first dimension of `B`
	* @param strideB2 - stride of the second dimension of `B`
	* @param offsetB - starting index for `B`
	* @param beta - scalar constant
	* @param C - third matrix
	* @param strideC1 - stride of the first dimension of `C`
	* @param strideC2 - stride of the second dimension of `C`
	* @param offsetC - starting index for `C`
	* @returns `C`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Float32Array( [ 1.0, 1.0, 0.0, 1.0 ] );
	* var C = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* sgemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, 1.0, C, 2, 1, 0 );
	* // C => <Float32Array>[ 2.0, 5.0, 6.0, 11.0 ]
	*/
	ndarray( transA: TransposeOperation, transB: TransposeOperation, M: number, N: number, K: number, alpha: number, A: Float32Array, strideA1: number, strideA2: number, offsetA: number, B: Float32Array, strideB1: number, strideB2: number, offsetB: number, beta: number, C: Float32Array, strideC1: number, strideC2: number, offsetC: number ): Float32Array;
}

/**
* Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.
*
* @param order - storage layout
* @param transA - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param transB - specifies whether `B` should be transposed, conjugate-transposed, or not transposed
* @param M - number of rows in the matrix `op(A)` and in the matrix `C`
* @param N - number of columns in the matrix `op(B)` and in the matrix `C`
* @param K - number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`
* @param alpha - scalar constant
* @param A - first matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param B - second matrix
* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @param beta - scalar constant
* @param C - third matrix
* @param LDC - stride of the first dimension of `C` (a.k.a., leading dimension of the matrix `C`)
* @returns `C`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 3.0, 2.0, 4.0 ] );
* var B = new Float32Array( [ 1.0, 0.0, 1.0, 1.0 ] );
* var C = new Float32Array( [ 1.0, 3.0, 2.0, 4.0 ] );
*
* sgemm( 'column-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
* // C => <Float32Array>[ 2.0, 6.0, 5.0, 11.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 3.0, 2.0, 4.0 ] );
* var B = new Float32Array( [ 1.0, 0.0, 1.0, 1.0 ] );
* var C = new Float32Array( [ 1.0, 3.0, 2.0, 4.0 ] );
*
* sgemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 1, 2, 0, B, 1, 2, 0, 1.0, C, 1, 2, 0 );
* // C => <Float32Array>[ 2.0, 6.0, 5.0, 11.0 ]
*/
declare var sgemm: Routine;


// EXPORTS //

export = sgemm;
