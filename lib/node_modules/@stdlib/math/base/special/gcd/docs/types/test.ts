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

import gcd = require( './index' );


// TESTS //

// The function returns a number...
{
	gcd( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	gcd( true, 3 ); // $ExpectError
	gcd( false, 2 ); // $ExpectError
	gcd( '5', 1 ); // $ExpectError
	gcd( [], 1 ); // $ExpectError
	gcd( {}, 2 ); // $ExpectError
	gcd( ( x: number ): number => x, 2 ); // $ExpectError

	gcd( 9, true ); // $ExpectError
	gcd( 9, false ); // $ExpectError
	gcd( 5, '5' ); // $ExpectError
	gcd( 8, [] ); // $ExpectError
	gcd( 9, {} ); // $ExpectError
	gcd( 8, ( x: number ): number => x ); // $ExpectError

	gcd( [], true ); // $ExpectError
	gcd( {}, false ); // $ExpectError
	gcd( false, '5' ); // $ExpectError
	gcd( {}, [] ); // $ExpectError
	gcd( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	gcd(); // $ExpectError
	gcd( 3 ); // $ExpectError
}
