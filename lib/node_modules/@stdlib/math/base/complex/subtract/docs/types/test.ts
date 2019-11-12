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

import csub = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	csub( 5, 3, -2, 1 ); // $ExpectType ArrayLike<number>
	csub( [], 5, 3, -2, 1 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a first real component which is not a number...
{
	csub( true, 3, -2, 1 ); // $ExpectError
	csub( false, 3, -2, 1 ); // $ExpectError
	csub( null, 3, -2, 1 ); // $ExpectError
	csub( undefined, 3, -2, 1 ); // $ExpectError
	csub( '5', 3, -2, 1 ); // $ExpectError
	csub( [], 3, -2, 1 ); // $ExpectError
	csub( {}, 3, -2, 1 ); // $ExpectError
	csub( ( x: number ): number => x, 3, -2, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a first imaginary component which is not a number...
{
	csub( 5, true, -2, 1 ); // $ExpectError
	csub( 5, false, -2, 1 ); // $ExpectError
	csub( 5, null, -2, 1 ); // $ExpectError
	csub( 5, undefined, -2, 1 ); // $ExpectError
	csub( 5, '5', -2, 1 ); // $ExpectError
	csub( 5, [], -2, 1 ); // $ExpectError
	csub( 5, {}, -2, 1 ); // $ExpectError
	csub( 5, ( x: number ): number => x, -2, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second real component which is not a number...
{
	csub( 5, 3, true, 1 ); // $ExpectError
	csub( 5, 3, false, 1 ); // $ExpectError
	csub( 5, 3, null, 1 ); // $ExpectError
	csub( 5, 3, undefined, 1 ); // $ExpectError
	csub( 5, 3, '5', 1 ); // $ExpectError
	csub( 5, 3, [], 1 ); // $ExpectError
	csub( 5, 3, {}, 1 ); // $ExpectError
	csub( 5, 3, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second imaginary component which is not a number...
{
	csub( 5, 3, -2, true ); // $ExpectError
	csub( 5, 3, -2, false ); // $ExpectError
	csub( 5, 3, -2, null ); // $ExpectError
	csub( 5, 3, -2, undefined ); // $ExpectError
	csub( 5, 3, -2, '5' ); // $ExpectError
	csub( 5, 3, -2, [] ); // $ExpectError
	csub( 5, 3, -2, {} ); // $ExpectError
	csub( 5, 3, -2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	csub( true, 5, 3, -2, 1 ); // $ExpectError
	csub( false, 5, 3, -2, 1 ); // $ExpectError
	csub( 'abc', 5, 3, -2, 1 ); // $ExpectError
	csub( {}, 5, 3, -2, 1 ); // $ExpectError
	csub( ( x: number ): number => x, 5, 3, -2, 1 ); // $ExpectError
	csub( 123, 5, 3, -2, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	csub(); // $ExpectError
	csub( 2 ); // $ExpectError
	csub( 2, 3 ); // $ExpectError
	csub( 2, 3, 4 ); // $ExpectError
}
