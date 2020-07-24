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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

/**
* Returns an accessed value.
*
* @returns accessed value
*/
type Nullary = () => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @returns accessed value
*/
type Unary = ( value: any ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param aidx - array index
* @returns accessed value
*/
type Binary = ( value: any, aidx: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @returns accessed value
*/
type Tertiary = ( value: any, aidx: number, sidx: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @param array - input array
* @returns accessed value
*/
type Quaternary = ( value: any, aidx: number, sidx: number, array: Collection ) => number | void; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @param array - input array
* @returns accessed value
*/
type Callback = Nullary | Unary | Binary | Tertiary | Quaternary;

/**
* Interface describing `nanminBy`.
*/
interface Routine {
	/**
	* Calculates the minimum value of a strided array via a callback function, ignoring `NaN` values.
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
	* @param stride - stride length
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
	( N: number, x: Collection, stride: number, clbk: Callback, thisArg?: any ): number; // tslint:disable-line:max-line-length

	/**
	* Calculates the minimum value of a strided array via a callback function, ignoring `NaN` values and using alternative indexing semantics.
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
	* @param stride - stride length
	* @param offset - starting index
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
	ndarray( N: number, x: Collection, stride: number, offset: number, clbk: Callback, thisArg?: any ): number; // tslint:disable-line:max-line-length
}

/**
* Calculates the minimum value of a strided array via a callback function, ignoring `NaN` values.
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
* @param stride - stride length
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
