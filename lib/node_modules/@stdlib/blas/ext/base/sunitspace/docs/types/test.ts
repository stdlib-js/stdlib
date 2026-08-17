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

import sunitspace = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );

	sunitspace( x.length, 3.0, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sunitspace( '10', 3.0, x, 1 ); // $ExpectError
	sunitspace( true, 3.0, x, 1 ); // $ExpectError
	sunitspace( false, 3.0, x, 1 ); // $ExpectError
	sunitspace( null, 3.0, x, 1 ); // $ExpectError
	sunitspace( undefined, 3.0, x, 1 ); // $ExpectError
	sunitspace( [], 3.0, x, 1 ); // $ExpectError
	sunitspace( {}, 3.0, x, 1 ); // $ExpectError
	sunitspace( ( x: number ): number => x, 3.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	sunitspace( x.length, '10', x, 1 ); // $ExpectError
	sunitspace( x.length, true, x, 1 ); // $ExpectError
	sunitspace( x.length, false, x, 1 ); // $ExpectError
	sunitspace( x.length, null, x, 1 ); // $ExpectError
	sunitspace( x.length, undefined, x, 1 ); // $ExpectError
	sunitspace( x.length, [], x, 1 ); // $ExpectError
	sunitspace( x.length, {}, x, 1 ); // $ExpectError
	sunitspace( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	sunitspace( 10, 3.0, 10, 1 ); // $ExpectError
	sunitspace( 10, 3.0, '10', 1 ); // $ExpectError
	sunitspace( 10, 3.0, true, 1 ); // $ExpectError
	sunitspace( 10, 3.0, false, 1 ); // $ExpectError
	sunitspace( 10, 3.0, null, 1 ); // $ExpectError
	sunitspace( 10, 3.0, undefined, 1 ); // $ExpectError
	sunitspace( 10, 3.0, [], 1 ); // $ExpectError
	sunitspace( 10, 3.0, {}, 1 ); // $ExpectError
	sunitspace( 10, 3.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sunitspace( x.length, 3.0, x, '10' ); // $ExpectError
	sunitspace( x.length, 3.0, x, true ); // $ExpectError
	sunitspace( x.length, 3.0, x, false ); // $ExpectError
	sunitspace( x.length, 3.0, x, null ); // $ExpectError
	sunitspace( x.length, 3.0, x, undefined ); // $ExpectError
	sunitspace( x.length, 3.0, x, [] ); // $ExpectError
	sunitspace( x.length, 3.0, x, {} ); // $ExpectError
	sunitspace( x.length, 3.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sunitspace(); // $ExpectError
	sunitspace( x.length ); // $ExpectError
	sunitspace( x.length, 3.0 ); // $ExpectError
	sunitspace( x.length, 3.0, x ); // $ExpectError
	sunitspace( x.length, 3.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );

	sunitspace.ndarray( x.length, 3.0, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sunitspace.ndarray( '10', 3.0, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( true, 3.0, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( false, 3.0, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( null, 3.0, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( undefined, 3.0, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( [], 3.0, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( {}, 3.0, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( ( x: number ): number => x, 3.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	sunitspace.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	sunitspace.ndarray( 10, 3.0, 10, 1, 0 ); // $ExpectError
	sunitspace.ndarray( 10, 3.0, '10', 1, 0 ); // $ExpectError
	sunitspace.ndarray( 10, 3.0, true, 1, 0 ); // $ExpectError
	sunitspace.ndarray( 10, 3.0, false, 1, 0 ); // $ExpectError
	sunitspace.ndarray( 10, 3.0, null, 1, 0 ); // $ExpectError
	sunitspace.ndarray( 10, 3.0, undefined, 1, 0 ); // $ExpectError
	sunitspace.ndarray( 10, 3.0, [], 1, 0 ); // $ExpectError
	sunitspace.ndarray( 10, 3.0, {}, 1, 0 ); // $ExpectError
	sunitspace.ndarray( 10, 3.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sunitspace.ndarray( x.length, 3.0, x, '10', 0 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, true, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, false, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, null, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, undefined, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, [], 0 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, {}, 0 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sunitspace.ndarray( x.length, 3.0, x, 1, '10' ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1, true ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1, false ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1, null ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1, undefined ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1, [] ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1, {} ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sunitspace.ndarray(); // $ExpectError
	sunitspace.ndarray( x.length ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1 ); // $ExpectError
	sunitspace.ndarray( x.length, 3.0, x, 1, 0, 10 ); // $ExpectError
}
