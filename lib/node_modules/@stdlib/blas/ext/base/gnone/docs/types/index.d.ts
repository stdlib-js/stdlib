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
* Interface describing `gnone`.
*/
interface Routine {
	/**
	* Tests whether every element in a strided array is falsy.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns boolean indicating whether all elements are falsy
	*
	* @example
	* var x = [ 0, 0, 1, 1 ];
	*
	* var o = gnone( x.length, x, 1 );
	* // returns false
	*/
	( N: number, x: InputArray<unknown>, strideX: number ): boolean;

	/**
	* Tests whether every element in a strided array is falsy using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns boolean indicating whether all elements are falsy
	*
	* @example
	* var x = [ 0, 0, 1, 1 ];
	*
	* var o = gnone.ndarray( x.length, x, 1, 0 );
	* // returns false
	*/
	ndarray( N: number, x: InputArray<unknown>, strideX: number, offsetX: number ): boolean;
}

/**
* Tests whether every element in a strided array is falsy.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns boolean indicating whether all elements are falsy
*
* @example
* var x = [ 0, 0, 1, 1 ];
*
* var o = gnone( x.length, x, 1 );
* // returns false
*
* @example
* var x = [ 0, 0, 1, 1 ];
*
* var o = gnone.ndarray( x.length, x, 1, 0 );
* // returns false
*/
declare var gnone: Routine;


// EXPORTS //

export = gnone;
