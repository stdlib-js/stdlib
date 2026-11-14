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
import BooleanMatrix = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new BooleanMatrix(); // $ExpectType boolndarray
	new BooleanMatrix( {} ); // $ExpectType boolndarray

	new BooleanMatrix( 10, 10 ); // $ExpectType boolndarray
	new BooleanMatrix( 10, 10, {} ); // $ExpectType boolndarray

	new BooleanMatrix( [ 10, 10 ] ); // $ExpectType boolndarray
	new BooleanMatrix( [ 10, 10 ], {} ); // $ExpectType boolndarray

	new BooleanMatrix( [ [ true, false ], [ false, true ] ] ); // $ExpectType boolndarray
	new BooleanMatrix( [ [ true, false ], [ false, true ] ], {} ); // $ExpectType boolndarray

	new BooleanMatrix( new ArrayBuffer( 10 ) ); // $ExpectType boolndarray
	new BooleanMatrix( new ArrayBuffer( 10 ), {} ); // $ExpectType boolndarray

	new BooleanMatrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType boolndarray
	new BooleanMatrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType boolndarray

	new BooleanMatrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType boolndarray
	new BooleanMatrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType boolndarray

	new BooleanMatrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType boolndarray
	new BooleanMatrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType boolndarray

	const matrix = BooleanMatrix;
	matrix(); // $ExpectType boolndarray
	matrix( {} ); // $ExpectType boolndarray

	matrix( 10, 10 ); // $ExpectType boolndarray
	matrix( 10, 10, {} ); // $ExpectType boolndarray

	matrix( [ 10, 10 ] ); // $ExpectType boolndarray
	matrix( [ 10, 10 ], {} ); // $ExpectType boolndarray

	matrix( [ [ true, false ], [ false, true ] ] ); // $ExpectType boolndarray
	matrix( [ [ true, false ], [ false, true ] ], {} ); // $ExpectType boolndarray

	matrix( new ArrayBuffer( 10 ) ); // $ExpectType boolndarray
	matrix( new ArrayBuffer( 10 ), {} ); // $ExpectType boolndarray

	matrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType boolndarray
	matrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType boolndarray

	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType boolndarray
	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType boolndarray

	matrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType boolndarray
	matrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new BooleanMatrix( true ); // $ExpectError
	new BooleanMatrix( false ); // $ExpectError
	new BooleanMatrix( null ); // $ExpectError
	new BooleanMatrix( ( x: number ): number => x ); // $ExpectError

	const matrix = BooleanMatrix;
	matrix( true ); // $ExpectError
	matrix( false ); // $ExpectError
	matrix( null ); // $ExpectError
	matrix( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new BooleanMatrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	new BooleanMatrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError

	const matrix = BooleanMatrix;
	matrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	matrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError
}
