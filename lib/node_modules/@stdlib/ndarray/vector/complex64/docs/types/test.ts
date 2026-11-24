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
import Complex64Vector = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Complex64Vector(); // $ExpectType complex64ndarray
	new Complex64Vector( {} ); // $ExpectType complex64ndarray

	new Complex64Vector( 10 ); // $ExpectType complex64ndarray
	new Complex64Vector( 10, {} ); // $ExpectType complex64ndarray

	new Complex64Vector( [ 1, 2, 3, 4 ] ); // $ExpectType complex64ndarray
	new Complex64Vector( [ 1, 2, 3, 4 ], {} ); // $ExpectType complex64ndarray

	new Complex64Vector( new ArrayBuffer( 10 ) ); // $ExpectType complex64ndarray
	new Complex64Vector( new ArrayBuffer( 10 ), {} ); // $ExpectType complex64ndarray

	new Complex64Vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType complex64ndarray
	new Complex64Vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType complex64ndarray

	new Complex64Vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType complex64ndarray
	new Complex64Vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType complex64ndarray

	const vector = Complex64Vector;
	vector(); // $ExpectType complex64ndarray
	vector( {} ); // $ExpectType complex64ndarray

	vector( 10 ); // $ExpectType complex64ndarray
	vector( 10, {} ); // $ExpectType complex64ndarray

	vector( [ 1, 2, 3, 4 ] ); // $ExpectType complex64ndarray
	vector( [ 1, 2, 3, 4 ], {} ); // $ExpectType complex64ndarray

	vector( new ArrayBuffer( 10 ) ); // $ExpectType complex64ndarray
	vector( new ArrayBuffer( 10 ), {} ); // $ExpectType complex64ndarray

	vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType complex64ndarray
	vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType complex64ndarray

	vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType complex64ndarray
	vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType complex64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Complex64Vector( true ); // $ExpectError
	new Complex64Vector( false ); // $ExpectError
	new Complex64Vector( null ); // $ExpectError
	new Complex64Vector( ( x: number ): number => x ); // $ExpectError

	const vector = Complex64Vector;
	vector( true ); // $ExpectError
	vector( false ); // $ExpectError
	vector( null ); // $ExpectError
	vector( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Complex64Vector( buf, 8, 2, {}, {} ); // $ExpectError

	const vector = Complex64Vector;
	vector( buf, 8, 2, {}, {} ); // $ExpectError
}
