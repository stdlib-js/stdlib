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
import cscal = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal( cx.length, ca, cx, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal( '10', ca, cx, 1 ); // $ExpectError
	cscal( true, ca, cx, 1 ); // $ExpectError
	cscal( false, ca, cx, 1 ); // $ExpectError
	cscal( null, ca, cx, 1 ); // $ExpectError
	cscal( undefined, ca, cx, 1 ); // $ExpectError
	cscal( [], ca, cx, 1 ); // $ExpectError
	cscal( {}, ca, cx, 1 ); // $ExpectError
	cscal( ( cx: number ): number => cx, ca, cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const cx = new Complex64Array( 10 );

	cscal( cx.length, 10, cx, 1 ); // $ExpectError
	cscal( cx.length, '10', cx, 1 ); // $ExpectError
	cscal( cx.length, true, cx, 1 ); // $ExpectError
	cscal( cx.length, false, cx, 1 ); // $ExpectError
	cscal( cx.length, null, cx, 1 ); // $ExpectError
	cscal( cx.length, undefined, cx, 1 ); // $ExpectError
	cscal( cx.length, [ '1' ], cx, 1 ); // $ExpectError
	cscal( cx.length, {}, cx, 1 ); // $ExpectError
	cscal( cx.length, ( cx: number ): number => cx, cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal( cx.length, ca, 10, 1 ); // $ExpectError
	cscal( cx.length, ca, '10', 1 ); // $ExpectError
	cscal( cx.length, ca, true, 1 ); // $ExpectError
	cscal( cx.length, ca, false, 1 ); // $ExpectError
	cscal( cx.length, ca, null, 1 ); // $ExpectError
	cscal( cx.length, ca, undefined, 1 ); // $ExpectError
	cscal( cx.length, ca, [ '1' ], 1 ); // $ExpectError
	cscal( cx.length, ca, {}, 1 ); // $ExpectError
	cscal( cx.length, ca, ( cx: number ): number => cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal( cx.length, ca, cx, '10' ); // $ExpectError
	cscal( cx.length, ca, cx, true ); // $ExpectError
	cscal( cx.length, ca, cx, false ); // $ExpectError
	cscal( cx.length, ca, cx, null ); // $ExpectError
	cscal( cx.length, ca, cx, undefined ); // $ExpectError
	cscal( cx.length, ca, cx, [] ); // $ExpectError
	cscal( cx.length, ca, cx, {} ); // $ExpectError
	cscal( cx.length, ca, cx, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal(); // $ExpectError
	cscal( cx.length ); // $ExpectError
	cscal( cx.length, ca ); // $ExpectError
	cscal( cx.length, ca, cx ); // $ExpectError
	cscal( cx.length, ca, cx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( cx.length, ca, cx, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( '10', ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( true, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( false, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( null, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( undefined, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( [], ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( {}, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( ( cx: number ): number => cx, ca, cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const cx = new Complex64Array( 10 );

	cscal.ndarray( cx.length, 10, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, '10', cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, true, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, false, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, null, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, undefined, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, [ '1' ], cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, {}, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ( cx: number ): number => cx, cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( cx.length, ca, 10, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, '10', 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, true, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, false, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, null, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, undefined, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, [ '1' ], 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, {}, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, ( cx: number ): number => cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( cx.length, ca, cx, '10', 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, true, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, false, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, null, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, undefined, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, [], 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, {}, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, ( cx: number ): number => cx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( cx.length, ca, cx, 1, '10' ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, true ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, false ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, null ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, undefined ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, [] ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, {} ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray(); // $ExpectError
	cscal.ndarray( cx.length ); // $ExpectError
	cscal.ndarray( cx.length, ca ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, 0, 10 ); // $ExpectError
}
