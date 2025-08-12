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

import { NumericArray, Collection, AccessorArrayLike } from '@stdlib/types/array';
import { Layout, TransposeOperation } from '@stdlib/types/blas';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `ggemm`.
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
	* var A = [ 1.0, 2.0, 3.0, 4.0 ];
	* var B = [ 1.0, 1.0, 0.0, 1.0 ];
	* var C = [ 1.0, 2.0, 3.0, 4.0 ];
	*
	* ggemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
	* // C => [ 2.0, 5.0, 6.0, 11.0 ]
	*/
	<T extends InputArray = InputArray>( order: Layout, transA: TransposeOperation, transB: TransposeOperation, M: number, N: number, K: number, alpha: number, A: InputArray, LDA: number, B: InputArray, LDB: number, beta: number, C: T, LDC: number ): T;

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
	* var A = [ 1.0, 2.0, 3.0, 4.0 ];
	* var B = [ 1.0, 1.0, 0.0, 1.0 ];
	* var C = [ 1.0, 2.0, 3.0, 4.0 ];
	*
	* ggemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, 1.0, C, 2, 1, 0 );
	* // C => [ 2.0, 5.0, 6.0, 11.0 ]
	*/
	ndarray<T extends InputArray = InputArray>( transA: TransposeOperation, transB: TransposeOperation, M: number, N: number, K: number, alpha: number, A: InputArray, strideA1: number, strideA2: number, offsetA: number, B: InputArray, strideB1: number, strideB2: number, offsetB: number, beta: number, C: T, strideC1: number, strideC2: number, offsetC: number ): T;
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
* var A = [ 1.0, 3.0, 2.0, 4.0 ];
* var B = [ 1.0, 0.0, 1.0, 1.0 ];
* var C = [ 1.0, 3.0, 2.0, 4.0 ];
*
* ggemm( 'column-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
* // C => [ 2.0, 6.0, 5.0, 11.0 ]
*
* @example
* var A = [ 1.0, 3.0, 2.0, 4.0 ];
* var B = [ 1.0, 0.0, 1.0, 1.0 ];
* var C = [ 1.0, 3.0, 2.0, 4.0 ];
*
* ggemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 1, 2, 0, B, 1, 2, 0, 1.0, C, 1, 2, 0 );
* // C => [ 2.0, 6.0, 5.0, 11.0 ]
*/
declare var ggemm: Routine;


// EXPORTS //

export = ggemm;
