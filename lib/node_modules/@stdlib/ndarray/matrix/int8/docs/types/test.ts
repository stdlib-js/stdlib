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
import Int8Matrix = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Int8Matrix(); // $ExpectType int8ndarray
	new Int8Matrix( {} ); // $ExpectType int8ndarray

	new Int8Matrix( 10, 10 ); // $ExpectType int8ndarray
	new Int8Matrix( 10, 10, {} ); // $ExpectType int8ndarray

	new Int8Matrix( [ 10, 10 ] ); // $ExpectType int8ndarray
	new Int8Matrix( [ 10, 10 ], {} ); // $ExpectType int8ndarray

	new Int8Matrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType int8ndarray
	new Int8Matrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType int8ndarray

	new Int8Matrix( new ArrayBuffer( 10 ) ); // $ExpectType int8ndarray
	new Int8Matrix( new ArrayBuffer( 10 ), {} ); // $ExpectType int8ndarray

	new Int8Matrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType int8ndarray
	new Int8Matrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType int8ndarray

	new Int8Matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType int8ndarray
	new Int8Matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType int8ndarray

	new Int8Matrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType int8ndarray
	new Int8Matrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType int8ndarray

	const matrix = Int8Matrix;
	matrix(); // $ExpectType int8ndarray
	matrix( {} ); // $ExpectType int8ndarray

	matrix( 10, 10 ); // $ExpectType int8ndarray
	matrix( 10, 10, {} ); // $ExpectType int8ndarray

	matrix( [ 10, 10 ] ); // $ExpectType int8ndarray
	matrix( [ 10, 10 ], {} ); // $ExpectType int8ndarray

	matrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType int8ndarray
	matrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType int8ndarray

	matrix( new ArrayBuffer( 10 ) ); // $ExpectType int8ndarray
	matrix( new ArrayBuffer( 10 ), {} ); // $ExpectType int8ndarray

	matrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType int8ndarray
	matrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType int8ndarray

	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType int8ndarray
	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType int8ndarray

	matrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType int8ndarray
	matrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType int8ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Int8Matrix( true ); // $ExpectError
	new Int8Matrix( false ); // $ExpectError
	new Int8Matrix( null ); // $ExpectError
	new Int8Matrix( ( x: number ): number => x ); // $ExpectError

	const matrix = Int8Matrix;
	matrix( true ); // $ExpectError
	matrix( false ); // $ExpectError
	matrix( null ); // $ExpectError
	matrix( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Int8Matrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	new Int8Matrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError

	const matrix = Int8Matrix;
	matrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	matrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError
}
