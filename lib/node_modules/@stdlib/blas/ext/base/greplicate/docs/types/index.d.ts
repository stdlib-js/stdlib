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

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Output array.
*/
type OutputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface describing `greplicate`.
*/
interface Routine {
	/**
	* Replicates each strided array element a specified number of times.
	*
	* @param N - number of indexed elements
	* @param k - number of times to replicate each element
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* greplicate( x.length, 2, x, 1, out, 1 );
	* // out => [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, V extends OutputArray<T> = OutputArray<T>>( N: number, k: number, x: U, strideX: number, out: V, strideOut: number ): V;

	/**
	* Replicates each strided array element a specified number of times using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param k - number of times to replicate each element
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0 ];
	* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* greplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
	* // out => [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
	*/
	ndarray<T = unknown, U extends InputArray<T> = InputArray<T>, V extends OutputArray<T> = OutputArray<T>>( N: number, k: number, x: U, strideX: number, offsetX: number, out: V, strideOut: number, offsetOut: number ): V;
}

/**
* Replicates each strided array element a specified number of times.
*
* @param N - number of indexed elements
* @param k - number of times to replicate each element
* @param x - input array
* @param strideX - stride length for `x`
* @param out - output array
* @param strideOut - stride length for `out`
* @returns output array
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* greplicate( x.length, 2, x, 1, out, 1 );
* // out => [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* greplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
* // out => [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
*/
declare var greplicate: Routine;


// EXPORTS //

export = greplicate;
