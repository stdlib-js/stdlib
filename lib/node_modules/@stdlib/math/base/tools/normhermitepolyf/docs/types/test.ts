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

import normhermitepolyf = require( './index' );


// TESTS //

// The function returns a number...
{
	normhermitepolyf( 6, 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	normhermitepolyf( true, 1.0 ); // $ExpectError
	normhermitepolyf( false, 1.0 ); // $ExpectError
	normhermitepolyf( 'abc', 1.0 ); // $ExpectError
	normhermitepolyf( [], 1.0 ); // $ExpectError
	normhermitepolyf( {}, 1.0 ); // $ExpectError
	normhermitepolyf( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	normhermitepolyf( 6, true ); // $ExpectError
	normhermitepolyf( 6, false ); // $ExpectError
	normhermitepolyf( 6, 'abc' ); // $ExpectError
	normhermitepolyf( 6, [] ); // $ExpectError
	normhermitepolyf( 6, {} ); // $ExpectError
	normhermitepolyf( 6, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	normhermitepolyf(); // $ExpectError
	normhermitepolyf( 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	normhermitepolyf.factory( 3 ); // $ExpectType PolynomialFunction
}

// The compiler throws an error if the `factory` method is provided a first argument which is not a number...
{
	normhermitepolyf.factory( true ); // $ExpectError
	normhermitepolyf.factory( false ); // $ExpectError
	normhermitepolyf.factory( 'abc' ); // $ExpectError
	normhermitepolyf.factory( [] ); // $ExpectError
	normhermitepolyf.factory( {} ); // $ExpectError
	normhermitepolyf.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	normhermitepolyf.factory(); // $ExpectError
	normhermitepolyf.factory( 4, 21 ); // $ExpectError
}

// The `factory` method returns a function which returns a number...
{
	const polyval = normhermitepolyf.factory( 3 );
	polyval( 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided a first argument which is not a number...
{
	const polyval = normhermitepolyf.factory( 3 );
	polyval( true ); // $ExpectError
	polyval( false ); // $ExpectError
	polyval( 'abc' ); // $ExpectError
	polyval( [] ); // $ExpectError
	polyval( {} ); // $ExpectError
	polyval( ( x: number ): number => x ); // $ExpectError
}
