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
import vector = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	vector(); // $ExpectType float64ndarray
	vector( {} ); // $ExpectType float64ndarray

	vector( 10 ); // $ExpectType float64ndarray
	vector( 10, {} ); // $ExpectType float64ndarray

	vector( [ 1, 2, 3 ] ); // $ExpectType float64ndarray
	vector( [ 1, 2, 3 ], {} ); // $ExpectType float64ndarray

	vector( new ArrayBuffer( 10 ) ); // $ExpectType float64ndarray
	vector( new ArrayBuffer( 10 ), {} ); // $ExpectType float64ndarray

	vector( new ArrayBuffer( 10 ), 8 ); // $ExpectType float64ndarray
	vector( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType float64ndarray

	vector( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType float64ndarray
	vector( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType float64ndarray

	vector( 'float32' ); // $ExpectType float32ndarray
	vector( 'float32', {} ); // $ExpectType float32ndarray

	vector( 10, 'float32' ); // $ExpectType float32ndarray
	vector( 10, 'float32', {} ); // $ExpectType float32ndarray

	vector( [ 1, 2, 3 ], 'int32' ); // $ExpectType int32ndarray
	vector( [ 1, 2, 3 ], 'int32', {} ); // $ExpectType int32ndarray

	vector( new ArrayBuffer( 10 ), 'int32' ); // $ExpectType int32ndarray
	vector( new ArrayBuffer( 10 ), 'int32', {} ); // $ExpectType int32ndarray

	vector( new ArrayBuffer( 10 ), 8, 'float32' ); // $ExpectType float32ndarray
	vector( new ArrayBuffer( 10 ), 8, 'float32', {} ); // $ExpectType float32ndarray

	vector( new ArrayBuffer( 10 ), 8, 0, 'float32' ); // $ExpectType float32ndarray
	vector( new ArrayBuffer( 10 ), 8, 0, 'float32', {} ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a data type, number, array-like object, iterable, or options objects...
{
	vector( true ); // $ExpectError
	vector( false ); // $ExpectError
	vector( null ); // $ExpectError
	vector( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	vector( buf, 8, 2, 'int32', {}, {} ); // $ExpectError
}

// Attached the main export is a `factory` method which returns a function...
{
	vector.factory( 'float64' ); // $ExpectType TypedVector<"float64">
	vector.factory( 'float32' ); // $ExpectType TypedVector<"float32">
}

// The `factory` method returns an ndarray...
{
	const f1 = vector.factory( 'float64' );

	f1(); // $ExpectType float64ndarray
	f1( {} ); // $ExpectType float64ndarray

	f1( 10 ); // $ExpectType float64ndarray
	f1( 10, {} ); // $ExpectType float64ndarray

	f1( [ 1, 2, 3 ] ); // $ExpectType float64ndarray
	f1( [ 1, 2, 3 ], {} ); // $ExpectType float64ndarray

	f1( new ArrayBuffer( 10 ) ); // $ExpectType float64ndarray
	f1( new ArrayBuffer( 10 ), {} ); // $ExpectType float64ndarray

	f1( new ArrayBuffer( 10 ), 8 ); // $ExpectType float64ndarray
	f1( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType float64ndarray

	f1( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType float64ndarray
	f1( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType float64ndarray

	const f2 = vector.factory( 'float32' );

	f2(); // $ExpectType float32ndarray
	f2( {} ); // $ExpectType float32ndarray

	f2( 10 ); // $ExpectType float32ndarray
	f2( 10, {} ); // $ExpectType float32ndarray

	f2( [ 1, 2, 3 ] ); // $ExpectType float32ndarray
	f2( [ 1, 2, 3 ], {} ); // $ExpectType float32ndarray

	f2( new ArrayBuffer( 10 ) ); // $ExpectType float32ndarray
	f2( new ArrayBuffer( 10 ), {} ); // $ExpectType float32ndarray

	f2( new ArrayBuffer( 10 ), 8 ); // $ExpectType float32ndarray
	f2( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType float32ndarray

	f2( new ArrayBuffer( 10 ), 8, 0 ); // $ExpectType float32ndarray
	f2( new ArrayBuffer( 10 ), 8, 0, {} ); // $ExpectType float32ndarray

	const f3 = vector.factory( 'generic' );

	f3(); // $ExpectType genericndarray<number>
	f3( {} ); // $ExpectType genericndarray<number>

	f3( 10 ); // $ExpectType genericndarray<number>
	f3( 10, {} ); // $ExpectType genericndarray<number>

	f3( [ 1, 2, 3 ] ); // $ExpectType genericndarray<number>
	f3( [ 1, 2, 3 ], {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function returned by the `factory` method is provided a first argument which is not a data type, number, array-like object, iterable, or options objects...
{
	const f = vector.factory( 'float64' );

	f( true ); // $ExpectError
	f( false ); // $ExpectError
	f( null ); // $ExpectError
	f( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const f = vector.factory( 'float64' );

	const buf = new ArrayBuffer( 32 );
	f( buf, 8, 2, {}, {} ); // $ExpectError
}
