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

import array2iterator = require( '@stdlib/array/to-iterator' );
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

	vector( array2iterator( [ 1, 2, 3 ] ) ); // $ExpectType float64ndarray
	vector( array2iterator( [ 1, 2, 3 ] ), {} ); // $ExpectType float64ndarray

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

	vector( array2iterator( [ 1, 2, 3 ] ), 'int32' ); // $ExpectType int32ndarray
	vector( array2iterator( [ 1, 2, 3 ] ), 'int32', {} ); // $ExpectType int32ndarray

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
