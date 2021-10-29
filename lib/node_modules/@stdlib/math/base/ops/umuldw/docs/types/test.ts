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
	umuldw( 0xAAAAAAAA, 0x55555555 ); // $ExpectType ArrayLike<number>
	umuldw( [], 0xAAAAAAAA, 0x55555555 ); // $ExpectType ArrayLike<number>
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

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	umuldw( true, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	umuldw( false, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	umuldw( 'abc', 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	umuldw( {}, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	umuldw( ( x: number ): number => x, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
	umuldw( 123, 0xAAAAAAAA, 0x55555555 ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	umuldw(); // $ExpectError
	umuldw( 1 ); // $ExpectError
}
