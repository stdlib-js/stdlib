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

import evalpolyf = require( './index' );


// TESTS //

// The function returns a number...
{
	evalpolyf( [ 3.0, 2.0, 1.0 ], 10.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	evalpolyf( true, 10.0 ); // $ExpectError
	evalpolyf( false, 10.0 ); // $ExpectError
	evalpolyf( 'abc', 10.0 ); // $ExpectError
	evalpolyf( 123, 10.0 ); // $ExpectError
	evalpolyf( {}, 10.0 ); // $ExpectError
	evalpolyf( ( x: number ): number => x, 10.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const c = [ 3.0, 2.0, 1.0 ];
	evalpolyf( c, true ); // $ExpectError
	evalpolyf( c, false ); // $ExpectError
	evalpolyf( c, 'abc' ); // $ExpectError
	evalpolyf( c, [] ); // $ExpectError
	evalpolyf( c, {} ); // $ExpectError
	evalpolyf( c, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	const c = [ 3.0, 2.0, 1.0 ];
	evalpolyf(); // $ExpectError
	evalpolyf( c ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	const c = [ 3.0, 2.0, 1.0 ];
	evalpolyf.factory( c ); // $ExpectType PolynomialFunction
}

// The compiler throws an error if the `factory` method is provided a first argument which is not an array of numbers...
{
	evalpolyf.factory( true ); // $ExpectError
	evalpolyf.factory( false ); // $ExpectError
	evalpolyf.factory( 'abc' ); // $ExpectError
	evalpolyf.factory( 123 ); // $ExpectError
	evalpolyf.factory( {} ); // $ExpectError
	evalpolyf.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	const c = [ 3.0, 2.0, 1.0 ];
	evalpolyf.factory(); // $ExpectError
	evalpolyf.factory( c, 2.0 ); // $ExpectError
}

// The `factory` method returns a function which returns a number...
{
	const c = [ 3.0, 2.0, 1.0 ];
	const polyval = evalpolyf.factory( c );
	polyval( 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided a first argument which is not a number...
{
	const c = [ 3.0, 2.0, 1.0 ];
	const polyval = evalpolyf.factory( c );
	polyval( true ); // $ExpectError
	polyval( false ); // $ExpectError
	polyval( 'abc' ); // $ExpectError
	polyval( [] ); // $ExpectError
	polyval( {} ); // $ExpectError
	polyval( ( x: number ): number => x ); // $ExpectError
}
