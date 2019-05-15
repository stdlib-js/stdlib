/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import tokenize = require( './index' );


// TESTS //

// The function returns an array of strings...
{
	tokenize( 'Hello World!' ); // $ExpectType string[]
}

// The function does not compile if provided values of invalid types...
{
	tokenize( true ); // $ExpectError
	tokenize( false ); // $ExpectError
	tokenize( 3 ); // $ExpectError
	tokenize( [] ); // $ExpectError
	tokenize( {} ); // $ExpectError
	tokenize( ( x: number ): number => x ); // $ExpectError

	tokenize( 'Hello World!', 3.12 ); // $ExpectError
	tokenize( 'Hello World!', '5' ); // $ExpectError
	tokenize( 'Hello World!', [] ); // $ExpectError
	tokenize( 'Hello World!', {} ); // $ExpectError
	tokenize( 'Hello World!', ( x: number ): number => x ); // $ExpectError

	tokenize( true, true ); // $ExpectError
	tokenize( false, true ); // $ExpectError
	tokenize( 3, true ); // $ExpectError
	tokenize( [], true ); // $ExpectError
	tokenize( {}, true ); // $ExpectError
	tokenize( ( x: number ): number => x, true ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	tokenize(); // $ExpectError
}
