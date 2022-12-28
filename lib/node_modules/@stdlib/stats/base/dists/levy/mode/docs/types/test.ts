/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import mode = require( './index' );


// TESTS //

// The function returns a number...
{
	mode( 0, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	mode( true, 3 ); // $ExpectError
	mode( false, 2 ); // $ExpectError
	mode( '5', 1 ); // $ExpectError
	mode( [], 1 ); // $ExpectError
	mode( {}, 2 ); // $ExpectError
	mode( ( x: number ): number => x, 2 ); // $ExpectError

	mode( 9, true ); // $ExpectError
	mode( 9, false ); // $ExpectError
	mode( 5, '5' ); // $ExpectError
	mode( 8, [] ); // $ExpectError
	mode( 9, {} ); // $ExpectError
	mode( 8, ( x: number ): number => x ); // $ExpectError

	mode( [], true ); // $ExpectError
	mode( {}, false ); // $ExpectError
	mode( false, '5' ); // $ExpectError
	mode( {}, [] ); // $ExpectError
	mode( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	mode(); // $ExpectError
	mode( 3 ); // $ExpectError
}
