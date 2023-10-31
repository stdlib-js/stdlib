/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import reverseString = require( './index' );


// TESTS //

// The function returns a string...
{
	reverseString( 'last man standing' ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a string...
{
	reverseString( true ); // $ExpectError
	reverseString( false ); // $ExpectError
	reverseString( null ); // $ExpectError
	reverseString( undefined ); // $ExpectError
	reverseString( 5 ); // $ExpectError
	reverseString( [] ); // $ExpectError
	reverseString( {} ); // $ExpectError
	reverseString( ( x: number ): number => x ); // $ExpectError

	reverseString( true, {} ); // $ExpectError
	reverseString( false, {} ); // $ExpectError
	reverseString( null, {} ); // $ExpectError
	reverseString( undefined, {} ); // $ExpectError
	reverseString( 5, {} ); // $ExpectError
	reverseString( [], {} ); // $ExpectError
	reverseString( {}, {} ); // $ExpectError
	reverseString( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a value other than an object as second argument...
{
	reverseString( 'abc', '1' ); // $ExpectError
	reverseString( 'abc', 1 ); // $ExpectError
	reverseString( 'abc', true ); // $ExpectError
	reverseString( 'abc', false ); // $ExpectError
	reverseString( 'abc', null ); // $ExpectError
	reverseString( 'abc', '' ); // $ExpectError
	reverseString( 'abc', [] ); // $ExpectError
	reverseString( 'abc', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `mode` option...
{
	reverseString( 'abc', { 'mode': true } ); // $ExpectError
	reverseString( 'abc', { 'mode': false } ); // $ExpectError
	reverseString( 'abc', { 'mode': null } ); // $ExpectError
	reverseString( 'abc', { 'mode': '' } ); // $ExpectError
	reverseString( 'abc', { 'mode': [] } ); // $ExpectError
	reverseString( 'abc', { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	reverseString(); // $ExpectError
}
