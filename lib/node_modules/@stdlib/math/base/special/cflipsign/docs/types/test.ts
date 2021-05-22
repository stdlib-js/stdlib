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

import cflipsign = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	cflipsign( 5, 3, 55 ); // $ExpectType ArrayLike<number>
	cflipsign( [], 5, 3, 55 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a real component which is not a number...
{
	cflipsign( true, 3, 55 ); // $ExpectError
	cflipsign( false, 3, 55 ); // $ExpectError
	cflipsign( null, 3, 55 ); // $ExpectError
	cflipsign( undefined, 3, 55 ); // $ExpectError
	cflipsign( '5', 3, 55 ); // $ExpectError
	cflipsign( [], 3, 55 ); // $ExpectError
	cflipsign( {}, 3, 55 ); // $ExpectError
	cflipsign( ( x: number ): number => x, 3, 55 ); // $ExpectError
}

// The compiler throws an error if the function is provided an imaginary component which is not a number...
{
	cflipsign( 5, true, 55 ); // $ExpectError
	cflipsign( 5, false, 55 ); // $ExpectError
	cflipsign( 5, null, 55 ); // $ExpectError
	cflipsign( 5, undefined, 55 ); // $ExpectError
	cflipsign( 5, '5', 55 ); // $ExpectError
	cflipsign( 5, [], 55 ); // $ExpectError
	cflipsign( 5, {}, 55 ); // $ExpectError
	cflipsign( 5, ( x: number ): number => x, 55 ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a number...
{
	cflipsign( 5, 3, true ); // $ExpectError
	cflipsign( 5, 3, false ); // $ExpectError
	cflipsign( 5, 3, null ); // $ExpectError
	cflipsign( 5, 3, undefined ); // $ExpectError
	cflipsign( 5, 3, '5' ); // $ExpectError
	cflipsign( 5, 3, [] ); // $ExpectError
	cflipsign( 5, 3, {} ); // $ExpectError
	cflipsign( 5, 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	cflipsign( true, 5, 3, 55 ); // $ExpectError
	cflipsign( false, 5, 3, 55 ); // $ExpectError
	cflipsign( 'abc', 5, 3, 55 ); // $ExpectError
	cflipsign( {}, 5, 3, 55 ); // $ExpectError
	cflipsign( ( x: number ): number => x, 5, 3, 55 ); // $ExpectError
	cflipsign( 123, 5, 3, 55 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cflipsign(); // $ExpectError
	cflipsign( 2 ); // $ExpectError
	cflipsign( 5, 3 ); // $ExpectError
}
