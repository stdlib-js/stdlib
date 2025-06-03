/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import dlapy3 = require( './index' );


// TESTS //

// The function returns a number...
{
	dlapy3( 8, 2, 10 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	dlapy3( true, 3, 1 ); // $ExpectError
	dlapy3( false, 2, 1 ); // $ExpectError
	dlapy3( '5', 1, 1 ); // $ExpectError
	dlapy3( [], 1, 1 ); // $ExpectError
	dlapy3( {}, 2, 1 ); // $ExpectError
	dlapy3( ( x: number ): number => x, 2, 1 ); // $ExpectError

	dlapy3( 9, true, 1 ); // $ExpectError
	dlapy3( 9, false, 1 ); // $ExpectError
	dlapy3( 5, '5', 1 ); // $ExpectError
	dlapy3( 8, [], 1 ); // $ExpectError
	dlapy3( 9, {}, 1 ); // $ExpectError
	dlapy3( 8, ( x: number ): number => x, 1 ); // $ExpectError

	dlapy3( 9, 1, true ); // $ExpectError
	dlapy3( 9, 1, false ); // $ExpectError
	dlapy3( 5, 1, '5' ); // $ExpectError
	dlapy3( 8, 1, [] ); // $ExpectError
	dlapy3( 9, 1, {} ); // $ExpectError
	dlapy3( 8, 1, ( x: number ): number => x ); // $ExpectError

	dlapy3( [], true, void 0 ); // $ExpectError
	dlapy3( {}, false, [] ); // $ExpectError
	dlapy3( false, '5', {} ); // $ExpectError
	dlapy3( {}, [], 'beep' ); // $ExpectError
	dlapy3( '5', ( x: number ): number => x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	dlapy3(); // $ExpectError
	dlapy3( 3 ); // $ExpectError
	dlapy3( 3, 5 ); // $ExpectError
}
