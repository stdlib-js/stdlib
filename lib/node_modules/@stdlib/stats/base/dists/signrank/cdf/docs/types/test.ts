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

import cdf = require( './index' );


// TESTS //

// The function returns a number...
{
	cdf( 20, 40 ); // $ExpectType number
	cdf( 10, 15 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	cdf( true, 3 ); // $ExpectError
	cdf( false, 2 ); // $ExpectError
	cdf( '5', 1 ); // $ExpectError
	cdf( [], 1 ); // $ExpectError
	cdf( {}, 4 ); // $ExpectError
	cdf( ( x: number ): number => x, 2 ); // $ExpectError

	cdf( 9, true ); // $ExpectError
	cdf( 9, false ); // $ExpectError
	cdf( 5, '5' ); // $ExpectError
	cdf( 8, [] ); // $ExpectError
	cdf( 9, {} ); // $ExpectError
	cdf( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cdf(); // $ExpectError
	cdf( 2 ); // $ExpectError
	cdf( 2, 0, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	cdf.factory( 4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = cdf.factory( 4 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid argument...
{
	const fcn = cdf.factory( 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = cdf.factory( 4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a value other than a number...
{
	cdf.factory( true ); // $ExpectError
	cdf.factory( false ); // $ExpectError
	cdf.factory( '5' ); // $ExpectError
	cdf.factory( [] ); // $ExpectError
	cdf.factory( {} ); // $ExpectError
	cdf.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	cdf.factory( 8, 20 ); // $ExpectError
	cdf.factory( 8, 40, 8 ); // $ExpectError
}
