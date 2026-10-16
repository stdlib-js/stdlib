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
import Float64Matrix = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new Float64Matrix(); // $ExpectType float64ndarray
	new Float64Matrix( {} ); // $ExpectType float64ndarray

	new Float64Matrix( 10, 10 ); // $ExpectType float64ndarray
	new Float64Matrix( 10, 10, {} ); // $ExpectType float64ndarray

	new Float64Matrix( [ 10, 10 ] ); // $ExpectType float64ndarray
	new Float64Matrix( [ 10, 10 ], {} ); // $ExpectType float64ndarray

	new Float64Matrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType float64ndarray
	new Float64Matrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType float64ndarray

	new Float64Matrix( new ArrayBuffer( 10 ) ); // $ExpectType float64ndarray
	new Float64Matrix( new ArrayBuffer( 10 ), {} ); // $ExpectType float64ndarray

	new Float64Matrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType float64ndarray
	new Float64Matrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType float64ndarray

	new Float64Matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType float64ndarray
	new Float64Matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType float64ndarray

	new Float64Matrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType float64ndarray
	new Float64Matrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType float64ndarray

	const matrix = Float64Matrix;
	matrix(); // $ExpectType float64ndarray
	matrix( {} ); // $ExpectType float64ndarray

	matrix( 10, 10 ); // $ExpectType float64ndarray
	matrix( 10, 10, {} ); // $ExpectType float64ndarray

	matrix( [ 10, 10 ] ); // $ExpectType float64ndarray
	matrix( [ 10, 10 ], {} ); // $ExpectType float64ndarray

	matrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType float64ndarray
	matrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType float64ndarray

	matrix( new ArrayBuffer( 10 ) ); // $ExpectType float64ndarray
	matrix( new ArrayBuffer( 10 ), {} ); // $ExpectType float64ndarray

	matrix( new ArrayBuffer( 10 ), 8 ); // $ExpectType float64ndarray
	matrix( new ArrayBuffer( 10 ), 8, {} ); // $ExpectType float64ndarray

	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ] ); // $ExpectType float64ndarray
	matrix( new ArrayBuffer( 10 ), 8, [ 1, 1 ], {} ); // $ExpectType float64ndarray

	matrix( new ArrayBuffer( 10 ), 8, 1, 1 ); // $ExpectType float64ndarray
	matrix( new ArrayBuffer( 10 ), 8, 1, 1, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new Float64Matrix( true ); // $ExpectError
	new Float64Matrix( false ); // $ExpectError
	new Float64Matrix( null ); // $ExpectError
	new Float64Matrix( ( x: number ): number => x ); // $ExpectError

	const matrix = Float64Matrix;
	matrix( true ); // $ExpectError
	matrix( false ); // $ExpectError
	matrix( null ); // $ExpectError
	matrix( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = new ArrayBuffer( 32 );
	new Float64Matrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	new Float64Matrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError

	const matrix = Float64Matrix;
	matrix( buf, 8, 2, 1, {}, {} ); // $ExpectError
	matrix( buf, 8, [ 2, 1 ], {}, {} ); // $ExpectError
}
