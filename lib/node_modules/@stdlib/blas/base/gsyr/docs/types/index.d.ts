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
import { Layout, MatrixTriangle } from '@stdlib/types/blas';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `gsyr`.
*/
interface Routine {
	/**
	* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - input vector
	* @param strideX - stride length for `x`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ]; // => [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ]
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* gsyr( 'row-major', 'upper', 3, 1.0, x, 1, A, 3 );
	* // A => [ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
	*/
	<T extends InputArray = InputArray>( order: Layout, uplo: MatrixTriangle, N: number, alpha: number, x: InputArray, strideX: number, A: T, LDA: number ): T;

	/**
	* Performs the symmetric rank 1 operation `A = α*x*x^T + A` using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - input vector
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @returns `A`
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ]; // => [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ]
	* var x = [ 1.0, 2.0, 3.0 ];
	*
	* gsyr.ndarray( 'upper', 3, 1.0, x, 1, 0, A, 3, 1, 0 );
	* // A => [ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
	*/
	ndarray<T extends InputArray = InputArray>( uplo: MatrixTriangle, N: number, alpha: number, x: InputArray, strideX: number, offsetX: number, A: T, strideA1: number, strideA2: number, offsetA: number ): T;
}

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
*
* @param order - storage layout
* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N - number of elements along each dimension in the matrix `A`
* @param alpha - scalar constant
* @param x - input vector
* @param strideX - stride length for `x`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @returns `A`
*
* @example
* var A = [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ];
* var x = [ 1.0, 2.0, 3.0 ];
*
* gsyr( 'row-major', 'upper', 3, 1.0, x, 1, A, 3 );
* // A => [ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
*
* @example
* var A = [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ];
* var x = [ 1.0, 2.0, 3.0 ];
*
* gsyr.ndarray( 'upper', 3, 1.0, x, 1, 0, A, 3, 1, 0 );
* // A => [ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
*/
declare var gsyr: Routine;


// EXPORTS //

export = gsyr;
