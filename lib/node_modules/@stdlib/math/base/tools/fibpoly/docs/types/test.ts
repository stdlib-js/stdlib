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

import fibpoly = require( './index' );


// TESTS //

// The function returns a number...
{
	fibpoly( 6, 1.0 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not a number...
{
	fibpoly( true, 1.0 ); // $ExpectError
	fibpoly( false, 1.0 ); // $ExpectError
	fibpoly( 'abc', 1.0 ); // $ExpectError
	fibpoly( [], 1.0 ); // $ExpectError
	fibpoly( {}, 1.0 ); // $ExpectError
	fibpoly( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	fibpoly( 6, true ); // $ExpectError
	fibpoly( 6, false ); // $ExpectError
	fibpoly( 6, 'abc' ); // $ExpectError
	fibpoly( 6, [] ); // $ExpectError
	fibpoly( 6, {} ); // $ExpectError
	fibpoly( 6, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	fibpoly(); // $ExpectError
	fibpoly( 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	fibpoly.factory( 3 ); // $ExpectType EvaluationFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	fibpoly.factory(); // $ExpectError
	fibpoly.factory( 4, 21 ); // $ExpectError
}

// The `factory` method returns a function which returns a number...
{
	const polyval = fibpoly.factory( 3 );
	polyval( 1.0 ); // $ExpectType number
}

// The `factory` method returns a function which does not compile if provided a first argument which is not a number...
{
	const polyval = fibpoly.factory( 3 );
	polyval( true ); // $ExpectError
	polyval( false ); // $ExpectError
	polyval( 'abc' ); // $ExpectError
	polyval( [] ); // $ExpectError
	polyval( {} ); // $ExpectError
	polyval( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a first argument which is not a number...
{
	fibpoly.factory( true ); // $ExpectError
	fibpoly.factory( false ); // $ExpectError
	fibpoly.factory( 'abc' ); // $ExpectError
	fibpoly.factory( [] ); // $ExpectError
	fibpoly.factory( {} ); // $ExpectError
	fibpoly.factory( ( x: number ): number => x ); // $ExpectError
}
