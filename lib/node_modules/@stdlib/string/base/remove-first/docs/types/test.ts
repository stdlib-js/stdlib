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

import removeFirst = require( './index' );


// TESTS //

// The function returns a string...
{
	removeFirst( 'abc', 1 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a value other than a string...
{
	removeFirst( true, 1 ); // $ExpectError
	removeFirst( false, 1 ); // $ExpectError
	removeFirst( null, 1 ); // $ExpectError
	removeFirst( undefined, 1 ); // $ExpectError
	removeFirst( 5, 1 ); // $ExpectError
	removeFirst( [], 1 ); // $ExpectError
	removeFirst( {}, 1 ); // $ExpectError
	removeFirst( ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	removeFirst( 'abc', true ); // $ExpectError
	removeFirst( 'abc', false ); // $ExpectError
	removeFirst( 'abc', null ); // $ExpectError
	removeFirst( 'abc', 'abc' ); // $ExpectError
	removeFirst( 'abc', [] ); // $ExpectError
	removeFirst( 'abc', {} ); // $ExpectError
	removeFirst( 'abc', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	removeFirst(); // $ExpectError
	removeFirst( 'abc' ); // $ExpectError
	removeFirst( 'abc', 1, 2 ); // $ExpectError
}
