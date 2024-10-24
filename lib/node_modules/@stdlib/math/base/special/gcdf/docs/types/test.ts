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

import gcdf = require( './index' );


// TESTS //

// The function returns a number...
{
	gcdf( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	gcdf( true, 3 ); // $ExpectError
	gcdf( false, 2 ); // $ExpectError
	gcdf( '5', 1 ); // $ExpectError
	gcdf( [], 1 ); // $ExpectError
	gcdf( {}, 2 ); // $ExpectError
	gcdf( ( x: number ): number => x, 2 ); // $ExpectError

	gcdf( 9, true ); // $ExpectError
	gcdf( 9, false ); // $ExpectError
	gcdf( 5, '5' ); // $ExpectError
	gcdf( 8, [] ); // $ExpectError
	gcdf( 9, {} ); // $ExpectError
	gcdf( 8, ( x: number ): number => x ); // $ExpectError

	gcdf( [], true ); // $ExpectError
	gcdf( {}, false ); // $ExpectError
	gcdf( false, '5' ); // $ExpectError
	gcdf( {}, [] ); // $ExpectError
	gcdf( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	gcdf(); // $ExpectError
	gcdf( 3 ); // $ExpectError
}
