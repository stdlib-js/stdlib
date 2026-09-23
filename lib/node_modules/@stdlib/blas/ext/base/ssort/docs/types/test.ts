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

import ssort = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort( x.length, 1.0, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort( '10', 1.0, x, 1 ); // $ExpectError
	ssort( true, 1.0, x, 1 ); // $ExpectError
	ssort( false, 1.0, x, 1 ); // $ExpectError
	ssort( null, 1.0, x, 1 ); // $ExpectError
	ssort( undefined, 1.0, x, 1 ); // $ExpectError
	ssort( [], 1.0, x, 1 ); // $ExpectError
	ssort( {}, 1.0, x, 1 ); // $ExpectError
	ssort( ( x: number ): number => x, 1.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort( x.length, '10', x, 1 ); // $ExpectError
	ssort( x.length, true, x, 1 ); // $ExpectError
	ssort( x.length, false, x, 1 ); // $ExpectError
	ssort( x.length, null, x, 1 ); // $ExpectError
	ssort( x.length, undefined, x, 1 ); // $ExpectError
	ssort( x.length, [], x, 1 ); // $ExpectError
	ssort( x.length, {}, x, 1 ); // $ExpectError
	ssort( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort( x.length, 1.0, '10', 1 ); // $ExpectError
	ssort( x.length, 1.0, 10, 1 ); // $ExpectError
	ssort( x.length, 1.0, true, 1 ); // $ExpectError
	ssort( x.length, 1.0, false, 1 ); // $ExpectError
	ssort( x.length, 1.0, null, 1 ); // $ExpectError
	ssort( x.length, 1.0, undefined, 1 ); // $ExpectError
	ssort( x.length, 1.0, [], 1 ); // $ExpectError
	ssort( x.length, 1.0, {}, 1 ); // $ExpectError
	ssort( x.length, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort( x.length, 1.0, x, '10' ); // $ExpectError
	ssort( x.length, 1.0, x, true ); // $ExpectError
	ssort( x.length, 1.0, x, false ); // $ExpectError
	ssort( x.length, 1.0, x, null ); // $ExpectError
	ssort( x.length, 1.0, x, undefined ); // $ExpectError
	ssort( x.length, 1.0, x, [] ); // $ExpectError
	ssort( x.length, 1.0, x, {} ); // $ExpectError
	ssort( x.length, 1.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort(); // $ExpectError
	ssort( x.length ); // $ExpectError
	ssort( x.length, 1.0 ); // $ExpectError
	ssort( x.length, 1.0, x ); // $ExpectError
	ssort( x.length, 1.0, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort.ndarray( x.length, 1.0, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort.ndarray( '10', 1.0, x, 1, 0 ); // $ExpectError
	ssort.ndarray( true, 1.0, x, 1, 0 ); // $ExpectError
	ssort.ndarray( false, 1.0, x, 1, 0 ); // $ExpectError
	ssort.ndarray( null, 1.0, x, 1, 0 ); // $ExpectError
	ssort.ndarray( undefined, 1.0, x, 1, 0 ); // $ExpectError
	ssort.ndarray( [], 1.0, x, 1, 0 ); // $ExpectError
	ssort.ndarray( {}, 1.0, x, 1, 0 ); // $ExpectError
	ssort.ndarray( ( x: number ): number => x, 1.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort.ndarray( x.length, 1.0, '10', 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, 10, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, true, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, false, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, null, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, undefined, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, [], 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, {}, 1, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort.ndarray( x.length, 1.0, x, '10', 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, true, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, false, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, null, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, undefined, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, [], 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, {}, 0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort.ndarray( x.length, 1.0, x, 1, '10' ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1, true ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1, false ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1, null ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1, undefined ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1, [] ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1, {} ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ssort.ndarray(); // $ExpectError
	ssort.ndarray( x.length ); // $ExpectError
	ssort.ndarray( x.length, 1.0 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1 ); // $ExpectError
	ssort.ndarray( x.length, 1.0, x, 1, 0, {} ); // $ExpectError
}
