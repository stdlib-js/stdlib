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

import xlogy = require( './index' );


// TESTS //

// The function returns a number...
{
	xlogy( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	xlogy( true, 3 ); // $ExpectError
	xlogy( false, 2 ); // $ExpectError
	xlogy( '5', 1 ); // $ExpectError
	xlogy( [], 1 ); // $ExpectError
	xlogy( {}, 2 ); // $ExpectError
	xlogy( ( x: number ): number => x, 2 ); // $ExpectError

	xlogy( 9, true ); // $ExpectError
	xlogy( 9, false ); // $ExpectError
	xlogy( 5, '5' ); // $ExpectError
	xlogy( 8, [] ); // $ExpectError
	xlogy( 9, {} ); // $ExpectError
	xlogy( 8, ( x: number ): number => x ); // $ExpectError

	xlogy( [], true ); // $ExpectError
	xlogy( {}, false ); // $ExpectError
	xlogy( false, '5' ); // $ExpectError
	xlogy( {}, [] ); // $ExpectError
	xlogy( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	xlogy(); // $ExpectError
	xlogy( 3 ); // $ExpectError
}
