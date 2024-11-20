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
	logpmf( 2, 2, 4 ); // $ExpectType number
	logpmf( 1, 2, 8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	logpmf( true, 3, 6 ); // $ExpectError
	logpmf( false, 2, 4 ); // $ExpectError
	logpmf( '5', 1, 2 ); // $ExpectError
	logpmf( [], 1, 2 ); // $ExpectError
	logpmf( {}, 2, 4 ); // $ExpectError
	logpmf( ( x: number ): number => x, 2, 4 ); // $ExpectError

	logpmf( 9, true, 12 ); // $ExpectError
	logpmf( 9, false, 12 ); // $ExpectError
	logpmf( 5, '5', 10 ); // $ExpectError
	logpmf( 8, [], 16 ); // $ExpectError
	logpmf( 9, {}, 18 ); // $ExpectError
	logpmf( 8, ( x: number ): number => x, 16 ); // $ExpectError

	logpmf( 9, 5, true ); // $ExpectError
	logpmf( 9, 5, false ); // $ExpectError
	logpmf( 5, 2, '5' ); // $ExpectError
	logpmf( 8, 4, [] ); // $ExpectError
	logpmf( 9, 4, {} ); // $ExpectError
	logpmf( 8, 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	logpmf(); // $ExpectError
	logpmf( 2 ); // $ExpectError
	logpmf( 2, 0 ); // $ExpectError
	logpmf( 2, 0, 4, 1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	logpmf.factory( 3, 4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = logpmf.factory( 3, 4 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = logpmf.factory( 3, 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = logpmf.factory( 3, 4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers...
{
	logpmf.factory( true, 3 ); // $ExpectError
	logpmf.factory( false, 2 ); // $ExpectError
	logpmf.factory( '5', 1 ); // $ExpectError
	logpmf.factory( [], 1 ); // $ExpectError
	logpmf.factory( {}, 2 ); // $ExpectError
	logpmf.factory( ( x: number ): number => x, 2 ); // $ExpectError

	logpmf.factory( 9, true ); // $ExpectError
	logpmf.factory( 9, false ); // $ExpectError
	logpmf.factory( 5, '5' ); // $ExpectError
	logpmf.factory( 8, [] ); // $ExpectError
	logpmf.factory( 9, {} ); // $ExpectError
	logpmf.factory( 8, ( x: number ): number => x ); // $ExpectError

	logpmf.factory( [], true ); // $ExpectError
	logpmf.factory( {}, false ); // $ExpectError
	logpmf.factory( false, '5' ); // $ExpectError
	logpmf.factory( {}, [] ); // $ExpectError
	logpmf.factory( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	logpmf.factory( 0 ); // $ExpectError
	logpmf.factory( 0, 4, 8 ); // $ExpectError
}
