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

// tslint:disable:no-unused-expression

import Slice = require( './index' );


// TESTS //

// The function returns a slice...
{
	new Slice(); // $ExpectType Slice<null, null, null>

	new Slice( 10 ); // $ExpectType Slice<null, number, null>
	new Slice( null ); // $ExpectType Slice<null, null, null>
	new Slice( undefined ); // $ExpectType Slice<null, null, null>

	new Slice( 3, 10 ); // $ExpectType Slice<number, number, null>
	new Slice( null, 10 ); // $ExpectType Slice<null, number, null>
	new Slice( undefined, 10 ); // $ExpectType Slice<null, number, null>
	new Slice( 3, null ); // $ExpectType Slice<number, null, null>
	new Slice( 3, undefined ); // $ExpectType Slice<number, null, null>
	new Slice( null, null ); // $ExpectType Slice<null, null, null>
	new Slice( undefined, undefined ); // $ExpectType Slice<null, null, null>

	new Slice( 3, 10, 2 ); // $ExpectType Slice<number, number, number>
	new Slice( null, 10, 2 ); // $ExpectType Slice<null, number, number>
	new Slice( undefined, 10, 2 ); // $ExpectType Slice<null, number, number>
	new Slice( 3, null, 2 ); // $ExpectType Slice<number, null, number>
	new Slice( 3, undefined, 2 ); // $ExpectType Slice<number, null, number>
	new Slice( 3, 10, null ); // $ExpectType Slice<number, number, null>
	new Slice( 3, 10, undefined ); // $ExpectType Slice<number, number, null>
	new Slice( null, null, 2 ); // $ExpectType Slice<null, null, number>
	new Slice( undefined, undefined, 2 ); // $ExpectType Slice<null, null, number>
	new Slice( null, 10, null ); // $ExpectType Slice<null, number, null>
	new Slice( undefined, 10, undefined ); // $ExpectType Slice<null, number, null>
	new Slice( 3, null, null ); // $ExpectType Slice<number, null, null>
	new Slice( 3, undefined, undefined ); // $ExpectType Slice<number, null, null>
	new Slice( null, null, null ); // $ExpectType Slice<null, null, null>
	new Slice( undefined, undefined, undefined ); // $ExpectType Slice<null, null, null>

	Slice(); // $ExpectType Slice<null, null, null>

	Slice( 10 ); // $ExpectType Slice<null, number, null>
	Slice( null ); // $ExpectType Slice<null, null, null>
	Slice( undefined ); // $ExpectType Slice<null, null, null>

	Slice( 3, 10 ); // $ExpectType Slice<number, number, null>
	Slice( null, 10 ); // $ExpectType Slice<null, number, null>
	Slice( undefined, 10 ); // $ExpectType Slice<null, number, null>
	Slice( 3, null ); // $ExpectType Slice<number, null, null>
	Slice( 3, undefined ); // $ExpectType Slice<number, null, null>
	Slice( null, null ); // $ExpectType Slice<null, null, null>
	Slice( undefined, undefined ); // $ExpectType Slice<null, null, null>

	Slice( 3, 10, 2 ); // $ExpectType Slice<number, number, number>
	Slice( null, 10, 2 ); // $ExpectType Slice<null, number, number>
	Slice( undefined, 10, 2 ); // $ExpectType Slice<null, number, number>
	Slice( 3, null, 2 ); // $ExpectType Slice<number, null, number>
	Slice( 3, undefined, 2 ); // $ExpectType Slice<number, null, number>
	Slice( 3, 10, null ); // $ExpectType Slice<number, number, null>
	Slice( 3, 10, undefined ); // $ExpectType Slice<number, number, null>
	Slice( null, null, 2 ); // $ExpectType Slice<null, null, number>
	Slice( undefined, undefined, 2 ); // $ExpectType Slice<null, null, number>
	Slice( null, 10, null ); // $ExpectType Slice<null, number, null>
	Slice( undefined, 10, undefined ); // $ExpectType Slice<null, number, null>
	Slice( 3, null, null ); // $ExpectType Slice<number, null, null>
	Slice( 3, undefined, undefined ); // $ExpectType Slice<number, null, null>
	Slice( null, null, null ); // $ExpectType Slice<null, null, null>
	Slice( undefined, undefined, undefined ); // $ExpectType Slice<null, null, null>
}

// The compiler throws an error if the function is provided an invalid first argument...
{
	Slice( 'abc' ); // $ExpectError
	Slice( true ); // $ExpectError
	Slice( false ); // $ExpectError
	Slice( [] ); // $ExpectError
	Slice( {} ); // $ExpectError
	Slice( ( x: number ): number => x ); // $ExpectError

	Slice( 'abc', 2 ); // $ExpectError
	Slice( true, 2 ); // $ExpectError
	Slice( false, 2 ); // $ExpectError
	Slice( [], 2 ); // $ExpectError
	Slice( {}, 2 ); // $ExpectError
	Slice( ( x: number ): number => x, 2 ); // $ExpectError

	Slice( 'abc', null ); // $ExpectError
	Slice( true, null ); // $ExpectError
	Slice( false, null ); // $ExpectError
	Slice( [], null ); // $ExpectError
	Slice( {}, null ); // $ExpectError
	Slice( ( x: number ): number => x, null ); // $ExpectError

	Slice( 'abc', 2, 1 ); // $ExpectError
	Slice( true, 2, 1 ); // $ExpectError
	Slice( false, 2, 1 ); // $ExpectError
	Slice( [], 2, 1 ); // $ExpectError
	Slice( {}, 2, 1 ); // $ExpectError
	Slice( ( x: number ): number => x, 2, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid second argument...
{
	Slice( 0, 'abc' ); // $ExpectError
	Slice( 0, true ); // $ExpectError
	Slice( 0, false ); // $ExpectError
	Slice( 0, [] ); // $ExpectError
	Slice( 0, {} ); // $ExpectError
	Slice( 0, ( x: number ): number => x ); // $ExpectError

	Slice( 0, 'abc', 2 ); // $ExpectError
	Slice( 0, true, 2 ); // $ExpectError
	Slice( 0, false, 2 ); // $ExpectError
	Slice( 0, [], 2 ); // $ExpectError
	Slice( 0, {}, 2 ); // $ExpectError
	Slice( 0, ( x: number ): number => x, 2 ); // $ExpectError

	Slice( 0, 'abc', null ); // $ExpectError
	Slice( 0, true, null ); // $ExpectError
	Slice( 0, false, null ); // $ExpectError
	Slice( 0, [], null ); // $ExpectError
	Slice( 0, {}, null ); // $ExpectError
	Slice( 0, ( x: number ): number => x, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid first argument...
{
	Slice( 0, 10, 'abc' ); // $ExpectError
	Slice( 0, 10, true ); // $ExpectError
	Slice( 0, 10, false ); // $ExpectError
	Slice( 0, 10, [] ); // $ExpectError
	Slice( 0, 10, {} ); // $ExpectError
	Slice( 0, 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	Slice( 3, 10, 2, 1 ); // $ExpectError
}
