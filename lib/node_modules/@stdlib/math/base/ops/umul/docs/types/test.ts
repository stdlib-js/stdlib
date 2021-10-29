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

import umul = require( './index' );


// TESTS //

// The function returns a number...
{
	umul( 10, 4 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	umul( true, 4 ); // $ExpectError
	umul( false, 4 ); // $ExpectError
	umul( '5', 4 ); // $ExpectError
	umul( [], 4 ); // $ExpectError
	umul( {}, 4 ); // $ExpectError
	umul( ( x: number ): number => x, 4 ); // $ExpectError

	umul( 10, true ); // $ExpectError
	umul( 10, false ); // $ExpectError
	umul( 10, '5' ); // $ExpectError
	umul( 10, [] ); // $ExpectError
	umul( 10, {} ); // $ExpectError
	umul( 10, ( x: number ): number => x ); // $ExpectError

	umul( [], true ); // $ExpectError
	umul( {}, false ); // $ExpectError
	umul( false, '5' ); // $ExpectError
	umul( {}, [] ); // $ExpectError
	umul( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	umul(); // $ExpectError
	umul( 10 ); // $ExpectError
}
