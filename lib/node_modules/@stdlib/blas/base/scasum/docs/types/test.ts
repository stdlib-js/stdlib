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
import scasum = require( './index' );


// TESTS //

// The function returns a number...
{
	const cx = new Complex64Array( 10 );

	scasum( cx.length, cx, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scasum( '10', cx, 1 ); // $ExpectError
	scasum( true, cx, 1 ); // $ExpectError
	scasum( false, cx, 1 ); // $ExpectError
	scasum( null, cx, 1 ); // $ExpectError
	scasum( undefined, cx, 1 ); // $ExpectError
	scasum( [], cx, 1 ); // $ExpectError
	scasum( {}, cx, 1 ); // $ExpectError
	scasum( ( cx: number ): number => cx, cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	scasum( cx.length, 10, 1 ); // $ExpectError
	scasum( cx.length, '10', 1 ); // $ExpectError
	scasum( cx.length, true, 1 ); // $ExpectError
	scasum( cx.length, false, 1 ); // $ExpectError
	scasum( cx.length, null, 1 ); // $ExpectError
	scasum( cx.length, undefined, 1 ); // $ExpectError
	scasum( cx.length, [], 1 ); // $ExpectError
	scasum( cx.length, {}, 1 ); // $ExpectError
	scasum( cx.length, ( cx: number ): number => cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scasum( cx.length, cx, '10' ); // $ExpectError
	scasum( cx.length, cx, true ); // $ExpectError
	scasum( cx.length, cx, false ); // $ExpectError
	scasum( cx.length, cx, null ); // $ExpectError
	scasum( cx.length, cx, undefined ); // $ExpectError
	scasum( cx.length, cx, [] ); // $ExpectError
	scasum( cx.length, cx, {} ); // $ExpectError
	scasum( cx.length, cx, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );

	scasum(); // $ExpectError
	scasum( cx.length ); // $ExpectError
	scasum( cx.length, cx ); // $ExpectError
	scasum( cx.length, cx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const cx = new Complex64Array( 10 );

	scasum.ndarray( cx.length, cx, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scasum.ndarray( '10', cx, 1, 0 ); // $ExpectError
	scasum.ndarray( true, cx, 1, 0 ); // $ExpectError
	scasum.ndarray( false, cx, 1, 0 ); // $ExpectError
	scasum.ndarray( null, cx, 1, 0 ); // $ExpectError
	scasum.ndarray( undefined, cx, 1, 0 ); // $ExpectError
	scasum.ndarray( [], cx, 1, 0 ); // $ExpectError
	scasum.ndarray( {}, cx, 1, 0 ); // $ExpectError
	scasum.ndarray( ( cx: number ): number => cx, cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	scasum.ndarray( cx.length, 10, 1, 0 ); // $ExpectError
	scasum.ndarray( cx.length, '10', 1, 0 ); // $ExpectError
	scasum.ndarray( cx.length, true, 1, 0 ); // $ExpectError
	scasum.ndarray( cx.length, false, 1, 0 ); // $ExpectError
	scasum.ndarray( cx.length, null, 1, 0 ); // $ExpectError
	scasum.ndarray( cx.length, undefined, 1, 0 ); // $ExpectError
	scasum.ndarray( cx.length, [], 1, 0 ); // $ExpectError
	scasum.ndarray( cx.length, {}, 1, 0 ); // $ExpectError
	scasum.ndarray( cx.length, ( cx: number ): number => cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scasum.ndarray( cx.length, cx, '10', 0 ); // $ExpectError
	scasum.ndarray( cx.length, cx, true, 0 ); // $ExpectError
	scasum.ndarray( cx.length, cx, false, 0 ); // $ExpectError
	scasum.ndarray( cx.length, cx, null, 0 ); // $ExpectError
	scasum.ndarray( cx.length, cx, undefined, 0 ); // $ExpectError
	scasum.ndarray( cx.length, cx, [], 0 ); // $ExpectError
	scasum.ndarray( cx.length, cx, {}, 0 ); // $ExpectError
	scasum.ndarray( cx.length, cx, ( cx: number ): number => cx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scasum.ndarray( cx.length, cx, 1, '10' ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1, true ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1, false ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1, null ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1, undefined ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1, [] ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1, {} ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );

	scasum.ndarray(); // $ExpectError
	scasum.ndarray( cx.length ); // $ExpectError
	scasum.ndarray( cx.length, cx ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1 ); // $ExpectError
	scasum.ndarray( cx.length, cx, 1, 0, 10 ); // $ExpectError
}
