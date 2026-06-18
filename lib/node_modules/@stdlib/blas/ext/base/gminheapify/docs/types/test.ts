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

/* eslint-disable space-in-parens */

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gminheapify = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );

	gminheapify( x.length, x, 1 ); // $ExpectType Float64Array
	gminheapify( x.length, new AccessorArray( x ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapify( '10', x, 1 ); // $ExpectError
	gminheapify( true, x, 1 ); // $ExpectError
	gminheapify( false, x, 1 ); // $ExpectError
	gminheapify( null, x, 1 ); // $ExpectError
	gminheapify( undefined, x, 1 ); // $ExpectError
	gminheapify( [], x, 1 ); // $ExpectError
	gminheapify( {}, x, 1 ); // $ExpectError
	gminheapify( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	const N = 10;

	gminheapify( N, '10', 1 ); // $ExpectError
	gminheapify( N, 10, 1 ); // $ExpectError
	gminheapify( N, true, 1 ); // $ExpectError
	gminheapify( N, false, 1 ); // $ExpectError
	gminheapify( N, null, 1 ); // $ExpectError
	gminheapify( N, undefined, 1 ); // $ExpectError
	gminheapify( N, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapify( x.length, x, '1' ); // $ExpectError
	gminheapify( x.length, x, true ); // $ExpectError
	gminheapify( x.length, x, false ); // $ExpectError
	gminheapify( x.length, x, null ); // $ExpectError
	gminheapify( x.length, x, undefined ); // $ExpectError
	gminheapify( x.length, x, [] ); // $ExpectError
	gminheapify( x.length, x, {} ); // $ExpectError
	gminheapify( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gminheapify(); // $ExpectError
	gminheapify( x.length ); // $ExpectError
	gminheapify( x.length, x ); // $ExpectError
	gminheapify( x.length, x, 1, {} ); // $ExpectError
}

// The function has an ndarray method...
{
	const x = new Float64Array( 10 );

	gminheapify.ndarray( x.length, x, 1, 0 ); // $ExpectType Float64Array
	gminheapify.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the ndarray method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapify.ndarray( '10', x, 1, 0 ); // $ExpectError
	gminheapify.ndarray( true, x, 1, 0 ); // $ExpectError
	gminheapify.ndarray( false, x, 1, 0 ); // $ExpectError
	gminheapify.ndarray( null, x, 1, 0 ); // $ExpectError
	gminheapify.ndarray( undefined, x, 1, 0 ); // $ExpectError
	gminheapify.ndarray( [], x, 1, 0 ); // $ExpectError
	gminheapify.ndarray( {}, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the ndarray method is provided a second argument which is not an array-like object...
{
	const N = 10;

	gminheapify.ndarray( N, '10', 1, 0 ); // $ExpectError
	gminheapify.ndarray( N, 10, 1, 0 ); // $ExpectError
	gminheapify.ndarray( N, true, 1, 0 ); // $ExpectError
	gminheapify.ndarray( N, false, 1, 0 ); // $ExpectError
	gminheapify.ndarray( N, null, 1, 0 ); // $ExpectError
	gminheapify.ndarray( N, undefined, 1, 0 ); // $ExpectError
	gminheapify.ndarray( N, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the ndarray method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapify.ndarray( x.length, x, '1', 0 ); // $ExpectError
	gminheapify.ndarray( x.length, x, true, 0 ); // $ExpectError
	gminheapify.ndarray( x.length, x, false, 0 ); // $ExpectError
	gminheapify.ndarray( x.length, x, null, 0 ); // $ExpectError
	gminheapify.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	gminheapify.ndarray( x.length, x, [], 0 ); // $ExpectError
	gminheapify.ndarray( x.length, x, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the ndarray method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapify.ndarray( x.length, x, 1, '0' ); // $ExpectError
	gminheapify.ndarray( x.length, x, 1, true ); // $ExpectError
	gminheapify.ndarray( x.length, x, 1, false ); // $ExpectError
	gminheapify.ndarray( x.length, x, 1, null ); // $ExpectError
	gminheapify.ndarray( x.length, x, 1, undefined ); // $ExpectError
	gminheapify.ndarray( x.length, x, 1, [] ); // $ExpectError
	gminheapify.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gminheapify.ndarray(); // $ExpectError
	gminheapify.ndarray( x.length ); // $ExpectError
	gminheapify.ndarray( x.length, x ); // $ExpectError
	gminheapify.ndarray( x.length, x, 1 ); // $ExpectError
	gminheapify.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}
