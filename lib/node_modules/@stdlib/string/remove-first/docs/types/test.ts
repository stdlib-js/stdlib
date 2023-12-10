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

import removeFirst = require( './index' );


// TESTS //

// The function returns a string...
{
	removeFirst( 'abc' ); // $ExpectType string
	removeFirst( 'abc', 1 ); // $ExpectType string
	removeFirst( 'abc', {} ); // $ExpectType string
	removeFirst( 'abc', 1, {} ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a string...
{
	removeFirst( true ); // $ExpectError
	removeFirst( false ); // $ExpectError
	removeFirst( null ); // $ExpectError
	removeFirst( undefined ); // $ExpectError
	removeFirst( 5 ); // $ExpectError
	removeFirst( [] ); // $ExpectError
	removeFirst( {} ); // $ExpectError
	removeFirst( ( x: number ): number => x ); // $ExpectError

	removeFirst( true, 1 ); // $ExpectError
	removeFirst( false, 1 ); // $ExpectError
	removeFirst( null, 1 ); // $ExpectError
	removeFirst( undefined, 1 ); // $ExpectError
	removeFirst( 5, 1 ); // $ExpectError
	removeFirst( [], 1 ); // $ExpectError
	removeFirst( {}, 1 ); // $ExpectError
	removeFirst( ( x: number ): number => x, 1 ); // $ExpectError

	removeFirst( true, {} ); // $ExpectError
	removeFirst( false, {} ); // $ExpectError
	removeFirst( null, {} ); // $ExpectError
	removeFirst( undefined, {} ); // $ExpectError
	removeFirst( 5, {} ); // $ExpectError
	removeFirst( [], {} ); // $ExpectError
	removeFirst( {}, {} ); // $ExpectError
	removeFirst( ( x: number ): number => x, {} ); // $ExpectError

	removeFirst( true, 1, {} ); // $ExpectError
	removeFirst( false, 1, {} ); // $ExpectError
	removeFirst( null, 1, {} ); // $ExpectError
	removeFirst( undefined, 1, {} ); // $ExpectError
	removeFirst( 5, 1, {} ); // $ExpectError
	removeFirst( [], 1, {} ); // $ExpectError
	removeFirst( {}, 1, {} ); // $ExpectError
	removeFirst( ( x: number ): number => x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid second argument...
{
	removeFirst( 'abc', true ); // $ExpectError
	removeFirst( 'abc', false ); // $ExpectError
	removeFirst( 'abc', null ); // $ExpectError
	removeFirst( 'abc', 'abc' ); // $ExpectError
	removeFirst( 'abc', [] ); // $ExpectError
	removeFirst( 'abc', ( x: number ): number => x ); // $ExpectError

	removeFirst( 'abc', true, {} ); // $ExpectError
	removeFirst( 'abc', false, {} ); // $ExpectError
	removeFirst( 'abc', null, {} ); // $ExpectError
	removeFirst( 'abc', '', {} ); // $ExpectError
	removeFirst( 'abc', [], {} ); // $ExpectError
	removeFirst( 'abc', {}, {} ); // $ExpectError
	removeFirst( 'abc', ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `mode` option...
{
	removeFirst( 'abc', { 'mode': true } ); // $ExpectError
	removeFirst( 'abc', { 'mode': false } ); // $ExpectError
	removeFirst( 'abc', { 'mode': null } ); // $ExpectError
	removeFirst( 'abc', { 'mode': '' } ); // $ExpectError
	removeFirst( 'abc', { 'mode': [] } ); // $ExpectError
	removeFirst( 'abc', { 'mode': ( x: number ): number => x } ); // $ExpectError

	removeFirst( 'abc', 1, { 'mode': true } ); // $ExpectError
	removeFirst( 'abc', 1, { 'mode': false } ); // $ExpectError
	removeFirst( 'abc', 1, { 'mode': null } ); // $ExpectError
	removeFirst( 'abc', 1, { 'mode': '' } ); // $ExpectError
	removeFirst( 'abc', 1, { 'mode': [] } ); // $ExpectError
	removeFirst( 'abc', 1, { 'mode': {} } ); // $ExpectError
	removeFirst( 'abc', 1, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	removeFirst(); // $ExpectError
}
