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

import cround = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	cround( 5, 3 ); // $ExpectType ArrayLike<number>
	cround( [], 5, 3 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a real component which is not a number...
{
	cround( true, 3 ); // $ExpectError
	cround( false, 3 ); // $ExpectError
	cround( null, 3 ); // $ExpectError
	cround( undefined, 3 ); // $ExpectError
	cround( '5', 3 ); // $ExpectError
	cround( [], 3 ); // $ExpectError
	cround( {}, 3 ); // $ExpectError
	cround( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided an imaginary component which is not a number...
{
	cround( 5, true ); // $ExpectError
	cround( 5, false ); // $ExpectError
	cround( 5, null ); // $ExpectError
	cround( 5, undefined ); // $ExpectError
	cround( 5, '5' ); // $ExpectError
	cround( 5, [] ); // $ExpectError
	cround( 5, {} ); // $ExpectError
	cround( 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	cround( true, 5, 3 ); // $ExpectError
	cround( false, 5, 3 ); // $ExpectError
	cround( 'abc', 5, 3 ); // $ExpectError
	cround( {}, 5, 3 ); // $ExpectError
	cround( ( x: number ): number => x, 5, 3 ); // $ExpectError
	cround( 123, 5, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cround(); // $ExpectError
	cround( 2 ); // $ExpectError
}
