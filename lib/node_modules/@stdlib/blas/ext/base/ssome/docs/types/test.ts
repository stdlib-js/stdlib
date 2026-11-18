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

/* eslint-disable space-in-parens */

import ssome = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = new Float32Array( 10 );

	ssome( x.length, 5, x, 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssome( '10', 5, x, 1 ); // $ExpectError
	ssome( true, 5, x, 1 ); // $ExpectError
	ssome( false, 5, x, 1 ); // $ExpectError
	ssome( null, 5, x, 1 ); // $ExpectError
	ssome( undefined, 5, x, 1 ); // $ExpectError
	ssome( [], 5, x, 1 ); // $ExpectError
	ssome( {}, 5, x, 1 ); // $ExpectError
	ssome( ( x: number ): number => x, 5, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssome( x.length, '5', x, 1 ); // $ExpectError
	ssome( x.length, true, x, 1 ); // $ExpectError
	ssome( x.length, false, x, 1 ); // $ExpectError
	ssome( x.length, null, x, 1 ); // $ExpectError
	ssome( x.length, undefined, x, 1 ); // $ExpectError
	ssome( x.length, [], x, 1 ); // $ExpectError
	ssome( x.length, {}, x, 1 ); // $ExpectError
	ssome( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	ssome( x.length, 5, '10', 1 ); // $ExpectError
	ssome( x.length, 5, true, 1 ); // $ExpectError
	ssome( x.length, 5, false, 1 ); // $ExpectError
	ssome( x.length, 5, null, 1 ); // $ExpectError
	ssome( x.length, 5, undefined, 1 ); // $ExpectError
	ssome( x.length, 5, [], 1 ); // $ExpectError
	ssome( x.length, 5, {}, 1 ); // $ExpectError
	ssome( x.length, 5, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssome( x.length, 5, x, '1' ); // $ExpectError
	ssome( x.length, 5, x, true ); // $ExpectError
	ssome( x.length, 5, x, false ); // $ExpectError
	ssome( x.length, 5, x, null ); // $ExpectError
	ssome( x.length, 5, x, undefined ); // $ExpectError
	ssome( x.length, 5, x, [] ); // $ExpectError
	ssome( x.length, 5, x, {} ); // $ExpectError
	ssome( x.length, 5, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	ssome(); // $ExpectError
	ssome( x.length ); // $ExpectError
	ssome( x.length, 5 ); // $ExpectError
	ssome( x.length, 5, x ); // $ExpectError
	ssome( x.length, 5, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a boolean...
{
	const x = new Float32Array( 10 );

	ssome.ndarray( x.length, 5, x, 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssome.ndarray( '10', 5, x, 1, 0 ); // $ExpectError
	ssome.ndarray( true, 5, x, 1, 0 ); // $ExpectError
	ssome.ndarray( false, 5, x, 1, 0 ); // $ExpectError
	ssome.ndarray( null, 5, x, 1, 0 ); // $ExpectError
	ssome.ndarray( undefined, 5, x, 1, 0 ); // $ExpectError
	ssome.ndarray( [], 5, x, 1, 0 ); // $ExpectError
	ssome.ndarray( {}, 5, x, 1, 0 ); // $ExpectError
	ssome.ndarray( ( x: number ): number => x, 5, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssome.ndarray( x.length, '5', x, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	ssome.ndarray( x.length, 5, '10', 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, true, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, false, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, null, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, undefined, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, [], 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, {}, 1, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssome.ndarray( x.length, 5, x, '1', 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, x, true, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, x, false, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, x, null, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, x, undefined, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, x, [], 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, x, {}, 0 ); // $ExpectError
	ssome.ndarray( x.length, 5, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssome.ndarray( x.length, 5, x, 1, '0' ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1, true ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1, false ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1, null ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1, undefined ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1, [] ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1, {} ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	ssome.ndarray(); // $ExpectError
	ssome.ndarray( x.length ); // $ExpectError
	ssome.ndarray( x.length, 5 ); // $ExpectError
	ssome.ndarray( x.length, 5, x ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1 ); // $ExpectError
	ssome.ndarray( x.length, 5, x, 1, 0, {} ); // $ExpectError
}
