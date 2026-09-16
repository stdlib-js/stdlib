/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import powm1f = require( './index' );


// TESTS //

// The function returns a number...
{
	powm1f( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	powm1f( true, 3 ); // $ExpectError
	powm1f( false, 2 ); // $ExpectError
	powm1f( '5', 1 ); // $ExpectError
	powm1f( [], 1 ); // $ExpectError
	powm1f( {}, 2 ); // $ExpectError
	powm1f( ( x: number ): number => x, 2 ); // $ExpectError

	powm1f( 9, true ); // $ExpectError
	powm1f( 9, false ); // $ExpectError
	powm1f( 5, '5' ); // $ExpectError
	powm1f( 8, [] ); // $ExpectError
	powm1f( 9, {} ); // $ExpectError
	powm1f( 8, ( x: number ): number => x ); // $ExpectError

	powm1f( [], true ); // $ExpectError
	powm1f( {}, false ); // $ExpectError
	powm1f( false, '5' ); // $ExpectError
	powm1f( {}, [] ); // $ExpectError
	powm1f( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	powm1f(); // $ExpectError
	powm1f( 3 ); // $ExpectError
}
