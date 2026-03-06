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

import logpmf = require( './index' );


// TESTS //

// The function returns a number...
{
	logpmf( 2, 10, 4, 5 ); // $ExpectType number
	logpmf( 1, 10, 8, 4 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than four numbers...
{
	logpmf( true, 10, 6, 5 ); // $ExpectError
	logpmf( false, 10, 4, 3 ); // $ExpectError
	logpmf( '5', 10, 2, 3 ); // $ExpectError
	logpmf( [], 10, 2, 3 ); // $ExpectError
	logpmf( {}, 10, 4, 3 ); // $ExpectError
	logpmf( ( x: number ): number => x, 2, 4, 3 ); // $ExpectError

	logpmf( 9, true, 12, 8 ); // $ExpectError
	logpmf( 9, false, 12, 8 ); // $ExpectError
	logpmf( 5, '5', 10, 8 ); // $ExpectError
	logpmf( 8, [], 16, 8 ); // $ExpectError
	logpmf( 9, {}, 18, 8 ); // $ExpectError
	logpmf( 8, ( x: number ): number => x, 16, 8 ); // $ExpectError

	logpmf( 9, 5, true, 8 ); // $ExpectError
	logpmf( 9, 5, false, 9 ); // $ExpectError
	logpmf( 5, 2, '5', 8 ); // $ExpectError
	logpmf( 8, 4, [], 8 ); // $ExpectError
	logpmf( 9, 4, {}, 8 ); // $ExpectError
	logpmf( 8, 5, ( x: number ): number => x, 8 ); // $ExpectError

	logpmf( 9, 15, 10, true ); // $ExpectError
	logpmf( 9, 15, 10, false ); // $ExpectError
	logpmf( 5, 12, 4, '5' ); // $ExpectError
	logpmf( 8, 14, 8, [] ); // $ExpectError
	logpmf( 9, 14, 8, {} ); // $ExpectError
	logpmf( 8, 15, 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	logpmf(); // $ExpectError
	logpmf( 2 ); // $ExpectError
	logpmf( 2, 10 ); // $ExpectError
	logpmf( 2, 10, 4 ); // $ExpectError
	logpmf( 2, 10, 4, 1, 5 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	logpmf.factory( 13, 5, 4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = logpmf.factory( 13, 5, 4 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = logpmf.factory( 13, 5, 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = logpmf.factory( 13, 5, 4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than three numbers...
{
	logpmf.factory( true, 3, 2 ); // $ExpectError
	logpmf.factory( false, 3, 2 ); // $ExpectError
	logpmf.factory( '5', 1, 1 ); // $ExpectError
	logpmf.factory( [], 1, 1 ); // $ExpectError
	logpmf.factory( {}, 2, 1 ); // $ExpectError
	logpmf.factory( ( x: number ): number => x, 2, 1 ); // $ExpectError

	logpmf.factory( 9, true, 2 ); // $ExpectError
	logpmf.factory( 9, false, 2 ); // $ExpectError
	logpmf.factory( 5, '5', 3 ); // $ExpectError
	logpmf.factory( 8, [], 3 ); // $ExpectError
	logpmf.factory( 9, {}, 3 ); // $ExpectError
	logpmf.factory( 8, ( x: number ): number => x, 3 ); // $ExpectError

	logpmf.factory( 20, 10, true ); // $ExpectError
	logpmf.factory( 20, 18, false ); // $ExpectError
	logpmf.factory( 15, 10, '5' ); // $ExpectError
	logpmf.factory( 18, 16, [] ); // $ExpectError
	logpmf.factory( 19, 18, {} ); // $ExpectError
	logpmf.factory( 18, 16, ( x: number ): number => x ); // $ExpectError

	logpmf.factory( [], true, 3 ); // $ExpectError
	logpmf.factory( {}, false, 3 ); // $ExpectError
	logpmf.factory( false, '5', 3 ); // $ExpectError
	logpmf.factory( {}, [], 3 ); // $ExpectError
	logpmf.factory( '5', ( x: number ): number => x, 3 ); // $ExpectError

	logpmf.factory( [], true, [] ); // $ExpectError
	logpmf.factory( {}, false, {} ); // $ExpectError
	logpmf.factory( false, '5', false ); // $ExpectError
	logpmf.factory( {}, [], '1' ); // $ExpectError
	logpmf.factory( '5', ( x: number ): number => x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	logpmf.factory( 10 ); // $ExpectError
	logpmf.factory( 10, 4 ); // $ExpectError
	logpmf.factory( 10, 4, 3, 7 ); // $ExpectError
}
