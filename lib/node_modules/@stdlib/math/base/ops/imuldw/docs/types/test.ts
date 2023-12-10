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

import imuldw = require( './index' );


// TESTS //

// The function returns an array-like object of numbers...
{
	imuldw( 0xAAAAAAAA, 0x55555555 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided non-numbers for the last two arguments...
{
	imuldw( 0xAAAAAAAA, true ); // $ExpectError
	imuldw( 0xAAAAAAAA, false ); // $ExpectError
	imuldw( 0xAAAAAAAA, [] ); // $ExpectError
	imuldw( 0xAAAAAAAA, {} ); // $ExpectError
	imuldw( 0xAAAAAAAA, 'abc' ); // $ExpectError
	imuldw( 0xAAAAAAAA, ( x: number ): number => x ); // $ExpectError

	imuldw( true, 0x55555555 ); // $ExpectError
	imuldw( false, 0x55555555 ); // $ExpectError
	imuldw( [], 0x55555555 ); // $ExpectError
	imuldw( {}, 0x55555555 ); // $ExpectError
	imuldw( 'abc', 0x55555555 ); // $ExpectError
	imuldw( ( x: number ): number => x, 0x55555555 ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	imuldw(); // $ExpectError
	imuldw( 1 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0, 0 ];

	imuldw.assign( 1, 5, out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0, 0 ];

	imuldw.assign( true, 4, out, 1, 0 ); // $ExpectError
	imuldw.assign( false, 4, out, 1, 0 ); // $ExpectError
	imuldw.assign( '5', 4, out, 1, 0 ); // $ExpectError
	imuldw.assign( null, 4, out, 1, 0 ); // $ExpectError
	imuldw.assign( [], 4, out, 1, 0 ); // $ExpectError
	imuldw.assign( {}, 4, out, 1, 0 ); // $ExpectError
	imuldw.assign( ( x: number ): number => x, 4, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0, 0 ];

	imuldw.assign( 4, true, out, 1, 0 ); // $ExpectError
	imuldw.assign( 4, false, out, 1, 0 ); // $ExpectError
	imuldw.assign( 4, '5', out, 1, 0 ); // $ExpectError
	imuldw.assign( 4, null, out, 1, 0 ); // $ExpectError
	imuldw.assign( 4, [], out, 1, 0 ); // $ExpectError
	imuldw.assign( 4, {}, out, 1, 0 ); // $ExpectError
	imuldw.assign( 4, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	imuldw.assign( 4, 1.0, 1, 1, 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, true, 1, 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, false, 1, 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, null, 1, 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = [ 0, 0 ];

	imuldw.assign( 4, 1.0, out, '5', 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, out, true, 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, out, false, 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, out, null, 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, out, [], 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, out, {}, 0 ); // $ExpectError
	imuldw.assign( 4, 1.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = [ 0, 0 ];

	imuldw.assign( 4, 1.0, out, 1, '5' ); // $ExpectError
	imuldw.assign( 4, 1.0, out, 1, true ); // $ExpectError
	imuldw.assign( 4, 1.0, out, 1, false ); // $ExpectError
	imuldw.assign( 4, 1.0, out, 1, null ); // $ExpectError
	imuldw.assign( 4, 1.0, out, 1, [] ); // $ExpectError
	imuldw.assign( 4, 1.0, out, 1, {} ); // $ExpectError
	imuldw.assign( 4, 1.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0, 0 ];

	imuldw.assign(); // $ExpectError
	imuldw.assign( 1.0 ); // $ExpectError
	imuldw.assign( 1.0, out ); // $ExpectError
	imuldw.assign( 1.0, out, 1 ); // $ExpectError
	imuldw.assign( 1.0, out, 1, 0 ); // $ExpectError
	imuldw.assign( 1.0, out, 1, 0, 1, 1 ); // $ExpectError
}
