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

import evalpoly = require( './index' );


// TESTS //

// The function returns a number...
{
	evalpoly( [ 3.0, 2.0, 1.0 ], 10.0 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not an array of numbers...
{
	evalpoly( true, 10.0 ); // $ExpectError
	evalpoly( false, 10.0 ); // $ExpectError
	evalpoly( 'abc', 10.0 ); // $ExpectError
	evalpoly( 123, 10.0 ); // $ExpectError
	evalpoly( {}, 10.0 ); // $ExpectError
	evalpoly( ( x: number ): number => x, 10.0 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not a number...
{
	const c = [ 3.0, 2.0, 1.0 ];
	evalpoly( c, true ); // $ExpectError
	evalpoly( c, false ); // $ExpectError
	evalpoly( c, 'abc' ); // $ExpectError
	evalpoly( c, [] ); // $ExpectError
	evalpoly( c, {} ); // $ExpectError
	evalpoly( c, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	const c = [ 3.0, 2.0, 1.0 ];
	evalpoly(); // $ExpectError
	evalpoly( c ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	const c = [ 3.0, 2.0, 1.0 ];
	evalpoly.factory( c ); // $ExpectType EvaluationFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	const c = [ 3.0, 2.0, 1.0 ];
	evalpoly.factory(); // $ExpectError
	evalpoly.factory( c, 2.0 ); // $ExpectError
}

// The `factory` method returns a function which returns a number...
{
	const c = [ 3.0, 2.0, 1.0 ];
	const polyval = evalpoly.factory( c );
	polyval( 1.0 ); // $ExpectType number
}

// The `factory` method returns a function which does not compile if provided a first argument which is not a number...
{
	const c = [ 3.0, 2.0, 1.0 ];
	const polyval = evalpoly.factory( c );
	polyval( true ); // $ExpectError
	polyval( false ); // $ExpectError
	polyval( 'abc' ); // $ExpectError
	polyval( [] ); // $ExpectError
	polyval( {} ); // $ExpectError
	polyval( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a first argument which is not an array of numbers...
{
	evalpoly.factory( true ); // $ExpectError
	evalpoly.factory( false ); // $ExpectError
	evalpoly.factory( 'abc' ); // $ExpectError
	evalpoly.factory( 123 ); // $ExpectError
	evalpoly.factory( {} ); // $ExpectError
	evalpoly.factory( ( x: number ): number => x ); // $ExpectError
}
