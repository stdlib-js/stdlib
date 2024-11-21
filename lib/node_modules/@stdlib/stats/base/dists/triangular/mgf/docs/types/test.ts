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

import mgf = require( './index' );


// TESTS //

// The function returns a number...
{
	mgf( 2, 2, 4, 5 ); // $ExpectType number
	mgf( 1, 2, 8, 4 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than four numbers...
{
	mgf( true, 3, 6, 5 ); // $ExpectError
	mgf( false, 2, 4, 3 ); // $ExpectError
	mgf( '5', 1, 2, 1.5 ); // $ExpectError
	mgf( [], 1, 2, 1.5 ); // $ExpectError
	mgf( {}, 2, 4, 3 ); // $ExpectError
	mgf( ( x: number ): number => x, 2, 4, 3 ); // $ExpectError

	mgf( 9, true, 12, 8 ); // $ExpectError
	mgf( 9, false, 12, 8 ); // $ExpectError
	mgf( 5, '5', 10, 8 ); // $ExpectError
	mgf( 8, [], 16, 8 ); // $ExpectError
	mgf( 9, {}, 18, 8 ); // $ExpectError
	mgf( 8, ( x: number ): number => x, 16, 8 ); // $ExpectError

	mgf( 9, 5, true, 8 ); // $ExpectError
	mgf( 9, 5, false, 9 ); // $ExpectError
	mgf( 5, 2, '5', 8 ); // $ExpectError
	mgf( 8, 4, [], 8 ); // $ExpectError
	mgf( 9, 4, {}, 8 ); // $ExpectError
	mgf( 8, 5, ( x: number ): number => x, 8 ); // $ExpectError

	mgf( 9, 5, 10, true ); // $ExpectError
	mgf( 9, 5, 10, false ); // $ExpectError
	mgf( 5, 2, 5, '5' ); // $ExpectError
	mgf( 8, 4, 8, [] ); // $ExpectError
	mgf( 9, 4, 8, {} ); // $ExpectError
	mgf( 8, 5, 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	mgf(); // $ExpectError
	mgf( 2 ); // $ExpectError
	mgf( 2, 0 ); // $ExpectError
	mgf( 2, 0, 4 ); // $ExpectError
	mgf( 2, 0, 4, 1, 5 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	mgf.factory( 3, 5, 4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = mgf.factory( 3, 5, 4 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = mgf.factory( 3, 5, 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = mgf.factory( 3, 5, 4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than three numbers...
{
	mgf.factory( true, 3, 2 ); // $ExpectError
	mgf.factory( false, 3, 2 ); // $ExpectError
	mgf.factory( '5', 1, 0.5 ); // $ExpectError
	mgf.factory( [], 1, 0.5 ); // $ExpectError
	mgf.factory( {}, 2, 0.5 ); // $ExpectError
	mgf.factory( ( x: number ): number => x, 2, 1 ); // $ExpectError

	mgf.factory( 9, true, 2 ); // $ExpectError
	mgf.factory( 9, false, 2 ); // $ExpectError
	mgf.factory( 5, '5', 3 ); // $ExpectError
	mgf.factory( 8, [], 3 ); // $ExpectError
	mgf.factory( 9, {}, 3 ); // $ExpectError
	mgf.factory( 8, ( x: number ): number => x, 3 ); // $ExpectError

	mgf.factory( 9, 18, true ); // $ExpectError
	mgf.factory( 9, 18, false ); // $ExpectError
	mgf.factory( 5, 10, '5' ); // $ExpectError
	mgf.factory( 8, 16, [] ); // $ExpectError
	mgf.factory( 9, 18, {} ); // $ExpectError
	mgf.factory( 8, 16, ( x: number ): number => x ); // $ExpectError

	mgf.factory( [], true, 3 ); // $ExpectError
	mgf.factory( {}, false, 3 ); // $ExpectError
	mgf.factory( false, '5', 3 ); // $ExpectError
	mgf.factory( {}, [], 3 ); // $ExpectError
	mgf.factory( '5', ( x: number ): number => x, 3 ); // $ExpectError

	mgf.factory( [], true, [] ); // $ExpectError
	mgf.factory( {}, false, {} ); // $ExpectError
	mgf.factory( false, '5', false ); // $ExpectError
	mgf.factory( {}, [], '2' ); // $ExpectError
	mgf.factory( '5', ( x: number ): number => x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	mgf.factory( 0 ); // $ExpectError
	mgf.factory( 0, 4 ); // $ExpectError
	mgf.factory( 0, 4, 3, 7 ); // $ExpectError
}
