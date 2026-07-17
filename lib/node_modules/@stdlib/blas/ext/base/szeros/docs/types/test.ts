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

import szeros = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );

	szeros( x.length, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeros( '10', x, 1 ); // $ExpectError
	szeros( true, x, 1 ); // $ExpectError
	szeros( false, x, 1 ); // $ExpectError
	szeros( null, x, 1 ); // $ExpectError
	szeros( undefined, x, 1 ); // $ExpectError
	szeros( [], x, 1 ); // $ExpectError
	szeros( {}, x, 1 ); // $ExpectError
	szeros( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	szeros( x.length, 10, 1 ); // $ExpectError
	szeros( x.length, '10', 1 ); // $ExpectError
	szeros( x.length, true, 1 ); // $ExpectError
	szeros( x.length, false, 1 ); // $ExpectError
	szeros( x.length, null, 1 ); // $ExpectError
	szeros( x.length, undefined, 1 ); // $ExpectError
	szeros( x.length, [], 1 ); // $ExpectError
	szeros( x.length, {}, 1 ); // $ExpectError
	szeros( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeros( x.length, x, '10' ); // $ExpectError
	szeros( x.length, x, true ); // $ExpectError
	szeros( x.length, x, false ); // $ExpectError
	szeros( x.length, x, null ); // $ExpectError
	szeros( x.length, x, undefined ); // $ExpectError
	szeros( x.length, x, [] ); // $ExpectError
	szeros( x.length, x, {} ); // $ExpectError
	szeros( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	szeros(); // $ExpectError
	szeros( x.length ); // $ExpectError
	szeros( x.length, x ); // $ExpectError
	szeros( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );

	szeros.ndarray( x.length, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeros.ndarray( '10', x, 1, 0 ); // $ExpectError
	szeros.ndarray( true, x, 1, 0 ); // $ExpectError
	szeros.ndarray( false, x, 1, 0 ); // $ExpectError
	szeros.ndarray( null, x, 1, 0 ); // $ExpectError
	szeros.ndarray( undefined, x, 1, 0 ); // $ExpectError
	szeros.ndarray( [], x, 1, 0 ); // $ExpectError
	szeros.ndarray( {}, x, 1, 0 ); // $ExpectError
	szeros.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	szeros.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	szeros.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	szeros.ndarray( x.length, true, 1, 0 ); // $ExpectError
	szeros.ndarray( x.length, false, 1, 0 ); // $ExpectError
	szeros.ndarray( x.length, null, 1, 0 ); // $ExpectError
	szeros.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	szeros.ndarray( x.length, [], 1, 0 ); // $ExpectError
	szeros.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	szeros.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeros.ndarray( x.length, x, '10', 0 ); // $ExpectError
	szeros.ndarray( x.length, x, true, 0 ); // $ExpectError
	szeros.ndarray( x.length, x, false, 0 ); // $ExpectError
	szeros.ndarray( x.length, x, null, 0 ); // $ExpectError
	szeros.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	szeros.ndarray( x.length, x, [], 0 ); // $ExpectError
	szeros.ndarray( x.length, x, {}, 0 ); // $ExpectError
	szeros.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeros.ndarray( x.length, x, 1, '10' ); // $ExpectError
	szeros.ndarray( x.length, x, 1, true ); // $ExpectError
	szeros.ndarray( x.length, x, 1, false ); // $ExpectError
	szeros.ndarray( x.length, x, 1, null ); // $ExpectError
	szeros.ndarray( x.length, x, 1, undefined ); // $ExpectError
	szeros.ndarray( x.length, x, 1, [] ); // $ExpectError
	szeros.ndarray( x.length, x, 1, {} ); // $ExpectError
	szeros.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	szeros.ndarray(); // $ExpectError
	szeros.ndarray( x.length ); // $ExpectError
	szeros.ndarray( x.length, x ); // $ExpectError
	szeros.ndarray( x.length, x, 1 ); // $ExpectError
	szeros.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
