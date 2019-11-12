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

import csignum = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	csignum( 5, 3 ); // $ExpectType ArrayLike<number>
	csignum( [], 5, 3 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a real component which is not a number...
{
	csignum( true, 3 ); // $ExpectError
	csignum( false, 3 ); // $ExpectError
	csignum( null, 3 ); // $ExpectError
	csignum( undefined, 3 ); // $ExpectError
	csignum( '5', 3 ); // $ExpectError
	csignum( [], 3 ); // $ExpectError
	csignum( {}, 3 ); // $ExpectError
	csignum( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided an imaginary component which is not a number...
{
	csignum( 5, true ); // $ExpectError
	csignum( 5, false ); // $ExpectError
	csignum( 5, null ); // $ExpectError
	csignum( 5, undefined ); // $ExpectError
	csignum( 5, '5' ); // $ExpectError
	csignum( 5, [] ); // $ExpectError
	csignum( 5, {} ); // $ExpectError
	csignum( 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	csignum( true, 5, 3 ); // $ExpectError
	csignum( false, 5, 3 ); // $ExpectError
	csignum( 'abc', 5, 3 ); // $ExpectError
	csignum( {}, 5, 3 ); // $ExpectError
	csignum( ( x: number ): number => x, 5, 3 ); // $ExpectError
	csignum( 123, 5, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	csignum(); // $ExpectError
	csignum( 2 ); // $ExpectError
}
