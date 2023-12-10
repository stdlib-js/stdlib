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

import removeLast = require( './index' );


// TESTS //

// The function returns a string...
{
	removeLast( 'abc' ); // $ExpectType string
	removeLast( 'abc', 1 ); // $ExpectType string
	removeLast( 'abc', {} ); // $ExpectType string
	removeLast( 'abc', 1, {} ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a string...
{
	removeLast( true ); // $ExpectError
	removeLast( false ); // $ExpectError
	removeLast( null ); // $ExpectError
	removeLast( undefined ); // $ExpectError
	removeLast( 5 ); // $ExpectError
	removeLast( [] ); // $ExpectError
	removeLast( {} ); // $ExpectError
	removeLast( ( x: number ): number => x ); // $ExpectError

	removeLast( true, 1 ); // $ExpectError
	removeLast( false, 1 ); // $ExpectError
	removeLast( null, 1 ); // $ExpectError
	removeLast( undefined, 1 ); // $ExpectError
	removeLast( 5, 1 ); // $ExpectError
	removeLast( [], 1 ); // $ExpectError
	removeLast( {}, 1 ); // $ExpectError
	removeLast( ( x: number ): number => x, 1 ); // $ExpectError

	removeLast( true, {} ); // $ExpectError
	removeLast( false, {} ); // $ExpectError
	removeLast( null, {} ); // $ExpectError
	removeLast( undefined, {} ); // $ExpectError
	removeLast( 5, {} ); // $ExpectError
	removeLast( [], {} ); // $ExpectError
	removeLast( {}, {} ); // $ExpectError
	removeLast( ( x: number ): number => x, {} ); // $ExpectError

	removeLast( true, 1, {} ); // $ExpectError
	removeLast( false, 1, {} ); // $ExpectError
	removeLast( null, 1, {} ); // $ExpectError
	removeLast( undefined, 1, {} ); // $ExpectError
	removeLast( 5, 1, {} ); // $ExpectError
	removeLast( [], 1, {} ); // $ExpectError
	removeLast( {}, 1, {} ); // $ExpectError
	removeLast( ( x: number ): number => x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid second argument...
{
	removeLast( 'abc', true ); // $ExpectError
	removeLast( 'abc', false ); // $ExpectError
	removeLast( 'abc', null ); // $ExpectError
	removeLast( 'abc', 'abc' ); // $ExpectError
	removeLast( 'abc', [] ); // $ExpectError
	removeLast( 'abc', ( x: number ): number => x ); // $ExpectError

	removeLast( 'abc', true, {} ); // $ExpectError
	removeLast( 'abc', false, {} ); // $ExpectError
	removeLast( 'abc', null, {} ); // $ExpectError
	removeLast( 'abc', '', {} ); // $ExpectError
	removeLast( 'abc', [], {} ); // $ExpectError
	removeLast( 'abc', {}, {} ); // $ExpectError
	removeLast( 'abc', ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `mode` option...
{
	removeLast( 'abc', { 'mode': true } ); // $ExpectError
	removeLast( 'abc', { 'mode': false } ); // $ExpectError
	removeLast( 'abc', { 'mode': null } ); // $ExpectError
	removeLast( 'abc', { 'mode': '' } ); // $ExpectError
	removeLast( 'abc', { 'mode': [] } ); // $ExpectError
	removeLast( 'abc', { 'mode': ( x: number ): number => x } ); // $ExpectError

	removeLast( 'abc', 1, { 'mode': true } ); // $ExpectError
	removeLast( 'abc', 1, { 'mode': false } ); // $ExpectError
	removeLast( 'abc', 1, { 'mode': null } ); // $ExpectError
	removeLast( 'abc', 1, { 'mode': '' } ); // $ExpectError
	removeLast( 'abc', 1, { 'mode': [] } ); // $ExpectError
	removeLast( 'abc', 1, { 'mode': {} } ); // $ExpectError
	removeLast( 'abc', 1, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	removeLast(); // $ExpectError
}
