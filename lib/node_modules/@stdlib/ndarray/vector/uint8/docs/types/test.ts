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
import Uint8Vector = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Uint8Vector(); // $ExpectType uint8ndarray
	new Uint8Vector( {} ); // $ExpectType uint8ndarray

	new Uint8Vector( 10 ); // $ExpectType uint8ndarray
	new Uint8Vector( 10, {} ); // $ExpectType uint8ndarray

	new Uint8Vector( [ 1, 2, 3 ] ); // $ExpectType uint8ndarray
	new Uint8Vector( [ 1, 2, 3 ], {} ); // $ExpectType uint8ndarray

	new Uint8Vector( new ArrayBuffer( 10 ) ); // $ExpectType uint8ndarray
	new Uint8Vector( new ArrayBuffer( 10 ), {} ); // $ExpectType uint8ndarray

	new Uint8Vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType uint8ndarray
	new Uint8Vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType uint8ndarray

	new Uint8Vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType uint8ndarray
	new Uint8Vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType uint8ndarray

	const vector = Uint8Vector;
	vector(); // $ExpectType uint8ndarray
	vector( {} ); // $ExpectType uint8ndarray

	vector( 10 ); // $ExpectType uint8ndarray
	vector( 10, {} ); // $ExpectType uint8ndarray

	vector( [ 1, 2, 3 ] ); // $ExpectType uint8ndarray
	vector( [ 1, 2, 3 ], {} ); // $ExpectType uint8ndarray

	vector( new ArrayBuffer( 10 ) ); // $ExpectType uint8ndarray
	vector( new ArrayBuffer( 10 ), {} ); // $ExpectType uint8ndarray

	vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType uint8ndarray
	vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType uint8ndarray

	vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType uint8ndarray
	vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType uint8ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Uint8Vector( true ); // $ExpectError
	new Uint8Vector( false ); // $ExpectError
	new Uint8Vector( null ); // $ExpectError
	new Uint8Vector( ( x: number ): number => x ); // $ExpectError

	const vector = Uint8Vector;
	vector( true ); // $ExpectError
	vector( false ); // $ExpectError
	vector( null ); // $ExpectError
	vector( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Uint8Vector( buf, 8, 2, {}, {} ); // $ExpectError

	const vector = Uint8Vector;
	vector( buf, 8, 2, {}, {} ); // $ExpectError
}
