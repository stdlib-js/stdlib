/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import wrapf = require( './index' );


// TESTS //

// The function returns a number...
{
	wrapf( -3, 0, 10 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	wrapf( true, 3, 2 ); // $ExpectError
	wrapf( false, 2, 2 ); // $ExpectError
	wrapf( '5', 1, 2 ); // $ExpectError
	wrapf( [], 1, 2 ); // $ExpectError
	wrapf( {}, 2, 2 ); // $ExpectError
	wrapf( ( x: number ): number => x, 2, 2 ); // $ExpectError

	wrapf( 9, true, 2 ); // $ExpectError
	wrapf( 9, false, 2 ); // $ExpectError
	wrapf( 5, '5', 2 ); // $ExpectError
	wrapf( 8, [], 2 ); // $ExpectError
	wrapf( 9, {}, 2 ); // $ExpectError
	wrapf( 8, ( x: number ): number => x, 2 ); // $ExpectError

	wrapf( 3.12, 2, true ); // $ExpectError
	wrapf( 4.9, 2, false ); // $ExpectError
	wrapf( 2.1, 2, '5' ); // $ExpectError
	wrapf( 2.9323213, 2, [] ); // $ExpectError
	wrapf( 9.343, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	wrapf(); // $ExpectError
	wrapf( 3 ); // $ExpectError
	wrapf( 2.131, 3 ); // $ExpectError
}
