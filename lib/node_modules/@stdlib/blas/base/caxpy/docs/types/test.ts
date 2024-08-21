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

import Complex64Array = require( '@stdlib/array/complex64' );
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import caxpy = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy( cx.length, ca, cx, 1, cy, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy( '10', ca, cx, 1, cy, 1 ); // $ExpectError
	caxpy( true, ca, cx, 1, cy, 1 ); // $ExpectError
	caxpy( false, ca, cx, 1, cy, 1 ); // $ExpectError
	caxpy( null, ca, cx, 1, cy, 1 ); // $ExpectError
	caxpy( undefined, ca, cx, 1, cy, 1 ); // $ExpectError
	caxpy( [], ca, cx, 1, cy, 1 ); // $ExpectError
	caxpy( {}, ca, cx, 1, cy, 1 ); // $ExpectError
	caxpy( ( cx: number ): number => cx, ca, cx, 1, cy, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	caxpy( cx.length, 10, cx, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, '10', cx, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, true, cx, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, false, cx, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, null, cx, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, undefined, cx, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, [ '1' ], cx, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, {}, cx, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ( cx: number ): number => cx, cx, 1, cy, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy( cx.length, ca, 10, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, '10', 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, true, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, false, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, null, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, undefined, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, [ '1' ], 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, {}, 1, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, ( cx: number ): number => cx, 1, cy, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy( cx.length, ca, cx, '10', cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, true, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, false, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, null, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, undefined, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, [], cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, {}, cy, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, ( cx: number ): number => cx, cy, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy( cx.length, ca, cx, 1, 10, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, '10', 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, true, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, false, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, null, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, undefined, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, [ '1' ], 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, {}, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, ( cx: number ): number => cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy( cx.length, ca, cx, 1, cy, '10' ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy, true ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy, false ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy, null ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy, undefined ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy, [] ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy, {} ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy(); // $ExpectError
	caxpy( cx.length ); // $ExpectError
	caxpy( cx.length, ca ); // $ExpectError
	caxpy( cx.length, ca, cx ); // $ExpectError
	caxpy( cx.length, ca, cx, 1 ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy ); // $ExpectError
	caxpy( cx.length, ca, cx, 1, cy, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( '10', ca, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( true, ca, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( false, ca, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( null, ca, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( undefined, ca, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( [], ca, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( {}, ca, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( ( cx: number ): number => cx, ca, cx, 1, 0, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	caxpy.ndarray( cx.length, 10, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, '10', cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, true, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, false, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, null, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, undefined, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, [ '1' ], cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, {}, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ( cx: number ): number => cx, cx, 1, 0, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( cx.length, ca, 10, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, '10', 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, true, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, false, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, null, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, undefined, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, [ '1' ], 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, {}, 1, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, ( cx: number ): number => cx, 1, 0, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( cx.length, ca, cx, '10', 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, true, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, false, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, null, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, undefined, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, [], 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, {}, 0, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, ( cx: number ): number => cx, 0, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( cx.length, ca, cx, 1, '10', cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, true, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, false, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, null, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, undefined, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, [], cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, {}, cy, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, ( cx: number ): number => cx, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( cx.length, ca, cx, 1, 0, 10, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, '10', 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, true, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, false, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, null, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, undefined, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, {}, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, ( cx: number ): number => cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, '10', 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, true, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, false, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, null, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, undefined, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, [], 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, {}, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, ( cx: number ): number => cx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, '10' ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, true ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, false ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, null ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, undefined ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, [] ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, {} ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	caxpy.ndarray(); // $ExpectError
	caxpy.ndarray( cx.length ); // $ExpectError
	caxpy.ndarray( cx.length, ca ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1 ); // $ExpectError
	caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, 0, 10 ); // $ExpectError
}
