/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import hypotf = require( './index' );


// TESTS //

// The function returns a number...
{
	hypotf( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	hypotf( true, 3 ); // $ExpectError
	hypotf( false, 2 ); // $ExpectError
	hypotf( '5', 1 ); // $ExpectError
	hypotf( [], 1 ); // $ExpectError
	hypotf( {}, 2 ); // $ExpectError
	hypotf( ( x: number ): number => x, 2 ); // $ExpectError

	hypotf( 9, true ); // $ExpectError
	hypotf( 9, false ); // $ExpectError
	hypotf( 5, '5' ); // $ExpectError
	hypotf( 8, [] ); // $ExpectError
	hypotf( 9, {} ); // $ExpectError
	hypotf( 8, ( x: number ): number => x ); // $ExpectError

	hypotf( [], true ); // $ExpectError
	hypotf( {}, false ); // $ExpectError
	hypotf( false, '5' ); // $ExpectError
	hypotf( {}, [] ); // $ExpectError
	hypotf( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	hypotf(); // $ExpectError
	hypotf( 3 ); // $ExpectError
}
