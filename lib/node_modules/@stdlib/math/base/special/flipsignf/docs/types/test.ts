/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import flipsignf = require( './index' );


// TESTS //

// The function returns a number...
{
	flipsignf( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	flipsignf( true, 3 ); // $ExpectError
	flipsignf( false, 2 ); // $ExpectError
	flipsignf( '5', 1 ); // $ExpectError
	flipsignf( [], 1 ); // $ExpectError
	flipsignf( {}, 2 ); // $ExpectError
	flipsignf( ( x: number ): number => x, 2 ); // $ExpectError

	flipsignf( 9, true ); // $ExpectError
	flipsignf( 9, false ); // $ExpectError
	flipsignf( 5, '5' ); // $ExpectError
	flipsignf( 8, [] ); // $ExpectError
	flipsignf( 9, {} ); // $ExpectError
	flipsignf( 8, ( x: number ): number => x ); // $ExpectError

	flipsignf( [], true ); // $ExpectError
	flipsignf( {}, false ); // $ExpectError
	flipsignf( false, '5' ); // $ExpectError
	flipsignf( {}, [] ); // $ExpectError
	flipsignf( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	flipsignf(); // $ExpectError
	flipsignf( 3 ); // $ExpectError
}
