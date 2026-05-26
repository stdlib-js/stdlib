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
import { Layout } from '@stdlib/types/blas';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `gger`.
*/
interface Routine {
	/**
	* Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.
	*
	* @param order - storage layout
	* @param M - number of rows in the matrix `A`
	* @param N - number of columns in the matrix `A`
	* @param alpha - scalar constant
	* @param x - first input vector
	* @param strideX - `x` stride length
	* @param y - second input vector
	* @param strideY - `y` stride length
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var x = [ 1.0, 1.0 ];
	* var y = [ 1.0, 1.0, 1.0 ];
	*
	* gger( 'row-major', 2, 3, 1.0, x, 1, y, 1, A, 3 );
	* // A => [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
	*/
	<T extends InputArray = InputArray>( order: Layout, M: number, N: number, alpha: number, x: InputArray, strideX: number, y: InputArray, strideY: number, A: T, LDA: number ): T;

	/**
	* Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix using alternative indexing semantics.
	*
	* @param M - number of rows in the matrix `A`
	* @param N - number of columns in the matrix `A`
	* @param alpha - scalar constant
	* @param x - first input vector
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input vector
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @returns `A`
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	* var x = [ 1.0, 1.0 ];
	* var y = [ 1.0, 1.0, 1.0 ];
	*
	* gger.ndarray( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
	* // A => [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
	*/
	ndarray<T extends InputArray = InputArray>( M: number, N: number, alpha: number, x: InputArray, strideX: number, offsetX: number, y: InputArray, strideY: number, offsetY: number, A: T, strideA1: number, strideA2: number, offsetA: number ): T;
}

/**
* Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.
*
* @param order - storage layout
* @param M - number of rows in the matrix `A`
* @param N - number of columns in the matrix `A`
* @param alpha - scalar constant
* @param x - first input vector
* @param strideX - `x` stride length
* @param y - second input vector
* @param strideY - `y` stride length
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @returns `A`
*
* @example
* var A = [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ];
* var x = [ 1.0, 1.0 ];
* var y = [ 1.0, 1.0, 1.0 ];
*
* gger( 'row-major', 2, 3, 1.0, x, 1, y, 1, A, 3 );
* // A => [ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
*
* @example
* var A = [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ];
* var x = [ 1.0, 1.0 ];
* var y = [ 1.0, 1.0, 1.0 ];
*
* gger.ndarray( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 1, 2, 0 );
* // A => [ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
*/
declare var gger: Routine;


// EXPORTS //

export = gger;
