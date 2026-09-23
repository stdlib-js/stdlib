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

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface describing `glinspace`.
*/
interface Routine {
	/**
	* Fills a strided array with linearly spaced values over a specified interval.
	*
	* @param N - number of indexed elements
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* glinspace( x.length, 0.0, 7.0, true, x, 1 );
	* // x => [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>>( N: number, start: number, stop: number, endpoint: boolean, x: U, strideX: number ): U;

	/**
	* Fills a strided array with linearly spaced values over a specified interval using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* glinspace.ndarray( x.length, 0.0, 7.0, true, x, 1, 0 );
	* // x => [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
	*/
	ndarray<T = unknown, U extends InputArray<T> = InputArray<T>>( N: number, start: number, stop: number, endpoint: boolean, x: U, strideX: number, offsetX: number ): U;
}

/**
* Fills a strided array with linearly spaced values over a specified interval.
*
* @param N - number of indexed elements
* @param start - start of interval
* @param stop - end of interval
* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glinspace( x.length, 0.0, 7.0, true, x, 1 );
* // x => [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glinspace( x.length, 0.0, 8.0, false, x, 1 );
* // x => [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glinspace.ndarray( x.length, 0.0, 7.0, true, x, 1, 0 );
* // x => [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glinspace.ndarray( x.length, 0.0, 8.0, false, x, 1, 0 );
* // x => [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/
declare var glinspace: Routine;


// EXPORTS //

export = glinspace;
