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

import imul = require( './index' );


// TESTS //

// The function returns a number...
{
	imul( -10|0, 4|0 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	imul( true, 3 ); // $ExpectError
	imul( false, 2 ); // $ExpectError
	imul( '5', 1 ); // $ExpectError
	imul( [], 1 ); // $ExpectError
	imul( {}, 2 ); // $ExpectError
	imul( ( x: number ): number => x, 2 ); // $ExpectError

	imul( 9, true ); // $ExpectError
	imul( 9, false ); // $ExpectError
	imul( 5, '5' ); // $ExpectError
	imul( 8, [] ); // $ExpectError
	imul( 9, {} ); // $ExpectError
	imul( 8, ( x: number ): number => x ); // $ExpectError

	imul( [], true ); // $ExpectError
	imul( {}, false ); // $ExpectError
	imul( false, '5' ); // $ExpectError
	imul( {}, [] ); // $ExpectError
	imul( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	imul(); // $ExpectError
	imul( 3 ); // $ExpectError
}
