/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import clampf = require( './index' );


// TESTS //

// The function returns a number...
{
	clampf( -3, 0, 10 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	clampf( true, 3, 2 ); // $ExpectError
	clampf( false, 2, 2 ); // $ExpectError
	clampf( '5', 1, 2 ); // $ExpectError
	clampf( [], 1, 2 ); // $ExpectError
	clampf( {}, 2, 2 ); // $ExpectError
	clampf( ( x: number ): number => x, 2, 2 ); // $ExpectError

	clampf( 9, true, 2 ); // $ExpectError
	clampf( 9, false, 2 ); // $ExpectError
	clampf( 5, '5', 2 ); // $ExpectError
	clampf( 8, [], 2 ); // $ExpectError
	clampf( 9, {}, 2 ); // $ExpectError
	clampf( 8, ( x: number ): number => x, 2 ); // $ExpectError

	clampf( 3.12, 2, true ); // $ExpectError
	clampf( 4.9, 2, false ); // $ExpectError
	clampf( 2.1, 2, '5' ); // $ExpectError
	clampf( 2.9323213, 2, [] ); // $ExpectError
	clampf( 9.343, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	clampf(); // $ExpectError
	clampf( 3 ); // $ExpectError
	clampf( 2.131, 3 ); // $ExpectError
}
