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
	minmax(); // $ExpectType number[]
	minmax( -0.2 ); // $ExpectType number[]
	minmax( 3.0, -0.2 ); // $ExpectType number[]
	minmax( 3.0, -0.2, 1.0 ); // $ExpectType number[]
	minmax( 3.0, -0.2, -1.2, -4.0 ); // $ExpectType number[]
	minmax( 3.0, -0.2, -1.2, -4.0, 5.0 ); // $ExpectType number[]
	minmax( 3.0, -0.2, -1.2, -4.0, 5.0, 6.0 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided an argument which is not a number...
{
	minmax( true ); // $ExpectError
	minmax( false ); // $ExpectError
	minmax( [] ); // $ExpectError
	minmax( {} ); // $ExpectError
	minmax( 'abc' ); // $ExpectError
	minmax( ( x: number ): number => x ); // $ExpectError

	minmax( 1.2, true ); // $ExpectError
	minmax( 1.2, false ); // $ExpectError
	minmax( 1.2, [] ); // $ExpectError
	minmax( 1.2, {} ); // $ExpectError
	minmax( 1.2, 'abc' ); // $ExpectError
	minmax( 1.2, ( x: number ): number => x ); // $ExpectError

	minmax( 1.2, 3.0, true ); // $ExpectError
	minmax( 1.2, 3.0, false ); // $ExpectError
	minmax( 1.2, 3.0, [] ); // $ExpectError
	minmax( 1.2, 3.0, {} ); // $ExpectError
	minmax( 1.2, 3.0, 'abc' ); // $ExpectError
	minmax( 1.2, 3.0, ( x: number ): number => x ); // $ExpectError

	minmax( 1.2, 3.0, 4.0, true ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, false ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, [] ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, {} ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 'abc' ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, ( x: number ): number => x ); // $ExpectError

	minmax( 1.2, 3.0, 4.0, 5.0, true ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, false ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, [] ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, {} ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 'abc' ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, ( x: number ): number => x ); // $ExpectError

	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, true ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, false ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, [] ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, {} ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, 'abc' ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, ( x: number ): number => x ); // $ExpectError

	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, true ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, false ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, [] ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, {} ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, 'abc' ); // $ExpectError
	minmax( 1.2, 3.0, 4.0, 5.0, 6.0, 7.0, ( x: number ): number => x ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an array-like object containing numbers...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 1.2, 2.2, out, 1, 0 ); // $ExpectType Collection
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( true, false, false, out, 1, 0 ); // $ExpectError
	minmax.assign( false, false, false, out, 1, 0 ); // $ExpectError
	minmax.assign( '5', '3', '2', out, 1, 0 ); // $ExpectError
	minmax.assign( null, null, null, out, 1, 0 ); // $ExpectError
	minmax.assign( [], [], [], out, 1, 0 ); // $ExpectError
	minmax.assign( {}, {}, {}, out, 1, 0 ); // $ExpectError
	minmax.assign( ( x: number ): number => x, '3', '3', out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 1, false, false, out, 1, 0 ); // $ExpectError
	minmax.assign( 1, false, true, out, 1, 0 ); // $ExpectError
	minmax.assign( 1, '3', '2', out, 1, 0 ); // $ExpectError
	minmax.assign( 1, null, null, out, 1, 0 ); // $ExpectError
	minmax.assign( 1, [], [], out, 1, 0 ); // $ExpectError
	minmax.assign( 1, {}, {}, out, 1, 0 ); // $ExpectError
	minmax.assign( 1, ( x: number ): number => x, '3', out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object of numbers...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 1, 2, false, out, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, true, out, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, '2', out, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, null, out, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, ['3'], out, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, {}, out, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object of numbers...
{
	minmax.assign( 1, 2, false, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, true, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, null, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, {}, 1, 0 ); // $ExpectError
	minmax.assign( 1, 2, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 1, 2, out, false, 0 ); // $ExpectError
	minmax.assign( 1, 2, out, true, 0 ); // $ExpectError
	minmax.assign( 1, 2, out, '2', 0 ); // $ExpectError
	minmax.assign( 1, 2, out, null, 0 ); // $ExpectError
	minmax.assign( 1, 2, out, ['out'], 0 ); // $ExpectError
	minmax.assign( 1, 2, out, {}, 0 ); // $ExpectError
	minmax.assign( 1, 2, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign( 1, 2, out, 1, false ); // $ExpectError
	minmax.assign( 1, 2, out, 1, true ); // $ExpectError
	minmax.assign( 1, 2, out, 1, '2' ); // $ExpectError
	minmax.assign( 1, 2, out, 1, null ); // $ExpectError
	minmax.assign( 1, 2, out, 1, ['out'] ); // $ExpectError
	minmax.assign( 1, 2, out, 1, {} ); // $ExpectError
	minmax.assign( 1, 2, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0.0, 0.0 ];

	minmax.assign(); // $ExpectError
	minmax.assign( 1.0 ); // $ExpectError
	minmax.assign( 1.0, out ); // $ExpectError
	minmax.assign( 1.0, out, 1 ); // $ExpectError
	minmax.assign( 1.0, out, 1, 0, 1 ); // $ExpectError
	minmax.assign( 1.0, out, 1, 0, 1, 2, 0 ); // $ExpectError
}
