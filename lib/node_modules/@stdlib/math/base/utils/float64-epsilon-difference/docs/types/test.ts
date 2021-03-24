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

import epsilonDifference = require( './index' );


// TESTS //

// The function returns a number...
{
	const scale = ( x: number ): number => x;
	epsilonDifference( 8.0, 2.0 ); // $ExpectType number
	epsilonDifference( 8.0, 2.0, 'mean' ); // $ExpectType number
	epsilonDifference( 8.0, 2.0, scale ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	epsilonDifference( true, 3 ); // $ExpectError
	epsilonDifference( false, 2 ); // $ExpectError
	epsilonDifference( '5', 1 ); // $ExpectError
	epsilonDifference( [], 1 ); // $ExpectError
	epsilonDifference( {}, 2 ); // $ExpectError
	epsilonDifference( ( x: number ): number => x, 2 ); // $ExpectError

	epsilonDifference( 9, true ); // $ExpectError
	epsilonDifference( 9, false ); // $ExpectError
	epsilonDifference( 5, '5' ); // $ExpectError
	epsilonDifference( 8, [] ); // $ExpectError
	epsilonDifference( 9, {} ); // $ExpectError
	epsilonDifference( 8, ( x: number ): number => x ); // $ExpectError

	epsilonDifference( [], true ); // $ExpectError
	epsilonDifference( {}, false ); // $ExpectError
	epsilonDifference( false, '5' ); // $ExpectError
	epsilonDifference( {}, [] ); // $ExpectError
	epsilonDifference( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a recognized scale function name or custom scale function...
{
	epsilonDifference( 2.0, 5.0, 'abc' ); // $ExpectError
	epsilonDifference( 2.0, 5.0, 123 ); // $ExpectError
	epsilonDifference( 2.0, 5.0, true ); // $ExpectError
	epsilonDifference( 2.0, 5.0, false ); // $ExpectError
	epsilonDifference( 2.0, 5.0, [] ); // $ExpectError
	epsilonDifference( 2.0, 5.0, {} ); // $ExpectError
	epsilonDifference( 2.0, 5.0, ( wrong: string ): string => wrong ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	epsilonDifference(); // $ExpectError
	epsilonDifference( 3 ); // $ExpectError
}
