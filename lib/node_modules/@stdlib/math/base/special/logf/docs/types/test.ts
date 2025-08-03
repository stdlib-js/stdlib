/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import logf = require( './index' );


// TESTS //

// The function returns a number...
{
	logf( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	logf( true, 3 ); // $ExpectError
	logf( false, 2 ); // $ExpectError
	logf( '5', 1 ); // $ExpectError
	logf( [], 1 ); // $ExpectError
	logf( {}, 2 ); // $ExpectError
	logf( ( x: number ): number => x, 2 ); // $ExpectError

	logf( 9, true ); // $ExpectError
	logf( 9, false ); // $ExpectError
	logf( 5, '5' ); // $ExpectError
	logf( 8, [] ); // $ExpectError
	logf( 9, {} ); // $ExpectError
	logf( 8, ( x: number ): number => x ); // $ExpectError

	logf( [], true ); // $ExpectError
	logf( {}, false ); // $ExpectError
	logf( false, '5' ); // $ExpectError
	logf( {}, [] ); // $ExpectError
	logf( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	logf(); // $ExpectError
	logf( 3 ); // $ExpectError
}
