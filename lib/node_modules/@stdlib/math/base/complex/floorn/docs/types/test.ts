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

import cfloorn = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	cfloorn( 5, 3, -2 ); // $ExpectType ArrayLike<number>
	cfloorn( [], 5, 3, -2 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a real component which is not a number...
{
	cfloorn( true, 3, -2 ); // $ExpectError
	cfloorn( false, 3, -2 ); // $ExpectError
	cfloorn( null, 3, -2 ); // $ExpectError
	cfloorn( undefined, 3, -2 ); // $ExpectError
	cfloorn( '5', 3, -2 ); // $ExpectError
	cfloorn( [], 3, -2 ); // $ExpectError
	cfloorn( {}, 3, -2 ); // $ExpectError
	cfloorn( ( x: number ): number => x, 3, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an imaginary component which is not a number...
{
	cfloorn( 5, true, -2 ); // $ExpectError
	cfloorn( 5, false, -2 ); // $ExpectError
	cfloorn( 5, null, -2 ); // $ExpectError
	cfloorn( 5, undefined, -2 ); // $ExpectError
	cfloorn( 5, '5', -2 ); // $ExpectError
	cfloorn( 5, [], -2 ); // $ExpectError
	cfloorn( 5, {}, -2 ); // $ExpectError
	cfloorn( 5, ( x: number ): number => x, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an integer power which is not a number...
{
	cfloorn( 5, 3, true ); // $ExpectError
	cfloorn( 5, 3, false ); // $ExpectError
	cfloorn( 5, 3, null ); // $ExpectError
	cfloorn( 5, 3, undefined ); // $ExpectError
	cfloorn( 5, 3, '5' ); // $ExpectError
	cfloorn( 5, 3, [] ); // $ExpectError
	cfloorn( 5, 3, {} ); // $ExpectError
	cfloorn( 5, 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	cfloorn( true, 5, 3, -2 ); // $ExpectError
	cfloorn( false, 5, 3, -2 ); // $ExpectError
	cfloorn( 'abc', 5, 3, -2 ); // $ExpectError
	cfloorn( {}, 5, 3, -2 ); // $ExpectError
	cfloorn( ( x: number ): number => x, 5, 3, -2 ); // $ExpectError
	cfloorn( 123, 5, 3, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cfloorn(); // $ExpectError
	cfloorn( 2 ); // $ExpectError
	cfloorn( 5, 3 ); // $ExpectError
}
