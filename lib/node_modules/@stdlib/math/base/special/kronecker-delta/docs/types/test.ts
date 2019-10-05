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

import kroneckerDelta = require( './index' );


// TESTS //

// The function returns a number...
{
	kroneckerDelta( 3.14, 3.14 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	kroneckerDelta( true, 3 ); // $ExpectError
	kroneckerDelta( false, 2 ); // $ExpectError
	kroneckerDelta( '5', 1 ); // $ExpectError
	kroneckerDelta( [], 1 ); // $ExpectError
	kroneckerDelta( {}, 2 ); // $ExpectError
	kroneckerDelta( ( x: number ): number => x, 2 ); // $ExpectError

	kroneckerDelta( 9, true ); // $ExpectError
	kroneckerDelta( 9, false ); // $ExpectError
	kroneckerDelta( 5, '5' ); // $ExpectError
	kroneckerDelta( 8, [] ); // $ExpectError
	kroneckerDelta( 9, {} ); // $ExpectError
	kroneckerDelta( 8, ( x: number ): number => x ); // $ExpectError

	kroneckerDelta( [], true ); // $ExpectError
	kroneckerDelta( {}, false ); // $ExpectError
	kroneckerDelta( false, '5' ); // $ExpectError
	kroneckerDelta( {}, [] ); // $ExpectError
	kroneckerDelta( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	kroneckerDelta(); // $ExpectError
	kroneckerDelta( 3 ); // $ExpectError
}
