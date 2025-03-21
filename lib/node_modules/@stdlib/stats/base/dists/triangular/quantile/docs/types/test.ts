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

import quantile = require( './index' );


// TESTS //

// The function returns a number...
{
	quantile( 0.2, 0, 4, 5 ); // $ExpectType number
	quantile( 0.1, 2, 8, 4 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than four numbers...
{
	quantile( true, 3, 6, 5 ); // $ExpectError
	quantile( false, 2, 4, 3 ); // $ExpectError
	quantile( '5', 1, 2, 1.5 ); // $ExpectError
	quantile( [], 1, 2, 1.5 ); // $ExpectError
	quantile( {}, 2, 4, 3 ); // $ExpectError
	quantile( ( x: number ): number => x, 2, 4, 3 ); // $ExpectError

	quantile( 0.9, true, 12, 9 ); // $ExpectError
	quantile( 0.9, false, 12, 9 ); // $ExpectError
	quantile( 0.5, '5', 10, 7 ); // $ExpectError
	quantile( 0.8, [], 16, 10 ); // $ExpectError
	quantile( 0.9, {}, 18, 10 ); // $ExpectError
	quantile( 0.8, ( x: number ): number => x, 16, 10 ); // $ExpectError

	quantile( 0.9, 5, true, 8 ); // $ExpectError
	quantile( 0.9, 5, false, 8 ); // $ExpectError
	quantile( 0.5, 2, '5', 4 ); // $ExpectError
	quantile( 0.8, 4, [], 6 ); // $ExpectError
	quantile( 0.9, 4, {}, 6 ); // $ExpectError
	quantile( 0.8, 5, ( x: number ): number => x, 8 ); // $ExpectError

	quantile( 0.9, 5, 10, true ); // $ExpectError
	quantile( 0.9, 5, 10, false ); // $ExpectError
	quantile( 0.5, 2, 4, '5' ); // $ExpectError
	quantile( 0.8, 4, 8, [] ); // $ExpectError
	quantile( 0.9, 4, 8, {} ); // $ExpectError
	quantile( 0.8, 5, 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	quantile(); // $ExpectError
	quantile( 0.2 ); // $ExpectError
	quantile( 0.2, 0 ); // $ExpectError
	quantile( 0.2, 0, 4 ); // $ExpectError
	quantile( 0.2, 0, 4, 1, 7 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	quantile.factory( 0, 4, 3 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = quantile.factory( 3, 7, 4 );
	fcn( 0.2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = quantile.factory( 3, 7, 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = quantile.factory( 3, 7, 4 );
	fcn(); // $ExpectError
	fcn( 0.2, 0 ); // $ExpectError
	fcn( 0.2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than three numbers...
{
	quantile.factory( true, 3, 2 ); // $ExpectError
	quantile.factory( false, 2, 1.5 ); // $ExpectError
	quantile.factory( '5', 3, 1 ); // $ExpectError
	quantile.factory( [], 3, 1 ); // $ExpectError
	quantile.factory( {}, 4, 2 ); // $ExpectError
	quantile.factory( ( x: number ): number => x, 4, 2 ); // $ExpectError

	quantile.factory( 9, true, 11 ); // $ExpectError
	quantile.factory( 9, false, 11 ); // $ExpectError
	quantile.factory( 5, '5', 7 ); // $ExpectError
	quantile.factory( 8, [], 10 ); // $ExpectError
	quantile.factory( 9, {}, 11 ); // $ExpectError
	quantile.factory( 8, ( x: number ): number => x, 12 ); // $ExpectError

	quantile.factory( 9, 18, true ); // $ExpectError
	quantile.factory( 9, 18, false ); // $ExpectError
	quantile.factory( 5, 10, '5' ); // $ExpectError
	quantile.factory( 8, 16, [] ); // $ExpectError
	quantile.factory( 9, 18, {} ); // $ExpectError
	quantile.factory( 8, 16, ( x: number ): number => x ); // $ExpectError

	quantile.factory( [], true, 4 ); // $ExpectError
	quantile.factory( {}, false, 4 ); // $ExpectError
	quantile.factory( false, '5', 8 ); // $ExpectError
	quantile.factory( {}, [], 7 ); // $ExpectError
	quantile.factory( '5', ( x: number ): number => x, 7 ); // $ExpectError

	quantile.factory( [], true, [] ); // $ExpectError
	quantile.factory( {}, false, true ); // $ExpectError
	quantile.factory( false, '5', {} ); // $ExpectError
	quantile.factory( {}, [], 'abc' ); // $ExpectError
	quantile.factory( '5', ( x: number ): number => x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	quantile.factory( 0 ); // $ExpectError
	quantile.factory( 0, 4 ); // $ExpectError
	quantile.factory( 0, 9, 3, 5 ); // $ExpectError
}
