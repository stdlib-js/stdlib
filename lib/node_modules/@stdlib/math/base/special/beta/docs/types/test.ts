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

import beta = require( './index' );


// TESTS //

// The function returns a number...
{
	beta( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	beta( true, 3 ); // $ExpectError
	beta( false, 2 ); // $ExpectError
	beta( '5', 1 ); // $ExpectError
	beta( [], 1 ); // $ExpectError
	beta( {}, 2 ); // $ExpectError
	beta( ( x: number ): number => x, 2 ); // $ExpectError

	beta( 9, true ); // $ExpectError
	beta( 9, false ); // $ExpectError
	beta( 5, '5' ); // $ExpectError
	beta( 8, [] ); // $ExpectError
	beta( 9, {} ); // $ExpectError
	beta( 8, ( x: number ): number => x ); // $ExpectError

	beta( [], true ); // $ExpectError
	beta( {}, false ); // $ExpectError
	beta( false, '5' ); // $ExpectError
	beta( {}, [] ); // $ExpectError
	beta( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	beta(); // $ExpectError
	beta( 3 ); // $ExpectError
}
