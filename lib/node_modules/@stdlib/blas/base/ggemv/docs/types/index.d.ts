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
* Interface describing `ggemv`.
*/
interface Routine {
	/**
	* Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
	*
	* @param order - storage layout
	* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param M - number of rows in the matrix `A`
	* @param N - number of columns in the matrix `A`
	* @param alpha - scalar constant
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - first input vector
	* @param strideX - `x` stride length
	* @param beta - scalar constant
	* @param y - second input vector
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var x = [ 1.0, 1.0, 1.0 ];
	* var y = [ 1.0, 1.0 ];
	*
	* ggemv( 'row-major', 'no-transpose', 2, 3, 1.0, A, 3, x, 1, 1.0, y, 1 );
	* // y => [ 7.0, 16.0 ]
	*/
	<T extends InputArray = InputArray>( order: Layout, trans: TransposeOperation, M: number, N: number, alpha: number, A: InputArray, LDA: number, x: InputArray, strideX: number, beta: number, y: T, strideY: number ): T;

	/**
	* Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, using alternative indexing semantics and where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
	*
	* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param M - number of rows in the matrix `A`
	* @param N - number of columns in the matrix `A`
	* @param alpha - scalar constant
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @param x - first input vector
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param beta - scalar constant
	* @param y - second input vector
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var x = [ 1.0, 1.0, 1.0 ];
	* var y = [ 1.0, 1.0 ];
	*
	* ggemv.ndarray( 'no-transpose', 2, 3, 1.0, A, 3, 1, 0, x, 1, 0, 1.0, y, 1, 0 );
	* // y => [ 7.0, 16.0 ]
	*/
	ndarray<T extends InputArray = InputArray>( trans: TransposeOperation, M: number, N: number, alpha: number, A: InputArray, strideA1: number, strideA2: number, offsetA: number, x: InputArray, strideX: number, offsetX: number, beta: number, y: T, strideY: number, offsetY: number ): T;
}

/**
* Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
*
* @param order - storage layout
* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param M - number of rows in the matrix `A`
* @param N - number of columns in the matrix `A`
* @param alpha - scalar constant
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param x - first input vector
* @param strideX - `x` stride length
* @param beta - scalar constant
* @param y - second input vector
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
* var x = [ 1.0, 1.0, 1.0 ];
* var y = [ 1.0, 1.0, 1.0 ];
*
* ggemv( 'row-major', 'no-transpose', 3, 3, 1.0, A, 3, x, -1, 1.0, y, -1 );
* // y => [ 25.0, 16.0, 7.0 ]
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
* var x = [ 1.0, 1.0, 1.0 ];
* var y = [ 1.0, 1.0, 1.0 ];
*
* ggemv.ndarray( 'no-transpose', 3, 3, 1.0, A, 3, 1, 0, x, -1, 2, 1.0, y, -1, 2 );
* // y => [ 25.0, 16.0, 7.0 ]
*/
declare var ggemv: Routine;


// EXPORTS //

export = ggemv;
