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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';
import { Layout } from '@stdlib/types/blas';

/**
* Input array.
*/
type InputArray = Collection<unknown> | AccessorArrayLike<unknown>;

/**
* Interface describing `gindexOfRow`.
*/
interface Routine {
	/**
	* Returns the index of the first row in an input matrix which has the same elements as a provided search vector.
	*
	* ## Notes
	*
	* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
	*
	* @param order - storage layout
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - search vector
	* @param strideX - stride length for `x`
	* @returns row index
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
	* var x = [ 3.0, 4.0 ];
	*
	* var out = gindexOfRow( 'row-major', 3, 2, A, 2, x, 1 );
	* // returns 1
	*/
	( order: Layout, M: number, N: number, A: InputArray, LDA: number, x: InputArray, strideX: number ): number;

	/**
	* Returns the index of the first row in an input matrix which has the same elements as a provided search vector using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
	*
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @param x - search vector
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @returns row index
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
	* var x = [ 3.0, 4.0 ];
	*
	* var out = gindexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0 );
	* // returns 1
	*/
	ndarray( M: number, N: number, A: InputArray, strideA1: number, strideA2: number, offsetA: number, x: InputArray, strideX: number, offsetX: number ): number;
}

/**
* Returns the index of the first row in an input matrix which has the same elements as a provided search vector.
*
* ## Notes
*
* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
*
* @param order - storage layout
* @param M - number of rows in `A`
* @param N - number of columns in `A`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param x - search vector
* @param strideX - stride length for `x`
* @returns row index
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = [ 3.0, 4.0 ];
*
* var out = gindexOfRow( 'row-major', 3, 2, A, 2, x, 1 );
* // returns 1
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = [ 3.0, 4.0 ];
*
* var out = gindexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0 );
* // returns 1
*/
declare var gindexOfRow: Routine;


// EXPORTS //

export = gindexOfRow;
