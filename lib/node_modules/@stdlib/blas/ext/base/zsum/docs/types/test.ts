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

import Complex128Array = require( '@stdlib/array/complex128' );
import zsum = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const x = new Complex128Array( 10 );

	zsum( x.length, x, 1 ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsum( '10', x, 1 ); // $ExpectError
	zsum( true, x, 1 ); // $ExpectError
	zsum( false, x, 1 ); // $ExpectError
	zsum( null, x, 1 ); // $ExpectError
	zsum( undefined, x, 1 ); // $ExpectError
	zsum( [], x, 1 ); // $ExpectError
	zsum( {}, x, 1 ); // $ExpectError
	zsum( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zsum( x.length, 10, 1 ); // $ExpectError
	zsum( x.length, '10', 1 ); // $ExpectError
	zsum( x.length, true, 1 ); // $ExpectError
	zsum( x.length, false, 1 ); // $ExpectError
	zsum( x.length, null, 1 ); // $ExpectError
	zsum( x.length, undefined, 1 ); // $ExpectError
	zsum( x.length, [], 1 ); // $ExpectError
	zsum( x.length, {}, 1 ); // $ExpectError
	zsum( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsum( x.length, x, '10' ); // $ExpectError
	zsum( x.length, x, true ); // $ExpectError
	zsum( x.length, x, false ); // $ExpectError
	zsum( x.length, x, null ); // $ExpectError
	zsum( x.length, x, undefined ); // $ExpectError
	zsum( x.length, x, [] ); // $ExpectError
	zsum( x.length, x, {} ); // $ExpectError
	zsum( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zsum(); // $ExpectError
	zsum( x.length ); // $ExpectError
	zsum( x.length, x ); // $ExpectError
	zsum( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a complex number...
{
	const x = new Complex128Array( 10 );

	zsum.ndarray( x.length, x, 1, 0 ); // $ExpectType Complex128
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsum.ndarray( '10', x, 1, 0 ); // $ExpectError
	zsum.ndarray( true, x, 1, 0 ); // $ExpectError
	zsum.ndarray( false, x, 1, 0 ); // $ExpectError
	zsum.ndarray( null, x, 1, 0 ); // $ExpectError
	zsum.ndarray( undefined, x, 1, 0 ); // $ExpectError
	zsum.ndarray( [], x, 1, 0 ); // $ExpectError
	zsum.ndarray( {}, x, 1, 0 ); // $ExpectError
	zsum.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zsum.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	zsum.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	zsum.ndarray( x.length, true, 1, 0 ); // $ExpectError
	zsum.ndarray( x.length, false, 1, 0 ); // $ExpectError
	zsum.ndarray( x.length, null, 1, 0 ); // $ExpectError
	zsum.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	zsum.ndarray( x.length, [], 1, 0 ); // $ExpectError
	zsum.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	zsum.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsum.ndarray( x.length, x, '10', 0 ); // $ExpectError
	zsum.ndarray( x.length, x, true, 0 ); // $ExpectError
	zsum.ndarray( x.length, x, false, 0 ); // $ExpectError
	zsum.ndarray( x.length, x, null, 0 ); // $ExpectError
	zsum.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	zsum.ndarray( x.length, x, [], 0 ); // $ExpectError
	zsum.ndarray( x.length, x, {}, 0 ); // $ExpectError
	zsum.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsum.ndarray( x.length, x, 1, '10' ); // $ExpectError
	zsum.ndarray( x.length, x, 1, true ); // $ExpectError
	zsum.ndarray( x.length, x, 1, false ); // $ExpectError
	zsum.ndarray( x.length, x, 1, null ); // $ExpectError
	zsum.ndarray( x.length, x, 1, undefined ); // $ExpectError
	zsum.ndarray( x.length, x, 1, [] ); // $ExpectError
	zsum.ndarray( x.length, x, 1, {} ); // $ExpectError
	zsum.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zsum.ndarray(); // $ExpectError
	zsum.ndarray( x.length ); // $ExpectError
	zsum.ndarray( x.length, x ); // $ExpectError
	zsum.ndarray( x.length, x, 1 ); // $ExpectError
	zsum.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
