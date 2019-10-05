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

import lcm = require( './index' );


// TESTS //

// The function returns a number...
{
	lcm( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	lcm( true, 3 ); // $ExpectError
	lcm( false, 2 ); // $ExpectError
	lcm( '5', 1 ); // $ExpectError
	lcm( [], 1 ); // $ExpectError
	lcm( {}, 2 ); // $ExpectError
	lcm( ( x: number ): number => x, 2 ); // $ExpectError

	lcm( 9, true ); // $ExpectError
	lcm( 9, false ); // $ExpectError
	lcm( 5, '5' ); // $ExpectError
	lcm( 8, [] ); // $ExpectError
	lcm( 9, {} ); // $ExpectError
	lcm( 8, ( x: number ): number => x ); // $ExpectError

	lcm( [], true ); // $ExpectError
	lcm( {}, false ); // $ExpectError
	lcm( false, '5' ); // $ExpectError
	lcm( {}, [] ); // $ExpectError
	lcm( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	lcm(); // $ExpectError
	lcm( 3 ); // $ExpectError
}
