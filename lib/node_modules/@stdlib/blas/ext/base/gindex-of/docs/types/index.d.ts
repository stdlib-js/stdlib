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
type InputArray = Collection<unknown> | AccessorArrayLike<unknown>;

/**
* Interface describing `gindexOf`.
*/
interface Routine {
	/**
	* Returns the first index of a specified search element in a strided array.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param x - input array
	* @param strideX - stride length
	* @returns index
	*
	* @example
	* var x = new [ 1.0, 2.0, 3.0, 4.0 ];
	*
	* var idx = gindexOf( x.length, 2.0, x, 1 );
	* // returns 1
	*/
	( N: number, searchElement: unknown, x: InputArray, strideX: number ): number;

	/**
	* Returns the first index of a specified search element in a strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param searchElement - search element
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns index
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0 ];
	*
	* var idx = gindexOf.ndarray( x.length, 2.0, x, 1, 0 );
	* // returns 1
	*/
	ndarray( N: number, searchElement: unknown, x: InputArray, strideX: number, offsetX: number ): number;
}

/**
* Returns the first index of a specified search element in a strided array.
*
* @param N - number of indexed elements
* @param searchElement - search element
* @param x - input array
* @param strideX - stride length
* @returns index
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
*
* var idx = gindexOf( x.length, 2.0, x, 1 );
* // returns 1
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
*
* var idx = gindexOf.ndarray( x.length, 2.0, x, 1, 0 );
* // returns 1
*/
declare var gindexOf: Routine;


// EXPORTS //

export = gindexOf;
