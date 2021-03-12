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

import linspace = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	linspace( 0, 11, 20 ); // $ExpectType number[]
	linspace( 0, 10 ); // $ExpectType number[]
}

// The function does not compile if provided values other than two numbers for the first two parameters...
{
	linspace( true, 10 ); // $ExpectError
	linspace( false, 10 ); // $ExpectError
	linspace( '5', 10 ); // $ExpectError
	linspace( [], 10 ); // $ExpectError
	linspace( {}, 10 ); // $ExpectError
	linspace( ( x: number ): number => x, 10 ); // $ExpectError

	linspace( 9, true ); // $ExpectError
	linspace( 9, false ); // $ExpectError
	linspace( 5, '5' ); // $ExpectError
	linspace( 8, [] ); // $ExpectError
	linspace( 9, {} ); // $ExpectError
	linspace( 8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a number for the third parameter...
{
	linspace( 3, 20, true ); // $ExpectError
	linspace( 4, 20, false ); // $ExpectError
	linspace( 2, 20, '5' ); // $ExpectError
	linspace( 2, 20, [] ); // $ExpectError
	linspace( 9, 20, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	linspace(); // $ExpectError
	linspace( 3 ); // $ExpectError
}
