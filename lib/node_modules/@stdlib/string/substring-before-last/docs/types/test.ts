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

import substringBeforeLast = require( './index' );


// TESTS //

// The function returns a string...
{
	substringBeforeLast( 'beep boop', ' ' ); // $ExpectType string
	substringBeforeLast( 'beep boop', 'xyz' ); // $ExpectType string
	substringBeforeLast( 'beep boop', '' ); // $ExpectType string
}

// The function does not compile if provided arguments having invalid types...
{
	substringBeforeLast( true, 'd' ); // $ExpectError
	substringBeforeLast( false, 'd' ); // $ExpectError
	substringBeforeLast( 3, 'd' ); // $ExpectError
	substringBeforeLast( [], 'd' ); // $ExpectError
	substringBeforeLast( {}, 'd' ); // $ExpectError
	substringBeforeLast( ( x: number ): number => x, 'd' ); // $ExpectError

	substringBeforeLast( 'abc', true ); // $ExpectError
	substringBeforeLast( 'abc', false ); // $ExpectError
	substringBeforeLast( 'abc', 5 ); // $ExpectError
	substringBeforeLast( 'abc', [] ); // $ExpectError
	substringBeforeLast( 'abc', {} ); // $ExpectError
	substringBeforeLast( 'abc', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	substringBeforeLast(); // $ExpectError
	substringBeforeLast( 'abc' ); // $ExpectError
}
