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

import DataType = require( './index' );


// TESTS //

// The function is a constructor which returns a data type instance with the expected properties...
{
	const x = new DataType( 'float64' ); // $ExpectType DataType<string>
	new DataType( 'float64', {} ); // $ExpectType DataType<string>

	x.alignment; // $ExpectType number
	x.byteLength; // $ExpectType number
	x.byteOrder; // $ExpectType ByteOrder
	x.char; // $ExpectType string
	x.description; // $ExpectType string
	x.enum; // $ExpectType number
	x.value; // $ExpectType string
}

// The compiler throws an error if provided an invalid `description` option...
{
	new DataType( 'float64', { 'description': 1 } ); // $ExpectError
	new DataType( 'float64', { 'description': true } ); // $ExpectError
	new DataType( 'float64', { 'description': false } ); // $ExpectError
	new DataType( 'float64', { 'description': null } ); // $ExpectError
	new DataType( 'float64', { 'description': [] } ); // $ExpectError
	new DataType( 'float64', { 'description': {} } ); // $ExpectError
	new DataType( 'float64', { 'description': ( x: number ): number => x } ); // $ExpectError
}

// Attached to a data type instance is a `toString` method which returns a string...
{
	const x = new DataType( 'float64' ); // $ExpectType DataType<string>

	x.toString(); // $ExpectType string
}

// Attached to a data type instance is a `toJSON` method which returns an object....
{
	const x = new DataType( 'float64' ); // $ExpectType DataType<string>

	x.toJSON(); // $ExpectType Object
}

// The compiler throws an error if the constructor is provided an unsupported number of arguments...
{
	new DataType(); // $ExpectError
	new DataType( 'float64', {}, {} ); // $ExpectError
}
