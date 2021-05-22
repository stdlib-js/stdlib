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

import cmul = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	cmul( 5, 3, -2, 1 ); // $ExpectType ArrayLike<number>
	cmul( [], 5, 3, -2, 1 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a first real component which is not a number...
{
	cmul( true, 3, -2, 1 ); // $ExpectError
	cmul( false, 3, -2, 1 ); // $ExpectError
	cmul( null, 3, -2, 1 ); // $ExpectError
	cmul( undefined, 3, -2, 1 ); // $ExpectError
	cmul( '5', 3, -2, 1 ); // $ExpectError
	cmul( [], 3, -2, 1 ); // $ExpectError
	cmul( {}, 3, -2, 1 ); // $ExpectError
	cmul( ( x: number ): number => x, 3, -2, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a first imaginary component which is not a number...
{
	cmul( 5, true, -2, 1 ); // $ExpectError
	cmul( 5, false, -2, 1 ); // $ExpectError
	cmul( 5, null, -2, 1 ); // $ExpectError
	cmul( 5, undefined, -2, 1 ); // $ExpectError
	cmul( 5, '5', -2, 1 ); // $ExpectError
	cmul( 5, [], -2, 1 ); // $ExpectError
	cmul( 5, {}, -2, 1 ); // $ExpectError
	cmul( 5, ( x: number ): number => x, -2, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second real component which is not a number...
{
	cmul( 5, 3, true, 1 ); // $ExpectError
	cmul( 5, 3, false, 1 ); // $ExpectError
	cmul( 5, 3, null, 1 ); // $ExpectError
	cmul( 5, 3, undefined, 1 ); // $ExpectError
	cmul( 5, 3, '5', 1 ); // $ExpectError
	cmul( 5, 3, [], 1 ); // $ExpectError
	cmul( 5, 3, {}, 1 ); // $ExpectError
	cmul( 5, 3, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second imaginary component which is not a number...
{
	cmul( 5, 3, -2, true ); // $ExpectError
	cmul( 5, 3, -2, false ); // $ExpectError
	cmul( 5, 3, -2, null ); // $ExpectError
	cmul( 5, 3, -2, undefined ); // $ExpectError
	cmul( 5, 3, -2, '5' ); // $ExpectError
	cmul( 5, 3, -2, [] ); // $ExpectError
	cmul( 5, 3, -2, {} ); // $ExpectError
	cmul( 5, 3, -2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	cmul( true, 5, 3, -2, 1 ); // $ExpectError
	cmul( false, 5, 3, -2, 1 ); // $ExpectError
	cmul( 'abc', 5, 3, -2, 1 ); // $ExpectError
	cmul( {}, 5, 3, -2, 1 ); // $ExpectError
	cmul( ( x: number ): number => x, 5, 3, -2, 1 ); // $ExpectError
	cmul( 123, 5, 3, -2, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cmul(); // $ExpectError
	cmul( 2 ); // $ExpectError
	cmul( 2, 3 ); // $ExpectError
	cmul( 2, 3, 4 ); // $ExpectError
}
