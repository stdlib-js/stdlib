/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import quantile = require( './index' );


// TESTS //

// The function returns a number...
{
	quantile( 2, 2, 4 ); // $ExpectType number
	quantile( 1, 2, 8 ); // $ExpectType number
	quantile( 1, 2, 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	quantile( true, 3, 6 ); // $ExpectError
	quantile( false, 2, 4 ); // $ExpectError
	quantile( '5', 1, 2 ); // $ExpectError
	quantile( [], 1, 2 ); // $ExpectError
	quantile( {}, 2, 4 ); // $ExpectError
	quantile( ( x: number ): number => x, 2, 4 ); // $ExpectError

	quantile( 9, true, 12 ); // $ExpectError
	quantile( 9, false, 12 ); // $ExpectError
	quantile( 5, '5', 10 ); // $ExpectError
	quantile( 8, [], 16 ); // $ExpectError
	quantile( 9, {}, 18 ); // $ExpectError
	quantile( 8, ( x: number ): number => x, 16 ); // $ExpectError

	quantile( 9, 5, true ); // $ExpectError
	quantile( 9, 5, false ); // $ExpectError
	quantile( 5, 2, '5' ); // $ExpectError
	quantile( 8, 4, [] ); // $ExpectError
	quantile( 9, 4, {} ); // $ExpectError
	quantile( 8, 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	quantile( 2, 2, 4, true ); // $ExpectError
	quantile( 2, 2, 4, false ); // $ExpectError
	quantile( 2, 2, 4, '5' ); // $ExpectError
	quantile( 2, 2, 4, [] ); // $ExpectError
	quantile( 2, 2, 4, {} ); // $ExpectError
	quantile( 2, 2, 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	quantile(); // $ExpectError
	quantile( 2 ); // $ExpectError
	quantile( 2, 0 ); // $ExpectError
	quantile( 2, 0, 4, 1, 2 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	quantile.factory( 3, 4 ); // $ExpectType Unary
	quantile.factory( 3, 4, 2 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	let fcn = quantile.factory( 3, 4 );
	fcn( 2 ); // $ExpectType number

	fcn = quantile.factory( 3, 4, 2 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = quantile.factory( 3, 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = quantile.factory( 3, 4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1, 2 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers...
{
	quantile.factory( true, 3 ); // $ExpectError
	quantile.factory( false, 2 ); // $ExpectError
	quantile.factory( '5', 1 ); // $ExpectError
	quantile.factory( [], 1 ); // $ExpectError
	quantile.factory( {}, 2 ); // $ExpectError
	quantile.factory( ( x: number ): number => x, 2 ); // $ExpectError

	quantile.factory( 9, true ); // $ExpectError
	quantile.factory( 9, false ); // $ExpectError
	quantile.factory( 5, '5' ); // $ExpectError
	quantile.factory( 8, [] ); // $ExpectError
	quantile.factory( 9, {} ); // $ExpectError
	quantile.factory( 8, ( x: number ): number => x ); // $ExpectError

	quantile.factory( [], true ); // $ExpectError
	quantile.factory( {}, false ); // $ExpectError
	quantile.factory( false, '5' ); // $ExpectError
	quantile.factory( {}, [] ); // $ExpectError
	quantile.factory( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a third argument which is not a number...
{
	quantile.factory( 2, 2, true ); // $ExpectError
	quantile.factory( 2, 2, false ); // $ExpectError
	quantile.factory( 2, 2, '5' ); // $ExpectError
	quantile.factory( 2, 2, [] ); // $ExpectError
	quantile.factory( 2, 2, {} ); // $ExpectError
	quantile.factory( 2, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	quantile.factory(); // $ExpectError
	quantile.factory( 3 ); // $ExpectError
	quantile.factory( 3, 4, 2, 3 ); // $ExpectError
}
