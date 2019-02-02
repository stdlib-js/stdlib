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

import boxcoxinv = require( './index' );


// TESTS //

// The function returns a number...
{
	boxcoxinv( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	boxcoxinv( true, 3 ); // $ExpectError
	boxcoxinv( false, 2 ); // $ExpectError
	boxcoxinv( '5', 1 ); // $ExpectError
	boxcoxinv( [], 1 ); // $ExpectError
	boxcoxinv( {}, 2 ); // $ExpectError
	boxcoxinv( ( x: number ): number => x, 2 ); // $ExpectError

	boxcoxinv( 9, true ); // $ExpectError
	boxcoxinv( 9, false ); // $ExpectError
	boxcoxinv( 5, '5' ); // $ExpectError
	boxcoxinv( 8, [] ); // $ExpectError
	boxcoxinv( 9, {} ); // $ExpectError
	boxcoxinv( 8, ( x: number ): number => x ); // $ExpectError

	boxcoxinv( [], true ); // $ExpectError
	boxcoxinv( {}, false ); // $ExpectError
	boxcoxinv( false, '5' ); // $ExpectError
	boxcoxinv( {}, [] ); // $ExpectError
	boxcoxinv( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	boxcoxinv(); // $ExpectError
	boxcoxinv( 3 ); // $ExpectError
}
