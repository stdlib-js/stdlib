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

import polygamma = require( './index' );


// TESTS //

// The function returns a number...
{
	polygamma( 2, 1.2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	polygamma( true, 3 ); // $ExpectError
	polygamma( false, 2 ); // $ExpectError
	polygamma( '5', 1 ); // $ExpectError
	polygamma( [], 1 ); // $ExpectError
	polygamma( {}, 2 ); // $ExpectError
	polygamma( ( x: number ): number => x, 2 ); // $ExpectError

	polygamma( 9, true ); // $ExpectError
	polygamma( 9, false ); // $ExpectError
	polygamma( 5, '5' ); // $ExpectError
	polygamma( 8, [] ); // $ExpectError
	polygamma( 9, {} ); // $ExpectError
	polygamma( 8, ( x: number ): number => x ); // $ExpectError

	polygamma( [], true ); // $ExpectError
	polygamma( {}, false ); // $ExpectError
	polygamma( false, '5' ); // $ExpectError
	polygamma( {}, [] ); // $ExpectError
	polygamma( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	polygamma(); // $ExpectError
	polygamma( 3 ); // $ExpectError
}
