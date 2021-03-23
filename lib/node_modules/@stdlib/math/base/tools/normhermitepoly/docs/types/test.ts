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

import normhermitepoly = require( './index' );


// TESTS //

// The function returns a number...
{
	normhermitepoly( 6, 1.0 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not a number...
{
	normhermitepoly( true, 1.0 ); // $ExpectError
	normhermitepoly( false, 1.0 ); // $ExpectError
	normhermitepoly( 'abc', 1.0 ); // $ExpectError
	normhermitepoly( [], 1.0 ); // $ExpectError
	normhermitepoly( {}, 1.0 ); // $ExpectError
	normhermitepoly( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	normhermitepoly( 6, true ); // $ExpectError
	normhermitepoly( 6, false ); // $ExpectError
	normhermitepoly( 6, 'abc' ); // $ExpectError
	normhermitepoly( 6, [] ); // $ExpectError
	normhermitepoly( 6, {} ); // $ExpectError
	normhermitepoly( 6, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	normhermitepoly(); // $ExpectError
	normhermitepoly( 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	normhermitepoly.factory( 3 ); // $ExpectType EvaluationFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	normhermitepoly.factory(); // $ExpectError
	normhermitepoly.factory( 4, 21 ); // $ExpectError
}

// The `factory` method returns a function which returns a number...
{
	const polyval = normhermitepoly.factory( 3 );
	polyval( 1.0 ); // $ExpectType number
}

// The `factory` method returns a function which does not compile if provided a first argument which is not a number...
{
	const polyval = normhermitepoly.factory( 3 );
	polyval( true ); // $ExpectError
	polyval( false ); // $ExpectError
	polyval( 'abc' ); // $ExpectError
	polyval( [] ); // $ExpectError
	polyval( {} ); // $ExpectError
	polyval( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a first argument which is not a number...
{
	normhermitepoly.factory( true ); // $ExpectError
	normhermitepoly.factory( false ); // $ExpectError
	normhermitepoly.factory( 'abc' ); // $ExpectError
	normhermitepoly.factory( [] ); // $ExpectError
	normhermitepoly.factory( {} ); // $ExpectError
	normhermitepoly.factory( ( x: number ): number => x ); // $ExpectError
}
