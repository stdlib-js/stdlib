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

import relativeDifference = require( './index' );


// TESTS //

// The function returns a number...
{
	const scale = ( x: number ): number => x;
	relativeDifference( 8.0, 2.0 ); // $ExpectType number
	relativeDifference( 8.0, 2.0, 'mean' ); // $ExpectType number
	relativeDifference( 8.0, 2.0, scale ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	relativeDifference( true, 3 ); // $ExpectError
	relativeDifference( false, 2 ); // $ExpectError
	relativeDifference( '5', 1 ); // $ExpectError
	relativeDifference( [], 1 ); // $ExpectError
	relativeDifference( {}, 2 ); // $ExpectError
	relativeDifference( ( x: number ): number => x, 2 ); // $ExpectError

	relativeDifference( 9, true ); // $ExpectError
	relativeDifference( 9, false ); // $ExpectError
	relativeDifference( 5, '5' ); // $ExpectError
	relativeDifference( 8, [] ); // $ExpectError
	relativeDifference( 9, {} ); // $ExpectError
	relativeDifference( 8, ( x: number ): number => x ); // $ExpectError

	relativeDifference( [], true ); // $ExpectError
	relativeDifference( {}, false ); // $ExpectError
	relativeDifference( false, '5' ); // $ExpectError
	relativeDifference( {}, [] ); // $ExpectError
	relativeDifference( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a recognized scale function name or custom scale function...
{
	relativeDifference( 2.0, 5.0, 'abc' ); // $ExpectError
	relativeDifference( 2.0, 5.0, 123 ); // $ExpectError
	relativeDifference( 2.0, 5.0, true ); // $ExpectError
	relativeDifference( 2.0, 5.0, false ); // $ExpectError
	relativeDifference( 2.0, 5.0, [] ); // $ExpectError
	relativeDifference( 2.0, 5.0, {} ); // $ExpectError
	relativeDifference( 2.0, 5.0, ( wrong: string ): string => wrong ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	relativeDifference(); // $ExpectError
	relativeDifference( 3 ); // $ExpectError
}
