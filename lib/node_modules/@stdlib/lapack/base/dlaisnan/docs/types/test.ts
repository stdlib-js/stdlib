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

import dlaisnan = require( './index' );


// TESTS //

// The function returns a boolean...
{
	dlaisnan( 8, 2 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	dlaisnan( true, 3 ); // $ExpectError
	dlaisnan( false, 2 ); // $ExpectError
	dlaisnan( '5', 1 ); // $ExpectError
	dlaisnan( [], 1 ); // $ExpectError
	dlaisnan( {}, 2 ); // $ExpectError
	dlaisnan( ( x: number ): number => x, 2 ); // $ExpectError

	dlaisnan( 9, true ); // $ExpectError
	dlaisnan( 9, false ); // $ExpectError
	dlaisnan( 5, '5' ); // $ExpectError
	dlaisnan( 8, [] ); // $ExpectError
	dlaisnan( 9, {} ); // $ExpectError
	dlaisnan( 8, ( x: number ): number => x ); // $ExpectError

	dlaisnan( [], true ); // $ExpectError
	dlaisnan( {}, false ); // $ExpectError
	dlaisnan( false, '5' ); // $ExpectError
	dlaisnan( {}, [] ); // $ExpectError
	dlaisnan( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	dlaisnan(); // $ExpectError
	dlaisnan( 3 ); // $ExpectError
}
