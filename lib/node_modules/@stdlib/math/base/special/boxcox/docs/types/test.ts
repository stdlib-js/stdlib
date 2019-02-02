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

import boxcox = require( './index' );


// TESTS //

// The function returns a number...
{
	boxcox( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	boxcox( true, 3 ); // $ExpectError
	boxcox( false, 2 ); // $ExpectError
	boxcox( '5', 1 ); // $ExpectError
	boxcox( [], 1 ); // $ExpectError
	boxcox( {}, 2 ); // $ExpectError
	boxcox( ( x: number ): number => x, 2 ); // $ExpectError

	boxcox( 9, true ); // $ExpectError
	boxcox( 9, false ); // $ExpectError
	boxcox( 5, '5' ); // $ExpectError
	boxcox( 8, [] ); // $ExpectError
	boxcox( 9, {} ); // $ExpectError
	boxcox( 8, ( x: number ): number => x ); // $ExpectError

	boxcox( [], true ); // $ExpectError
	boxcox( {}, false ); // $ExpectError
	boxcox( false, '5' ); // $ExpectError
	boxcox( {}, [] ); // $ExpectError
	boxcox( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	boxcox(); // $ExpectError
	boxcox( 3 ); // $ExpectError
}
