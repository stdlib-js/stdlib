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
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import zdscal = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zdscal( zx.length, 2.0, zx, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zdscal( '10', 2.0, zx, 1 ); // $EzxpectError
	zdscal( true, 2.0, zx, 1 ); // $ExpectError
	zdscal( false, 2.0, zx, 1 ); // $ExpectError
	zdscal( null, 2.0, zx, 1 ); // $ExpectError
	zdscal( undefined, 2.0, zx, 1 ); // $ExpectError
	zdscal( [], 2.0, zx, 1 ); // $ExpectError
	zdscal( {}, 2.0, zx, 1 ); // $ExpectError
	zdscal( ( zx: number ): number => zx, 2.0, zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zdscal( zx.length, new Complex128( 1.0, 2.0 ), zx, 1 ); // $ExpectError
	zdscal( zx.length, '10', zx, 1 ); // $ExpectError
	zdscal( zx.length, true, zx, 1 ); // $ExpectError
	zdscal( zx.length, false, zx, 1 ); // $ExpectError
	zdscal( zx.length, null, zx, 1 ); // $ExpectError
	zdscal( zx.length, undefined, zx, 1 ); // $ExpectError
	zdscal( zx.length, [ '1' ], zx, 1 ); // $ExpectError
	zdscal( zx.length, {}, zx, 1 ); // $ExpectError
	zdscal( zx.length, ( zx: number ): number => zx, zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zdscal( zx.length, 2.0, 10, 1 ); // $ExpectError
	zdscal( zx.length, 2.0, '10', 1 ); // $ExpectError
	zdscal( zx.length, 2.0, true, 1 ); // $ExpectError
	zdscal( zx.length, 2.0, false, 1 ); // $ExpectError
	zdscal( zx.length, 2.0, null, 1 ); // $ExpectError
	zdscal( zx.length, 2.0, undefined, 1 ); // $ExpectError
	zdscal( zx.length, 2.0, [ '1' ], 1 ); // $ExpectError
	zdscal( zx.length, 2.0, {}, 1 ); // $ExpectError
	zdscal( zx.length, 2.0, ( zx: number ): number => zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zdscal( zx.length, 2.0, zx, '10' ); // $ExpectError
	zdscal( zx.length, 2.0, zx, true ); // $ExpectError
	zdscal( zx.length, 2.0, zx, false ); // $ExpectError
	zdscal( zx.length, 2.0, zx, null ); // $ExpectError
	zdscal( zx.length, 2.0, zx, undefined ); // $ExpectError
	zdscal( zx.length, 2.0, zx, [] ); // $ExpectError
	zdscal( zx.length, 2.0, zx, {} ); // $ExpectError
	zdscal( zx.length, 2.0, zx, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );

	zdscal(); // $ExpectError
	zdscal( zx.length ); // $ExpectError
	zdscal( zx.length, 2.0 ); // $ExpectError
	zdscal( zx.length, 2.0, zx ); // $ExpectError
	zdscal( zx.length, 2.0, zx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zdscal.ndarray( zx.length, 2.0, zx, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zdscal.ndarray( '10', 2.0, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( true, 2.0, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( false, 2.0, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( null, 2.0, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( undefined, 2.0, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( [], 2.0, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( {}, 2.0, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( ( zx: number ): number => zx, 2.0, zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zdscal.ndarray( zx.length, new Complex128( 1.0, 2.0 ), zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, '10', zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, true, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, false, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, null, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, undefined, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, [ '1' ], zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, {}, zx, 1, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, ( zx: number ): number => zx, zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zdscal( zx.length, 2.0, 10, 1, 0 ); // $ExpectError
	zdscal( zx.length, 2.0, '10', 1, 0 ); // $ExpectError
	zdscal( zx.length, 2.0, true, 1, 0 ); // $ExpectError
	zdscal( zx.length, 2.0, false, 1, 0 ); // $ExpectError
	zdscal( zx.length, 2.0, null, 1, 0 ); // $ExpectError
	zdscal( zx.length, 2.0, undefined, 1, 0 ); // $ExpectError
	zdscal( zx.length, 2.0, [ '1' ], 1, 0 ); // $ExpectError
	zdscal( zx.length, 2.0, {}, 1, 0 ); // $ExpectError
	zdscal( zx.length, 2.0, ( zx: number ): number => zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zdscal.ndarray( zx.length, 2.0, zx, '10', 0 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, true, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, false, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, null, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, undefined, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, [], 0 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, {}, 0 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, ( zx: number ): number => zx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	zdscal.ndarray( zx.length, 2.0, zx, 1, '10' ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1, true ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1, false ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1, null ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1, undefined ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1, [] ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1, {} ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );

	zdscal.ndarray(); // $ExpectError
	zdscal.ndarray( zx.length ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1 ); // $ExpectError
	zdscal.ndarray( zx.length, 2.0, zx, 1, 0, 10 ); // $ExpectError
}
