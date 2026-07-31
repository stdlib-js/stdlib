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
type InputArray = Collection<unknown> | AccessorArrayLike<unknown>;

/**
* Interface describing `gindexOfTruthyRow`.
*/
interface Routine {
	/**
	* Returns the index of the first row in an input matrix which contains at least one truthy element.
	*
	* ## Notes
	*
	* -   If the function is provided an empty matrix or if the function is unable to find a row with at least one truthy element, the function returns `-1` (i.e., an invalid index).
	*
	* @param order - storage layout
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns row index
	*
	* @example
	* var A = [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* var out = gindexOfTruthyRow( 'row-major', 4, 4, A, 4 );
	* // returns 1
	*/
	( order: Layout, M: number, N: number, A: InputArray, LDA: number ): number;

	/**
	* Returns the index of the first row in an input matrix which contains at least one truthy element using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If the function is provided an empty matrix or if the function is unable to find a row with at least one truthy element, the function returns `-1` (i.e., an invalid index).
	*
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param strideA1 - stride length for the first dimension of `A`
	* @param strideA2 - stride length for the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @returns row index
	*
	* @example
	* var A = [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* var out = gindexOfTruthyRow.ndarray( 4, 4, A, 4, 1, 0 );
	* // returns 1
	*/
	ndarray( M: number, N: number, A: InputArray, strideA1: number, strideA2: number, offsetA: number ): number;
}

/**
* Returns the index of the first row in an input matrix which contains at least one truthy element.
*
* ## Notes
*
* -   If the function is provided an empty matrix or if the function is unable to find a row with at least one truthy element, the function returns `-1` (i.e., an invalid index).
*
* @param order - storage layout
* @param M - number of rows in `A`
* @param N - number of columns in `A`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @returns row index
*
* @example
* var A = [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];
*
* var out = gindexOfTruthyRow( 'row-major', 4, 4, A, 4 );
* // returns 1
*
* @example
* var A = [ 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];
*
* var out = gindexOfTruthyRow.ndarray( 4, 4, A, 4, 1, 0 );
* // returns 1
*/
declare var gindexOfTruthyRow: Routine;


// EXPORTS //

export = gindexOfTruthyRow;
