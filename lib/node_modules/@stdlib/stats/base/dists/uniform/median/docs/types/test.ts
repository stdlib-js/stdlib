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

import median = require( './index' );


// TESTS //

// The function returns a number...
{
	median( 2, 4 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	median( true, 3 ); // $ExpectError
	median( false, 2 ); // $ExpectError
	median( '5', 1 ); // $ExpectError
	median( [], 1 ); // $ExpectError
	median( {}, 2 ); // $ExpectError
	median( ( x: number ): number => x, 2 ); // $ExpectError

	median( 9, true ); // $ExpectError
	median( 9, false ); // $ExpectError
	median( 5, '5' ); // $ExpectError
	median( 8, [] ); // $ExpectError
	median( 9, {} ); // $ExpectError
	median( 8, ( x: number ): number => x ); // $ExpectError

	median( [], true ); // $ExpectError
	median( {}, false ); // $ExpectError
	median( false, '5' ); // $ExpectError
	median( {}, [] ); // $ExpectError
	median( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	median(); // $ExpectError
	median( 3 ); // $ExpectError
}
