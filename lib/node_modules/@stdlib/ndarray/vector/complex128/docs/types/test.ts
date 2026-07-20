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

import ArrayBuffer = require( '@stdlib/array/buffer' );
import Complex128Vector = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Complex128Vector(); // $ExpectType complex128ndarray
	new Complex128Vector( {} ); // $ExpectType complex128ndarray

	new Complex128Vector( 10 ); // $ExpectType complex128ndarray
	new Complex128Vector( 10, {} ); // $ExpectType complex128ndarray

	new Complex128Vector( [ 1, 2, 3, 4 ] ); // $ExpectType complex128ndarray
	new Complex128Vector( [ 1, 2, 3, 4 ], {} ); // $ExpectType complex128ndarray

	new Complex128Vector( new ArrayBuffer( 10 ) ); // $ExpectType complex128ndarray
	new Complex128Vector( new ArrayBuffer( 10 ), {} ); // $ExpectType complex128ndarray

	new Complex128Vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType complex128ndarray
	new Complex128Vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType complex128ndarray

	new Complex128Vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType complex128ndarray
	new Complex128Vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType complex128ndarray

	const vector = Complex128Vector;
	vector(); // $ExpectType complex128ndarray
	vector( {} ); // $ExpectType complex128ndarray

	vector( 10 ); // $ExpectType complex128ndarray
	vector( 10, {} ); // $ExpectType complex128ndarray

	vector( [ 1, 2, 3, 4 ] ); // $ExpectType complex128ndarray
	vector( [ 1, 2, 3, 4 ], {} ); // $ExpectType complex128ndarray

	vector( new ArrayBuffer( 10 ) ); // $ExpectType complex128ndarray
	vector( new ArrayBuffer( 10 ), {} ); // $ExpectType complex128ndarray

	vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType complex128ndarray
	vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType complex128ndarray

	vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType complex128ndarray
	vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType complex128ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Complex128Vector( true ); // $ExpectError
	new Complex128Vector( false ); // $ExpectError
	new Complex128Vector( null ); // $ExpectError
	new Complex128Vector( ( x: number ): number => x ); // $ExpectError

	const vector = Complex128Vector;
	vector( true ); // $ExpectError
	vector( false ); // $ExpectError
	vector( null ); // $ExpectError
	vector( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Complex128Vector( buf, 8, 2, {}, {} ); // $ExpectError

	const vector = Complex128Vector;
	vector( buf, 8, 2, {}, {} ); // $ExpectError
}
