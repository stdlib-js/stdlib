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
import Uint8ClampedMatrix = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Uint8ClampedMatrix(); // $ExpectType uint8cndarray
	new Uint8ClampedMatrix( {} ); // $ExpectType uint8cndarray

	new Uint8ClampedMatrix( 10, 10 ); // $ExpectType uint8cndarray
	new Uint8ClampedMatrix( 10, 10, {} ); // $ExpectType uint8cndarray

	new Uint8ClampedMatrix( [ 10, 10 ] ); // $ExpectType uint8cndarray
	new Uint8ClampedMatrix( [ 10, 10 ], {} ); // $ExpectType uint8cndarray

	new Uint8ClampedMatrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType uint8cndarray
	new Uint8ClampedMatrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType uint8cndarray

	new Uint8ClampedMatrix( new ArrayBuffer( 10 ) ); // $ExpectType uint8cndarray
	new Uint8ClampedMatrix( new ArrayBuffer( 10 ), {} ); // $ExpectType uint8cndarray

	new Uint8ClampedMatrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType uint8cndarray
	new Uint8ClampedMatrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType uint8cndarray

	new Uint8ClampedMatrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType uint8cndarray
	new Uint8ClampedMatrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType uint8cndarray

	new Uint8ClampedMatrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType uint8cndarray
	new Uint8ClampedMatrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType uint8cndarray

	const matrix = Uint8ClampedMatrix;
	matrix(); // $ExpectType uint8cndarray
	matrix( {} ); // $ExpectType uint8cndarray

	matrix( 10, 10 ); // $ExpectType uint8cndarray
	matrix( 10, 10, {} ); // $ExpectType uint8cndarray

	matrix( [ 10, 10 ] ); // $ExpectType uint8cndarray
	matrix( [ 10, 10 ], {} ); // $ExpectType uint8cndarray

	matrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType uint8cndarray
	matrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType uint8cndarray

	matrix( new ArrayBuffer( 10 ) ); // $ExpectType uint8cndarray
	matrix( new ArrayBuffer( 10 ), {} ); // $ExpectType uint8cndarray

	matrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType uint8cndarray
	matrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType uint8cndarray

	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType uint8cndarray
	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType uint8cndarray

	matrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType uint8cndarray
	matrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Uint8ClampedMatrix( true ); // $ExpectError
	new Uint8ClampedMatrix( false ); // $ExpectError
	new Uint8ClampedMatrix( null ); // $ExpectError
	new Uint8ClampedMatrix( ( x: number ): number => x ); // $ExpectError

	const matrix = Uint8ClampedMatrix;
	matrix( true ); // $ExpectError
	matrix( false ); // $ExpectError
	matrix( null ); // $ExpectError
	matrix( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Uint8ClampedMatrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	new Uint8ClampedMatrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError

	const matrix = Uint8ClampedMatrix;
	matrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	matrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError
}
