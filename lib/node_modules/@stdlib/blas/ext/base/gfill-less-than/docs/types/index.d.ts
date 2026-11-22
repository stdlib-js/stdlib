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
* Interface describing `gfillLessThan`.
*/
interface Routine {
	/**
	* Replaces strided array elements less than a provided search element with a specified scalar constant.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var x = [ 0.0, 0.0, 1.0, 0.0 ];
	*
	* gfillLessThan( x.length, 0.5, 5.0, x, 1 );
	* // x => [ 5.0, 5.0, 1.0, 5.0 ]
	*/
	<T = unknown, U = unknown, V extends InputArray<T | U> = InputArray<T | U>>( N: number, searchElement: T, alpha: U, x: V, strideX: number ): V;

	/**
	* Replaces strided array elements less than a provided search element with a specified scalar constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns `x`
	*
	* @example
	* var x = [ 0.0, 0.0, 1.0, 0.0 ];
	*
	* gfillLessThan.ndarray( x.length, 0.5, 5.0, x, 1, 0 );
	* // x => [ 5.0, 5.0, 1.0, 5.0 ]
	*/
	ndarray<T = unknown, U = unknown, V extends InputArray<T | U> = InputArray<T | U>>( N: number, searchElement: T, alpha: U, x: V, strideX: number, offsetX: number ): V;
}

/**
* Replaces strided array elements less than a provided search element with a specified scalar constant.
*
* @param N - number of indexed elements
* @param searchElement - search element
* @param alpha - scalar constant
* @param x - input array
* @param strideX - stride length
* @returns `x`
*
* @example
* var x = [ 0.0, 0.0, 1.0, 0.0 ];
*
* gfillLessThan( x.length, 0.5, 5.0, x, 1 );
* // x => [ 5.0, 5.0, 1.0, 5.0 ]
*
* @example
* var x = [ 0.0, 0.0, 1.0, 0.0 ];
*
* gfillLessThan.ndarray( x.length, 0.5, 5.0, x, 1, 0 );
* // x => [ 5.0, 5.0, 1.0, 5.0 ]
*/
declare var gfillLessThan: Routine;


// EXPORTS //

export = gfillLessThan;
