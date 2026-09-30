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
* Interface describing `gunitspace`.
*/
interface Routine {
	/**
	* Fills a strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.
	*
	* @param N - number of indexed elements
	* @param start - starting value
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var x = [ 0.0, 0.0, 0.0, 0.0 ];
	*
	* gunitspace( x.length, 3.0, x, 1 );
	* // x => [ 3.0, 4.0, 5.0, 6.0 ]
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>>( N: number, start: number, x: U, strideX: number ): U;

	/**
	* Fills a strided array with linearly spaced numeric elements which increment by `1` starting from a specified value using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param start - starting value
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var x = [ 0.0, 0.0, 0.0, 0.0 ];
	*
	* gunitspace.ndarray( x.length, 3.0, x, 1, 0 );
	* // x => [ 3.0, 4.0, 5.0, 6.0 ]
	*/
	ndarray<T = unknown, U extends InputArray<T> = InputArray<T>>( N: number, start: number, x: U, strideX: number, offsetX: number ): U;
}

/**
* Fills a strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.
*
* @param N - number of indexed elements
* @param start - starting value
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gunitspace( x.length, 3.0, x, 1 );
* // x => [ 3.0, 4.0, 5.0, 6.0 ]
*
* @example
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gunitspace.ndarray( x.length, 3.0, x, 1, 0 );
* // x => [ 3.0, 4.0, 5.0, 6.0 ]
*/
declare var gunitspace: Routine;


// EXPORTS //

export = gunitspace;
