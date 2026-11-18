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

import GenericVector = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	new GenericVector(); // $ExpectType genericndarray<unknown>
	new GenericVector( {} ); // $ExpectType genericndarray<unknown>

	new GenericVector( 10 ); // $ExpectType genericndarray<unknown>
	new GenericVector( 10, {} ); // $ExpectType genericndarray<unknown>

	new GenericVector( [ 1, 2, 3 ] ); // $ExpectType genericndarray<number>
	new GenericVector( [ 1, 2, 3 ], {} ); // $ExpectType genericndarray<number>

	const vector = GenericVector;
	vector(); // $ExpectType genericndarray<unknown>
	vector( {} ); // $ExpectType genericndarray<unknown>

	vector( 10 ); // $ExpectType genericndarray<unknown>
	vector( 10, {} ); // $ExpectType genericndarray<unknown>

	vector( [ 1, 2, 3 ] ); // $ExpectType genericndarray<number>
	vector( [ 1, 2, 3 ], {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number, array-like object, iterable, or options object...
{
	new GenericVector( true ); // $ExpectError
	new GenericVector( false ); // $ExpectError
	new GenericVector( null ); // $ExpectError
	new GenericVector( ( x: number ): number => x ); // $ExpectError

	const vector = GenericVector;
	vector( true ); // $ExpectError
	vector( false ); // $ExpectError
	vector( null ); // $ExpectError
	vector( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buf = [ 1, 2, 3 ];
	new GenericVector( buf, 8, 2, {}, {} ); // $ExpectError

	const vector = GenericVector;
	vector( buf, 8, 2, {}, {} ); // $ExpectError
}
