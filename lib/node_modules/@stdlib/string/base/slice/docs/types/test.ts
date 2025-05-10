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

import slice = require( './index' );


// TESTS //

// The function returns a string...
{
	slice( 'abc', 1, 4 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument that is not a string...
{
	slice( true, 1, 3 ); // $ExpectError
	slice( false, 1, 3 ); // $ExpectError
	slice( null, 1, 3 ); // $ExpectError
	slice( undefined, 1, 3 ); // $ExpectError
	slice( 5, 1, 3 ); // $ExpectError
	slice( [], 1, 3 ); // $ExpectError
	slice( {}, 1, 3 ); // $ExpectError
	slice( ( x: number ): number => x, 1, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	slice( 'abc', true, 3 ); // $ExpectError
	slice( 'abc', false, 3 ); // $ExpectError
	slice( 'abc', null, 3 ); // $ExpectError
	slice( 'abc', 'abc', 3 ); // $ExpectError
	slice( 'abc', [], 3 ); // $ExpectError
	slice( 'abc', {}, 3 ); // $ExpectError
	slice( 'abc', ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a number...
{
	slice( 'abc', 1, true ); // $ExpectError
	slice( 'abc', 1, false ); // $ExpectError
	slice( 'abc', 1, null ); // $ExpectError
	slice( 'abc', 1, 'abc' ); // $ExpectError
	slice( 'abc', 1, [] ); // $ExpectError
	slice( 'abc', 1, {} ); // $ExpectError
	slice( 'abc', 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	slice(); // $ExpectError
	slice( 'abc' ); // $ExpectError
	slice( 'abc', 1, 2, {} ); // $ExpectError
}
