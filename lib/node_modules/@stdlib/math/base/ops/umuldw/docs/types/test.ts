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

import umuldw = require( './index' );


// TESTS //

// The function returns an array-like object of numbers...
{
	umuldw( 0xAAAAAAAA, 0x55555555 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided non-numbers for the last two arguments...
{
	umuldw( 0xAAAAAAAA, true ); // $ExpectError
	umuldw( 0xAAAAAAAA, false ); // $ExpectError
	umuldw( 0xAAAAAAAA, [] ); // $ExpectError
	umuldw( 0xAAAAAAAA, {} ); // $ExpectError
	umuldw( 0xAAAAAAAA, 'abc' ); // $ExpectError
	umuldw( 0xAAAAAAAA, ( x: number ): number => x ); // $ExpectError

	umuldw( true, 0x55555555 ); // $ExpectError
	umuldw( false, 0x55555555 ); // $ExpectError
	umuldw( [], 0x55555555 ); // $ExpectError
	umuldw( {}, 0x55555555 ); // $ExpectError
	umuldw( 'abc', 0x55555555 ); // $ExpectError
	umuldw( ( x: number ): number => x, 0x55555555 ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	umuldw(); // $ExpectError
	umuldw( 1 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0, 0 ];

	umuldw.assign( 1, 5, out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0, 0 ];

	umuldw.assign( true, 4, out, 1, 0 ); // $ExpectError
	umuldw.assign( false, 4, out, 1, 0 ); // $ExpectError
	umuldw.assign( '5', 4, out, 1, 0 ); // $ExpectError
	umuldw.assign( null, 4, out, 1, 0 ); // $ExpectError
	umuldw.assign( [], 4, out, 1, 0 ); // $ExpectError
	umuldw.assign( {}, 4, out, 1, 0 ); // $ExpectError
	umuldw.assign( ( x: number ): number => x, 4, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0, 0 ];

	umuldw.assign( 4, true, out, 1, 0 ); // $ExpectError
	umuldw.assign( 4, false, out, 1, 0 ); // $ExpectError
	umuldw.assign( 4, '5', out, 1, 0 ); // $ExpectError
	umuldw.assign( 4, null, out, 1, 0 ); // $ExpectError
	umuldw.assign( 4, [], out, 1, 0 ); // $ExpectError
	umuldw.assign( 4, {}, out, 1, 0 ); // $ExpectError
	umuldw.assign( 4, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	umuldw.assign( 4, 1.0, 1, 1, 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, true, 1, 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, false, 1, 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, null, 1, 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = [ 0, 0 ];

	umuldw.assign( 4, 1.0, out, '5', 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, out, true, 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, out, false, 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, out, null, 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, out, [], 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, out, {}, 0 ); // $ExpectError
	umuldw.assign( 4, 1.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = [ 0, 0 ];

	umuldw.assign( 4, 1.0, out, 1, '5' ); // $ExpectError
	umuldw.assign( 4, 1.0, out, 1, true ); // $ExpectError
	umuldw.assign( 4, 1.0, out, 1, false ); // $ExpectError
	umuldw.assign( 4, 1.0, out, 1, null ); // $ExpectError
	umuldw.assign( 4, 1.0, out, 1, [] ); // $ExpectError
	umuldw.assign( 4, 1.0, out, 1, {} ); // $ExpectError
	umuldw.assign( 4, 1.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0, 0 ];

	umuldw.assign(); // $ExpectError
	umuldw.assign( 1.0 ); // $ExpectError
	umuldw.assign( 1.0, out ); // $ExpectError
	umuldw.assign( 1.0, out, 1 ); // $ExpectError
	umuldw.assign( 1.0, out, 1, 0 ); // $ExpectError
	umuldw.assign( 1.0, out, 1, 0, 1, 1 ); // $ExpectError
}
