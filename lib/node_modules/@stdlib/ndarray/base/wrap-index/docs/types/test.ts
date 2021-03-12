/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import wrapIndex = require( './index' );


// TESTS //

// The function returns a number...
{
	wrapIndex( 15, 10 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	wrapIndex( true, 3 ); // $ExpectError
	wrapIndex( false, 2 ); // $ExpectError
	wrapIndex( '5', 1 ); // $ExpectError
	wrapIndex( [], 1 ); // $ExpectError
	wrapIndex( {}, 2 ); // $ExpectError
	wrapIndex( ( x: number ): number => x, 2 ); // $ExpectError

	wrapIndex( 9, true ); // $ExpectError
	wrapIndex( 9, false ); // $ExpectError
	wrapIndex( 5, '5' ); // $ExpectError
	wrapIndex( 8, [] ); // $ExpectError
	wrapIndex( 9, {} ); // $ExpectError
	wrapIndex( 8, ( x: number ): number => x ); // $ExpectError

	wrapIndex( [], true ); // $ExpectError
	wrapIndex( {}, false ); // $ExpectError
	wrapIndex( false, '5' ); // $ExpectError
	wrapIndex( {}, [] ); // $ExpectError
	wrapIndex( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	wrapIndex(); // $ExpectError
	wrapIndex( 3 ); // $ExpectError
}
