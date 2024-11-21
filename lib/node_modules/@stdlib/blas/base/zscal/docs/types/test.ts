/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
import zscal = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal( zx.length, za, zx, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal( '10', za, zx, 1 ); // $EzxpectError
	zscal( true, za, zx, 1 ); // $ExpectError
	zscal( false, za, zx, 1 ); // $ExpectError
	zscal( null, za, zx, 1 ); // $ExpectError
	zscal( undefined, za, zx, 1 ); // $ExpectError
	zscal( [], za, zx, 1 ); // $ExpectError
	zscal( {}, za, zx, 1 ); // $ExpectError
	zscal( ( zx: number ): number => zx, za, zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const zx = new Complex128Array( 10 );

	zscal( zx.length, 10, zx, 1 ); // $ExpectError
	zscal( zx.length, '10', zx, 1 ); // $ExpectError
	zscal( zx.length, true, zx, 1 ); // $ExpectError
	zscal( zx.length, false, zx, 1 ); // $ExpectError
	zscal( zx.length, null, zx, 1 ); // $ExpectError
	zscal( zx.length, undefined, zx, 1 ); // $ExpectError
	zscal( zx.length, [ '1' ], zx, 1 ); // $ExpectError
	zscal( zx.length, {}, zx, 1 ); // $ExpectError
	zscal( zx.length, ( zx: number ): number => zx, zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal( zx.length, za, 10, 1 ); // $ExpectError
	zscal( zx.length, za, '10', 1 ); // $ExpectError
	zscal( zx.length, za, true, 1 ); // $ExpectError
	zscal( zx.length, za, false, 1 ); // $ExpectError
	zscal( zx.length, za, null, 1 ); // $ExpectError
	zscal( zx.length, za, undefined, 1 ); // $ExpectError
	zscal( zx.length, za, [ '1' ], 1 ); // $ExpectError
	zscal( zx.length, za, {}, 1 ); // $ExpectError
	zscal( zx.length, za, ( zx: number ): number => zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal( zx.length, za, zx, '10' ); // $ExpectError
	zscal( zx.length, za, zx, true ); // $ExpectError
	zscal( zx.length, za, zx, false ); // $ExpectError
	zscal( zx.length, za, zx, null ); // $ExpectError
	zscal( zx.length, za, zx, undefined ); // $ExpectError
	zscal( zx.length, za, zx, [] ); // $ExpectError
	zscal( zx.length, za, zx, {} ); // $ExpectError
	zscal( zx.length, za, zx, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal(); // $ExpectError
	zscal( zx.length ); // $ExpectError
	zscal( zx.length, za ); // $ExpectError
	zscal( zx.length, za, zx ); // $ExpectError
	zscal( zx.length, za, zx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal.ndarray( zx.length, za, zx, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal.ndarray( '10', za, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( true, za, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( false, za, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( null, za, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( undefined, za, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( [], za, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( {}, za, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( ( zx: number ): number => zx, za, zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const zx = new Complex128Array( 10 );

	zscal.ndarray( zx.length, 10, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( zx.length, '10', zx, 1, 0 ); // $ExpectError
	zscal.ndarray( zx.length, true, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( zx.length, false, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( zx.length, null, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( zx.length, undefined, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( zx.length, [ '1' ], zx, 1, 0 ); // $ExpectError
	zscal.ndarray( zx.length, {}, zx, 1, 0 ); // $ExpectError
	zscal.ndarray( zx.length, ( zx: number ): number => zx, zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal( zx.length, za, 10, 1, 0 ); // $ExpectError
	zscal( zx.length, za, '10', 1, 0 ); // $ExpectError
	zscal( zx.length, za, true, 1, 0 ); // $ExpectError
	zscal( zx.length, za, false, 1, 0 ); // $ExpectError
	zscal( zx.length, za, null, 1, 0 ); // $ExpectError
	zscal( zx.length, za, undefined, 1, 0 ); // $ExpectError
	zscal( zx.length, za, [ '1' ], 1, 0 ); // $ExpectError
	zscal( zx.length, za, {}, 1, 0 ); // $ExpectError
	zscal( zx.length, za, ( zx: number ): number => zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal.ndarray( zx.length, za, zx, '10', 0 ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, true, 0 ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, false, 0 ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, null, 0 ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, undefined, 0 ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, [], 0 ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, {}, 0 ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, ( zx: number ): number => zx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal.ndarray( zx.length, za, zx, 1, '10' ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1, true ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1, false ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1, null ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1, undefined ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1, [] ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1, {} ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zscal.ndarray(); // $ExpectError
	zscal.ndarray( zx.length ); // $ExpectError
	zscal.ndarray( zx.length, za ); // $ExpectError
	zscal.ndarray( zx.length, za, zx ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1 ); // $ExpectError
	zscal.ndarray( zx.length, za, zx, 1, 0, 10 ); // $ExpectError
}
