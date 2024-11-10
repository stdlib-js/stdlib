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

import fmodf = require( './index' );


// TESTS //

// The function returns a number...
{
	fmodf( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	fmodf( true, 3 ); // $ExpectError
	fmodf( false, 2 ); // $ExpectError
	fmodf( '5', 1 ); // $ExpectError
	fmodf( [], 1 ); // $ExpectError
	fmodf( {}, 2 ); // $ExpectError
	fmodf( ( x: number ): number => x, 2 ); // $ExpectError

	fmodf( 9, true ); // $ExpectError
	fmodf( 9, false ); // $ExpectError
	fmodf( 5, '5' ); // $ExpectError
	fmodf( 8, [] ); // $ExpectError
	fmodf( 9, {} ); // $ExpectError
	fmodf( 8, ( x: number ): number => x ); // $ExpectError

	fmodf( [], true ); // $ExpectError
	fmodf( {}, false ); // $ExpectError
	fmodf( false, '5' ); // $ExpectError
	fmodf( {}, [] ); // $ExpectError
	fmodf( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	fmodf(); // $ExpectError
	fmodf( 3 ); // $ExpectError
}
