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

import clipUpperIndex = require( './index' );


// TESTS //

// The function returns a number...
{
	clipUpperIndex( 15, 10 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	clipUpperIndex( true, 3 ); // $ExpectError
	clipUpperIndex( false, 2 ); // $ExpectError
	clipUpperIndex( '5', 1 ); // $ExpectError
	clipUpperIndex( [], 1 ); // $ExpectError
	clipUpperIndex( {}, 2 ); // $ExpectError
	clipUpperIndex( ( x: number ): number => x, 2 ); // $ExpectError

	clipUpperIndex( 9, true ); // $ExpectError
	clipUpperIndex( 9, false ); // $ExpectError
	clipUpperIndex( 5, '5' ); // $ExpectError
	clipUpperIndex( 8, [] ); // $ExpectError
	clipUpperIndex( 9, {} ); // $ExpectError
	clipUpperIndex( 8, ( x: number ): number => x ); // $ExpectError

	clipUpperIndex( [], true ); // $ExpectError
	clipUpperIndex( {}, false ); // $ExpectError
	clipUpperIndex( false, '5' ); // $ExpectError
	clipUpperIndex( {}, [] ); // $ExpectError
	clipUpperIndex( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	clipUpperIndex(); // $ExpectError
	clipUpperIndex( 3 ); // $ExpectError
}
