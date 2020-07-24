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
* Returns a fill value.
*
* @returns fill value
*/
type Nullary = () => any;

/**
* Returns a fill value.
*
* @param value - array element
* @returns fill value
*/
type Unary = ( value: any ) => any;

/**
* Returns a fill value.
*
* @param value - array element
* @param aidx - array index
* @returns fill value
*/
type Binary = ( value: any, aidx: number ) => any;

/**
* Returns a fill value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @returns fill value
*/
type Tertiary = ( value: any, aidx: number, sidx: number ) => any;

/**
* Returns a fill value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @param array - input array
* @returns fill value
*/
type Quaternary = ( value: any, aidx: number, sidx: number, array: Collection ) => any; // tslint-disable-line max-line-length

/**
* Returns a fill value.
*
* @param value - array element
* @param aidx - array index
* @param sidx - strided index (offset + aidx*stride)
* @param array - input array
* @returns fill value
*/
type Callback = Nullary | Unary | Binary | Tertiary | Quaternary;

/**
* Interface describing `gfillBy`.
*/
interface Routine {
	/**
	* Fills a strided array according to a provided callback function.
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
	* -   The callback return value is used as the fill value for the current array index.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function fill() {
	*     return 5.0;
	* }
	*
	* gfillBy( x.length, x, 1, fill );
	* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	( N: number, x: Collection, stride: number, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length

	/**
	* Fills a strided array according to a provided callback function and using alternative indexing semantics.
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
	* -   The callback return value is used as the fill value for the current array index.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @param clbk - callback
	* @param thisArg - execution context
	* @returns `x`
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* function fill() {
	*     return 5.0;
	* }
	*
	* gfillBy.ndarray( x.length, x, 1, 0, fill );
	* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
	*/
	ndarray( N: number, x: Collection, stride: number, offset: number, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length
}

/**
* Fills a strided array according to a provided callback function.
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
* -   The callback return value is used as the fill value for the current array index.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - stride length
* @param clbk - callback
* @param thisArg - execution context
* @returns `x`
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* function fill() {
*     return 5.0;
* }
*
* gfillBy( x.length, x, 1, fill );
* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* function fill() {
*     return 5.0;
* }
*
* gfillBy.ndarray( x.length, x, 1, 0, fill );
* // x => [ 5.0, 5.0, 5.0, 0.0, 5.0, 5.0, 5.0, 5.0 ]
*/
declare var gfillBy: Routine;


// EXPORTS //

export = gfillBy;
