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

import Complex128Array = require( '@stdlib/array/complex128' );
import zany = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = new Complex128Array( 10 );

	zany( x.length, x, 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zany( '10', x, 1 ); // $ExpectError
	zany( true, x, 1 ); // $ExpectError
	zany( false, x, 1 ); // $ExpectError
	zany( null, x, 1 ); // $ExpectError
	zany( undefined, x, 1 ); // $ExpectError
	zany( [], x, 1 ); // $ExpectError
	zany( {}, x, 1 ); // $ExpectError
	zany( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zany( x.length, '10', 1 ); // $ExpectError
	zany( x.length, true, 1 ); // $ExpectError
	zany( x.length, false, 1 ); // $ExpectError
	zany( x.length, null, 1 ); // $ExpectError
	zany( x.length, undefined, 1 ); // $ExpectError
	zany( x.length, [], 1 ); // $ExpectError
	zany( x.length, {}, 1 ); // $ExpectError
	zany( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zany( x.length, x, '1' ); // $ExpectError
	zany( x.length, x, true ); // $ExpectError
	zany( x.length, x, false ); // $ExpectError
	zany( x.length, x, null ); // $ExpectError
	zany( x.length, x, undefined ); // $ExpectError
	zany( x.length, x, [] ); // $ExpectError
	zany( x.length, x, {} ); // $ExpectError
	zany( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zany(); // $ExpectError
	zany( x.length ); // $ExpectError
	zany( x.length, x ); // $ExpectError
	zany( x.length, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a boolean...
{
	const x = new Complex128Array( 10 );

	zany.ndarray( x.length, x, 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zany.ndarray( '10', x, 1, 0 ); // $ExpectError
	zany.ndarray( true, x, 1, 0 ); // $ExpectError
	zany.ndarray( false, x, 1, 0 ); // $ExpectError
	zany.ndarray( null, x, 1, 0 ); // $ExpectError
	zany.ndarray( undefined, x, 1, 0 ); // $ExpectError
	zany.ndarray( [], x, 1, 0 ); // $ExpectError
	zany.ndarray( {}, x, 1, 0 ); // $ExpectError
	zany.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zany.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	zany.ndarray( x.length, true, 1, 0 ); // $ExpectError
	zany.ndarray( x.length, false, 1, 0 ); // $ExpectError
	zany.ndarray( x.length, null, 1, 0 ); // $ExpectError
	zany.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	zany.ndarray( x.length, [], 1, 0 ); // $ExpectError
	zany.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	zany.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zany.ndarray( x.length, x, '1', 0 ); // $ExpectError
	zany.ndarray( x.length, x, true, 0 ); // $ExpectError
	zany.ndarray( x.length, x, false, 0 ); // $ExpectError
	zany.ndarray( x.length, x, null, 0 ); // $ExpectError
	zany.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	zany.ndarray( x.length, x, [], 0 ); // $ExpectError
	zany.ndarray( x.length, x, {}, 0 ); // $ExpectError
	zany.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zany.ndarray( x.length, x, 1, '0' ); // $ExpectError
	zany.ndarray( x.length, x, 1, true ); // $ExpectError
	zany.ndarray( x.length, x, 1, false ); // $ExpectError
	zany.ndarray( x.length, x, 1, null ); // $ExpectError
	zany.ndarray( x.length, x, 1, undefined ); // $ExpectError
	zany.ndarray( x.length, x, 1, [] ); // $ExpectError
	zany.ndarray( x.length, x, 1, {} ); // $ExpectError
	zany.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zany.ndarray(); // $ExpectError
	zany.ndarray( x.length ); // $ExpectError
	zany.ndarray( x.length, x ); // $ExpectError
	zany.ndarray( x.length, x, 1 ); // $ExpectError
	zany.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}
