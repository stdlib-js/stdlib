/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import Complex128Array = require( '@stdlib/array/complex128' );
import zlacgv = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zlacgv( zx.length, zx, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zlacgv( '10', zx, 1 ); // $EzxpectError
	zlacgv( true, zx, 1 ); // $ExpectError
	zlacgv( false, zx, 1 ); // $ExpectError
	zlacgv( null, zx, 1 ); // $ExpectError
	zlacgv( undefined, zx, 1 ); // $ExpectError
	zlacgv( [], zx, 1 ); // $ExpectError
	zlacgv( {}, zx, 1 ); // $ExpectError
	zlacgv( ( zx: number ): number => zx, zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zlacgv( zx.length, 10, 1 ); // $ExpectError
	zlacgv( zx.length, '10', 1 ); // $ExpectError
	zlacgv( zx.length, true, 1 ); // $ExpectError
	zlacgv( zx.length, false, 1 ); // $ExpectError
	zlacgv( zx.length, null, 1 ); // $ExpectError
	zlacgv( zx.length, undefined, 1 ); // $ExpectError
	zlacgv( zx.length, [ '1' ], 1 ); // $ExpectError
	zlacgv( zx.length, {}, 1 ); // $ExpectError
	zlacgv( zx.length, ( zx: number ): number => zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zlacgv( zx.length, zx, '10' ); // $ExpectError
	zlacgv( zx.length, zx, true ); // $ExpectError
	zlacgv( zx.length, zx, false ); // $ExpectError
	zlacgv( zx.length, zx, null ); // $ExpectError
	zlacgv( zx.length, zx, undefined ); // $ExpectError
	zlacgv( zx.length, zx, [] ); // $ExpectError
	zlacgv( zx.length, zx, {} ); // $ExpectError
	zlacgv( zx.length, zx, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );

	zlacgv(); // $ExpectError
	zlacgv( zx.length ); // $ExpectError
	zlacgv( zx.length, zx ); // $ExpectError
	zlacgv( zx.length, zx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zlacgv.ndarray( zx.length, zx, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zlacgv.ndarray( '10', zx, 1, 0 ); // $ExpectError
	zlacgv.ndarray( true, zx, 1, 0 ); // $ExpectError
	zlacgv.ndarray( false, zx, 1, 0 ); // $ExpectError
	zlacgv.ndarray( null, zx, 1, 0 ); // $ExpectError
	zlacgv.ndarray( undefined, zx, 1, 0 ); // $ExpectError
	zlacgv.ndarray( [], zx, 1, 0 ); // $ExpectError
	zlacgv.ndarray( {}, zx, 1, 0 ); // $ExpectError
	zlacgv.ndarray( ( zx: number ): number => zx, zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zlacgv( zx.length, 10, 1, 0 ); // $ExpectError
	zlacgv( zx.length, '10', 1, 0 ); // $ExpectError
	zlacgv( zx.length, true, 1, 0 ); // $ExpectError
	zlacgv( zx.length, false, 1, 0 ); // $ExpectError
	zlacgv( zx.length, null, 1, 0 ); // $ExpectError
	zlacgv( zx.length, undefined, 1, 0 ); // $ExpectError
	zlacgv( zx.length, [ '1' ], 1, 0 ); // $ExpectError
	zlacgv( zx.length, {}, 1, 0 ); // $ExpectError
	zlacgv( zx.length, ( zx: number ): number => zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zlacgv.ndarray( zx.length, zx, '10', 0 ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, true, 0 ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, false, 0 ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, null, 0 ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, undefined, 0 ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, [], 0 ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, {}, 0 ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, ( zx: number ): number => zx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zlacgv.ndarray( zx.length, zx, 1, '10' ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1, true ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1, false ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1, null ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1, undefined ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1, [] ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1, {} ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );

	zlacgv.ndarray(); // $ExpectError
	zlacgv.ndarray( zx.length ); // $ExpectError
	zlacgv.ndarray( zx.length, zx ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1 ); // $ExpectError
	zlacgv.ndarray( zx.length, zx, 1, 0, 10 ); // $ExpectError
}
