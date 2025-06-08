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

import sstdevyc = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	sstdevyc( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevyc( '10', 1, x, 1 ); // $ExpectError
	sstdevyc( true, 1, x, 1 ); // $ExpectError
	sstdevyc( false, 1, x, 1 ); // $ExpectError
	sstdevyc( null, 1, x, 1 ); // $ExpectError
	sstdevyc( undefined, 1, x, 1 ); // $ExpectError
	sstdevyc( [], 1, x, 1 ); // $ExpectError
	sstdevyc( {}, 1, x, 1 ); // $ExpectError
	sstdevyc( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevyc( x.length, '10', x, 1 ); // $ExpectError
	sstdevyc( x.length, true, x, 1 ); // $ExpectError
	sstdevyc( x.length, false, x, 1 ); // $ExpectError
	sstdevyc( x.length, null, x, 1 ); // $ExpectError
	sstdevyc( x.length, undefined, x, 1 ); // $ExpectError
	sstdevyc( x.length, [], x, 1 ); // $ExpectError
	sstdevyc( x.length, {}, x, 1 ); // $ExpectError
	sstdevyc( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sstdevyc( x.length, 1, 10, 1 ); // $ExpectError
	sstdevyc( x.length, 1, '10', 1 ); // $ExpectError
	sstdevyc( x.length, 1, true, 1 ); // $ExpectError
	sstdevyc( x.length, 1, false, 1 ); // $ExpectError
	sstdevyc( x.length, 1, null, 1 ); // $ExpectError
	sstdevyc( x.length, 1, undefined, 1 ); // $ExpectError
	sstdevyc( x.length, 1, [], 1 ); // $ExpectError
	sstdevyc( x.length, 1, {}, 1 ); // $ExpectError
	sstdevyc( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevyc( x.length, 1, x, '10' ); // $ExpectError
	sstdevyc( x.length, 1, x, true ); // $ExpectError
	sstdevyc( x.length, 1, x, false ); // $ExpectError
	sstdevyc( x.length, 1, x, null ); // $ExpectError
	sstdevyc( x.length, 1, x, undefined ); // $ExpectError
	sstdevyc( x.length, 1, x, [] ); // $ExpectError
	sstdevyc( x.length, 1, x, {} ); // $ExpectError
	sstdevyc( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sstdevyc(); // $ExpectError
	sstdevyc( x.length ); // $ExpectError
	sstdevyc( x.length, 1 ); // $ExpectError
	sstdevyc( x.length, 1, x ); // $ExpectError
	sstdevyc( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	sstdevyc.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevyc.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevyc.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sstdevyc.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevyc.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sstdevyc.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sstdevyc.ndarray(); // $ExpectError
	sstdevyc.ndarray( x.length ); // $ExpectError
	sstdevyc.ndarray( x.length, 1 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1 ); // $ExpectError
	sstdevyc.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}
