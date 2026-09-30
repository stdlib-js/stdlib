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

import sminheapSiftDown = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown( x.length, 0, 1.0, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown( '10', 0, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( true, 0, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( false, 0, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( null, 0, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( undefined, 0, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( [], 0, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( {}, 0, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( ( x: number ): number => x, 0, 1.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown( x.length, '10', 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, true, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, false, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, null, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, undefined, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, [], 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, {}, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, ( x: number ): number => x, 1.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown( x.length, 0, '10', x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, true, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, false, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, null, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, undefined, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, [], x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, {}, x, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown( x.length, 0, 1.0, 10, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, '10', 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, true, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, false, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, null, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, undefined, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, [], 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, {}, 1 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown( x.length, 0, 1.0, x, '10' ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x, true ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x, false ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x, null ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x, undefined ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x, [] ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x, {} ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown(); // $ExpectError
	sminheapSiftDown( x.length ); // $ExpectError
	sminheapSiftDown( x.length, 0 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0 ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x ); // $ExpectError
	sminheapSiftDown( x.length, 0, 1.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown.ndarray( '10', 0, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( true, 0, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( false, 0, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( null, 0, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( undefined, 0, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( [], 0, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( {}, 0, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( ( x: number ): number => x, 0, 1.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown.ndarray( x.length, '10', 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, true, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, false, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, null, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, undefined, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, [], 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, {}, 1.0, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, ( x: number ): number => x, 1.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown.ndarray( x.length, 0, '10', x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, true, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, false, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, null, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, undefined, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, [], x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, {}, x, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown.ndarray( x.length, 0, 1.0, 10, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, '10', 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, true, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, false, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, null, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, undefined, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, [], 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, {}, 1, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, '10', 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, true, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, false, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, null, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, undefined, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, [], 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, {}, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, '10' ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, true ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, false ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, null ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, undefined ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, [] ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, {} ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sminheapSiftDown.ndarray(); // $ExpectError
	sminheapSiftDown.ndarray( x.length ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1 ); // $ExpectError
	sminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, 0, 10 ); // $ExpectError
}
