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

import sstdevtk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	sstdevtk( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevtk( '10', 1, x, 1 ); // $ExpectError
	sstdevtk( true, 1, x, 1 ); // $ExpectError
	sstdevtk( false, 1, x, 1 ); // $ExpectError
	sstdevtk( null, 1, x, 1 ); // $ExpectError
	sstdevtk( undefined, 1, x, 1 ); // $ExpectError
	sstdevtk( [], 1, x, 1 ); // $ExpectError
	sstdevtk( {}, 1, x, 1 ); // $ExpectError
	sstdevtk( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevtk( x.length, '10', x, 1 ); // $ExpectError
	sstdevtk( x.length, true, x, 1 ); // $ExpectError
	sstdevtk( x.length, false, x, 1 ); // $ExpectError
	sstdevtk( x.length, null, x, 1 ); // $ExpectError
	sstdevtk( x.length, undefined, x, 1 ); // $ExpectError
	sstdevtk( x.length, [], x, 1 ); // $ExpectError
	sstdevtk( x.length, {}, x, 1 ); // $ExpectError
	sstdevtk( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sstdevtk( x.length, 1, 10, 1 ); // $ExpectError
	sstdevtk( x.length, 1, '10', 1 ); // $ExpectError
	sstdevtk( x.length, 1, true, 1 ); // $ExpectError
	sstdevtk( x.length, 1, false, 1 ); // $ExpectError
	sstdevtk( x.length, 1, null, 1 ); // $ExpectError
	sstdevtk( x.length, 1, undefined, 1 ); // $ExpectError
	sstdevtk( x.length, 1, [], 1 ); // $ExpectError
	sstdevtk( x.length, 1, {}, 1 ); // $ExpectError
	sstdevtk( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevtk( x.length, 1, x, '10' ); // $ExpectError
	sstdevtk( x.length, 1, x, true ); // $ExpectError
	sstdevtk( x.length, 1, x, false ); // $ExpectError
	sstdevtk( x.length, 1, x, null ); // $ExpectError
	sstdevtk( x.length, 1, x, undefined ); // $ExpectError
	sstdevtk( x.length, 1, x, [] ); // $ExpectError
	sstdevtk( x.length, 1, x, {} ); // $ExpectError
	sstdevtk( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sstdevtk(); // $ExpectError
	sstdevtk( x.length ); // $ExpectError
	sstdevtk( x.length, 1 ); // $ExpectError
	sstdevtk( x.length, 1, x ); // $ExpectError
	sstdevtk( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	sstdevtk.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevtk.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevtk.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sstdevtk.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevtk.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevtk.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sstdevtk.ndarray(); // $ExpectError
	sstdevtk.ndarray( x.length ); // $ExpectError
	sstdevtk.ndarray( x.length, 1 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1 ); // $ExpectError
	sstdevtk.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}
