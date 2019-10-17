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

import powm1 = require( './index' );


// TESTS //

// The function returns a number...
{
	powm1( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	powm1( true, 3 ); // $ExpectError
	powm1( false, 2 ); // $ExpectError
	powm1( '5', 1 ); // $ExpectError
	powm1( [], 1 ); // $ExpectError
	powm1( {}, 2 ); // $ExpectError
	powm1( ( x: number ): number => x, 2 ); // $ExpectError

	powm1( 9, true ); // $ExpectError
	powm1( 9, false ); // $ExpectError
	powm1( 5, '5' ); // $ExpectError
	powm1( 8, [] ); // $ExpectError
	powm1( 9, {} ); // $ExpectError
	powm1( 8, ( x: number ): number => x ); // $ExpectError

	powm1( [], true ); // $ExpectError
	powm1( {}, false ); // $ExpectError
	powm1( false, '5' ); // $ExpectError
	powm1( {}, [] ); // $ExpectError
	powm1( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	powm1(); // $ExpectError
	powm1( 3 ); // $ExpectError
}
