/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import nextDataType = require( './index' );


// TESTS //

// The function returns a table when not provided an input argument..
{
	nextDataType(); // $ExpectType Table
}

// The function returns the next larger data type or null when provided an input argument...
{
	nextDataType( 'complex128' ); // $ExpectType number
	nextDataType( 'complex64' ); // $ExpectType "complex128"

	nextDataType( 'bool' ); // $ExpectType number

	nextDataType( 'float64' ); // $ExpectType number
	nextDataType( 'float32' ); // $ExpectType "float64"

	nextDataType( 'int32' ); // $ExpectType number
	nextDataType( 'int16' ); // $ExpectType "int32"
	nextDataType( 'int8' ); // $ExpectType "int16"

	nextDataType( 'uint32' ); // $ExpectType number
	nextDataType( 'uint16' ); // $ExpectType "uint32"
	nextDataType( 'uint8' ); // $ExpectType "uint16"
	nextDataType( 'uint8c' ); // $ExpectType "uint16"

	nextDataType( 'generic' ); // $ExpectType number

	nextDataType( 'float' ); // $ExpectType null
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	nextDataType( 123 );  // $ExpectError
	nextDataType( true ); // $ExpectError
	nextDataType( false ); // $ExpectError
	nextDataType( {} ); // $ExpectError
	nextDataType( [] ); // $ExpectError
	nextDataType( null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nextDataType( 'float32', 3 ); // $ExpectError
}
