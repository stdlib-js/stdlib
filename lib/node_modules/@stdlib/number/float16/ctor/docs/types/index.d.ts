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

/**
* 16-bit half-precision floating-point number.
*/
declare class Float16 {
	/**
	* 16-bit half-precision floating-point number constructor.
	*
	* @param value - numeric value
	* @returns half-precision floating-point number
	*
	* @example
	* var x = new Float16( 5.0 );
	* // returns <Float16>
	*/
	constructor( value: number );

	/**
	* Read-only property returning the value.
	*
	* @returns value
	*/
	readonly value: number;

	/**
	* Size (in bytes) of the underlying value.
	*
	* @returns size of the underlying value.
	*
	* @example
	* var nbytes = Float16.BYTES_PER_ELEMENT;
	* // returns 2
	*/
	readonly BYTES_PER_ELEMENT: 2;

	/**
	* Serializes a half-precision floating-point number as a string.
	*
	* @returns serialized half-precision floating-point number
	*
	* @example
	* var x = new Float16( 5.0 );
	*
	* var str = x.toString();
	* // returns '5'
	*/
	toString(): string;

	/**
	* Serializes a half-precision floating-point number as a JSON object.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a `Float16` instance.
	*
	*
	* @returns serialized half-precision floating-point number
	*
	* @example
	* var x = new Float16( 5.0 );
	*
	* var obj = x.toJSON();
	* // returns { 'type': 'Float16', 'value': 5.0 }
	*/
	toJSON(): any;

	/**
	* Converts a half-precision floating-point number to a primitive value.
	*
	* @returns primitive value
	*
	* @example
	* var x = new Float16( 5.0 );
	*
	* var v = x.valueOf();
	* // returns 5.0
	*/
	valueOf(): number;
}


// EXPORTS //

export = Float16;
