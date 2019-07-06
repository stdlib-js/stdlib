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

import pdf = require( './index' );


// TESTS //

// The function returns a number...
{
	pdf( 2, 2, 4 ); // $ExpectType number
	pdf( 1, 2, 8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	pdf( true, 3, 6 ); // $ExpectError
	pdf( false, 2, 4 ); // $ExpectError
	pdf( '5', 1, 2 ); // $ExpectError
	pdf( [], 1, 2 ); // $ExpectError
	pdf( {}, 2, 4 ); // $ExpectError
	pdf( ( x: number ): number => x, 2, 4 ); // $ExpectError

	pdf( 9, true, 12 ); // $ExpectError
	pdf( 9, false, 12 ); // $ExpectError
	pdf( 5, '5', 10 ); // $ExpectError
	pdf( 8, [], 16 ); // $ExpectError
	pdf( 9, {}, 18 ); // $ExpectError
	pdf( 8, ( x: number ): number => x, 16 ); // $ExpectError

	pdf( 9, 5, true ); // $ExpectError
	pdf( 9, 5, false ); // $ExpectError
	pdf( 5, 2, '5' ); // $ExpectError
	pdf( 8, 4, [] ); // $ExpectError
	pdf( 9, 4, {} ); // $ExpectError
	pdf( 8, 5, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	pdf(); // $ExpectError
	pdf( 2 ); // $ExpectError
	pdf( 2, 0 ); // $ExpectError
	pdf( 2, 0, 4, 1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	pdf.factory( 3, 4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = pdf.factory( 3, 4 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = pdf.factory( 3, 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = pdf.factory( 3, 4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers...
{
	pdf.factory( true, 3 ); // $ExpectError
	pdf.factory( false, 2 ); // $ExpectError
	pdf.factory( '5', 1 ); // $ExpectError
	pdf.factory( [], 1 ); // $ExpectError
	pdf.factory( {}, 2 ); // $ExpectError
	pdf.factory( ( x: number ): number => x, 2 ); // $ExpectError

	pdf.factory( 9, true ); // $ExpectError
	pdf.factory( 9, false ); // $ExpectError
	pdf.factory( 5, '5' ); // $ExpectError
	pdf.factory( 8, [] ); // $ExpectError
	pdf.factory( 9, {} ); // $ExpectError
	pdf.factory( 8, ( x: number ): number => x ); // $ExpectError

	pdf.factory( [], true ); // $ExpectError
	pdf.factory( {}, false ); // $ExpectError
	pdf.factory( false, '5' ); // $ExpectError
	pdf.factory( {}, [] ); // $ExpectError
	pdf.factory( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	pdf.factory( 0 ); // $ExpectError
	pdf.factory( 0, 4, 8 ); // $ExpectError
}
