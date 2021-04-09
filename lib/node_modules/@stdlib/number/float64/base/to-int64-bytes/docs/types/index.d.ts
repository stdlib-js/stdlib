/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Interface describing `float64ToInt64Bytes`.
*/
interface Float64ToInt64Bytes {
	/**
	* Converts an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order (endianness).
	*
	* ## Notes
	*
	* -   This function assumes that the input value is less than the maximum safe double-precision floating-point integer plus one (i.e., `2**53`).
	*
	* @param x - double-precision floating-point number
	* @returns byte array
	*
	* @example
	* var bytes = float64ToInt64Bytes( 1.0 );
	* // returns <Uint8Array>
	*/
	( x: number ): Uint8Array;

	/**
	* Converts an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order (endianness) and assigns results to a provided output array.
	*
	* ## Notes
	*
	* -   This function assumes that the input value is less than the maximum safe double-precision floating-point integer plus one (i.e., `2**53`).
	*
	* @param x - double-precision floating-point number
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns byte array
	*
	* @example
	* var Uint8Array = require( `@stdlib/array/uint8` );
	*
	* var out = new Uint8Array( 16 );
	* var bytes = float64ToInt64Bytes.assign( 1.0, out, 2, 1 );
	* // returns <Uint8Array>
	*/
	assign( x: number, out: Collection, stride: number, offset: number ): Collection; // tslint-disable-line max-line-length
}

/**
* Converts an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order (endianness).
*
* ## Notes
*
* -   This function assumes that the input value is less than the maximum safe double-precision floating-point integer plus one (i.e., `2**53`).
*
* @param x - double-precision floating-point number
* @returns byte array
*
* @example
* var bytes = float64ToInt64Bytes( 1.0 );
* // returns <Uint8Array>
*
* @example
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var out = new Uint8Array( 16 );
* var bytes = float64ToInt64Bytes.assign( 1.0, out, 2, 1 );
* // returns <Uint8Array>
*/
declare var float64ToInt64Bytes: Float64ToInt64Bytes;


// EXPORTS //

export = float64ToInt64Bytes;
