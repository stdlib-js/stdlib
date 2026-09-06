/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable space-in-parens */

import Complex128Array = require( '@stdlib/array/complex128' );
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import zindexOf = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf( x.length, s, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf( '10', s, x, 1 ); // $ExpectError
	zindexOf( true, s, x, 1 ); // $ExpectError
	zindexOf( false, s, x, 1 ); // $ExpectError
	zindexOf( null, s, x, 1 ); // $ExpectError
	zindexOf( undefined, s, x, 1 ); // $ExpectError
	zindexOf( [], s, x, 1 ); // $ExpectError
	zindexOf( {}, s, x, 1 ); // $ExpectError
	zindexOf( ( x: number ): number => x, s, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	zindexOf( x.length, '10', x, 1 ); // $ExpectError
	zindexOf( x.length, true, x, 1 ); // $ExpectError
	zindexOf( x.length, false, x, 1 ); // $ExpectError
	zindexOf( x.length, null, x, 1 ); // $ExpectError
	zindexOf( x.length, undefined, x, 1 ); // $ExpectError
	zindexOf( x.length, [], x, 1 ); // $ExpectError
	zindexOf( x.length, {}, x, 1 ); // $ExpectError
	zindexOf( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const s = new Complex128( 3.0, 4.0 );

	zindexOf( 3, s, '10', 1 ); // $ExpectError
	zindexOf( 3, s, true, 1 ); // $ExpectError
	zindexOf( 3, s, false, 1 ); // $ExpectError
	zindexOf( 3, s, null, 1 ); // $ExpectError
	zindexOf( 3, s, undefined, 1 ); // $ExpectError
	zindexOf( 3, s, {}, 1 ); // $ExpectError
	zindexOf( 3, s, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf( x.length, s, x, '10' ); // $ExpectError
	zindexOf( x.length, s, x, true ); // $ExpectError
	zindexOf( x.length, s, x, false ); // $ExpectError
	zindexOf( x.length, s, x, null ); // $ExpectError
	zindexOf( x.length, s, x, undefined ); // $ExpectError
	zindexOf( x.length, s, x, [] ); // $ExpectError
	zindexOf( x.length, s, x, {} ); // $ExpectError
	zindexOf( x.length, s, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf(); // $ExpectError
	zindexOf( x.length ); // $ExpectError
	zindexOf( x.length, s ); // $ExpectError
	zindexOf( x.length, s, x ); // $ExpectError
	zindexOf( x.length, s, x, 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf.ndarray( x.length, s, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf.ndarray( '10', s, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( true, s, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( false, s, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( null, s, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( undefined, s, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( [], s, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( {}, s, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( ( x: number ): number => x, s, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	zindexOf.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const s = new Complex128( 3.0, 4.0 );

	zindexOf.ndarray( 3, s, '10', 1, 0 ); // $ExpectError
	zindexOf.ndarray( 3, s, true, 1, 0 ); // $ExpectError
	zindexOf.ndarray( 3, s, false, 1, 0 ); // $ExpectError
	zindexOf.ndarray( 3, s, null, 1, 0 ); // $ExpectError
	zindexOf.ndarray( 3, s, undefined, 1, 0 ); // $ExpectError
	zindexOf.ndarray( 3, s, {}, 1, 0 ); // $ExpectError
	zindexOf.ndarray( 3, s, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf.ndarray( x.length, s, x, '10', 0 ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, true, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, false, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, null, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, undefined, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, [], 0 ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, {}, 0 ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf.ndarray( x.length, s, x, 1, '10' ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1, true ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1, false ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1, null ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1, undefined ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1, [] ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1, {} ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	const s = new Complex128( 3.0, 4.0 );

	zindexOf.ndarray(); // $ExpectError
	zindexOf.ndarray( x.length ); // $ExpectError
	zindexOf.ndarray( x.length, s ); // $ExpectError
	zindexOf.ndarray( x.length, s, x ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1 ); // $ExpectError
	zindexOf.ndarray( x.length, s, x, 1, 0, 0 ); // $ExpectError
}
