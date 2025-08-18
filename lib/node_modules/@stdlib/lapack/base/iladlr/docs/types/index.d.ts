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

import { Layout } from '@stdlib/types/blas';

/**
* Interface describing `iladlr`.
*/
interface Routine {
	/**
	* Returns the index of the last non-zero row in a matrix `A`.
	*
	* ## Notes
	*
	* -   If provided an empty matrix or a matrix containing only zeros, the function returns `-1` (i.e., an invalid index).
	*
	* @param order - storage layout
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns index of the last non-zero row
	*
	* @example
	* var Float64array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
	*
	* var out = iladlr( 'row-major', 3, 2, A, 2 );
	* // returns 1
	*/
	( order: Layout, M: number, N: number, A: Float64Array, LDA: number ): number;

	/**
	* Returns the index of the last non-zero row in a matrix `A` using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If provided an empty matrix or a matrix containing only zeros, the function returns `-1` (i.e., an invalid index).
	*
	* @param M - number of rows in `A`
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param strideA1 - stride of the first dimension of `A`
	* @param strideA2 - stride of the second dimension of `A`
	* @returns index of the last non-zero row
	*
	* @example
	* var Float64array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
	*
	* var out = iladlr.ndarray( 3, 2, A, 2, 1, 0 );
	* // returns 1
	*/
	ndarray( M: number, N: number, A: Float64Array, strideA1: number, strideA2: number, offsetA: number ): number;
}

/**
* Returns the index of the last non-zero row in a matrix `A`.
*
* ## Notes
*
* -   If provided an empty matrix or a matrix containing only zeros, the function returns `-1` (i.e., an invalid index).
*
* @param order - storage layout
* @param M - number of rows in `A`
* @param N - number of columns in `A`
* @param A - input matrix
* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @returns index of the last non-zero row
*
* @example
* var Float64array = require( '@stdlib/array/float64' );
*
* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
*
* var out = iladlr( 'row-major', 3, 2, A, 2 );
* // returns 1
*
* @example
* var Float64array = require( '@stdlib/array/float64' );
*
* var A = new Float64array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
*
* var out = iladlr.ndarray( 3, 2, A, 2, 1, 0 );
* // returns 1
*/
declare var iladlr: Routine;


// EXPORTS //

export = iladlr;
