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

import { NumericArray, Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Output array.
*/
type OutputArray = NumericArray | Collection<number> | AccessorArrayLike<number>;

/**
* Interface describing `gdiff`.
*/
interface Routine {
	/**
	* Calculates the k-th discrete forward difference of a strided array.
	*
	* ## Notes
	*
	* -   The `out` array must have `N + N1 + N2 - k` elements.
	* -   The `workspace` array must have `N + N1 + N2 - 1` elements.
	*
	* @param N - number of indexed elements
	* @param k - number of times to recursively compute differences
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param N1 - number of indexed elements for `prepend`
	* @param prepend - prepend array
	* @param strideP - stride length for `prepend`
	* @param N2 - number of indexed elements for `append`
	* @param append - append array
	* @param strideA - stride length for `append`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param workspace - workspace array
	* @param strideW - stride length for `workspace`
	* @returns output array
	*
	* @example
	* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
	* var p = [ 1.0 ];
	* var a = [ 22.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gdiff( x.length, 2, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
	*
	* console.log( out );
	* // => [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	*/
	<T extends OutputArray>( N: number, k: number, x: InputArray, strideX: number, N1: number, prepend: InputArray, strideP: number, N2: number, append: InputArray, strideA: number, out: T, strideOut: number, workspace: InputArray, strideW: number ): T;

	/**
	* Calculates the k-th discrete forward difference of a strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   The `out` array must have `N + N1 + N2 - k` elements.
	* -   The `workspace` array must have `N + N1 + N2 - 1` elements.
	*
	* @param N - number of indexed elements
	* @param k - number of times to recursively compute differences
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param N1 - number of indexed elements for `prepend`
	* @param prepend - prepend array
	* @param strideP - stride length for `prepend`
	* @param offsetP - starting index for `prepend`
	* @param N2 - number of indexed elements for `append`
	* @param append - append array
	* @param strideA - stride length for `append`
	* @param offsetA - starting index for `append`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @param workspace - workspace array
	* @param strideW - stride length for `workspace`
	* @param offsetW - starting index for `workspace`
	* @returns output array
	*
	* @example
	* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
	* var p = [ 1.0 ];
	* var a = [ 22.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gdiff.ndarray( x.length, 2, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
	*
	* console.log( out );
	* // => [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	*/
	ndarray<T extends OutputArray>( N: number, k: number, x: InputArray, strideX: number, offsetX: number, N1: number, prepend: InputArray, strideP: number, offsetP: number, N2: number, append: InputArray, strideA: number, offsetA: number, out: T, strideOut: number, offsetOut: number, workspace: InputArray, strideW: number, offsetW: number ): T;
}

/**
* Calculates the k-th discrete forward difference of a strided array.
*
* ## Notes
*
* -   The `out` array must have `N + N1 + N2 - k` elements.
* -   The `workspace` array must have `N + N1 + N2 - 1` elements.
*
* @param N - number of indexed elements
* @param k - number of times to recursively compute differences
* @param x - input array
* @param strideX - stride length for `x`
* @param N1 - number of indexed elements for `prepend`
* @param prepend - prepend array
* @param strideP - stride length for `prepend`
* @param N2 - number of indexed elements for `append`
* @param append - append array
* @param strideA - stride length for `append`
* @param out - output array
* @param strideOut - stride length for `out`
* @param workspace - workspace array
* @param strideW - stride length for `workspace`
* @returns output array
*
* @example
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gdiff( x.length, 2, x, 1, 1, p, 1, 1, a, 1, out, 1, w, 1 );
*
* console.log( out );
* // => [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gdiff.ndarray( x.length, 2, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );
*
* console.log( out );
* // => [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
declare var gdiff: Routine;


// EXPORTS //

export = gdiff;
