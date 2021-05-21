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

import max = require( './index' );


// TESTS //

// The function returns a number...
{
	max( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	max( true, 3 ); // $ExpectError
	max( false, 2 ); // $ExpectError
	max( '5', 1 ); // $ExpectError
	max( [], 1 ); // $ExpectError
	max( {}, 2 ); // $ExpectError
	max( ( x: number ): number => x, 2 ); // $ExpectError

	max( 9, true ); // $ExpectError
	max( 9, false ); // $ExpectError
	max( 5, '5' ); // $ExpectError
	max( 8, [] ); // $ExpectError
	max( 9, {} ); // $ExpectError
	max( 8, ( x: number ): number => x ); // $ExpectError

	max( [], true ); // $ExpectError
	max( {}, false ); // $ExpectError
	max( false, '5' ); // $ExpectError
	max( {}, [] ); // $ExpectError
	max( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	max(); // $ExpectError
	max( 3 ); // $ExpectError
}
