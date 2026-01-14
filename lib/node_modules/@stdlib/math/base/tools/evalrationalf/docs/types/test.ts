/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import evalrationalf = require( './index' );


// TESTS //

// The function returns a number...
{
	evalrationalf( [ -6.0, -5.0 ], [ 3.0, 0.5 ], 6.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	const Q = [ 3.0, 0.5 ];

	evalrationalf( true, Q, 6.0 ); // $ExpectError
	evalrationalf( false, Q, 6.0 ); // $ExpectError
	evalrationalf( 'abc', Q, 6.0 ); // $ExpectError
	evalrationalf( 123, Q, 6.0 ); // $ExpectError
	evalrationalf( {}, Q, 6.0 ); // $ExpectError
	evalrationalf( ( x: number ): number => x, Q, 6.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const P = [ -6.0, -5.0 ];

	evalrationalf( P, true, 6.0 ); // $ExpectError
	evalrationalf( P, false, 6.0 ); // $ExpectError
	evalrationalf( P, 'abc', 6.0 ); // $ExpectError
	evalrationalf( P, 123, 6.0 ); // $ExpectError
	evalrationalf( P, {}, 6.0 ); // $ExpectError
	evalrationalf( P, ( x: number ): number => x, 6.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];

	evalrationalf( P, Q, true ); // $ExpectError
	evalrationalf( P, Q, false ); // $ExpectError
	evalrationalf( P, Q, 'abc' ); // $ExpectError
	evalrationalf( P, Q, [] ); // $ExpectError
	evalrationalf( P, Q, {} ); // $ExpectError
	evalrationalf( P, Q, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];

	evalrationalf(); // $ExpectError
	evalrationalf( P ); // $ExpectError
	evalrationalf( P, Q ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];

	evalrationalf.factory( P, Q ); // $ExpectType PolynomialFunction
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];

	evalrationalf.factory(); // $ExpectError
	evalrationalf.factory( P ); // $ExpectError
	evalrationalf.factory( P, Q, 3 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a first argument which is not an array of numbers...
{
	const Q = [ 3.0, 0.5 ];

	evalrationalf.factory( true, Q ); // $ExpectError
	evalrationalf.factory( false, Q ); // $ExpectError
	evalrationalf.factory( 'abc', Q ); // $ExpectError
	evalrationalf.factory( 123, Q ); // $ExpectError
	evalrationalf.factory( {}, Q ); // $ExpectError
	evalrationalf.factory( ( x: number ): number => x, Q ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a second argument which is not an array of numbers...
{
	const P = [ -6.0, -5.0 ];

	evalrationalf.factory( P, true ); // $ExpectError
	evalrationalf.factory( P, false ); // $ExpectError
	evalrationalf.factory( P, 'abc' ); // $ExpectError
	evalrationalf.factory( P, 123 ); // $ExpectError
	evalrationalf.factory( P, {} ); // $ExpectError
	evalrationalf.factory( P, ( x: number ): number => x ); // $ExpectError
}

// The `factory` method returns a function which returns a number...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];

	const polyval = evalrationalf.factory( P, Q );
	polyval( 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided a first argument which is not a number...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];

	const polyval = evalrationalf.factory( P, Q );
	polyval( true ); // $ExpectError
	polyval( false ); // $ExpectError
	polyval( 'abc' ); // $ExpectError
	polyval( [] ); // $ExpectError
	polyval( {} ); // $ExpectError
	polyval( ( x: number ): number => x ); // $ExpectError
}
