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

import logpdf = require( './index' );


// TESTS //

// The function returns a number...
{
	logpdf( 2, 0, 4 ); // $ExpectType number
	logpdf( 1, 2, 8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	logpdf( true, 3, 6 ); // $ExpectError
	logpdf( false, 2, 4 ); // $ExpectError
	logpdf( '5', 1, 2 ); // $ExpectError
	logpdf( [], 1, 2 ); // $ExpectError
	logpdf( {}, 2, 4 ); // $ExpectError
	logpdf( ( x: number ): number => x, 2, 4 ); // $ExpectError

	logpdf( 9, true, 12 ); // $ExpectError
	logpdf( 9, false, 12 ); // $ExpectError
	logpdf( 5, '5', 10 ); // $ExpectError
	logpdf( 8, [], 16 ); // $ExpectError
	logpdf( 9, {}, 18 ); // $ExpectError
	logpdf( 8, ( x: number ): number => x, 16 ); // $ExpectError

	logpdf( 9, 5, true ); // $ExpectError
	logpdf( 9, 5, false ); // $ExpectError
	logpdf( 5, 2, '5' ); // $ExpectError
	logpdf( 8, 4, [] ); // $ExpectError
	logpdf( 9, 4, {} ); // $ExpectError
	logpdf( 8, 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	logpdf(); // $ExpectError
	logpdf( 2 ); // $ExpectError
	logpdf( 2, 0 ); // $ExpectError
	logpdf( 2, 0, 4, 1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	logpdf.factory( 0, 4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = logpdf.factory( 0, 4 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = logpdf.factory( 0, 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = logpdf.factory( 0, 4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers...
{
	logpdf.factory( true, 3 ); // $ExpectError
	logpdf.factory( false, 2 ); // $ExpectError
	logpdf.factory( '5', 1 ); // $ExpectError
	logpdf.factory( [], 1 ); // $ExpectError
	logpdf.factory( {}, 2 ); // $ExpectError
	logpdf.factory( ( x: number ): number => x, 2 ); // $ExpectError

	logpdf.factory( 9, true ); // $ExpectError
	logpdf.factory( 9, false ); // $ExpectError
	logpdf.factory( 5, '5' ); // $ExpectError
	logpdf.factory( 8, [] ); // $ExpectError
	logpdf.factory( 9, {} ); // $ExpectError
	logpdf.factory( 8, ( x: number ): number => x ); // $ExpectError

	logpdf.factory( [], true ); // $ExpectError
	logpdf.factory( {}, false ); // $ExpectError
	logpdf.factory( false, '5' ); // $ExpectError
	logpdf.factory( {}, [] ); // $ExpectError
	logpdf.factory( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	logpdf.factory( 0 ); // $ExpectError
	logpdf.factory( 0, 4, 8 ); // $ExpectError
}
