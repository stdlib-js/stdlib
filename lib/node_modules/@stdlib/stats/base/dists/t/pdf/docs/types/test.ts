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
	pdf( 2, 4 ); // $ExpectType number
	pdf( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	pdf( true, 3 ); // $ExpectError
	pdf( false, 2 ); // $ExpectError
	pdf( '5', 1 ); // $ExpectError
	pdf( [], 1 ); // $ExpectError
	pdf( {}, 4 ); // $ExpectError
	pdf( ( x: number ): number => x, 2 ); // $ExpectError

	pdf( 9, true ); // $ExpectError
	pdf( 9, false ); // $ExpectError
	pdf( 5, '5' ); // $ExpectError
	pdf( 8, [] ); // $ExpectError
	pdf( 9, {} ); // $ExpectError
	pdf( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	pdf(); // $ExpectError
	pdf( 2 ); // $ExpectError
	pdf( 2, 0, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	pdf.factory( 4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = pdf.factory( 4 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid argument...
{
	const fcn = pdf.factory( 4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = pdf.factory( 4 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a value other than a number...
{
	pdf.factory( true ); // $ExpectError
	pdf.factory( false ); // $ExpectError
	pdf.factory( '5' ); // $ExpectError
	pdf.factory( [] ); // $ExpectError
	pdf.factory( {} ); // $ExpectError
	pdf.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	pdf.factory( 0, 2 ); // $ExpectError
	pdf.factory( 0, 4, 8 ); // $ExpectError
}
