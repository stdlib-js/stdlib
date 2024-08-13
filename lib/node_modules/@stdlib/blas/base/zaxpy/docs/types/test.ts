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
import zaxpy = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy( zx.length, za, zx, 1, zy, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy( '10', za, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( true, za, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( false, za, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( null, za, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( undefined, za, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( [], za, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( {}, za, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( ( zx: number ): number => zx, za, zx, 1, zy, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zaxpy( zx.length, 10, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, '10', zx, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, true, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, false, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, null, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, undefined, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, [ '1' ], zx, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, {}, zx, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, ( zx: number ): number => zx, zx, 1, zy, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy( zx.length, za, 10, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, '10', 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, true, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, false, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, null, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, undefined, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, [ '1' ], 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, {}, 1, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, ( zx: number ): number => zx, 1, zy, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy( zx.length, za, zx, '10', zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, true, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, false, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, null, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, undefined, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, [], zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, {}, zy, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, ( zx: number ): number => zx, zy, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy( zx.length, za, zx, 1, 10, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, '10', 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, true, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, false, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, null, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, undefined, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, [ '1' ], 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, {}, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, ( zx: number ): number => zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy( zx.length, za, zx, 1, zy, '10' ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy, true ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy, false ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy, null ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy, undefined ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy, [] ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy, {} ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy(); // $ExpectError
	zaxpy( zx.length ); // $ExpectError
	zaxpy( zx.length, za ); // $ExpectError
	zaxpy( zx.length, za, zx ); // $ExpectError
	zaxpy( zx.length, za, zx, 1 ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy ); // $ExpectError
	zaxpy( zx.length, za, zx, 1, zy, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( '10', za, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( true, za, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( false, za, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( null, za, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( undefined, za, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( [], za, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( {}, za, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( ( zx: number ): number => zx, za, zx, 1, 0, zy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zaxpy.ndarray( zx.length, 10, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, '10', zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, true, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, false, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, null, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, undefined, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, [ '1' ], zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, {}, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, ( zx: number ): number => zx, zx, 1, 0, zy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( zx.length, za, 10, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, '10', 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, true, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, false, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, null, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, undefined, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, [ '1' ], 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, {}, 1, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, ( zx: number ): number => zx, 1, 0, zy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( zx.length, za, zx, '10', 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, true, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, false, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, null, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, undefined, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, [], 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, {}, 0, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, ( zx: number ): number => zx, 0, zy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( zx.length, za, zx, 1, '10', zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, true, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, false, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, null, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, undefined, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, [], zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, {}, zy, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, ( zx: number ): number => zx, zy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( zx.length, za, zx, 1, 0, 10, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, '10', 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, true, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, false, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, null, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, undefined, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, {}, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, ( zx: number ): number => zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, '10', 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, true, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, false, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, null, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, undefined, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, [], 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, {}, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, ( zx: number ): number => zx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, '10' ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, true ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, false ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, null ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, undefined ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, [] ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, {} ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );
	const za = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray(); // $ExpectError
	zaxpy.ndarray( zx.length ); // $ExpectError
	zaxpy.ndarray( zx.length, za ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1 ); // $ExpectError
	zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, 0, 10 ); // $ExpectError
}
