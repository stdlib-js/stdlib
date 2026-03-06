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

import replaceAfter = require( './index' );


// TESTS //

// The function returns a string...
{
	replaceAfter( 'beep boop', ' ', 'foo', 0 ); // $ExpectType string
	replaceAfter( 'beep boop', 'xyz', 'foo', 0 ); // $ExpectType string
	replaceAfter( 'beep boop', '', 'foo', 0 ); // $ExpectType string
	replaceAfter( 'beep boop', '', 'foo', 5 ); // $ExpectType string
}

// The compiler throws an error if the function is provided arguments having invalid types...
{
	replaceAfter( true, 'd', 'foo', 0 ); // $ExpectError
	replaceAfter( false, 'd' , 'foo', 0 ); // $ExpectError
	replaceAfter( 3, 'd' , 'foo', 0 ); // $ExpectError
	replaceAfter( [], 'd' , 'foo', 0 ); // $ExpectError
	replaceAfter( {}, 'd' , 'foo', 0 ); // $ExpectError
	replaceAfter( ( x: number ): number => x, 'd', 'foo', 0 ); // $ExpectError

	replaceAfter( 'abc', true, 'foo', 0 ); // $ExpectError
	replaceAfter( 'abc', false, 'foo', 0 ); // $ExpectError
	replaceAfter( 'abc', 5 , 'foo', 0 ); // $ExpectError
	replaceAfter( 'abc', [], 'foo', 0 ); // $ExpectError
	replaceAfter( 'abc', {} , 'foo', 0 ); // $ExpectError
	replaceAfter( 'abc', ( x: number ): number => x , 'foo', 0 ); // $ExpectError

	replaceAfter( 'abc', 'd', true, 0 ); // $ExpectError
	replaceAfter( 'abc', 'd', false, 0 ); // $ExpectError
	replaceAfter( 'abc', 'd', 5, 0 ); // $ExpectError
	replaceAfter( 'abc', 'd', [], 0 ); // $ExpectError
	replaceAfter( 'abc', 'd', {}, 0 ); // $ExpectError
	replaceAfter( 'abc', 'd', ( x: number ): number => x, 0 ); // $ExpectError

	replaceAfter( 'abc', 'd', 'foo', true  ); // $ExpectError
	replaceAfter( 'abc', 'd', 'foo', false ); // $ExpectError
	replaceAfter( 'abc', 'd', 'foo', '5' ); // $ExpectError
	replaceAfter( 'abc', 'd', 'foo', [] ); // $ExpectError
	replaceAfter( 'abc', 'd', 'foo', {} ); // $ExpectError
	replaceAfter( 'abc', 'd', 'foo', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	replaceAfter(); // $ExpectError
	replaceAfter( 'abc' ); // $ExpectError
	replaceAfter( 'abc', 'd' ); // $ExpectError
	replaceAfter( 'abc', 'd', 'd', 1, 1 ); // $ExpectError
}
