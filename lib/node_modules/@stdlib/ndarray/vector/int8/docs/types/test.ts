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
import Int8Vector = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Int8Vector(); // $ExpectType int8ndarray
	new Int8Vector( {} ); // $ExpectType int8ndarray

	new Int8Vector( 10 ); // $ExpectType int8ndarray
	new Int8Vector( 10, {} ); // $ExpectType int8ndarray

	new Int8Vector( [ 1, 2, 3 ] ); // $ExpectType int8ndarray
	new Int8Vector( [ 1, 2, 3 ], {} ); // $ExpectType int8ndarray

	new Int8Vector( new ArrayBuffer( 10 ) ); // $ExpectType int8ndarray
	new Int8Vector( new ArrayBuffer( 10 ), {} ); // $ExpectType int8ndarray

	new Int8Vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType int8ndarray
	new Int8Vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType int8ndarray

	new Int8Vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType int8ndarray
	new Int8Vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType int8ndarray

	const vector = Int8Vector;
	vector(); // $ExpectType int8ndarray
	vector( {} ); // $ExpectType int8ndarray

	vector( 10 ); // $ExpectType int8ndarray
	vector( 10, {} ); // $ExpectType int8ndarray

	vector( [ 1, 2, 3 ] ); // $ExpectType int8ndarray
	vector( [ 1, 2, 3 ], {} ); // $ExpectType int8ndarray

	vector( new ArrayBuffer( 10 ) ); // $ExpectType int8ndarray
	vector( new ArrayBuffer( 10 ), {} ); // $ExpectType int8ndarray

	vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType int8ndarray
	vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType int8ndarray

	vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType int8ndarray
	vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType int8ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Int8Vector( true ); // $ExpectError
	new Int8Vector( false ); // $ExpectError
	new Int8Vector( null ); // $ExpectError
	new Int8Vector( ( x: number ): number => x ); // $ExpectError

	const vector = Int8Vector;
	vector( true ); // $ExpectError
	vector( false ); // $ExpectError
	vector( null ); // $ExpectError
	vector( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Int8Vector( buf, 8, 2, {}, {} ); // $ExpectError

	const vector = Int8Vector;
	vector( buf, 8, 2, {}, {} ); // $ExpectError
}
