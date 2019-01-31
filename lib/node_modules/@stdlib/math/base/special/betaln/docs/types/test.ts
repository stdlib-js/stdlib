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

import betaln = require( './index' );


// TESTS //

// The function returns a number...
{
	betaln( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	betaln( true, 3 ); // $ExpectError
	betaln( false, 2 ); // $ExpectError
	betaln( '5', 1 ); // $ExpectError
	betaln( [], 1 ); // $ExpectError
	betaln( {}, 2 ); // $ExpectError
	betaln( ( x: number ): number => x, 2 ); // $ExpectError

	betaln( 9, true ); // $ExpectError
	betaln( 9, false ); // $ExpectError
	betaln( 5, '5' ); // $ExpectError
	betaln( 8, [] ); // $ExpectError
	betaln( 9, {} ); // $ExpectError
	betaln( 8, ( x: number ): number => x ); // $ExpectError

	betaln( [], true ); // $ExpectError
	betaln( {}, false ); // $ExpectError
	betaln( false, '5' ); // $ExpectError
	betaln( {}, [] ); // $ExpectError
	betaln( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	betaln(); // $ExpectError
	betaln( 3 ); // $ExpectError
}
