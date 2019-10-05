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

import floorn = require( './index' );


// TESTS //

// The function returns a number...
{
	floorn( 3.141592653589793, -4 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	floorn( true, 3 ); // $ExpectError
	floorn( false, 2 ); // $ExpectError
	floorn( '5', 1 ); // $ExpectError
	floorn( [], 1 ); // $ExpectError
	floorn( {}, 2 ); // $ExpectError
	floorn( ( x: number ): number => x, 2 ); // $ExpectError

	floorn( 9, true ); // $ExpectError
	floorn( 9, false ); // $ExpectError
	floorn( 5, '5' ); // $ExpectError
	floorn( 8, [] ); // $ExpectError
	floorn( 9, {} ); // $ExpectError
	floorn( 8, ( x: number ): number => x ); // $ExpectError

	floorn( [], true ); // $ExpectError
	floorn( {}, false ); // $ExpectError
	floorn( false, '5' ); // $ExpectError
	floorn( {}, [] ); // $ExpectError
	floorn( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	floorn(); // $ExpectError
	floorn( 3 ); // $ExpectError
}
