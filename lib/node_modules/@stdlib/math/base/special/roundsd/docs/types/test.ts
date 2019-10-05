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

import roundsd = require( './index' );


// TESTS //

// The function returns a number...
{
	roundsd( 3.141592653589793, 4, 10 ); // $ExpectType number
	roundsd( 3.141592653589793, 4 ); // $ExpectType number
}

// The function does not compile if provided values other than numbers...
{
	roundsd( true, 3 ); // $ExpectError
	roundsd( false, 2 ); // $ExpectError
	roundsd( '5', 1 ); // $ExpectError
	roundsd( [], 1 ); // $ExpectError
	roundsd( {}, 2 ); // $ExpectError
	roundsd( ( x: number ): number => x, 2 ); // $ExpectError

	roundsd( 9, true ); // $ExpectError
	roundsd( 9, false ); // $ExpectError
	roundsd( 5, '5' ); // $ExpectError
	roundsd( 8, [] ); // $ExpectError
	roundsd( 9, {} ); // $ExpectError
	roundsd( 8, ( x: number ): number => x ); // $ExpectError

	roundsd( true, 3, 2 ); // $ExpectError
	roundsd( false, 2, 2 ); // $ExpectError
	roundsd( '5', 1, 2 ); // $ExpectError
	roundsd( [], 1, 2 ); // $ExpectError
	roundsd( {}, 2, 2 ); // $ExpectError
	roundsd( ( x: number ): number => x, 2, 2 ); // $ExpectError

	roundsd( 9, true, 2 ); // $ExpectError
	roundsd( 9, false, 2 ); // $ExpectError
	roundsd( 5, '5', 2 ); // $ExpectError
	roundsd( 8, [], 2 ); // $ExpectError
	roundsd( 9, {}, 2 ); // $ExpectError
	roundsd( 8, ( x: number ): number => x, 2 ); // $ExpectError

	roundsd( 3.12, 2, true ); // $ExpectError
	roundsd( 4.9, 2, false ); // $ExpectError
	roundsd( 2.1, 2, '5' ); // $ExpectError
	roundsd( 2.9323213, 2, [] ); // $ExpectError
	roundsd( 9.343, 2, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	roundsd(); // $ExpectError
	roundsd( 3 ); // $ExpectError
	roundsd( 2.131, 3, 10, 10 ); // $ExpectError
}
