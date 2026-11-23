/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import chebyshevSeries = require( './index' );


// TESTS //

// The function returns a number...
{
	chebyshevSeries( 1.0, [ 1.0, 0.5 ] ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	chebyshevSeries( '5', [ 1.0, 2.0 ] ); // $ExpectError
	chebyshevSeries( true, [ 1.0, 2.0 ] ); // $ExpectError
	chebyshevSeries( false, [ 1.0, 2.0 ] ); // $ExpectError
	chebyshevSeries( null, [ 1.0, 2.0 ] ); // $ExpectError
	chebyshevSeries( undefined, [ 1.0, 2.0 ] ); // $ExpectError
	chebyshevSeries( [], [ 1.0, 2.0 ] ); // $ExpectError
	chebyshevSeries( {}, [ 1.0, 2.0 ] ); // $ExpectError
	chebyshevSeries( ( x: number ): number => x, [ 1.0, 2.0 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	chebyshevSeries( 1.0, '5' ); // $ExpectError
	chebyshevSeries( 1.0, true ); // $ExpectError
	chebyshevSeries( 1.0, false ); // $ExpectError
	chebyshevSeries( 1.0, null ); // $ExpectError
	chebyshevSeries( 1.0, undefined ); // $ExpectError
	chebyshevSeries( 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	chebyshevSeries(); // $ExpectError
	chebyshevSeries( 1.0 ); // $ExpectError
	chebyshevSeries( 1.0, [ 1.0, 2.0 ], 3.0 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	chebyshevSeries.factory( [ 1.0, 0.5 ] ); // $ExpectType ChebyshevSeriesFunction
}

// The function returned by the `factory` method returns a number...
{
	const evaluate = chebyshevSeries.factory( [ 1.0, 0.5 ] );
	evaluate( 1.0 ); // $ExpectType number
}

// The compiler throws an error if the `factory` method is provided an argument which is not a collection...
{
	chebyshevSeries.factory( 5 ); // $ExpectError
	chebyshevSeries.factory( true ); // $ExpectError
	chebyshevSeries.factory( false ); // $ExpectError
	chebyshevSeries.factory( null ); // $ExpectError
	chebyshevSeries.factory( undefined ); // $ExpectError
	chebyshevSeries.factory( {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	chebyshevSeries.factory(); // $ExpectError
	chebyshevSeries.factory( [ 1.0, 2.0 ], 3.0 ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an argument which is not a number...
{
	const evaluate = chebyshevSeries.factory( [ 1.0, 0.5 ] );
	evaluate( '5' ); // $ExpectError
	evaluate( true ); // $ExpectError
	evaluate( false ); // $ExpectError
	evaluate( null ); // $ExpectError
	evaluate( undefined ); // $ExpectError
	evaluate( [] ); // $ExpectError
	evaluate( {} ); // $ExpectError
	evaluate( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const evaluate = chebyshevSeries.factory( [ 1.0, 0.5 ] );
	evaluate(); // $ExpectError
	evaluate( 1.0, 2.0 ); // $ExpectError
}
