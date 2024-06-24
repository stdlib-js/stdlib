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
import scnrm2 = require( './index' );


// TESTS //

// The function returns a number...
{
	const cx = new Complex64Array( 10 );

	scnrm2( cx.length, cx, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scnrm2( '10', cx, 1 ); // $ExpectError
	scnrm2( true, cx, 1 ); // $ExpectError
	scnrm2( false, cx, 1 ); // $ExpectError
	scnrm2( null, cx, 1 ); // $ExpectError
	scnrm2( undefined, cx, 1 ); // $ExpectError
	scnrm2( [], cx, 1 ); // $ExpectError
	scnrm2( {}, cx, 1 ); // $ExpectError
	scnrm2( ( cx: number ): number => cx, cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	scnrm2( cx.length, 10, 1 ); // $ExpectError
	scnrm2( cx.length, '10', 1 ); // $ExpectError
	scnrm2( cx.length, true, 1 ); // $ExpectError
	scnrm2( cx.length, false, 1 ); // $ExpectError
	scnrm2( cx.length, null, 1 ); // $ExpectError
	scnrm2( cx.length, undefined, 1 ); // $ExpectError
	scnrm2( cx.length, [], 1 ); // $ExpectError
	scnrm2( cx.length, {}, 1 ); // $ExpectError
	scnrm2( cx.length, ( cx: number ): number => cx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scnrm2( cx.length, cx, '10' ); // $ExpectError
	scnrm2( cx.length, cx, true ); // $ExpectError
	scnrm2( cx.length, cx, false ); // $ExpectError
	scnrm2( cx.length, cx, null ); // $ExpectError
	scnrm2( cx.length, cx, undefined ); // $ExpectError
	scnrm2( cx.length, cx, [] ); // $ExpectError
	scnrm2( cx.length, cx, {} ); // $ExpectError
	scnrm2( cx.length, cx, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );

	scnrm2(); // $ExpectError
	scnrm2( cx.length ); // $ExpectError
	scnrm2( cx.length, cx ); // $ExpectError
	scnrm2( cx.length, cx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const cx = new Complex64Array( 10 );

	scnrm2.ndarray( cx.length, cx, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scnrm2.ndarray( '10', cx, 1, 0 ); // $ExpectError
	scnrm2.ndarray( true, cx, 1, 0 ); // $ExpectError
	scnrm2.ndarray( false, cx, 1, 0 ); // $ExpectError
	scnrm2.ndarray( null, cx, 1, 0 ); // $ExpectError
	scnrm2.ndarray( undefined, cx, 1, 0 ); // $ExpectError
	scnrm2.ndarray( [], cx, 1, 0 ); // $ExpectError
	scnrm2.ndarray( {}, cx, 1, 0 ); // $ExpectError
	scnrm2.ndarray( ( cx: number ): number => cx, cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	scnrm2.ndarray( cx.length, 10, 1, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, '10', 1, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, true, 1, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, false, 1, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, null, 1, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, undefined, 1, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, [], 1, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, {}, 1, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, ( cx: number ): number => cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scnrm2.ndarray( cx.length, cx, '10', 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, true, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, false, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, null, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, undefined, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, [], 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, {}, 0 ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, ( cx: number ): number => cx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );

	scnrm2.ndarray( cx.length, cx, 1, '10' ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1, true ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1, false ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1, null ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1, undefined ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1, [] ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1, {} ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );

	scnrm2.ndarray(); // $ExpectError
	scnrm2.ndarray( cx.length ); // $ExpectError
	scnrm2.ndarray( cx.length, cx ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1 ); // $ExpectError
	scnrm2.ndarray( cx.length, cx, 1, 0, 10 ); // $ExpectError
}
