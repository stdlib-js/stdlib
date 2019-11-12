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

import cceil = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	cceil( 5, 3 ); // $ExpectType ArrayLike<number>
	cceil( [], 5, 3 ); // $ExpectType ArrayLike<number>
}

// The compiler throws an error if the function is provided a real component which is not a number...
{
	cceil( true, 3 ); // $ExpectError
	cceil( false, 3 ); // $ExpectError
	cceil( null, 3 ); // $ExpectError
	cceil( undefined, 3 ); // $ExpectError
	cceil( '5', 3 ); // $ExpectError
	cceil( [], 3 ); // $ExpectError
	cceil( {}, 3 ); // $ExpectError
	cceil( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided an imaginary component which is not a number...
{
	cceil( 5, true ); // $ExpectError
	cceil( 5, false ); // $ExpectError
	cceil( 5, null ); // $ExpectError
	cceil( 5, undefined ); // $ExpectError
	cceil( 5, '5' ); // $ExpectError
	cceil( 5, [] ); // $ExpectError
	cceil( 5, {} ); // $ExpectError
	cceil( 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an output array which is not array-like...
{
	cceil( true, 5, 3 ); // $ExpectError
	cceil( false, 5, 3 ); // $ExpectError
	cceil( 'abc', 5, 3 ); // $ExpectError
	cceil( {}, 5, 3 ); // $ExpectError
	cceil( ( x: number ): number => x, 5, 3 ); // $ExpectError
	cceil( 123, 5, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cceil(); // $ExpectError
	cceil( 2 ); // $ExpectError
}
