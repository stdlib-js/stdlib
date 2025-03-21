/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
	pdf( 0.0, -2.0, 2.0, 1.0, 5.0 ); // $ExpectType number
	pdf( 0.3, 0.0, 1.0, 0.0, 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than five numbers...
{
	pdf( true, -2, 2, 1, 5 ); // $ExpectError
	pdf( false, -2, 2, 1, 5 ); // $ExpectError
	pdf( '5', -2, 2, 1, 5 ); // $ExpectError
	pdf( [], -2, 2, 1, 5 ); // $ExpectError
	pdf( {}, -2, 2, 1, 5 ); // $ExpectError
	pdf( ( x: number ): number => x, -2, 2, 1, 5 ); // $ExpectError

	pdf( 1, true, 1, 0, 2 ); // $ExpectError
	pdf( 1, false, 1, 0, 2 ); // $ExpectError
	pdf( 5, '5', 1, 0, 2 ); // $ExpectError
	pdf( 8, [], 1, 0, 2 ); // $ExpectError
	pdf( 1, {}, 1, 0, 2 ); // $ExpectError
	pdf( 8, ( x: number ): number => x, 1, 0, 2 ); // $ExpectError

	pdf( 0.3, -1, true, 2, 2 ); // $ExpectError
	pdf( 0.3, -1, false, 2, 2 ); // $ExpectError
	pdf( 0.3, -1, '5', 2, 2 ); // $ExpectError
	pdf( 8, 4, [], 2, 2 ); // $ExpectError
	pdf( 1, 4, {}, 2, 2 ); // $ExpectError
	pdf( 8, 5, ( x: number ): number => x, 2, 2 ); // $ExpectError

	pdf( 1, 5, 10, true, 2 ); // $ExpectError
	pdf( 1, 5, 10, false, 2 ); // $ExpectError
	pdf( 0.3, -1, 4, '5', 2 ); // $ExpectError
	pdf( 8, 4, 8, [], 2 ); // $ExpectError
	pdf( 1, 4, 8, {}, 2 ); // $ExpectError
	pdf( 8, 5, 10, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	pdf(); // $ExpectError
	pdf( 2 ); // $ExpectError
	pdf( 2, 0 ); // $ExpectError
	pdf( 2, 0, 4 ); // $ExpectError
	pdf( 2, 0, 4, 1 ); // $ExpectError
	pdf( 2, 0, 4, 1, 2, 2 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	pdf.factory( -2.0, 2.0, 0.0, 3.0 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = pdf.factory( -2.0, 2.0, 0.0, 3.0 );
	fcn( 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = pdf.factory( -2.0, 2.0, 0.0, 3.0 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = pdf.factory( -2.0, 2.0, 0.0, 3.0 );
	fcn(); // $ExpectError
	fcn( 2, 0 ); // $ExpectError
	fcn( 2, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than three numbers...
{
	pdf.factory( true, 3, 2, 2 ); // $ExpectError
	pdf.factory( false, 3, 2, 2 ); // $ExpectError
	pdf.factory( '5', 1, 0.5, 2 ); // $ExpectError
	pdf.factory( [], 1, 0.5, 2 ); // $ExpectError
	pdf.factory( {}, 2, 0.5, 2 ); // $ExpectError
	pdf.factory( ( x: number ): number => x, 2, 1, 2 ); // $ExpectError

	pdf.factory( 9, true, 2, 2 ); // $ExpectError
	pdf.factory( 9, false, 2, 2 ); // $ExpectError
	pdf.factory( 5, '5', 3, 2 ); // $ExpectError
	pdf.factory( 8, [], 3, 2 ); // $ExpectError
	pdf.factory( 9, {}, 3, 2 ); // $ExpectError
	pdf.factory( 8, ( x: number ): number => x, 3, 2 ); // $ExpectError

	pdf.factory( 9, 10, true, 2 ); // $ExpectError
	pdf.factory( 9, 18, false, 2 ); // $ExpectError
	pdf.factory( 5, 10, '5', 2 ); // $ExpectError
	pdf.factory( 8, 16, [], 2 ); // $ExpectError
	pdf.factory( 9, 18, {}, 2 ); // $ExpectError
	pdf.factory( 8, 16, ( x: number ): number => x, 2 ); // $ExpectError

	pdf.factory( -1, 1, 0.5, true ); // $ExpectError
	pdf.factory( -1, 1, 0.5, false ); // $ExpectError
	pdf.factory( -1, 1, 0.5, '5' ); // $ExpectError
	pdf.factory( -1, 1, 0.5, [] ); // $ExpectError
	pdf.factory( -1, 1, 0.5, {} ); // $ExpectError
	pdf.factory( -1, 1, 0.5, ( x: number ): number => x ); // $ExpectError

	pdf.factory( [], true, 3, 2 ); // $ExpectError
	pdf.factory( {}, false, 3, 2 ); // $ExpectError
	pdf.factory( false, '5', 3, 2 ); // $ExpectError
	pdf.factory( {}, [], 3, 2 ); // $ExpectError
	pdf.factory( '5', ( x: number ): number => x, 3, 2 ); // $ExpectError

	pdf.factory( [], true, [], 2 ); // $ExpectError
	pdf.factory( {}, false, {}, 2 ); // $ExpectError
	pdf.factory( false, '5', false, 2 ); // $ExpectError
	pdf.factory( {}, [], '1', 2 ); // $ExpectError
	pdf.factory( '5', ( x: number ): number => x, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	pdf.factory( 0 ); // $ExpectError
	pdf.factory( 0, 4 ); // $ExpectError
	pdf.factory( 0, 4, 2 ); // $ExpectError
	pdf.factory( 0, 4, 2, 3, 3 ); // $ExpectError
}
