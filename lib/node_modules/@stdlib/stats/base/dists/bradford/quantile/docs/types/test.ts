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

import quantile = require( './index' );


// TESTS //

// The function returns a number...
{
	quantile( 0.2, 0.2 ); // $ExpectType number
	quantile( 0.1, 5.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	quantile( true, 0.3 ); // $ExpectError
	quantile( false, 0.2 ); // $ExpectError
	quantile( '5', 0.1 ); // $ExpectError
	quantile( [], 0.1 ); // $ExpectError
	quantile( {}, 0.2 ); // $ExpectError
	quantile( ( x: number ): number => x, 0.2 ); // $ExpectError

	quantile( 0.9, true ); // $ExpectError
	quantile( 0.9, false ); // $ExpectError
	quantile( 0.5, '5' ); // $ExpectError
	quantile( 0.8, [] ); // $ExpectError
	quantile( 0.9, {} ); // $ExpectError
	quantile( 0.8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	quantile(); // $ExpectError
	quantile( 0.2 ); // $ExpectError
	quantile( 0.2, 0.8, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	quantile.factory( 0.3 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = quantile.factory( 5.0 );
	fcn( 0.2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid argument...
{
	const fcn = quantile.factory( 5.0 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = quantile.factory( 5.0 );
	fcn(); // $ExpectError
	fcn( 0.2, 0.8 ); // $ExpectError
	fcn( 0.2, 0.8, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a value other than a number...
{
	quantile.factory( true ); // $ExpectError
	quantile.factory( false ); // $ExpectError
	quantile.factory( '5' ); // $ExpectError
	quantile.factory( [] ); // $ExpectError
	quantile.factory( {} ); // $ExpectError
	quantile.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	quantile.factory( 0.2, 0.2 ); // $ExpectError
	quantile.factory( 0.3, 0.4, 8 ); // $ExpectError
}
