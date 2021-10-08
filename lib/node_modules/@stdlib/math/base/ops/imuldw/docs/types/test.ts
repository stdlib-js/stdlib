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
	imuldw( 0xAAAAAAAA, 0x55555555 ); // $ExpectType ArrayLike<number>
	imuldw( [], 0xAAAAAAAA, 0x55555555 ); // $ExpectType ArrayLike<number>
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

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	imuldw( true, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	imuldw( false, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	imuldw( 'abc', 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	imuldw( {}, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	imuldw( ( x: number ): number => x, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	imuldw( 123, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	imuldw(); // $ExpectError
	imuldw( 1 ); // $ExpectError
}
