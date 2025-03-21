/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import lcmf = require( './index' );


// TESTS //

// The function returns a number...
{
	lcmf( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	lcmf( true, 3 ); // $ExpectError
	lcmf( false, 2 ); // $ExpectError
	lcmf( '5', 1 ); // $ExpectError
	lcmf( [], 1 ); // $ExpectError
	lcmf( {}, 2 ); // $ExpectError
	lcmf( ( x: number ): number => x, 2 ); // $ExpectError

	lcmf( 9, true ); // $ExpectError
	lcmf( 9, false ); // $ExpectError
	lcmf( 5, '5' ); // $ExpectError
	lcmf( 8, [] ); // $ExpectError
	lcmf( 9, {} ); // $ExpectError
	lcmf( 8, ( x: number ): number => x ); // $ExpectError

	lcmf( [], true ); // $ExpectError
	lcmf( {}, false ); // $ExpectError
	lcmf( false, '5' ); // $ExpectError
	lcmf( {}, [] ); // $ExpectError
	lcmf( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	lcmf(); // $ExpectError
	lcmf( 3 ); // $ExpectError
}
