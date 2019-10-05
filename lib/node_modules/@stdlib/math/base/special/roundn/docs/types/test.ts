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

import roundn = require( './index' );


// TESTS //

// The function returns a number...
{
	roundn( 3.141592653589793, -4 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	roundn( true, 3 ); // $ExpectError
	roundn( false, 2 ); // $ExpectError
	roundn( '5', 1 ); // $ExpectError
	roundn( [], 1 ); // $ExpectError
	roundn( {}, 2 ); // $ExpectError
	roundn( ( x: number ): number => x, 2 ); // $ExpectError

	roundn( 9, true ); // $ExpectError
	roundn( 9, false ); // $ExpectError
	roundn( 5, '5' ); // $ExpectError
	roundn( 8, [] ); // $ExpectError
	roundn( 9, {} ); // $ExpectError
	roundn( 8, ( x: number ): number => x ); // $ExpectError

	roundn( [], true ); // $ExpectError
	roundn( {}, false ); // $ExpectError
	roundn( false, '5' ); // $ExpectError
	roundn( {}, [] ); // $ExpectError
	roundn( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	roundn(); // $ExpectError
	roundn( 3 ); // $ExpectError
}
