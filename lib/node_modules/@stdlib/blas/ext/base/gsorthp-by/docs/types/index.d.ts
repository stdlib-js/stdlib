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
* Comparator function.
*
* @returns result
*/
type Unary<ThisArg> = ( this: ThisArg ) => number;

/**
* Comparator function.
*
* @param a - first value
* @returns result
*/
type Binary<T, ThisArg> = ( this: ThisArg, a: T ) => number;

/**
* Comparator function.
*
* @param a - first value
* @param b - second value
* @returns result
*/
type Ternary<T, ThisArg> = ( this: ThisArg, a: T, b: T ) => number;

/**
* Comparator function.
*
* @param a - first value
* @param b - second value
* @param array - input array
* @returns result
*/
type Quaternary<T, U, ThisArg> = ( this: ThisArg, a: T, b: T, array: U ) => number;

/**
* Comparator function.
*
* @param a - first value
* @param b - second value
* @param array - input array
* @returns result
*/
type Callback<T, U, ThisArg> = Unary<ThisArg> | Binary<T, ThisArg> | Ternary<T, ThisArg> | Quaternary<T, U, ThisArg>;

/**
* Interface describing `gsorthpBy`.
*/
interface Routine {
	/**
	* Sorts a strided array using heapsort according to a provided callback function.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param clbk - callback function
	* @param thisArg - execution context
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* function clbk( a, b ) {
	*     if ( a < b ) {
	*         return -1;
	*     }
	*     if ( a > b ) {
	*         return 1;
	*     }
	*     return 0;
	* }
	*
	* gsorthpBy( x.length, x, 1, clbk );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( N: number, x: U, strideX: number, clbk: Callback<T, U, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, ThisArg>> ): U;

	/**
	* Sorts a strided array using heapsort according to a provided callback function and using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @param clbk - callback function
	* @param thisArg - execution context
	* @returns `x`
	*
	* @example
	* var x = [ 1.0, -2.0, 3.0, -4.0 ];
	*
	* function clbk( a, b ) {
	*     if ( a < b ) {
	*         return -1;
	*     }
	*     if ( a > b ) {
	*         return 1;
	*     }
	*     return 0;
	* }
	*
	* gsorthpBy.ndarray( x.length, x, 1, 0, clbk );
	* // x => [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	ndarray<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( N: number, x: U, strideX: number, offsetX: number, clbk: Callback<T, U, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, ThisArg>> ): U;
}

/**
* Sorts a strided array using heapsort according to a provided callback function.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @param clbk - callback function
* @param thisArg - execution context
* @returns `x`
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* function clbk( a, b ) {
*     if ( a < b ) {
*         return -1;
*     }
*     if ( a > b ) {
*         return 1;
*     }
*     return 0;
* }
*
* gsorthpBy( x.length, x, 1, clbk );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* function clbk( a, b ) {
*     if ( a < b ) {
*         return -1;
*     }
*     if ( a > b ) {
*         return 1;
*     }
*     return 0;
* }
*
* gsorthpBy.ndarray( x.length, x, 1, 0, clbk );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*/
declare var gsorthpBy: Routine;


// EXPORTS //

export = gsorthpBy;
