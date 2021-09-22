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

import substringBefore = require( './index' );


// TESTS //

// The function returns a string...
{
	substringBefore( 'beep boop', ' ' ); // $ExpectType string
	substringBefore( 'beep boop', 'xyz' ); // $ExpectType string
	substringBefore( 'beep boop', '' ); // $ExpectType string
}

// The function does not compile if provided arguments having invalid types...
{
	substringBefore( true, 'd' ); // $ExpectError
	substringBefore( false, 'd' ); // $ExpectError
	substringBefore( 3, 'd' ); // $ExpectError
	substringBefore( [], 'd' ); // $ExpectError
	substringBefore( {}, 'd' ); // $ExpectError
	substringBefore( ( x: number ): number => x, 'd' ); // $ExpectError

	substringBefore( 'abc', true ); // $ExpectError
	substringBefore( 'abc', false ); // $ExpectError
	substringBefore( 'abc', 5 ); // $ExpectError
	substringBefore( 'abc', [] ); // $ExpectError
	substringBefore( 'abc', {} ); // $ExpectError
	substringBefore( 'abc', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	substringBefore(); // $ExpectError
	substringBefore( 'abc' ); // $ExpectError
}
