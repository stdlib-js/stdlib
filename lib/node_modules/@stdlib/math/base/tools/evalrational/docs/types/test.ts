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

import evalrational = require( './index' );


// TESTS //

// The function returns a number...
{
	evalrational( [ -6.0, -5.0 ], [ 3.0, 0.5 ], 6.0 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not an array of numbers...
{
	const Q = [ 3.0, 0.5 ];
	evalrational( true, Q, 6.0 ); // $ExpectError
	evalrational( false, Q, 6.0 ); // $ExpectError
	evalrational( 'abc', Q, 6.0 ); // $ExpectError
	evalrational( 123, Q, 6.0 ); // $ExpectError
	evalrational( {}, Q, 6.0 ); // $ExpectError
	evalrational( ( x: number ): number => x, Q, 6.0 ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array of numbers...
{
	const P = [ -6.0, -5.0 ];
	evalrational( P, true, 6.0 ); // $ExpectError
	evalrational( P, false, 6.0 ); // $ExpectError
	evalrational( P, 'abc', 6.0 ); // $ExpectError
	evalrational( P, 123, 6.0 ); // $ExpectError
	evalrational( P, {}, 6.0 ); // $ExpectError
	evalrational( P, ( x: number ): number => x, 6.0 ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];
	evalrational( P, Q, true ); // $ExpectError
	evalrational( P, Q, false ); // $ExpectError
	evalrational( P, Q, 'abc' ); // $ExpectError
	evalrational( P, Q, [] ); // $ExpectError
	evalrational( P, Q, {} ); // $ExpectError
	evalrational( P, Q, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];
	evalrational(); // $ExpectError
	evalrational( P ); // $ExpectError
	evalrational( P, Q ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];
	evalrational.factory( P, Q ); // $ExpectType EvaluationFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];
	evalrational.factory(); // $ExpectError
	evalrational.factory( P ); // $ExpectError
	evalrational.factory( P, Q, 3 ); // $ExpectError
}

// The `factory` method returns a function which returns a number...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];
	const polyval = evalrational.factory( P, Q );
	polyval( 1.0 ); // $ExpectType number
}

// The `factory` method returns a function which does not compile if provided a first argument which is not a number...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];
	const polyval = evalrational.factory( P, Q );
	polyval( true ); // $ExpectError
	polyval( false ); // $ExpectError
	polyval( 'abc' ); // $ExpectError
	polyval( [] ); // $ExpectError
	polyval( {} ); // $ExpectError
	polyval( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a first argument which is not an array of numbers...
{
	const Q = [ 3.0, 0.5 ];
	evalrational.factory( true, Q ); // $ExpectError
	evalrational.factory( false, Q ); // $ExpectError
	evalrational.factory( 'abc', Q ); // $ExpectError
	evalrational.factory( 123, Q ); // $ExpectError
	evalrational.factory( {}, Q ); // $ExpectError
	evalrational.factory( ( x: number ): number => x, Q ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a second argument which is not an array of numbers...
{
	const P = [ -6.0, -5.0 ];
	evalrational.factory( P, true ); // $ExpectError
	evalrational.factory( P, false ); // $ExpectError
	evalrational.factory( P, 'abc' ); // $ExpectError
	evalrational.factory( P, 123 ); // $ExpectError
	evalrational.factory( P, {} ); // $ExpectError
	evalrational.factory( P, ( x: number ): number => x ); // $ExpectError
}
