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

import binomcoeff = require( './index' );


// TESTS //

// The function returns a number...
{
	binomcoeff( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	binomcoeff( true, 3 ); // $ExpectError
	binomcoeff( false, 2 ); // $ExpectError
	binomcoeff( '5', 1 ); // $ExpectError
	binomcoeff( [], 1 ); // $ExpectError
	binomcoeff( {}, 2 ); // $ExpectError
	binomcoeff( ( x: number ): number => x, 2 ); // $ExpectError

	binomcoeff( 9, true ); // $ExpectError
	binomcoeff( 9, false ); // $ExpectError
	binomcoeff( 5, '5' ); // $ExpectError
	binomcoeff( 8, [] ); // $ExpectError
	binomcoeff( 9, {} ); // $ExpectError
	binomcoeff( 8, ( x: number ): number => x ); // $ExpectError

	binomcoeff( [], true ); // $ExpectError
	binomcoeff( {}, false ); // $ExpectError
	binomcoeff( false, '5' ); // $ExpectError
	binomcoeff( {}, [] ); // $ExpectError
	binomcoeff( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	binomcoeff(); // $ExpectError
	binomcoeff( 3 ); // $ExpectError
}
