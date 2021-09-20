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

import substringAfterLast = require( './index' );


// TESTS //

// The function returns a string...
{
	substringAfterLast( 'beep boop', ' ' ); // $ExpectType string
	substringAfterLast( 'beep boop', 'xyz' ); // $ExpectType string
	substringAfterLast( 'beep boop', '' ); // $ExpectType string
	substringAfterLast( 'beep boop baz', ' ', 6 ); // $ExpectType string
}

// The function does not compile if provided arguments having invalid types...
{
	substringAfterLast( true, 'd', 999 ); // $ExpectError
	substringAfterLast( false, 'd', 999 ); // $ExpectError
	substringAfterLast( 3, 'd', 999 ); // $ExpectError
	substringAfterLast( [], 'd', 999 ); // $ExpectError
	substringAfterLast( {}, 'd', 999 ); // $ExpectError
	substringAfterLast( ( x: number ): number => x, 'd', 999 ); // $ExpectError

	substringAfterLast( 'abc', true, 999 ); // $ExpectError
	substringAfterLast( 'abc', false, 999 ); // $ExpectError
	substringAfterLast( 'abc', 5, 999 ); // $ExpectError
	substringAfterLast( 'abc', [], 999 ); // $ExpectError
	substringAfterLast( 'abc', {}, 999 ); // $ExpectError
	substringAfterLast( 'abc', ( x: number ): number => x, 999 ); // $ExpectError

	substringAfterLast( 'abc', 'd', true ); // $ExpectError
	substringAfterLast( 'abc', 'd', false ); // $ExpectError
	substringAfterLast( 'abc', 'd', 'abc' ); // $ExpectError
	substringAfterLast( 'abc', 'd', [] ); // $ExpectError
	substringAfterLast( 'abc', 'd', {} ); // $ExpectError
	substringAfterLast( 'abc', 'd', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an unsupported number of arguments...
{
	substringAfterLast(); // $ExpectError
	substringAfterLast( 'abc' ); // $ExpectError
	substringAfterLast( 'abc', 'd', 3, 'f' ); // $ExpectError
}
