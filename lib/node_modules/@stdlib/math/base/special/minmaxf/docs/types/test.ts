/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import minmaxf = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	minmaxf( 3.0, -0.2 ); // $ExpectType [number, number]
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	minmaxf( true, 1.2 ); // $ExpectError
	minmaxf( false, 1.2 ); // $ExpectError
	minmaxf( [], 1.2 ); // $ExpectError
	minmaxf( {}, 1.2 ); // $ExpectError
	minmaxf( 'abc', 1.2 ); // $ExpectError
	minmaxf( ( x: number ): number => x, 1.2 ); // $ExpectError

	minmaxf( 1.2, true ); // $ExpectError
	minmaxf( 1.2, false ); // $ExpectError
	minmaxf( 1.2, [] ); // $ExpectError
	minmaxf( 1.2, {} ); // $ExpectError
	minmaxf( 1.2, 'abc' ); // $ExpectError
	minmaxf( 1.2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	minmaxf(); // $ExpectError
	minmaxf( -0.2 ); // $ExpectError
	minmaxf( 3.0, -0.2, 1.0 ); // $ExpectError
	minmaxf( 3.0, -0.2, -1.2, -4.0 ); // $ExpectError
	minmaxf( 3.0, -0.2, -1.2, -4.0, 5.0 ); // $ExpectError
	minmaxf( 3.0, -0.2, -1.2, -4.0, 5.0, 6.0 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0.0, 0.0 ];

	minmaxf.assign( 3.0, -0.2, out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmaxf.assign( true, -0.2, out, 1, 0 ); // $ExpectError
	minmaxf.assign( false, -0.2, out, 1, 0 ); // $ExpectError
	minmaxf.assign( '5', -0.2, out, 1, 0 ); // $ExpectError
	minmaxf.assign( null, -0.2, out, 1, 0 ); // $ExpectError
	minmaxf.assign( [], -0.2, out, 1, 0 ); // $ExpectError
	minmaxf.assign( {}, -0.2, out, 1, 0 ); // $ExpectError
	minmaxf.assign( ( x: number ): number => x, -0.2, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmaxf.assign( 1.0, false, out, 1, 0 ); // $ExpectError
	minmaxf.assign( 1.0, '5', out, 1, 0 ); // $ExpectError
	minmaxf.assign( 1.0, null, out, 1, 0 ); // $ExpectError
	minmaxf.assign( 1.0, [], out, 1, 0 ); // $ExpectError
	minmaxf.assign( 1.0, {}, out, 1, 0 ); // $ExpectError
	minmaxf.assign( 1.0, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid third argument...
{
	minmaxf.assign( 1.0, 2.0, false, 1, 0 ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, null, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid fourth argument...
{
	const out = [ 0.0, 0.0 ];

	minmaxf.assign( 1.0, 2.0, out, false, 0 ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, out, null, 0 ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, out, '5', 0 ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, out, [], 0 ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, out, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid fifth argument...
{
	const out = [ 0.0, 0.0 ];

	minmaxf.assign( 1.0, 2.0, out, 1, false ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, out, 1, null ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, out, 1, '5' ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, out, 1, [] ); // $ExpectError
	minmaxf.assign( 1.0, 2.0, out, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0.0 ];

	minmaxf.assign( out, 1, 0 ); // $ExpectError
	minmaxf.assign( 3.0, out, 1, 0 ); // $ExpectError
	minmaxf.assign( 3.0, -0.2, 1.0, out, 1, 0 ); // $ExpectError
	minmaxf.assign( 3.0, -0.2, -1.2, -4.0, out, 1, 0 ); // $ExpectError
	minmaxf.assign( 3.0, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectError
	minmaxf.assign( 3.0, -0.2, -1.2, -4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
}
