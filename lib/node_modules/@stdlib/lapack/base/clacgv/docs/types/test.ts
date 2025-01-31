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

import Complex64Array = require( '@stdlib/array/complex64' );
import clacgv = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	clacgv( cx.length, cx, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	clacgv( '10', cx, 1 ); // $EcxpectError
	clacgv( true, cx, 1 ); // $ExpectError
	clacgv( false, cx, 1 ); // $ExpectError
	clacgv( null, cx, 1 ); // $ExpectError
	clacgv( undefined, cx, 1 ); // $ExpectError
	clacgv( [], cx, 1 ); // $ExpectError
	clacgv( {}, cx, 1 ); // $ExpectError
	clacgv( ( cx: number ): number => cx, cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	clacgv( cx.length, 10, 1 ); // $ExpectError
	clacgv( cx.length, '10', 1 ); // $ExpectError
	clacgv( cx.length, true, 1 ); // $ExpectError
	clacgv( cx.length, false, 1 ); // $ExpectError
	clacgv( cx.length, null, 1 ); // $ExpectError
	clacgv( cx.length, undefined, 1 ); // $ExpectError
	clacgv( cx.length, [ '1' ], 1 ); // $ExpectError
	clacgv( cx.length, {}, 1 ); // $ExpectError
	clacgv( cx.length, ( cx: number ): number => cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	clacgv( cx.length, cx, '10' ); // $ExpectError
	clacgv( cx.length, cx, true ); // $ExpectError
	clacgv( cx.length, cx, false ); // $ExpectError
	clacgv( cx.length, cx, null ); // $ExpectError
	clacgv( cx.length, cx, undefined ); // $ExpectError
	clacgv( cx.length, cx, [] ); // $ExpectError
	clacgv( cx.length, cx, {} ); // $ExpectError
	clacgv( cx.length, cx, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );

	clacgv(); // $ExpectError
	clacgv( cx.length ); // $ExpectError
	clacgv( cx.length, cx ); // $ExpectError
	clacgv( cx.length, cx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	clacgv.ndarray( cx.length, cx, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	clacgv.ndarray( '10', cx, 1, 0 ); // $ExpectError
	clacgv.ndarray( true, cx, 1, 0 ); // $ExpectError
	clacgv.ndarray( false, cx, 1, 0 ); // $ExpectError
	clacgv.ndarray( null, cx, 1, 0 ); // $ExpectError
	clacgv.ndarray( undefined, cx, 1, 0 ); // $ExpectError
	clacgv.ndarray( [], cx, 1, 0 ); // $ExpectError
	clacgv.ndarray( {}, cx, 1, 0 ); // $ExpectError
	clacgv.ndarray( ( cx: number ): number => cx, cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	clacgv( cx.length, 10, 1, 0 ); // $ExpectError
	clacgv( cx.length, '10', 1, 0 ); // $ExpectError
	clacgv( cx.length, true, 1, 0 ); // $ExpectError
	clacgv( cx.length, false, 1, 0 ); // $ExpectError
	clacgv( cx.length, null, 1, 0 ); // $ExpectError
	clacgv( cx.length, undefined, 1, 0 ); // $ExpectError
	clacgv( cx.length, [ '1' ], 1, 0 ); // $ExpectError
	clacgv( cx.length, {}, 1, 0 ); // $ExpectError
	clacgv( cx.length, ( cx: number ): number => cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	clacgv.ndarray( cx.length, cx, '10', 0 ); // $ExpectError
	clacgv.ndarray( cx.length, cx, true, 0 ); // $ExpectError
	clacgv.ndarray( cx.length, cx, false, 0 ); // $ExpectError
	clacgv.ndarray( cx.length, cx, null, 0 ); // $ExpectError
	clacgv.ndarray( cx.length, cx, undefined, 0 ); // $ExpectError
	clacgv.ndarray( cx.length, cx, [], 0 ); // $ExpectError
	clacgv.ndarray( cx.length, cx, {}, 0 ); // $ExpectError
	clacgv.ndarray( cx.length, cx, ( cx: number ): number => cx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	clacgv.ndarray( cx.length, cx, 1, '10' ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1, true ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1, false ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1, null ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1, undefined ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1, [] ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1, {} ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );

	clacgv.ndarray(); // $ExpectError
	clacgv.ndarray( cx.length ); // $ExpectError
	clacgv.ndarray( cx.length, cx ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1 ); // $ExpectError
	clacgv.ndarray( cx.length, cx, 1, 0, 10 ); // $ExpectError
}
