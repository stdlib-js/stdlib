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

import { Layout } from '@stdlib/types/blas';
import { NumericArray, Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Output matrix.
*/
type OutputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `gvander`.
*/
interface Routine {
	/**
	* Generates a Vandermonde matrix.
	*
	* @param order - storage layout
	* @param mode - mode indicating whether to generate increasing or decreasing powers
	* @param M - number of rows in `out`
	* @param N - number of columns in `out`
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output matrix
	* @param ldo - stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`)
	* @returns output matrix
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gvander( 'row-major', 1, 3, 3, x, 1, out, 3 );
	* // out => [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ]
	*/
	<T extends OutputArray>( order: Layout, mode: number, M: number, N: number, x: InputArray, strideX: number, out: T, ldo: number ): T;

	/**
	* Generates a Vandermonde matrix using alternative indexing semantics.
	*
	* @param mode - mode indicating whether to generate increasing or decreasing powers
	* @param M - number of rows in `out`
	* @param N - number of columns in `out`
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output matrix
	* @param strideOut1 - stride length for the first dimension of `out`
	* @param strideOut2 - stride length for the second dimension of `out`
	* @param offsetOut - starting index for `out`
	* @returns output matrix
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gvander.ndarray( 1, 3, 3, x, 1, 0, out, 3, 1, 0 );
	* // out => [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ]
	*/
	ndarray<T extends OutputArray>( mode: number, M: number, N: number, x: InputArray, strideX: number, offsetX: number, out: T, strideOut1: number, strideOut2: number, offsetOut: number ): T;
}

/**
* Generates a Vandermonde matrix.
*
* @param order - storage layout
* @param mode - mode indicating whether to generate increasing or decreasing powers
* @param M - number of rows in `out`
* @param N - number of columns in `out`
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output matrix
* @param ldo - stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`)
* @returns output matrix
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gvander( 'row-major', 1, 3, 3, x, 1, out, 3 );
* // out => [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ]
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gvander.ndarray( 1, 3, 3, x, 1, 0, out, 3, 1, 0 );
* // out => [ 1.0, 1.0, 1.0, 1.0, 2.0, 4.0, 1.0, 3.0, 9.0 ]
*/
declare var gvander: Routine;


// EXPORTS //

export = gvander;
