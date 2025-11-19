/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Returns an accessed value.
*
* @returns accessed value
*/
type Nullary<U> = ( this: U ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @returns accessed value
*/
type Unary<T, U> = ( this: U, value: T ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param aidx - array index
* @returns accessed value
*/
type Binary<T, U> = ( this: U, value: T, aidx: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @returns accessed value
*/
type Ternary<T, U> = ( this: U, value: T, aidx: number, sidx: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @param array - input array
* @returns accessed value
*/
type Quaternary<T, U> = ( this: U, value: T, aidx: number, sidx: number, array: Collection<T> ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @param array - input array
* @returns accessed value
*/
type Callback<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U> | Quaternary<T, U>;

/**
* Interface describing `nanminBy`.
*/
interface Routine {
	/**
	* Computes the minimum value of a strided array via a callback function, ignoring `NaN` values.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value.
	*
	* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* -   If the callback function returns `NaN`, the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns minimum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = nanminBy( x.length, x, 1, accessor );
	* // returns -10.0
	*/
	<T = unknown, U = unknown>( N: number, x: InputArray<T>, strideX: number, clbk: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): number;

	/**
	* Computes the minimum value of a strided array via a callback function, ignoring `NaN` values and using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   The callback function is provided four arguments:
	*
	*     -   `value`: array element
	*     -   `aidx`: array index
	*     -   `sidx`: strided index (offset + aidx*stride)
	*     -   `array`: input array
	*
	* -   The callback function should return a numeric value.
	*
	* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
	*
	* -   If the callback function returns `NaN`, the value is ignored.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns minimum value
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var v = nanminBy.ndarray( x.length, x, 1, 0, accessor );
	* // returns -10.0
	*/
	ndarray<T = unknown, U = unknown>( N: number, x: InputArray<T>, strideX: number, offsetX: number, clbk: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): number;
}

/**
* Computes the minimum value of a strided array via a callback function, ignoring `NaN` values.
*
* ## Notes
*
* -   The callback function is provided four arguments:
*
*     -   `value`: array element
*     -   `aidx`: array index
*     -   `sidx`: strided index (offset + aidx*stride)
*     -   `array`: input array
*
* -   The callback function should return a numeric value.
*
* -   If the callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is ignored.
*
* -   If the callback function returns `NaN`, the value is ignored.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @param clbk - callback
* @param thisArg - execution context
* @returns minimum value
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var v = nanminBy( x.length, x, 1, accessor );
* // returns -10.0
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, NaN, 0.0, -1.0, -3.0 ];
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var v = nanminBy.ndarray( x.length, x, 1, 0, accessor );
* // returns -10.0
*/
declare var nanminBy: Routine;


// EXPORTS //

export = nanminBy;
