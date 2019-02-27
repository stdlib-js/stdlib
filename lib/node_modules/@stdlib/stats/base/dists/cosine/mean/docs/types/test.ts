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

import mean = require( './index' );


// TESTS //

// The function returns a number...
{
	mean( 0, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	mean( true, 3 ); // $ExpectError
	mean( false, 2 ); // $ExpectError
	mean( '5', 1 ); // $ExpectError
	mean( [], 1 ); // $ExpectError
	mean( {}, 2 ); // $ExpectError
	mean( ( x: number ): number => x, 2 ); // $ExpectError

	mean( 9, true ); // $ExpectError
	mean( 9, false ); // $ExpectError
	mean( 5, '5' ); // $ExpectError
	mean( 8, [] ); // $ExpectError
	mean( 9, {} ); // $ExpectError
	mean( 8, ( x: number ): number => x ); // $ExpectError

	mean( [], true ); // $ExpectError
	mean( {}, false ); // $ExpectError
	mean( false, '5' ); // $ExpectError
	mean( {}, [] ); // $ExpectError
	mean( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	mean(); // $ExpectError
	mean( 3 ); // $ExpectError
}
