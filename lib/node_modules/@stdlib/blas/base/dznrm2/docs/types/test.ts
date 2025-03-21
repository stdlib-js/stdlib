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
import dznrm2 = require( './index' );


// TESTS //

// The function returns a number...
{
	const zx = new Complex128Array( 10 );

	dznrm2( zx.length, zx, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	dznrm2( '10', zx, 1 ); // $ExpectError
	dznrm2( true, zx, 1 ); // $ExpectError
	dznrm2( false, zx, 1 ); // $ExpectError
	dznrm2( null, zx, 1 ); // $ExpectError
	dznrm2( undefined, zx, 1 ); // $ExpectError
	dznrm2( [], zx, 1 ); // $ExpectError
	dznrm2( {}, zx, 1 ); // $ExpectError
	dznrm2( ( zx: number ): number => zx, zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	dznrm2( zx.length, 10, 1 ); // $ExpectError
	dznrm2( zx.length, '10', 1 ); // $ExpectError
	dznrm2( zx.length, true, 1 ); // $ExpectError
	dznrm2( zx.length, false, 1 ); // $ExpectError
	dznrm2( zx.length, null, 1 ); // $ExpectError
	dznrm2( zx.length, undefined, 1 ); // $ExpectError
	dznrm2( zx.length, [], 1 ); // $ExpectError
	dznrm2( zx.length, {}, 1 ); // $ExpectError
	dznrm2( zx.length, ( zx: number ): number => zx, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	dznrm2( zx.length, zx, '10' ); // $ExpectError
	dznrm2( zx.length, zx, true ); // $ExpectError
	dznrm2( zx.length, zx, false ); // $ExpectError
	dznrm2( zx.length, zx, null ); // $ExpectError
	dznrm2( zx.length, zx, undefined ); // $ExpectError
	dznrm2( zx.length, zx, [] ); // $ExpectError
	dznrm2( zx.length, zx, {} ); // $ExpectError
	dznrm2( zx.length, zx, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );

	dznrm2(); // $ExpectError
	dznrm2( zx.length ); // $ExpectError
	dznrm2( zx.length, zx ); // $ExpectError
	dznrm2( zx.length, zx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const zx = new Complex128Array( 10 );

	dznrm2.ndarray( zx.length, zx, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	dznrm2.ndarray( '10', zx, 1, 0 ); // $ExpectError
	dznrm2.ndarray( true, zx, 1, 0 ); // $ExpectError
	dznrm2.ndarray( false, zx, 1, 0 ); // $ExpectError
	dznrm2.ndarray( null, zx, 1, 0 ); // $ExpectError
	dznrm2.ndarray( undefined, zx, 1, 0 ); // $ExpectError
	dznrm2.ndarray( [], zx, 1, 0 ); // $ExpectError
	dznrm2.ndarray( {}, zx, 1, 0 ); // $ExpectError
	dznrm2.ndarray( ( zx: number ): number => zx, zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	dznrm2.ndarray( zx.length, 10, 1, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, '10', 1, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, true, 1, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, false, 1, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, null, 1, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, undefined, 1, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, [], 1, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, {}, 1, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, ( zx: number ): number => zx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	dznrm2.ndarray( zx.length, zx, '10', 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, true, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, false, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, null, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, undefined, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, [], 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, {}, 0 ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, ( zx: number ): number => zx, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );

	dznrm2.ndarray( zx.length, zx, 1, '10' ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1, true ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1, false ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1, null ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1, undefined ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1, [] ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1, {} ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );

	dznrm2.ndarray(); // $ExpectError
	dznrm2.ndarray( zx.length ); // $ExpectError
	dznrm2.ndarray( zx.length, zx ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1 ); // $ExpectError
	dznrm2.ndarray( zx.length, zx, 1, 0, 10 ); // $ExpectError
}
