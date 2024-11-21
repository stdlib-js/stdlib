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

import replaceAfterLast = require( './index' );


// TESTS //

// The function returns a string...
{
	replaceAfterLast( 'beep boop', ' ', 'foo', 10 ); // $ExpectType string
	replaceAfterLast( 'beep boop', 'xyz', 'foo', 10 ); // $ExpectType string
	replaceAfterLast( 'beep boop', '', 'foo', 10 ); // $ExpectType string
}

// The compiler throws an error if the function is provided arguments having invalid types...
{
	replaceAfterLast( true, 'd', 'foo', 100 ); // $ExpectError
	replaceAfterLast( false, 'd' , 'foo', 100 ); // $ExpectError
	replaceAfterLast( 3, 'd' , 'foo', 100 ); // $ExpectError
	replaceAfterLast( [], 'd' , 'foo', 100 ); // $ExpectError
	replaceAfterLast( {}, 'd' , 'foo', 100 ); // $ExpectError
	replaceAfterLast( ( x: number ): number => x, 'd', 'foo', 100 ); // $ExpectError

	replaceAfterLast( 'abc', true, 'foo', 10 ); // $ExpectError
	replaceAfterLast( 'abc', false, 'foo', 10 ); // $ExpectError
	replaceAfterLast( 'abc', 5 , 'foo', 10 ); // $ExpectError
	replaceAfterLast( 'abc', [], 'foo', 10 ); // $ExpectError
	replaceAfterLast( 'abc', {} , 'foo', 10 ); // $ExpectError
	replaceAfterLast( 'abc', ( x: number ): number => x , 'foo', 10 ); // $ExpectError

	replaceAfterLast( 'abc', 'd', true, 10 ); // $ExpectError
	replaceAfterLast( 'abc', 'd', false, 10 ); // $ExpectError
	replaceAfterLast( 'abc', 'd', 5, 10 ); // $ExpectError
	replaceAfterLast( 'abc', 'd', [], 10 ); // $ExpectError
	replaceAfterLast( 'abc', 'd', {}, 10 ); // $ExpectError
	replaceAfterLast( 'abc', 'd', ( x: number ): number => x, 10 ); // $ExpectError

	replaceAfterLast( 'abc', 'd', 'foo', true ); // $ExpectError
	replaceAfterLast( 'abc', 'd', 'foo', false ); // $ExpectError
	replaceAfterLast( 'abc', 'd', 'foo', '5' ); // $ExpectError
	replaceAfterLast( 'abc', 'd', 'foo', [] ); // $ExpectError
	replaceAfterLast( 'abc', 'd', 'foo', {} ); // $ExpectError
	replaceAfterLast( 'abc', 'd', 'foo', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	replaceAfterLast(); // $ExpectError
	replaceAfterLast( 'abc' ); // $ExpectError
	replaceAfterLast( 'abc', 'd' ); // $ExpectError
	replaceAfterLast( 'abc', 'd', 'foo' ); // $ExpectError
	replaceAfterLast( 'abc', 'd', 'foo', 4, 4 ); // $ExpectError
}
