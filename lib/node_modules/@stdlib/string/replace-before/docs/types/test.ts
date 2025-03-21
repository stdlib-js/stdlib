/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import replaceBefore = require( './index' );


// TESTS //

// The function returns a string...
{
	replaceBefore( 'beep boop', ' ', 'foo' ); // $ExpectType string
	replaceBefore( 'beep boop', 'xyz', 'foo' ); // $ExpectType string
	replaceBefore( 'beep boop', '', 'foo' ); // $ExpectType string
}

// The compiler throws an error if the function is provided arguments having invalid types...
{
	replaceBefore( true, 'd', 'foo' ); // $ExpectError
	replaceBefore( false, 'd' , 'foo' ); // $ExpectError
	replaceBefore( 3, 'd' , 'foo' ); // $ExpectError
	replaceBefore( [], 'd' , 'foo' ); // $ExpectError
	replaceBefore( {}, 'd' , 'foo' ); // $ExpectError
	replaceBefore( ( x: number ): number => x, 'd', 'foo' ); // $ExpectError

	replaceBefore( 'abc', true, 'foo' ); // $ExpectError
	replaceBefore( 'abc', false, 'foo' ); // $ExpectError
	replaceBefore( 'abc', 5 , 'foo' ); // $ExpectError
	replaceBefore( 'abc', [], 'foo' ); // $ExpectError
	replaceBefore( 'abc', {} , 'foo' ); // $ExpectError
	replaceBefore( 'abc', ( x: number ): number => x , 'foo' ); // $ExpectError

	replaceBefore( 'abc', 'd', true ); // $ExpectError
	replaceBefore( 'abc', 'd', false ); // $ExpectError
	replaceBefore( 'abc', 'd', 5 ); // $ExpectError
	replaceBefore( 'abc', 'd', [] ); // $ExpectError
	replaceBefore( 'abc', 'd', {} ); // $ExpectError
	replaceBefore( 'abc', 'd', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	replaceBefore(); // $ExpectError
	replaceBefore( 'abc' ); // $ExpectError
	replaceBefore( 'abc', 'd' ); // $ExpectError
}
