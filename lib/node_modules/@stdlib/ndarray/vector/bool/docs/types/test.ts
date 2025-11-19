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
import BooleanVector = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new BooleanVector(); // $ExpectType boolndarray
	new BooleanVector( {} ); // $ExpectType boolndarray

	new BooleanVector( 10 ); // $ExpectType boolndarray
	new BooleanVector( 10, {} ); // $ExpectType boolndarray

	new BooleanVector( [ 1, 2, 3 ] ); // $ExpectType boolndarray
	new BooleanVector( [ 1, 2, 3 ], {} ); // $ExpectType boolndarray

	new BooleanVector( new ArrayBuffer( 10 ) ); // $ExpectType boolndarray
	new BooleanVector( new ArrayBuffer( 10 ), {} ); // $ExpectType boolndarray

	new BooleanVector( new ArrayBuffer( 10 ), 8 ); // $ExpectType boolndarray
	new BooleanVector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType boolndarray

	new BooleanVector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType boolndarray
	new BooleanVector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType boolndarray

	const vector = BooleanVector;
	vector(); // $ExpectType boolndarray
	vector( {} ); // $ExpectType boolndarray

	vector( 10 ); // $ExpectType boolndarray
	vector( 10, {} ); // $ExpectType boolndarray

	vector( [ 1, 2, 3 ] ); // $ExpectType boolndarray
	vector( [ 1, 2, 3 ], {} ); // $ExpectType boolndarray

	vector( new ArrayBuffer( 10 ) ); // $ExpectType boolndarray
	vector( new ArrayBuffer( 10 ), {} ); // $ExpectType boolndarray

	vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType boolndarray
	vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType boolndarray

	vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType boolndarray
	vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new BooleanVector( true ); // $ExpectError
	new BooleanVector( false ); // $ExpectError
	new BooleanVector( null ); // $ExpectError
	new BooleanVector( ( x: number ): number => x ); // $ExpectError

	const vector = BooleanVector;
	vector( true ); // $ExpectError
	vector( false ); // $ExpectError
	vector( null ); // $ExpectError
	vector( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new BooleanVector( buf, 8, 2, {}, {} ); // $ExpectError

	const vector = BooleanVector;
	vector( buf, 8, 2, {}, {} ); // $ExpectError
}
