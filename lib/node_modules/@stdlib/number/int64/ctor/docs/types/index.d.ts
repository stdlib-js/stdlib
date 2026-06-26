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

interface SerializedInt64 {
	/**
	* Type name identifying the serialized value.
	*/
	type: 'Int64';

	/**
	* Array containing the high and low 32-bit words.
	*/
	words: [ number, number ];
}

/**
* 64-bit signed integer.
*/
declare class Int64 {
	/**
	* 64-bit signed integer constructor.
	*
	* @param value - integer value
	* @returns 64-bit signed integer
	*
	* @example
	* var x = new Int64( 5 );
	* // returns <Int64>
	*/
	constructor( value: number | bigint );

	/**
	* Creates a new 64-bit signed integer from an array-like object containing a high and low word.
	*
	* @param words - high and low words as 32-bit unsigned integers
	* @returns 64-bit signed integer
	*
	* @example
	* var x = Int64.from( [ 1234, 5678 ] );
	* // returns <Int64>
	*/
	static from( words: ArrayLike<number> ): Int64;

	/**
	* Creates a new 64-bit signed integer from a high and low word.
	*
	* @param high - high word (32-bit unsigned integer)
	* @param low - low word (32-bit unsigned integer)
	* @returns 64-bit signed integer
	*
	* @example
	* var x = Int64.of( 1234, 5678 );
	* // returns <Int64>
	*/
	static of( high: number, low: number ): Int64;

	/**
	* Size (in bytes) of the underlying value.
	*
	* @returns size in bytes
	*
	* @example
	* var nbytes = Int64.BYTES_PER_ELEMENT;
	* // returns 8
	*/
	static readonly BYTES_PER_ELEMENT: 8;

	/**
	* Size (in bytes) of the underlying value.
	*
	* @returns size in bytes
	*
	* @example
	* var x = new Int64( 5 );
	*
	* var nbytes = x.BYTES_PER_ELEMENT;
	* // returns 8
	*/
	readonly BYTES_PER_ELEMENT: 8;

	/**
	* Size (in bytes) of the underlying value.
	*
	* @returns size of the underlying value.
	*
	* @example
	* var v = new Int64( 5 );
	*
	* var nbytes = v.byteLength;
	* // returns 8
	*/
	readonly byteLength: 8;

	/**
	* Returns the high 32-bit word of a 64-bit signed integer.
	*
	* @returns high word (32-bit unsigned integer)
	*
	* @example
	* var x = Int64.from( [ 1, 2 ] );
	*
	* var w = x.hi;
	* // returns 1
	*/
	readonly hi: number;

	/**
	* Returns the low 32-bit word of a 64-bit signed integer.
	*
	* @returns low word (32-bit unsigned integer)
	*
	* @example
	* var x = Int64.from( [ 1, 2 ] );
	*
	* var w = x.lo;
	* // returns 2
	*/
	readonly lo: number;

	/**
	* Serializes a 64-bit signed integer as a string.
	*
	* @param radix - radix (base) to use for string conversion (2-36)
	* @returns serialized 64-bit signed integer
	*
	* @example
	* var x = new Int64( 5 );
	*
	* var str = x.toString();
	* // returns '5'
	*/
	toString( radix?: number ): string;

	/**
	* Serializes a 64-bit signed integer as a JSON object.
	*
	* ## Notes
	*
	* -   `JSON.stringify()` implicitly calls this method when stringifying a `Int64` instance.
	*
	* @returns serialized 64-bit signed integer
	*
	* @example
	* var x = new Int64( 5 );
	*
	* var obj = x.toJSON();
	* // returns { 'type': 'Int64', 'words': [ 0, 5 ] }
	*/
	toJSON(): SerializedInt64;

	/**
	* Converts a 64-bit signed integer to a primitive value.
	*
	* @returns primitive value
	*
	* @example
	* var x = new Int64( 5 );
	*
	* var v = x.valueOf();
	* // e.g., returns <bigint>
	*/
	valueOf(): number | bigint;
}


// EXPORTS //

export = Int64;
