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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import Uint32Array = require( '@stdlib/array/uint32' );
import Int64 = require( './index' );


// TESTS //

// The function returns a 64-bit signed integer with the expected properties...
{
	const x = new Int64( 5 ); // $ExpectType Int64
	x.hi; // $ExpectType number
	x.lo; // $ExpectType number
	x.BYTES_PER_ELEMENT; // $ExpectType 8
	x.byteLength; // $ExpectType 8
}

// The function returns an instance having a `toString` method to serialize an instance as a string...
{
	const x = new Int64( 5 ); // $ExpectType Int64
	x.toString(); // $ExpectType string
}

// The function returns an instance having a `toJSON` method to serialize an instance as a JSON object...
{
	const x = new Int64( 5 ); // $ExpectType Int64
	x.toJSON(); // $ExpectType SerializedInt64
}

// The function returns an instance having a `valueOf` method to serialize an instance to a primitive value...
{
	const x = new Int64( 5 ); // $ExpectType Int64
	x.valueOf(); // $ExpectType number | bigint
}

// The compiler throws an error if the constructor is invoked without the `new` keyword...
{
	Int64( 5 ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a first argument that is not a number or big int...
{
	new Int64( true ); // $ExpectError
	new Int64( false ); // $ExpectError
	new Int64( null ); // $ExpectError
	new Int64( 'abc' ); // $ExpectError
	new Int64( {} ); // $ExpectError
	new Int64( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the constructor is provided an unsupported number of arguments...
{
	new Int64(); // $ExpectError
	new Int64( 5, 3 ); // $ExpectError
}

// Attached to the constructor is a `from` method which returns a 64-bit signed integer...
{
	Int64.from( [ 0, 1 ] ); // $ExpectType Int64
	Int64.from( new Uint32Array( [ 0, 1 ] ) ); // $ExpectType Int64
	Int64.from( { '0': 10, '1': 20, 'length': 2 } ); // $ExpectType Int64
}

// The compiler throws an error if the `from` method is provided an argument which is not array-like...
{
	Int64.from( true ); // $ExpectError
	Int64.from( false ); // $ExpectError
	Int64.from( 123 ); // $ExpectError
	Int64.from( null ); // $ExpectError
	Int64.from( {} ); // $ExpectError
}

// Attached to the constructor is an `of` method which returns a 64-bit signed integer...
{
	Int64.of( 0, 1 ); // $ExpectType Int64
}

// The compiler throws an error if the `of` method is provided arguments that are not numbers...
{
	Int64.of( 'abc', 'def' ); // $ExpectError
	Int64.of( true, false ); // $ExpectError
	Int64.of( {}, [] ); // $ExpectError
	Int64.of( null, null ); // $ExpectError
}

