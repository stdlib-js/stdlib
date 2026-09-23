/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import floornf = require( './index' );


// TESTS //

// The function returns a number...
{
	floornf( 3.14159, -4 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	floornf( true, 3 ); // $ExpectError
	floornf( false, 2 ); // $ExpectError
	floornf( '5', 1 ); // $ExpectError
	floornf( [], 1 ); // $ExpectError
	floornf( {}, 2 ); // $ExpectError
	floornf( ( x: number ): number => x, 2 ); // $ExpectError

	floornf( 9, true ); // $ExpectError
	floornf( 9, false ); // $ExpectError
	floornf( 5, '5' ); // $ExpectError
	floornf( 8, [] ); // $ExpectError
	floornf( 9, {} ); // $ExpectError
	floornf( 8, ( x: number ): number => x ); // $ExpectError

	floornf( [], true ); // $ExpectError
	floornf( {}, false ); // $ExpectError
	floornf( false, '5' ); // $ExpectError
	floornf( {}, [] ); // $ExpectError
	floornf( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	floornf(); // $ExpectError
	floornf( 3 ); // $ExpectError
}
