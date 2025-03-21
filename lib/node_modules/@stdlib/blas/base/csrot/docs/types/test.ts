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
import csrot = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot( cx.length, cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot( '10', cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( true, cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( false, cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( null, cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( undefined, cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( [], cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( {}, cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( ( cx: number ): number => cx, cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot( cx.length, 10, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, '10', 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, true, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, false, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, null, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, undefined, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, [ '1' ], 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, {}, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, ( cx: number ): number => cx, 1, cy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot( cx.length, cx, '10', cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, true, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, false, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, null, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, undefined, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, [], cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, {}, cy, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, ( cx: number ): number => cx, cy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	csrot( cx.length, cx, 1, 10, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, '10', 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, true, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, false, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, null, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, undefined, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, [ '1' ], 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, {}, 1, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, ( cx: number ): number => cx, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot( cx.length, cx, 1, cy, '10', 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, true, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, false, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, null, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, undefined, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, [], 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, {}, 0.8, 0.6 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, ( cx: number ): number => cx, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot( cx.length, cx, 1, cy, 1, '10', 0.8 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, true, 0.8 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, false, 0.8 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, null, 0.8 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, undefined, 0.8 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, [], 0.8 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, {}, 0.8 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, ( cx: number ): number => cx, 0.8 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot( cx.length, cx, 1, cy, 1, 0.8, '10' ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8, true ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8, false ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8, null ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8, undefined ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8, [] ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8, {} ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot(); // $ExpectError
	csrot( cx.length ); // $ExpectError
	csrot( cx.length, cx ); // $ExpectError
	csrot( cx.length, cx, 1 ); // $ExpectError
	csrot( cx.length, cx, 1, cy ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8 ); // $ExpectError
	csrot( cx.length, cx, 1, cy, 1, 0.8, 0.6, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( '10', cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( true, cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( false, cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( null, cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( undefined, cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( [], cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( {}, cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( ( cx: number ): number => cx, cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( cx.length, 10, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, '10', 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, true, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, false, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, null, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, undefined, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, [ '1' ], 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, {}, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, ( cx: number ): number => cx, 1, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( cx.length, cx, '10', 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, true, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, false, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, null, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, undefined, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, [], 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, {}, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, ( cx: number ): number => cx, 0, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( cx.length, cx, 1, '10', cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, true, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, false, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, null, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, undefined, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, [], cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, {}, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, ( cx: number ): number => cx, cy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	csrot.ndarray( cx.length, cx, 1, 0, 10, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, '10', 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, true, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, false, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, null, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, undefined, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, [ '1' ], 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, {}, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, ( cx: number ): number => cx, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( cx.length, cx, 1, 0, cy, '10', 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, true, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, false, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, null, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, undefined, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, [], 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, {}, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, ( cx: number ): number => cx, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, '10', 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, true, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, false, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, null, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, undefined, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, [], 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, {}, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, ( cx: number ): number => cx, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, '10', 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, true, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, false, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, null, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, undefined, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, [], 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, {}, 0.6 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, ( cx: number ): number => cx, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, '10' ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, true ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, false ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, null ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, undefined ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, [] ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, {} ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, ( cx: number ): number => cx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	csrot.ndarray(); // $ExpectError
	csrot.ndarray( cx.length ); // $ExpectError
	csrot.ndarray( cx.length, cx ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8 ); // $ExpectError
	csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6, 10 ); // $ExpectError
}
