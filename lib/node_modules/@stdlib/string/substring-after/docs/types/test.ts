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

// The function returns a string
{
	substringAfter( 'beep boop', ' ' ); // $ExpectType string
	substringAfter( 'beep boop', 'xyz' ); // $ExpectType string
	substringAfter( 'beep boop', '' ); // $ExpectType string
}

// The function does not compile if provided arguments having invalid types...
{
	substringAfter( true, 'd' ); // $ExpectError
	substringAfter( false, 'd' ); // $ExpectError
	substringAfter( 3, 'd' ); // $ExpectError
	substringAfter( [], 'd' ); // $ExpectError
	substringAfter( {}, 'd' ); // $ExpectError
	substringAfter( ( x: number ): number => x, 'd' ); // $ExpectError

	substringAfter( 'abc', true ); // $ExpectError
	substringAfter( 'abc', false ); // $ExpectError
	substringAfter( 'abc', 5 ); // $ExpectError
	substringAfter( 'abc', [] ); // $ExpectError
	substringAfter( 'abc', {} ); // $ExpectError
	substringAfter( 'abc', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	substringAfter(); // $ExpectError
	substringAfter( 'abc' ); // $ExpectError
}
