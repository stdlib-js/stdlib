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

import GenericMatrix = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new GenericMatrix(); // $ExpectType genericndarray<unknown>
	new GenericMatrix( {} ); // $ExpectType genericndarray<unknown>

	new GenericMatrix( 10, 10 ); // $ExpectType genericndarray<unknown>
	new GenericMatrix( 10, 10, {} ); // $ExpectType genericndarray<unknown>

	new GenericMatrix( [ 10, 10 ] ); // $ExpectType genericndarray<unknown>
	new GenericMatrix( [ 10, 10 ], {} ); // $ExpectType genericndarray<unknown>

	new GenericMatrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType genericndarray<number>
	new GenericMatrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType genericndarray<number>

	const matrix = GenericMatrix;
	matrix(); // $ExpectType genericndarray<unknown>
	matrix( {} ); // $ExpectType genericndarray<unknown>

	matrix( 10, 10 ); // $ExpectType genericndarray<unknown>
	matrix( 10, 10, {} ); // $ExpectType genericndarray<unknown>

	matrix( [ 10, 10 ] ); // $ExpectType genericndarray<unknown>
	matrix( [ 10, 10 ], {} ); // $ExpectType genericndarray<unknown>

	matrix( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType genericndarray<number>
	matrix( [ [ 1, 2 ], [ 3, 4 ] ], {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new GenericMatrix( true ); // $ExpectError
	new GenericMatrix( false ); // $ExpectError
	new GenericMatrix( null ); // $ExpectError
	new GenericMatrix( ( x: number ): number => x ); // $ExpectError

	const matrix = GenericMatrix;
	matrix( true ); // $ExpectError
	matrix( false ); // $ExpectError
	matrix( null ); // $ExpectError
	matrix( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	new GenericMatrix( 8, 2, {}, {} ); // $ExpectError
	new GenericMatrix( [ 2, 1 ], {}, {} ); // $ExpectError

	const matrix = GenericMatrix;
	matrix( 8, 2, {}, {} ); // $ExpectError
	matrix( [ 2, 1 ], {}, {} ); // $ExpectError
}
