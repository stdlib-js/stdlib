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

import { Complex64Array } from '@stdlib/types/array';
import { Layout } from '@stdlib/types/blas';

/**
* Interface describing `cindexOfRow`.
*/
interface Routine {
	/**
	* Returns the index of the first row in a single-precision complex floating-point input matrix which has the same elements as a provided search vector.
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
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - search vector
	* @param strideX - stride length for `x`
	* @param workspace - workspace array for tracking row match candidates
	* @param strideW - stride length for `workspace`
	* @returns row index
	*
	* @example
	* var Complex64Array = require( `@stdlib/array/complex64` );
	* var Uint8Array = require( `@stdlib/array/uint8` );
	*
	* var A = new Complex64Array( [ 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0 ] );
	* var x = new Complex64Array( [ 2.0, 0.0, 4.0, 0.0 ] );
	* var workspace = new Uint8Array( 3 );
	*
	* var out = cindexOfRow( 'column-major', 3, 2, A, 3, x, 1, workspace, 1 );
	* // returns 1
	*/
	( order: Layout, M: number, N: number, A: Complex64Array, LDA: number, x: Complex64Array, strideX: number, workspace: Uint8Array, strideW: number ): number;

	/**
	* Returns the index of the first row in a single-precision complex floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
	* -   The `workspace` array is only applicable when an input matrix is stored in column-major order. When the matrix is stored in row-major order, the workspace array is ignored.
	*
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
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
	* var Complex64Array = require( `@stdlib/array/complex64` );
	* var Uint8Array = require( `@stdlib/array/uint8` );
	*
	* var A = new Complex64Array( [ 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0 ] );
	* var x = new Complex64Array( [ 2.0, 0.0, 4.0, 0.0 ] );
	* var workspace = new Uint8Array( 3 );
	*
	* var out = cindexOfRow.ndarray( 3, 2, A, 1, 3, 0, x, 1, 0, workspace, 1, 0 );
	* // returns 1
	*/
	ndarray( M: number, N: number, A: Complex64Array, strideA1: number, strideA2: number, offsetA: number, x: Complex64Array, strideX: number, offsetX: number, workspace: Uint8Array, strideW: number, offsetW: number ): number;
}

/**
* Returns the index of the first row in a single-precision complex floating-point input matrix which has the same elements as a provided search vector.
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
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param x - search vector
* @param strideX - stride length for `x`
* @param workspace - workspace array for tracking row match candidates
* @param strideW - stride length for `workspace`
* @returns row index
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var A = new Complex64Array( [ 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0 ] );
* var x = new Complex64Array( [ 2.0, 0.0, 4.0, 0.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = cindexOfRow( 'column-major', 3, 2, A, 3, x, 1, workspace, 1 );
* // returns 1
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var A = new Complex64Array( [ 1.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0, 0.0, 4.0, 0.0, 0.0, 0.0 ] );
* var x = new Complex64Array( [ 2.0, 0.0, 4.0, 0.0 ] );
* var workspace = new Uint8Array( 3 );
*
* var out = cindexOfRow.ndarray( 3, 2, A, 1, 3, 0, x, 1, 0, workspace, 1, 0 );
* // returns 1
*/
declare var cindexOfRow: Routine;


// EXPORTS //

export = cindexOfRow;
