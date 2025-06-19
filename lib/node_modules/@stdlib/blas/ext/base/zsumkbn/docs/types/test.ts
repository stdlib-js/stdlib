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
import zsumkbn = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const x = new Complex128Array( 10 );

	zsumkbn( x.length, x, 1 ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsumkbn( '10', x, 1 ); // $ExpectError
	zsumkbn( true, x, 1 ); // $ExpectError
	zsumkbn( false, x, 1 ); // $ExpectError
	zsumkbn( null, x, 1 ); // $ExpectError
	zsumkbn( undefined, x, 1 ); // $ExpectError
	zsumkbn( [], x, 1 ); // $ExpectError
	zsumkbn( {}, x, 1 ); // $ExpectError
	zsumkbn( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zsumkbn( x.length, 10, 1 ); // $ExpectError
	zsumkbn( x.length, '10', 1 ); // $ExpectError
	zsumkbn( x.length, true, 1 ); // $ExpectError
	zsumkbn( x.length, false, 1 ); // $ExpectError
	zsumkbn( x.length, null, 1 ); // $ExpectError
	zsumkbn( x.length, undefined, 1 ); // $ExpectError
	zsumkbn( x.length, [], 1 ); // $ExpectError
	zsumkbn( x.length, {}, 1 ); // $ExpectError
	zsumkbn( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsumkbn( x.length, x, '10' ); // $ExpectError
	zsumkbn( x.length, x, true ); // $ExpectError
	zsumkbn( x.length, x, false ); // $ExpectError
	zsumkbn( x.length, x, null ); // $ExpectError
	zsumkbn( x.length, x, undefined ); // $ExpectError
	zsumkbn( x.length, x, [] ); // $ExpectError
	zsumkbn( x.length, x, {} ); // $ExpectError
	zsumkbn( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zsumkbn(); // $ExpectError
	zsumkbn( x.length ); // $ExpectError
	zsumkbn( x.length, x ); // $ExpectError
	zsumkbn( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a complex number...
{
	const x = new Complex128Array( 10 );

	zsumkbn.ndarray( x.length, x, 1, 0 ); // $ExpectType Complex128
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsumkbn.ndarray( '10', x, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( true, x, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( false, x, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( null, x, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( undefined, x, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( [], x, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( {}, x, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zsumkbn.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, true, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, false, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, null, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, [], 1, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsumkbn.ndarray( x.length, x, '10', 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, x, true, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, x, false, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, x, null, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, x, [], 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, x, {}, 0 ); // $ExpectError
	zsumkbn.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zsumkbn.ndarray( x.length, x, 1, '10' ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1, true ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1, false ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1, null ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1, undefined ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1, [] ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1, {} ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zsumkbn.ndarray(); // $ExpectError
	zsumkbn.ndarray( x.length ); // $ExpectError
	zsumkbn.ndarray( x.length, x ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1 ); // $ExpectError
	zsumkbn.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
