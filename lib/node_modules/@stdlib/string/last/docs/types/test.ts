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

import last = require( './index' );


// TESTS //

// The function returns a string...
{
	last( 'abc' ); // $ExpectType string
	last( 'abc', 1 ); // $ExpectType string
	last( 'abc', {} ); // $ExpectType string
	last( 'abc', 1, {} ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	last( true ); // $ExpectError
	last( false ); // $ExpectError
	last( null ); // $ExpectError
	last( undefined ); // $ExpectError
	last( 5 ); // $ExpectError
	last( [] ); // $ExpectError
	last( {} ); // $ExpectError
	last( ( x: number ): number => x ); // $ExpectError

	last( true, 1 ); // $ExpectError
	last( false, 1 ); // $ExpectError
	last( null, 1 ); // $ExpectError
	last( undefined, 1 ); // $ExpectError
	last( 5, 1 ); // $ExpectError
	last( [], 1 ); // $ExpectError
	last( {}, 1 ); // $ExpectError
	last( ( x: number ): number => x, 1 ); // $ExpectError

	last( true, {} ); // $ExpectError
	last( false, {} ); // $ExpectError
	last( null, {} ); // $ExpectError
	last( undefined, {} ); // $ExpectError
	last( 5, {} ); // $ExpectError
	last( [], {} ); // $ExpectError
	last( {}, {} ); // $ExpectError
	last( ( x: number ): number => x, {} ); // $ExpectError

	last( true, 1, {} ); // $ExpectError
	last( false, 1, {} ); // $ExpectError
	last( null, 1, {} ); // $ExpectError
	last( undefined, 1, {} ); // $ExpectError
	last( 5, 1, {} ); // $ExpectError
	last( [], 1, {} ); // $ExpectError
	last( {}, 1, {} ); // $ExpectError
	last( ( x: number ): number => x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid second argument...
{
	last( 'abc', true ); // $ExpectError
	last( 'abc', false ); // $ExpectError
	last( 'abc', null ); // $ExpectError
	last( 'abc', '' ); // $ExpectError
	last( 'abc', [] ); // $ExpectError
	last( 'abc', ( x: number ): number => x ); // $ExpectError

	last( 'abc', true, {} ); // $ExpectError
	last( 'abc', false, {} ); // $ExpectError
	last( 'abc', null, {} ); // $ExpectError
	last( 'abc', '', {} ); // $ExpectError
	last( 'abc', [], {} ); // $ExpectError
	last( 'abc', {}, {} ); // $ExpectError
	last( 'abc', ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `mode` option...
{
	last( 'abc', { 'mode': true } ); // $ExpectError
	last( 'abc', { 'mode': false } ); // $ExpectError
	last( 'abc', { 'mode': null } ); // $ExpectError
	last( 'abc', { 'mode': '' } ); // $ExpectError
	last( 'abc', { 'mode': [] } ); // $ExpectError
	last( 'abc', { 'mode': ( x: number ): number => x } ); // $ExpectError

	last( 'abc', 1, { 'mode': true } ); // $ExpectError
	last( 'abc', 1, { 'mode': false } ); // $ExpectError
	last( 'abc', 1, { 'mode': null } ); // $ExpectError
	last( 'abc', 1, { 'mode': '' } ); // $ExpectError
	last( 'abc', 1, { 'mode': [] } ); // $ExpectError
	last( 'abc', 1, { 'mode': {} } ); // $ExpectError
	last( 'abc', 1, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	last(); // $ExpectError
	last( 'abc', 1, {}, {} ); // $ExpectError
}
