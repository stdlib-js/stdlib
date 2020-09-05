/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import kroneckerDeltaf = require( './index' );


// TESTS //

// The function returns a number...
{
	kroneckerDeltaf( 3.14, 3.14 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	kroneckerDeltaf( true, 3 ); // $ExpectError
	kroneckerDeltaf( false, 2 ); // $ExpectError
	kroneckerDeltaf( '5', 1 ); // $ExpectError
	kroneckerDeltaf( [], 1 ); // $ExpectError
	kroneckerDeltaf( {}, 2 ); // $ExpectError
	kroneckerDeltaf( ( x: number ): number => x, 2 ); // $ExpectError

	kroneckerDeltaf( 9, true ); // $ExpectError
	kroneckerDeltaf( 9, false ); // $ExpectError
	kroneckerDeltaf( 5, '5' ); // $ExpectError
	kroneckerDeltaf( 8, [] ); // $ExpectError
	kroneckerDeltaf( 9, {} ); // $ExpectError
	kroneckerDeltaf( 8, ( x: number ): number => x ); // $ExpectError

	kroneckerDeltaf( [], true ); // $ExpectError
	kroneckerDeltaf( {}, false ); // $ExpectError
	kroneckerDeltaf( false, '5' ); // $ExpectError
	kroneckerDeltaf( {}, [] ); // $ExpectError
	kroneckerDeltaf( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	kroneckerDeltaf(); // $ExpectError
	kroneckerDeltaf( 3 ); // $ExpectError
}
