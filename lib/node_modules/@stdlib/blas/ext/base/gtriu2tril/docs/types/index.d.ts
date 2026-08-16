/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';
import { Layout } from '@stdlib/types/blas';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Output array.
*/
type OutputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface describing `gtriu2tril`.
*/
interface Routine {
	/**
	* Reflects the upper triangular part of a matrix `A` into the lower triangular part of another matrix `B`.
	*
	* @param order - storage layout of `A` and `B`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param k - diagonal below which to ignore
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param B - output matrix
	* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
	* @returns `B`
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0 ];
	* var B = [ 0.0, 0.0, 0.0, 0.0 ];
	*
	* gtriu2tril( 'row-major', 2, 2, 0, A, 2, B, 2 );
	* // B => [ 1.0, 0.0, 2.0, 4.0 ]
	*/
	<T = unknown, U extends OutputArray<T> = OutputArray<T>>( order: Layout, M: number, N: number, k: number, A: InputArray<T>, LDA: number, B: U, LDB: number ): U;

	/**
	* Reflects the upper triangular part of a matrix `A` into the lower triangular part of another matrix `B` using alternative indexing semantics.
	*
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param k - diagonal below which to ignore
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @param B - output matrix
	* @param strideB1 - stride of the first dimension of `B`
	* @param strideB2 - stride of the second dimension of `B`
	* @param offsetB - starting index for `B`
	* @returns `B`
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0 ];
	* var B = [ 0.0, 0.0, 0.0, 0.0 ];
	*
	* gtriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
	* // B => [ 1.0, 0.0, 2.0, 4.0 ]
	*/
	ndarray<T = unknown, U extends OutputArray<T> = OutputArray<T>>( M: number, N: number, k: number, A: InputArray<T>, strideA1: number, strideA2: number, offsetA: number, B: U, strideB1: number, strideB2: number, offsetB: number ): U;
}

/**
* Reflects the upper triangular part of a matrix `A` into the lower triangular part of another matrix `B`.
*
* @param order - storage layout of `A` and `B`
* @param M - number of rows in matrix `A`
* @param N - number of columns in matrix `A`
* @param k - diagonal below which to ignore
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param B - output matrix
* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @returns `B`
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0 ];
* var B = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gtriu2tril( 'row-major', 2, 2, 0, A, 2, B, 2 );
* // B => [ 1.0, 0.0, 2.0, 4.0 ]
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0 ];
* var B = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gtriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
* // B => [ 1.0, 0.0, 2.0, 4.0 ]
*/
declare var gtriu2tril: Routine;


// EXPORTS //

export = gtriu2tril;
