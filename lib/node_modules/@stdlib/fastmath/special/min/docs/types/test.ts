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

import min = require( './index' );


// TESTS //

// The function returns a number...
{
	min( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	min( true, 3 ); // $ExpectError
	min( false, 2 ); // $ExpectError
	min( '5', 1 ); // $ExpectError
	min( [], 1 ); // $ExpectError
	min( {}, 2 ); // $ExpectError
	min( ( x: number ): number => x, 2 ); // $ExpectError

	min( 9, true ); // $ExpectError
	min( 9, false ); // $ExpectError
	min( 5, '5' ); // $ExpectError
	min( 8, [] ); // $ExpectError
	min( 9, {} ); // $ExpectError
	min( 8, ( x: number ): number => x ); // $ExpectError

	min( [], true ); // $ExpectError
	min( {}, false ); // $ExpectError
	min( false, '5' ); // $ExpectError
	min( {}, [] ); // $ExpectError
	min( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	min(); // $ExpectError
	min( 3 ); // $ExpectError
}
