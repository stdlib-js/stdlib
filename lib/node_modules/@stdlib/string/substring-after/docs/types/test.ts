/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import substringAfter = require( './index' );


// TESTS //

// The function returns a string...
{
	substringAfter( 'beep boop', ' ' ); // $ExpectType string
	substringAfter( 'beep boop', 'xyz' ); // $ExpectType string
	substringAfter( 'beep boop', '' ); // $ExpectType string
	substringAfter( 'beep boop', 'b', 5 ); // $ExpectType string
}

// The function does not compile if provided arguments having invalid types...
{
	substringAfter( true, 'd', 0 ); // $ExpectError
	substringAfter( false, 'd', 0 ); // $ExpectError
	substringAfter( 3, 'd', 0 ); // $ExpectError
	substringAfter( [], 'd', 0 ); // $ExpectError
	substringAfter( {}, 'd', 0 ); // $ExpectError
	substringAfter( ( x: number ): number => x, 'd', 0 ); // $ExpectError

	substringAfter( 'abc', true, 0 ); // $ExpectError
	substringAfter( 'abc', false, 0 ); // $ExpectError
	substringAfter( 'abc', 5, 0 ); // $ExpectError
	substringAfter( 'abc', [], 0 ); // $ExpectError
	substringAfter( 'abc', {}, 0 ); // $ExpectError
	substringAfter( 'abc', ( x: number ): number => x, 0 ); // $ExpectError

	substringAfter( 'abc', 'd', true ); // $ExpectError
	substringAfter( 'abc', 'd', false ); // $ExpectError
	substringAfter( 'abc', 'd', '5' ); // $ExpectError
	substringAfter( 'abc', 'd', [] ); // $ExpectError
	substringAfter( 'abc', 'd', {} ); // $ExpectError
	substringAfter( 'abc', 'd', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an unsupported number of arguments...
{
	substringAfter(); // $ExpectError
	substringAfter( 'abc' ); // $ExpectError
	substringAfter( 'abc', 'd', 1, 1 ); // $ExpectError
}
