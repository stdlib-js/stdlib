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
type InputArray<V> = Collection<V> | AccessorArrayLike<V>;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - array element
* @returns boolean indicating whether an element passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - array element
* @param aidx - array index
* @returns boolean indicating whether an element passes a test
*/
type Binary<T, U> = ( this: U, value: T, aidx: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @returns boolean indicating whether an element passes a test
*/
type Ternary<T, U> = ( this: U, value: T, aidx: number, sidx: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @param array - input array
* @returns boolean indicating whether an element passes a test
*/
type Quaternary<T, U, V> = ( this: U, value: T, aidx: number, sidx: number, array: InputArray<V> ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @param array - input array
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, U, V> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U> | Quaternary<T, U, V>;

/**
* Interface describing `gfindLastIndex`.
*/
interface Routine {
	/**
	* Returns the index of the last element which passes a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   The callback function is provided the following arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   If no element passes a test implemented by a predicate function, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param clbk - predicate function
	* @param thisArg - predicate function execution context
	* @returns index
	*
	* @example
	* function isEven( v ) {
	*     return v % 2.0 === 0.0;
	* }
	*
	* var x = [ 1.0, 3.0, -5.0, 4.0, 3.0, -2.0, -3.0 ];
	*
	* var idx = gfindLastIndex( x.length, x, 1, isEven );
	* // returns 5
	*/
	<T = unknown, U = unknown, V = unknown>( N: number, x: InputArray<V>, strideX: number, clbk: Predicate<T, U, V>, thisArg?: ThisParameterType<Predicate<T, U, V>> ): number;

	/**
	* Returns the index of the last element which passes a test implemented by a predicate function using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   The callback function is provided the following arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   If no element passes a test implemented by a predicate function, the function returns `-1`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @param clbk - predicate function
	* @param thisArg - predicate function execution context
	* @returns index
	*
	* @example
	* function isEven( v ) {
	*     return v % 2.0 === 0.0;
	* }
	*
	* var x = [ 1.0, 3.0, -5.0, 4.0, 3.0, -2.0, -3.0 ];
	*
	* var idx = gfindLastIndex( x.length, x, 1, 0, isEven );
	* // returns 5
	*/
	ndarray<T = unknown, U = unknown, V = unknown>( N: number, x: InputArray<V>, strideX: number, offsetX: number, clbk: Predicate<T, U, V>, thisArg?: ThisParameterType<Predicate<T, U, V>> ): number;
}

/**
* Returns the index of the last element which passes a test implemented by a predicate function.
*
* ## Notes
*
* -   The callback function is provided the following arguments:
*
*     -   `value`: array element
*     -   `aidx`: array index
*     -   `sidx`: strided index (offset + aidx*stride)
*     -   `array`: input array
*
* -   If no element passes a test implemented by a predicate function, the function returns `-1`.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @param clbk - predicate function
* @param thisArg - predicate function execution context
* @returns index
*
* @example
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var x = [ 1.0, 3.0, -5.0, 4.0, 3.0, -2.0, -3.0 ];
*
* var idx = gfindLastIndex( x.length, x, 1, isEven );
* // returns 5
*
* @example
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var x = [ 1.0, 3.0, -5.0, 4.0, 3.0, -2.0, -3.0 ];
*
* var idx = gfindLastIndex( x.length, x, 1, 0, isEven );
* // returns 5
*/
declare var gfindLastIndex: Routine;


// EXPORTS //

export = gfindLastIndex;
