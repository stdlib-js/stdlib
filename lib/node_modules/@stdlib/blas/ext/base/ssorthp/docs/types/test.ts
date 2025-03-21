/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import ssorthp = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );

	ssorthp( x.length, 1, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssorthp( '10', 1, x, 1 ); // $ExpectError
	ssorthp( true, 1, x, 1 ); // $ExpectError
	ssorthp( false, 1, x, 1 ); // $ExpectError
	ssorthp( null, 1, x, 1 ); // $ExpectError
	ssorthp( undefined, 1, x, 1 ); // $ExpectError
	ssorthp( [], 1, x, 1 ); // $ExpectError
	ssorthp( {}, 1, x, 1 ); // $ExpectError
	ssorthp( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssorthp( x.length, '10', x, 1 ); // $ExpectError
	ssorthp( x.length, true, x, 1 ); // $ExpectError
	ssorthp( x.length, false, x, 1 ); // $ExpectError
	ssorthp( x.length, null, x, 1 ); // $ExpectError
	ssorthp( x.length, undefined, x, 1 ); // $ExpectError
	ssorthp( x.length, [], x, 1 ); // $ExpectError
	ssorthp( x.length, {}, x, 1 ); // $ExpectError
	ssorthp( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	ssorthp( x.length, 1, 10, 1 ); // $ExpectError
	ssorthp( x.length, 1, '10', 1 ); // $ExpectError
	ssorthp( x.length, 1, true, 1 ); // $ExpectError
	ssorthp( x.length, 1, false, 1 ); // $ExpectError
	ssorthp( x.length, 1, null, 1 ); // $ExpectError
	ssorthp( x.length, 1, undefined, 1 ); // $ExpectError
	ssorthp( x.length, 1, [], 1 ); // $ExpectError
	ssorthp( x.length, 1, {}, 1 ); // $ExpectError
	ssorthp( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssorthp( x.length, 1, x, '10' ); // $ExpectError
	ssorthp( x.length, 1, x, true ); // $ExpectError
	ssorthp( x.length, 1, x, false ); // $ExpectError
	ssorthp( x.length, 1, x, null ); // $ExpectError
	ssorthp( x.length, 1, x, undefined ); // $ExpectError
	ssorthp( x.length, 1, x, [] ); // $ExpectError
	ssorthp( x.length, 1, x, {} ); // $ExpectError
	ssorthp( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	ssorthp(); // $ExpectError
	ssorthp( x.length ); // $ExpectError
	ssorthp( x.length, 1 ); // $ExpectError
	ssorthp( x.length, 1, x ); // $ExpectError
	ssorthp( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );

	ssorthp.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssorthp.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssorthp.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	ssorthp.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssorthp.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	ssorthp.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	ssorthp.ndarray(); // $ExpectError
	ssorthp.ndarray( x.length ); // $ExpectError
	ssorthp.ndarray( x.length, 1 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1 ); // $ExpectError
	ssorthp.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}
