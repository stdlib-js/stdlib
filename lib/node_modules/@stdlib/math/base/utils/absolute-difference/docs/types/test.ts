/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import absoluteDifference = require( './index' );


// TESTS //

// The function returns a number...
{
	absoluteDifference( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	absoluteDifference( true, 3 ); // $ExpectError
	absoluteDifference( false, 2 ); // $ExpectError
	absoluteDifference( '5', 1 ); // $ExpectError
	absoluteDifference( [], 1 ); // $ExpectError
	absoluteDifference( {}, 2 ); // $ExpectError
	absoluteDifference( ( x: number ): number => x, 2 ); // $ExpectError

	absoluteDifference( 9, true ); // $ExpectError
	absoluteDifference( 9, false ); // $ExpectError
	absoluteDifference( 5, '5' ); // $ExpectError
	absoluteDifference( 8, [] ); // $ExpectError
	absoluteDifference( 9, {} ); // $ExpectError
	absoluteDifference( 8, ( x: number ): number => x ); // $ExpectError

	absoluteDifference( [], true ); // $ExpectError
	absoluteDifference( {}, false ); // $ExpectError
	absoluteDifference( false, '5' ); // $ExpectError
	absoluteDifference( {}, [] ); // $ExpectError
	absoluteDifference( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	absoluteDifference(); // $ExpectError
	absoluteDifference( 3 ); // $ExpectError
}
