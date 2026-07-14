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

import ArrayBuffer = require( '@stdlib/array/buffer' );
import Complex64Matrix = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Complex64Matrix(); // $ExpectType complex64ndarray
	new Complex64Matrix( {} ); // $ExpectType complex64ndarray

	new Complex64Matrix( 10, 10 ); // $ExpectType complex64ndarray
	new Complex64Matrix( 10, 10, {} ); // $ExpectType complex64ndarray

	new Complex64Matrix( [ 10, 10 ] ); // $ExpectType complex64ndarray
	new Complex64Matrix( [ 10, 10 ], {} ); // $ExpectType complex64ndarray

	new Complex64Matrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType complex64ndarray
	new Complex64Matrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType complex64ndarray

	new Complex64Matrix( new ArrayBuffer( 10 ) ); // $ExpectType complex64ndarray
	new Complex64Matrix( new ArrayBuffer( 10 ), {} ); // $ExpectType complex64ndarray

	new Complex64Matrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType complex64ndarray
	new Complex64Matrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType complex64ndarray

	new Complex64Matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType complex64ndarray
	new Complex64Matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType complex64ndarray

	new Complex64Matrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType complex64ndarray
	new Complex64Matrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType complex64ndarray

	const matrix = Complex64Matrix;
	matrix(); // $ExpectType complex64ndarray
	matrix( {} ); // $ExpectType complex64ndarray

	matrix( 10, 10 ); // $ExpectType complex64ndarray
	matrix( 10, 10, {} ); // $ExpectType complex64ndarray

	matrix( [ 10, 10 ] ); // $ExpectType complex64ndarray
	matrix( [ 10, 10 ], {} ); // $ExpectType complex64ndarray

	matrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType complex64ndarray
	matrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType complex64ndarray

	matrix( new ArrayBuffer( 10 ) ); // $ExpectType complex64ndarray
	matrix( new ArrayBuffer( 10 ), {} ); // $ExpectType complex64ndarray

	matrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType complex64ndarray
	matrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType complex64ndarray

	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType complex64ndarray
	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType complex64ndarray

	matrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType complex64ndarray
	matrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType complex64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Complex64Matrix( true ); // $ExpectError
	new Complex64Matrix( false ); // $ExpectError
	new Complex64Matrix( null ); // $ExpectError
	new Complex64Matrix( ( x: number ): number => x ); // $ExpectError

	const matrix = Complex64Matrix;
	matrix( true ); // $ExpectError
	matrix( false ); // $ExpectError
	matrix( null ); // $ExpectError
	matrix( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Complex64Matrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	new Complex64Matrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError

	const matrix = Complex64Matrix;
	matrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	matrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError
}
