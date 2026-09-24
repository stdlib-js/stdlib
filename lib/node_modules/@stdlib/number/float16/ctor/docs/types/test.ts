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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import Float16 = require( './index' );


// TESTS //

// The function returns a 16-bit half-precision floating-point number with the expected properties...
{
	const x = new Float16( 5.0 ); // $ExpectType Float16

	x.value; // $ExpectType number
	x.BYTES_PER_ELEMENT; // $ExpectType 2
}

// 16-bit half-precision floating-point number comes with a `toString` method to serialize a number as a string...
{
	const x = new Float16( 5.0 ); // $ExpectType Float16

	x.toString(); // $ExpectType string
}

// 16-bit half-precision floating-point number comes with a `toJSON` method to serialize a number as a JSON object....
{
	const x = new Float16( 5.0 ); // $ExpectType Float16

	x.toJSON(); // $ExpectType any
}

// 16-bit half-precision floating-point number comes with a `valueOf` method to serialize a number to a primitive value...
{
	const x = new Float16( 5.0 ); // $ExpectType Float16

	x.valueOf(); // $ExpectType number
}

// The compiler throws an error if the constructor is invoked without the `new` keyword...
{
	Float16( 5.0 ); // $ExpectError
}

// The compiler throws an error if the constructor is provided an unsupported number of arguments...
{
	new Float16( ); // $ExpectError
	new Float16( 5.0, 3.0 ); // $ExpectError
}
