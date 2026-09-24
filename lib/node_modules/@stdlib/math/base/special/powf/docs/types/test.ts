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

import powf = require( './index' );


// TESTS //

// The function returns a number...
{
	powf( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	powf( true, 3 ); // $ExpectError
	powf( false, 2 ); // $ExpectError
	powf( '5', 1 ); // $ExpectError
	powf( [], 1 ); // $ExpectError
	powf( {}, 2 ); // $ExpectError
	powf( ( x: number ): number => x, 2 ); // $ExpectError

	powf( 9, true ); // $ExpectError
	powf( 9, false ); // $ExpectError
	powf( 5, '5' ); // $ExpectError
	powf( 8, [] ); // $ExpectError
	powf( 9, {} ); // $ExpectError
	powf( 8, ( x: number ): number => x ); // $ExpectError

	powf( [], true ); // $ExpectError
	powf( {}, false ); // $ExpectError
	powf( false, '5' ); // $ExpectError
	powf( {}, [] ); // $ExpectError
	powf( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	powf(); // $ExpectError
	powf( 3 ); // $ExpectError
}
