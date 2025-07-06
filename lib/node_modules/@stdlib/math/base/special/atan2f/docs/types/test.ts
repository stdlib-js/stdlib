/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import atan2f = require( './index' );


// TESTS //

// The function returns a number...
{
	atan2f( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	atan2f( true, 3 ); // $ExpectError
	atan2f( false, 2 ); // $ExpectError
	atan2f( '5', 1 ); // $ExpectError
	atan2f( [], 1 ); // $ExpectError
	atan2f( {}, 2 ); // $ExpectError
	atan2f( ( x: number ): number => x, 2 ); // $ExpectError

	atan2f( 9, true ); // $ExpectError
	atan2f( 9, false ); // $ExpectError
	atan2f( 5, '5' ); // $ExpectError
	atan2f( 8, [] ); // $ExpectError
	atan2f( 9, {} ); // $ExpectError
	atan2f( 8, ( x: number ): number => x ); // $ExpectError

	atan2f( [], true ); // $ExpectError
	atan2f( {}, false ); // $ExpectError
	atan2f( false, '5' ); // $ExpectError
	atan2f( {}, [] ); // $ExpectError
	atan2f( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	atan2f(); // $ExpectError
	atan2f( 3 ); // $ExpectError
}
