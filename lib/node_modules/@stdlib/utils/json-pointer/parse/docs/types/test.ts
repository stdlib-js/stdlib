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

import parse = require( './index' );


// TESTS //

// The function returns an array of strings...
{
	parse( '/foo/bar' ); // $ExpectType string[]
	parse( '' ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided an argument which is not a string...
{
	parse( 123 ); // $ExpectError
	parse( true ); // $ExpectError
	parse( false ); // $ExpectError
	parse( null ); // $ExpectError
	parse( undefined ); // $ExpectError
	parse( [] ); // $ExpectError
	parse( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	parse(); // $ExpectError
	parse( '/foo', 2 ); // $ExpectError
}
