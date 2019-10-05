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

import truncsd = require( './index' );


// TESTS //

// The function returns a number...
{
	truncsd( 3.141592653589793, 4, 10 ); // $ExpectType number
	truncsd( 3.141592653589793, 4 ); // $ExpectType number
}

// The function does not compile if provided values other than numbers...
{
	truncsd( true, 3 ); // $ExpectError
	truncsd( false, 2 ); // $ExpectError
	truncsd( '5', 1 ); // $ExpectError
	truncsd( [], 1 ); // $ExpectError
	truncsd( {}, 2 ); // $ExpectError
	truncsd( ( x: number ): number => x, 2 ); // $ExpectError

	truncsd( 9, true ); // $ExpectError
	truncsd( 9, false ); // $ExpectError
	truncsd( 5, '5' ); // $ExpectError
	truncsd( 8, [] ); // $ExpectError
	truncsd( 9, {} ); // $ExpectError
	truncsd( 8, ( x: number ): number => x ); // $ExpectError

	truncsd( true, 3, 2 ); // $ExpectError
	truncsd( false, 2, 2 ); // $ExpectError
	truncsd( '5', 1, 2 ); // $ExpectError
	truncsd( [], 1, 2 ); // $ExpectError
	truncsd( {}, 2, 2 ); // $ExpectError
	truncsd( ( x: number ): number => x, 2, 2 ); // $ExpectError

	truncsd( 9, true, 2 ); // $ExpectError
	truncsd( 9, false, 2 ); // $ExpectError
	truncsd( 5, '5', 2 ); // $ExpectError
	truncsd( 8, [], 2 ); // $ExpectError
	truncsd( 9, {}, 2 ); // $ExpectError
	truncsd( 8, ( x: number ): number => x, 2 ); // $ExpectError

	truncsd( 3.12, 2, true ); // $ExpectError
	truncsd( 4.9, 2, false ); // $ExpectError
	truncsd( 2.1, 2, '5' ); // $ExpectError
	truncsd( 2.9323213, 2, [] ); // $ExpectError
	truncsd( 9.343, 2, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	truncsd(); // $ExpectError
	truncsd( 3 ); // $ExpectError
	truncsd( 2.131, 3, 10, 10 ); // $ExpectError
}
