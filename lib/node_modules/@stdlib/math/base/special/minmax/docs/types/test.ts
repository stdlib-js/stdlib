/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import minmax = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	minmax( 3.0, -0.2 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	minmax( true, 1.2 ); // $ExpectError
	minmax( false, 1.2 ); // $ExpectError
	minmax( [], 1.2 ); // $ExpectError
	minmax( {}, 1.2 ); // $ExpectError
	minmax( 'abc', 1.2 ); // $ExpectError
	minmax( ( x: number ): number => x, 1.2 ); // $ExpectError

	minmax( 1.2, true ); // $ExpectError
	minmax( 1.2, false ); // $ExpectError
	minmax( 1.2, [] ); // $ExpectError
	minmax( 1.2, {} ); // $ExpectError
	minmax( 1.2, 'abc' ); // $ExpectError
	minmax( 1.2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	minmax(); // $ExpectError
	minmax( -0.2 ); // $ExpectError
	minmax( 3.0, -0.2, 1.0 ); // $ExpectError
	minmax( 3.0, -0.2, -1.2, -4.0 ); // $ExpectError
	minmax( 3.0, -0.2, -1.2, -4.0, 5.0 ); // $ExpectError
	minmax( 3.0, -0.2, -1.2, -4.0, 5.0, 6.0 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 3.0, -0.2, out, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( true, -0.2, out, 1, 0 ); // $ExpectError
	minmax.assign( false, -0.2, out, 1, 0 ); // $ExpectError
	minmax.assign( '5', -0.2, out, 1, 0 ); // $ExpectError
	minmax.assign( null, -0.2, out, 1, 0 ); // $ExpectError
	minmax.assign( [], -0.2, out, 1, 0 ); // $ExpectError
	minmax.assign( {}, -0.2, out, 1, 0 ); // $ExpectError
	minmax.assign( ( x: number ): number => x, -0.2, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 1.0, false, out, 1, 0 ); // $ExpectError
	minmax.assign( 1.0, '5', out, 1, 0 ); // $ExpectError
	minmax.assign( 1.0, null, out, 1, 0 ); // $ExpectError
	minmax.assign( 1.0, [], out, 1, 0 ); // $ExpectError
	minmax.assign( 1.0, {}, out, 1, 0 ); // $ExpectError
	minmax.assign( 1.0, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid third argument...
{
	minmax.assign( 1.0, 2.0, false, 1, 0 ); // $ExpectError
	minmax.assign( 1.0, 2.0, null, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid fourth argument...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 1.0, 2.0, out, false, 0 ); // $ExpectError
	minmax.assign( 1.0, 2.0, out, null, 0 ); // $ExpectError
	minmax.assign( 1.0, 2.0, out, '5', 0 ); // $ExpectError
	minmax.assign( 1.0, 2.0, out, [], 0 ); // $ExpectError
	minmax.assign( 1.0, 2.0, out, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid fifth argument...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 1.0, 2.0, out, 1, false ); // $ExpectError
	minmax.assign( 1.0, 2.0, out, 1, null ); // $ExpectError
	minmax.assign( 1.0, 2.0, out, 1, '5' ); // $ExpectError
	minmax.assign( 1.0, 2.0, out, 1, [] ); // $ExpectError
	minmax.assign( 1.0, 2.0, out, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( out, 1, 0 ); // $ExpectError
	minmax.assign( 3.0, out, 1, 0 ); // $ExpectError
	minmax.assign( 3.0, -0.2, 1.0, out, 1, 0 ); // $ExpectError
	minmax.assign( 3.0, -0.2, -1.2, -4.0, out, 1, 0 ); // $ExpectError
	minmax.assign( 3.0, -0.2, -1.2, -4.0, 5.0, out, 1, 0 ); // $ExpectError
	minmax.assign( 3.0, -0.2, -1.2, -4.0, 5.0, 6.0, out, 1, 0 ); // $ExpectError
}
