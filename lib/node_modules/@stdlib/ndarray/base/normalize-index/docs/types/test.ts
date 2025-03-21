/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import normalizeIndex = require( './index' );


// TESTS //

// The function returns a number...
{
	normalizeIndex( 15, 10 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	normalizeIndex( true, 3 ); // $ExpectError
	normalizeIndex( false, 2 ); // $ExpectError
	normalizeIndex( '5', 1 ); // $ExpectError
	normalizeIndex( [], 1 ); // $ExpectError
	normalizeIndex( {}, 2 ); // $ExpectError
	normalizeIndex( ( x: number ): number => x, 2 ); // $ExpectError

	normalizeIndex( 9, true ); // $ExpectError
	normalizeIndex( 9, false ); // $ExpectError
	normalizeIndex( 5, '5' ); // $ExpectError
	normalizeIndex( 8, [] ); // $ExpectError
	normalizeIndex( 9, {} ); // $ExpectError
	normalizeIndex( 8, ( x: number ): number => x ); // $ExpectError

	normalizeIndex( [], true ); // $ExpectError
	normalizeIndex( {}, false ); // $ExpectError
	normalizeIndex( false, '5' ); // $ExpectError
	normalizeIndex( {}, [] ); // $ExpectError
	normalizeIndex( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	normalizeIndex(); // $ExpectError
	normalizeIndex( 3 ); // $ExpectError
}
