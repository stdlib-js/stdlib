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
type InputArray = Collection<unknown> | AccessorArrayLike<unknown>;

/**
* Interface describing `gindexOfLessThan`.
*/
interface Routine {
	/**
	* Returns the first index of an element in a strided array which is less than a specified search element.
	*
	* ## Notes
	*
	* -   If unable to find an element which is less than the search element, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param x - input array
	* @param strideX - stride length
	* @returns index
	*
	* @example
	* var x = [ 1.0, 1.0, 0.0, 1.0 ];
	*
	* var idx = gindexOfLessThan( x.length, 1.0, x, 1 );
	* // returns 2
	*/
	( N: number, searchElement: unknown, x: InputArray, strideX: number ): number;

	/**
	* Returns the first index of an element in a strided array which is less than a specified search element using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If unable to find an element which is less than the search element, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns index
	*
	* @example
	* var x = [ 1.0, 1.0, 0.0, 1.0 ];
	*
	* var idx = gindexOfLessThan.ndarray( x.length, 1.0, x, 1, 0 );
	* // returns 2
	*/
	ndarray( N: number, searchElement: unknown, x: InputArray, strideX: number, offsetX: number ): number;
}

/**
* Returns the first index of an element in a strided array which is less than a specified search element.
*
* ## Notes
*
* -   If unable to find an element which is less than the search element, the function returns `-1`.
*
* @param N - number of indexed elements
* @param searchElement - search element
* @param x - input array
* @param strideX - stride length
* @returns index
*
* @example
* var x = [ 1.0, 1.0, 0.0, 1.0 ];
*
* var idx = gindexOfLessThan( x.length, 1.0, x, 1 );
* // returns 2
*
* @example
* var x = [ 1.0, 1.0, 0.0, 1.0 ];
*
* var idx = gindexOfLessThan.ndarray( x.length, 1.0, x, 1, 0 );
* // returns 2
*/
declare var gindexOfLessThan: Routine;


// EXPORTS //

export = gindexOfLessThan;
