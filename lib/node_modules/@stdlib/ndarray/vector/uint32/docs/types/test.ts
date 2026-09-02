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
import Uint32Vector = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Uint32Vector(); // $ExpectType uint32ndarray
	new Uint32Vector( {} ); // $ExpectType uint32ndarray

	new Uint32Vector( 10 ); // $ExpectType uint32ndarray
	new Uint32Vector( 10, {} ); // $ExpectType uint32ndarray

	new Uint32Vector( [ 1, 2, 3 ] ); // $ExpectType uint32ndarray
	new Uint32Vector( [ 1, 2, 3 ], {} ); // $ExpectType uint32ndarray

	new Uint32Vector( new ArrayBuffer( 10 ) ); // $ExpectType uint32ndarray
	new Uint32Vector( new ArrayBuffer( 10 ), {} ); // $ExpectType uint32ndarray

	new Uint32Vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType uint32ndarray
	new Uint32Vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType uint32ndarray

	new Uint32Vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType uint32ndarray
	new Uint32Vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType uint32ndarray

	const vector = Uint32Vector;
	vector(); // $ExpectType uint32ndarray
	vector( {} ); // $ExpectType uint32ndarray

	vector( 10 ); // $ExpectType uint32ndarray
	vector( 10, {} ); // $ExpectType uint32ndarray

	vector( [ 1, 2, 3 ] ); // $ExpectType uint32ndarray
	vector( [ 1, 2, 3 ], {} ); // $ExpectType uint32ndarray

	vector( new ArrayBuffer( 10 ) ); // $ExpectType uint32ndarray
	vector( new ArrayBuffer( 10 ), {} ); // $ExpectType uint32ndarray

	vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType uint32ndarray
	vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType uint32ndarray

	vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType uint32ndarray
	vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType uint32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Uint32Vector( true ); // $ExpectError
	new Uint32Vector( false ); // $ExpectError
	new Uint32Vector( null ); // $ExpectError
	new Uint32Vector( ( x: number ): number => x ); // $ExpectError

	const vector = Uint32Vector;
	vector( true ); // $ExpectError
	vector( false ); // $ExpectError
	vector( null ); // $ExpectError
	vector( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Uint32Vector( buf, 8, 2, {}, {} ); // $ExpectError

	const vector = Uint32Vector;
	vector( buf, 8, 2, {}, {} ); // $ExpectError
}
