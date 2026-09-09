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
* Interface describing `gsome`.
*/
interface Routine {
	/**
	* Tests whether a strided array contains at least `k` truthy elements.
	*
	* @param N - number of indexed elements
	* @param k - minimum number of truthy elements
	* @param x - input array
	* @param strideX - stride length
	* @returns boolean indicating whether the input array contains at least k truthy elements
	*
	* @example
	* var x = [ 0, 0, 1, 2 ];
	*
	* var v = gsome( x.length, 2, x, 1 );
	* // returns true
	*/
	( N: number, k: number, x: InputArray<unknown>, strideX: number ): boolean;

	/**
	* Tests whether a strided array contains at least `k` truthy elements.
	*
	* @param N - number of indexed elements
	* @param k - minimum number of truthy elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns boolean indicating whether the input array contains at least k truthy elements
	*
	* @example
	* var x = [ 0, 0, 1, 2 ];
	*
	* var v = gsome.ndarray( x.length, 2, x, 1, 0 );
	* // returns true
	*/
	ndarray( N: number, k: number, x: InputArray<unknown>, strideX: number, offsetX: number ): boolean;
}

/**
* Tests whether a strided array contains at least `k` truthy elements.
*
* @param N - number of indexed elements
* @param k - minimum number of truthy elements
* @param x - input array
* @param strideX - stride length
* @returns boolean indicating whether the input array contains at least k truthy elements
*
* @example
* var x = [ 0, 0, 1, 2 ];
*
* var v = gsome( x.length, 2, x, 1 );
* // returns true
*
* @example
* var x = [ 0, 0, 1, 2 ];
*
* var v = gsome.ndarray( x.length, 2, x, 1, 0 );
* // returns true
*/
declare var gsome: Routine;


// EXPORTS //

export = gsome;
