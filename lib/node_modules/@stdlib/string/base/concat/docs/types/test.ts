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

import concat = require( './index' );


// TESTS //

// The function returns a string...
{
	concat( 'beep', 'boop' ); // $ExpectType "beepboop"
	concat( 'foo', 'bar' ); // $ExpectType "foobar"
	concat( 'abc' as string, 'xyz' as string ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	concat( true, 'boop' ); // $ExpectError
	concat( null, 'boop' ); // $ExpectError
	concat( undefined, 'boop' ); // $ExpectError
	concat( 123, 'boop' ); // $ExpectError
	concat( {}, 'boop' ); // $ExpectError
	concat( [], 'boop' ); // $ExpectError
	concat( ( x: number ): number => x, 'boop' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	concat( 'beep', true ); // $ExpectError
	concat( 'beep', null ); // $ExpectError
	concat( 'beep', undefined ); // $ExpectError
	concat( 'beep', 123 ); // $ExpectError
	concat( 'beep', {} ); // $ExpectError
	concat( 'beep', [] ); // $ExpectError
	concat( 'beep', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	concat(); // $ExpectError
	concat( 'beep' ); // $ExpectError
}
