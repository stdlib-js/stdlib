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

import logspace = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	logspace( 0, 11, 20 ); // $ExpectType number[]
	logspace( 0, 10 ); // $ExpectType number[]
}

// The function does not compile if provided values other than two numbers for the first two parameters...
{
	logspace( true, 10 ); // $ExpectError
	logspace( false, 10 ); // $ExpectError
	logspace( '5', 10 ); // $ExpectError
	logspace( [], 10 ); // $ExpectError
	logspace( {}, 10 ); // $ExpectError
	logspace( ( x: number ): number => x, 10 ); // $ExpectError

	logspace( 9, true ); // $ExpectError
	logspace( 9, false ); // $ExpectError
	logspace( 5, '5' ); // $ExpectError
	logspace( 8, [] ); // $ExpectError
	logspace( 9, {} ); // $ExpectError
	logspace( 8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a number for the third parameter...
{
	logspace( 3, 20, true ); // $ExpectError
	logspace( 4, 20, false ); // $ExpectError
	logspace( 2, 20, '5' ); // $ExpectError
	logspace( 2, 20, [] ); // $ExpectError
	logspace( 9, 20, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	logspace(); // $ExpectError
	logspace( 3 ); // $ExpectError
}
