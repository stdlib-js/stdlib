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

import clampIndex = require( './index' );


// TESTS //

// The function returns a number...
{
	clampIndex( 15, 10 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	clampIndex( true, 3 ); // $ExpectError
	clampIndex( false, 2 ); // $ExpectError
	clampIndex( '5', 1 ); // $ExpectError
	clampIndex( [], 1 ); // $ExpectError
	clampIndex( {}, 2 ); // $ExpectError
	clampIndex( ( x: number ): number => x, 2 ); // $ExpectError

	clampIndex( 9, true ); // $ExpectError
	clampIndex( 9, false ); // $ExpectError
	clampIndex( 5, '5' ); // $ExpectError
	clampIndex( 8, [] ); // $ExpectError
	clampIndex( 9, {} ); // $ExpectError
	clampIndex( 8, ( x: number ): number => x ); // $ExpectError

	clampIndex( [], true ); // $ExpectError
	clampIndex( {}, false ); // $ExpectError
	clampIndex( false, '5' ); // $ExpectError
	clampIndex( {}, [] ); // $ExpectError
	clampIndex( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	clampIndex(); // $ExpectError
	clampIndex( 3 ); // $ExpectError
}
