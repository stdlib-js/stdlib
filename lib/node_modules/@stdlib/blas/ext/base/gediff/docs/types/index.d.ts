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
* Interface describing `gediff`.
*/
interface Routine {
	/**
	* Calculates the differences between consecutive elements of a strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param N1 - number of indexed elements to prepend
	* @param prepend - prepend array
	* @param strideP - stride length for `prepend`
	* @param N2 - number of indexed elements to append
	* @param append - append array
	* @param strideA - stride length for `append`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
	* var p = [ 1.0 ];
	* var a = [ 22.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1 );
	* // out => [ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
	*/
	<T extends OutputArray>( N: number, x: InputArray, strideX: number, N1: number, prepend: InputArray, strideP: number, N2: number, append: InputArray, strideA: number, out: T, strideOut: number ): T;

	/**
	* Calculates the differences between consecutive elements of a strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param N1 - number of indexed elements to prepend
	* @param prepend - prepend array
	* @param strideP - stride length for `prepend`
	* @param offsetP - starting index for `prepend`
	* @param N2 - number of indexed elements to append
	* @param append - append array
	* @param strideA - stride length for `append`
	* @param offsetA - starting index for `append`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
	* var p = [ 1.0 ];
	* var a = [ 22.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* gediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 );
	* // out => [ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
	*/
	ndarray<T extends OutputArray>( N: number, x: InputArray, strideX: number, offsetX: number, N1: number, prepend: InputArray, strideP: number, offsetP: number, N2: number, append: InputArray, strideA: number, offsetA: number, out: T, strideOut: number, offsetOut: number ): T;
}

/**
* Calculates the differences between consecutive elements of a strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length for `x`
* @param N1 - number of indexed elements to prepend
* @param prepend - prepend array
* @param strideP - stride length for `prepend`
* @param N2 - number of indexed elements to append
* @param append - append array
* @param strideA - stride length for `append`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gediff( x.length, x, 1, 1, p, 1, 1, a, 1, out, 1 );
* // out => [ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
*
* @example
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var p = [ 1.0 ];
* var a = [ 22.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gediff.ndarray( x.length, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0 );
* // out => [ 1.0, 2.0, 3.0, 4.0, 5.0, 22.0 ]
*/
declare var gediff: Routine;


// EXPORTS //

export = gediff;
