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

import first = require( './index' );


// TESTS //

// The function returns a string...
{
	first( 'abc' ); // $ExpectType string
	first( 'abc', 1 ); // $ExpectType string
	first( 'abc', {} ); // $ExpectType string
	first( 'abc', 1, {} ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	first( true ); // $ExpectError
	first( false ); // $ExpectError
	first( null ); // $ExpectError
	first( undefined ); // $ExpectError
	first( 5 ); // $ExpectError
	first( [] ); // $ExpectError
	first( {} ); // $ExpectError
	first( ( x: number ): number => x ); // $ExpectError

	first( true, 1 ); // $ExpectError
	first( false, 1 ); // $ExpectError
	first( null, 1 ); // $ExpectError
	first( undefined, 1 ); // $ExpectError
	first( 5, 1 ); // $ExpectError
	first( [], 1 ); // $ExpectError
	first( {}, 1 ); // $ExpectError
	first( ( x: number ): number => x, 1 ); // $ExpectError

	first( true, {} ); // $ExpectError
	first( false, {} ); // $ExpectError
	first( null, {} ); // $ExpectError
	first( undefined, {} ); // $ExpectError
	first( 5, {} ); // $ExpectError
	first( [], {} ); // $ExpectError
	first( {}, {} ); // $ExpectError
	first( ( x: number ): number => x, {} ); // $ExpectError

	first( true, 1, {} ); // $ExpectError
	first( false, 1, {} ); // $ExpectError
	first( null, 1, {} ); // $ExpectError
	first( undefined, 1, {} ); // $ExpectError
	first( 5, 1, {} ); // $ExpectError
	first( [], 1, {} ); // $ExpectError
	first( {}, 1, {} ); // $ExpectError
	first( ( x: number ): number => x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid second argument...
{
	first( 'abc', true ); // $ExpectError
	first( 'abc', false ); // $ExpectError
	first( 'abc', null ); // $ExpectError
	first( 'abc', '' ); // $ExpectError
	first( 'abc', [] ); // $ExpectError
	first( 'abc', ( x: number ): number => x ); // $ExpectError

	first( 'abc', true, {} ); // $ExpectError
	first( 'abc', false, {} ); // $ExpectError
	first( 'abc', null, {} ); // $ExpectError
	first( 'abc', '', {} ); // $ExpectError
	first( 'abc', [], {} ); // $ExpectError
	first( 'abc', {}, {} ); // $ExpectError
	first( 'abc', ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `mode` option...
{
	first( 'abc', { 'mode': true } ); // $ExpectError
	first( 'abc', { 'mode': false } ); // $ExpectError
	first( 'abc', { 'mode': null } ); // $ExpectError
	first( 'abc', { 'mode': '' } ); // $ExpectError
	first( 'abc', { 'mode': [] } ); // $ExpectError
	first( 'abc', { 'mode': ( x: number ): number => x } ); // $ExpectError

	first( 'abc', 1, { 'mode': true } ); // $ExpectError
	first( 'abc', 1, { 'mode': false } ); // $ExpectError
	first( 'abc', 1, { 'mode': null } ); // $ExpectError
	first( 'abc', 1, { 'mode': '' } ); // $ExpectError
	first( 'abc', 1, { 'mode': [] } ); // $ExpectError
	first( 'abc', 1, { 'mode': {} } ); // $ExpectError
	first( 'abc', 1, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	first(); // $ExpectError
	first( 'abc', 1, {}, {} ); // $ExpectError
}
