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

import format = require( './index' );


// TESTS //

// The function returns a string...
{
	format( [ 'foo', 'bar' ] ); // $ExpectType string
	format( [] ); // $ExpectType string
}

// The compiler throws an error if the function is provided an argument which is not an array of strings...
{
	format( 'abc' ); // $ExpectError
	format( 123 ); // $ExpectError
	format( true ); // $ExpectError
	format( false ); // $ExpectError
	format( null ); // $ExpectError
	format( undefined ); // $ExpectError
	format( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	format(); // $ExpectError
	format( [ 'foo' ], 2 ); // $ExpectError
}
