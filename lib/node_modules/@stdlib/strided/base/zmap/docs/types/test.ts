/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { Complex128 } from '@stdlib/types/complex';
import Complex128Array = require( '@stdlib/array/complex128' );
import cmplx64 = require( '@stdlib/complex/float64' );
import zmap = require( './index' );

/**
* Unary callback.
*
* @param x - input value
* @returns result
*/
function unary( x: Complex128 ): Complex128 {
	return new cmplx64( x.re, x.im );
}


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap( x.length, x, 1, y, 1, unary ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap( '10', x, 1, y, 1, unary ); // $ExpectError
	zmap( true, x, 1, y, 1, unary ); // $ExpectError
	zmap( false, x, 1, y, 1, unary ); // $ExpectError
	zmap( null, x, 1, y, 1, unary ); // $ExpectError
	zmap( undefined, x, 1, y, 1, unary ); // $ExpectError
	zmap( [], x, 1, y, 1, unary ); // $ExpectError
	zmap( {}, x, 1, y, 1, unary ); // $ExpectError
	zmap( ( x: number ): number => x, x, 1, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap( x.length, 10, 1, y, 1, unary ); // $ExpectError
	zmap( x.length, '10', 1, y, 1, unary ); // $ExpectError
	zmap( x.length, true, 1, y, 1, unary ); // $ExpectError
	zmap( x.length, false, 1, y, 1, unary ); // $ExpectError
	zmap( x.length, null, 1, y, 1, unary ); // $ExpectError
	zmap( x.length, undefined, 1, y, 1, unary ); // $ExpectError
	zmap( x.length, [ '1' ], 1, y, 1, unary ); // $ExpectError
	zmap( x.length, {}, 1, y, 1, unary ); // $ExpectError
	zmap( x.length, ( x: number ): number => x, 1, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap( x.length, x, '10', y, 1, unary ); // $ExpectError
	zmap( x.length, x, true, y, 1, unary ); // $ExpectError
	zmap( x.length, x, false, y, 1, unary ); // $ExpectError
	zmap( x.length, x, null, y, 1, unary ); // $ExpectError
	zmap( x.length, x, undefined, y, 1, unary ); // $ExpectError
	zmap( x.length, x, [], y, 1, unary ); // $ExpectError
	zmap( x.length, x, {}, y, 1, unary ); // $ExpectError
	zmap( x.length, x, ( x: number ): number => x, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zmap( x.length, x, 1, 10, 1, unary ); // $ExpectError
	zmap( x.length, x, 1, '10', 1, unary ); // $ExpectError
	zmap( x.length, x, 1, true, 1, unary ); // $ExpectError
	zmap( x.length, x, 1, false, 1, unary ); // $ExpectError
	zmap( x.length, x, 1, null, 1, unary ); // $ExpectError
	zmap( x.length, x, 1, undefined, 1, unary ); // $ExpectError
	zmap( x.length, x, 1, [ '1' ], 1, unary ); // $ExpectError
	zmap( x.length, x, 1, {}, 1, unary ); // $ExpectError
	zmap( x.length, x, 1, ( x: number ): number => x, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap( x.length, x, 1, y, '10', unary ); // $ExpectError
	zmap( x.length, x, 1, y, true, unary ); // $ExpectError
	zmap( x.length, x, 1, y, false, unary ); // $ExpectError
	zmap( x.length, x, 1, y, null, unary ); // $ExpectError
	zmap( x.length, x, 1, y, undefined, unary ); // $ExpectError
	zmap( x.length, x, 1, y, [], unary ); // $ExpectError
	zmap( x.length, x, 1, y, {}, unary ); // $ExpectError
	zmap( x.length, x, 1, y, ( x: number ): number => x, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a unary function...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap( x.length, x, 1, y, 1, '10' ); // $ExpectError
	zmap( x.length, x, 1, y, 1, 0 ); // $ExpectError
	zmap( x.length, x, 1, y, 1, true ); // $ExpectError
	zmap( x.length, x, 1, y, 1, false ); // $ExpectError
	zmap( x.length, x, 1, y, 1, null ); // $ExpectError
	zmap( x.length, x, 1, y, 1, undefined ); // $ExpectError
	zmap( x.length, x, 1, y, 1, [] ); // $ExpectError
	zmap( x.length, x, 1, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap(); // $ExpectError
	zmap( x.length ); // $ExpectError
	zmap( x.length, x ); // $ExpectError
	zmap( x.length, x, 1 ); // $ExpectError
	zmap( x.length, x, 1, y ); // $ExpectError
	zmap( x.length, x, 1, y, 1 ); // $ExpectError
	zmap( x.length, x, 1, y, 1, unary, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, unary ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray( '10', x, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( true, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( false, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( null, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( undefined, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( [], x, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( {}, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray( x.length, 10, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, '10', 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, true, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, false, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, null, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, undefined, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, [ '1' ], 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, {}, 1, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray( x.length, x, '10', 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, true, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, false, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, null, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, undefined, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, [], 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, {}, 0, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray( x.length, x, 1, '10', y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, true, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, false, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, null, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, undefined, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, [], y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, {}, y, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zmap.ndarray( x.length, x, 1, 0, 10, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, '10', 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, true, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, false, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, null, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, undefined, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, {}, 1, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray( x.length, x, 1, 0, y, '10', 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, true, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, false, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, null, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, undefined, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, [], 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, {}, 0, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray( x.length, x, 1, 0, y, 1, '10', unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, true, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, false, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, null, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, undefined, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, [], unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, {}, unary ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a unary function...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zmap.ndarray(); // $ExpectError
	zmap.ndarray( x.length ); // $ExpectError
	zmap.ndarray( x.length, x ); // $ExpectError
	zmap.ndarray( x.length, x, 1 ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0 ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	zmap.ndarray( x.length, x, 1, 0, y, 1, 0, unary, 10 ); // $ExpectError
}
