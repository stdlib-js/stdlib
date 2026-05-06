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
* Workspace array.
*/
type WorkspaceArray = Collection<unknown> | AccessorArrayLike<unknown>;

/**
* Interface describing `glastIndexOfRow`.
*/
interface Routine {
	/**
	* Returns the index of the last row in an input matrix which has the same elements as a provided search vector.
	*
	* ## Notes
	*
	* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
	* -   The `workspace` array is only applicable when an input matrix is stored in column-major order. When the matrix is stored in row-major order, the workspace array is ignored.
	*
	* @param order - storage layout
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param LDA - stride length for the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - search vector
	* @param strideX - stride length for `x`
	* @param workspace - workspace array for tracking row match candidates
	* @param strideW - stride length for `workspace`
	* @returns row index
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 3.0, 4.0 ] ]
	* var x = [ 3.0, 4.0 ];
	* var workspace = [ 0, 0, 0 ];
	*
	* var out = glastIndexOfRow( 'row-major', 3, 2, A, 2, x, 1, workspace, 1 );
	* // returns 2
	*/
	( order: Layout, M: number, N: number, A: InputArray, LDA: number, x: InputArray, strideX: number, workspace: WorkspaceArray, strideW: number ): number;

	/**
	* Returns the index of the last row in an input matrix which has the same elements as a provided search vector using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
	* -   The `workspace` array is only applicable when an input matrix is stored in column-major order. When the matrix is stored in row-major order, the workspace array is ignored.
	*
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param strideA1 - stride length for the first dimension of `A`
	* @param strideA2 - stride length for the second dimension of `A`
	* @param offsetA - starting index for `A`
	* @param x - search vector
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param workspace - workspace array for tracking row match candidates
	* @param strideW - stride length for `workspace`
	* @param offsetW - starting index for `workspace`
	* @returns row index
	*
	* @example
	* var A = [ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 3.0, 4.0 ] ]
	* var x = [ 3.0, 4.0 ];
	* var workspace = [ 0, 0, 0 ];
	*
	* var out = glastIndexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0, workspace, 1, 0 );
	* // returns 2
	*/
	ndarray( M: number, N: number, A: InputArray, strideA1: number, strideA2: number, offsetA: number, x: InputArray, strideX: number, offsetX: number, workspace: WorkspaceArray, strideW: number, offsetW: number ): number;
}

/**
* Returns the index of the last row in an input matrix which has the same elements as a provided search vector.
*
* ## Notes
*
* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
* -   The `workspace` array is only applicable when an input matrix is stored in column-major order. When the matrix is stored in row-major order, the workspace array is ignored.
*
* @param order - storage layout
* @param M - number of rows in `A`
* @param N - number of columns in `A`
* @param A - input matrix
* @param LDA - stride length for the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param x - search vector
* @param strideX - stride length for `x`
* @param workspace - workspace array for tracking row match candidates
* @param strideW - stride length for `workspace`
* @returns row index
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 3.0, 4.0 ] ]
* var x = [ 3.0, 4.0 ];
* var workspace = [ 0, 0, 0 ];
*
* var out = glastIndexOfRow( 'row-major', 3, 2, A, 2, x, 1, workspace, 1 );
* // returns 2
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 3.0, 4.0 ] ]
* var x = [ 3.0, 4.0 ];
* var workspace = [ 0, 0, 0 ];
*
* var out = glastIndexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0, workspace, 1, 0 );
* // returns 2
*/
declare var glastIndexOfRow: Routine;


// EXPORTS //

export = glastIndexOfRow;
