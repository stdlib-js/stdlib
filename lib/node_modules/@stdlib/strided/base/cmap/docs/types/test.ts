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

import { Complex64 } from '@stdlib/types/complex';
import Complex64Array = require( '@stdlib/array/complex64' );
import cmplx64 = require( '@stdlib/complex/float32' );
import cmap = require( './index' );

/**
* Unary callback.
*
* @param x - input value
* @returns result
*/
function unary( x: Complex64 ): Complex64 {
	return new cmplx64( x.re, x.im );
}


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap( x.length, x, 1, y, 1, unary ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap( '10', x, 1, y, 1, unary ); // $ExpectError
	cmap( true, x, 1, y, 1, unary ); // $ExpectError
	cmap( false, x, 1, y, 1, unary ); // $ExpectError
	cmap( null, x, 1, y, 1, unary ); // $ExpectError
	cmap( undefined, x, 1, y, 1, unary ); // $ExpectError
	cmap( [], x, 1, y, 1, unary ); // $ExpectError
	cmap( {}, x, 1, y, 1, unary ); // $ExpectError
	cmap( ( x: number ): number => x, x, 1, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap( x.length, 10, 1, y, 1, unary ); // $ExpectError
	cmap( x.length, '10', 1, y, 1, unary ); // $ExpectError
	cmap( x.length, true, 1, y, 1, unary ); // $ExpectError
	cmap( x.length, false, 1, y, 1, unary ); // $ExpectError
	cmap( x.length, null, 1, y, 1, unary ); // $ExpectError
	cmap( x.length, undefined, 1, y, 1, unary ); // $ExpectError
	cmap( x.length, [ '1' ], 1, y, 1, unary ); // $ExpectError
	cmap( x.length, {}, 1, y, 1, unary ); // $ExpectError
	cmap( x.length, ( x: number ): number => x, 1, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap( x.length, x, '10', y, 1, unary ); // $ExpectError
	cmap( x.length, x, true, y, 1, unary ); // $ExpectError
	cmap( x.length, x, false, y, 1, unary ); // $ExpectError
	cmap( x.length, x, null, y, 1, unary ); // $ExpectError
	cmap( x.length, x, undefined, y, 1, unary ); // $ExpectError
	cmap( x.length, x, [], y, 1, unary ); // $ExpectError
	cmap( x.length, x, {}, y, 1, unary ); // $ExpectError
	cmap( x.length, x, ( x: number ): number => x, y, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	cmap( x.length, x, 1, 10, 1, unary ); // $ExpectError
	cmap( x.length, x, 1, '10', 1, unary ); // $ExpectError
	cmap( x.length, x, 1, true, 1, unary ); // $ExpectError
	cmap( x.length, x, 1, false, 1, unary ); // $ExpectError
	cmap( x.length, x, 1, null, 1, unary ); // $ExpectError
	cmap( x.length, x, 1, undefined, 1, unary ); // $ExpectError
	cmap( x.length, x, 1, [ '1' ], 1, unary ); // $ExpectError
	cmap( x.length, x, 1, {}, 1, unary ); // $ExpectError
	cmap( x.length, x, 1, ( x: number ): number => x, 1, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap( x.length, x, 1, y, '10', unary ); // $ExpectError
	cmap( x.length, x, 1, y, true, unary ); // $ExpectError
	cmap( x.length, x, 1, y, false, unary ); // $ExpectError
	cmap( x.length, x, 1, y, null, unary ); // $ExpectError
	cmap( x.length, x, 1, y, undefined, unary ); // $ExpectError
	cmap( x.length, x, 1, y, [], unary ); // $ExpectError
	cmap( x.length, x, 1, y, {}, unary ); // $ExpectError
	cmap( x.length, x, 1, y, ( x: number ): number => x, unary ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a unary function...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap( x.length, x, 1, y, 1, '10' ); // $ExpectError
	cmap( x.length, x, 1, y, 1, 0 ); // $ExpectError
	cmap( x.length, x, 1, y, 1, true ); // $ExpectError
	cmap( x.length, x, 1, y, 1, false ); // $ExpectError
	cmap( x.length, x, 1, y, 1, null ); // $ExpectError
	cmap( x.length, x, 1, y, 1, undefined ); // $ExpectError
	cmap( x.length, x, 1, y, 1, [] ); // $ExpectError
	cmap( x.length, x, 1, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap(); // $ExpectError
	cmap( x.length ); // $ExpectError
	cmap( x.length, x ); // $ExpectError
	cmap( x.length, x, 1 ); // $ExpectError
	cmap( x.length, x, 1, y ); // $ExpectError
	cmap( x.length, x, 1, y, 1 ); // $ExpectError
	cmap( x.length, x, 1, y, 1, unary, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, unary ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray( '10', x, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( true, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( false, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( null, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( undefined, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( [], x, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( {}, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray( x.length, 10, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, '10', 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, true, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, false, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, null, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, undefined, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, [ '1' ], 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, {}, 1, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray( x.length, x, '10', 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, true, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, false, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, null, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, undefined, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, [], 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, {}, 0, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray( x.length, x, 1, '10', y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, true, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, false, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, null, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, undefined, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, [], y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, {}, y, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	cmap.ndarray( x.length, x, 1, 0, 10, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, '10', 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, true, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, false, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, null, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, undefined, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, {}, 1, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray( x.length, x, 1, 0, y, '10', 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, true, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, false, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, null, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, undefined, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, [], 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, {}, 0, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray( x.length, x, 1, 0, y, 1, '10', unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, true, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, false, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, null, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, undefined, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, [], unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, {}, unary ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, unary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a unary function...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cmap.ndarray(); // $ExpectError
	cmap.ndarray( x.length ); // $ExpectError
	cmap.ndarray( x.length, x ); // $ExpectError
	cmap.ndarray( x.length, x, 1 ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0 ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	cmap.ndarray( x.length, x, 1, 0, y, 1, 0, unary, 10 ); // $ExpectError
}
