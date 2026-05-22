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

import Complex64Array = require( '@stdlib/array/complex64' );
import coneTo = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );

	coneTo( x.length, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );

	coneTo( '10', x, 1 ); // $ExpectError
	coneTo( true, x, 1 ); // $ExpectError
	coneTo( false, x, 1 ); // $ExpectError
	coneTo( null, x, 1 ); // $ExpectError
	coneTo( undefined, x, 1 ); // $ExpectError
	coneTo( [], x, 1 ); // $ExpectError
	coneTo( {}, x, 1 ); // $ExpectError
	coneTo( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	coneTo( x.length, 10, 1 ); // $ExpectError
	coneTo( x.length, '10', 1 ); // $ExpectError
	coneTo( x.length, true, 1 ); // $ExpectError
	coneTo( x.length, false, 1 ); // $ExpectError
	coneTo( x.length, null, 1 ); // $ExpectError
	coneTo( x.length, undefined, 1 ); // $ExpectError
	coneTo( x.length, [ '1' ], 1 ); // $ExpectError
	coneTo( x.length, {}, 1 ); // $ExpectError
	coneTo( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );

	coneTo( x.length, x, '10' ); // $ExpectError
	coneTo( x.length, x, true ); // $ExpectError
	coneTo( x.length, x, false ); // $ExpectError
	coneTo( x.length, x, null ); // $ExpectError
	coneTo( x.length, x, undefined ); // $ExpectError
	coneTo( x.length, x, [] ); // $ExpectError
	coneTo( x.length, x, {} ); // $ExpectError
	coneTo( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );

	coneTo(); // $ExpectError
	coneTo( x.length ); // $ExpectError
	coneTo( x.length, x ); // $ExpectError
	coneTo( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );

	coneTo.ndarray( x.length, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );

	coneTo.ndarray( '10', x, 1, 0 ); // $ExpectError
	coneTo.ndarray( true, x, 1, 0 ); // $ExpectError
	coneTo.ndarray( false, x, 1, 0 ); // $ExpectError
	coneTo.ndarray( null, x, 1, 0 ); // $ExpectError
	coneTo.ndarray( undefined, x, 1, 0 ); // $ExpectError
	coneTo.ndarray( [], x, 1, 0 ); // $ExpectError
	coneTo.ndarray( {}, x, 1, 0 ); // $ExpectError
	coneTo.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	coneTo.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	coneTo.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	coneTo.ndarray( x.length, true, 1, 0 ); // $ExpectError
	coneTo.ndarray( x.length, false, 1, 0 ); // $ExpectError
	coneTo.ndarray( x.length, null, 1, 0 ); // $ExpectError
	coneTo.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	coneTo.ndarray( x.length, [ '1' ], 1, 0 ); // $ExpectError
	coneTo.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	coneTo.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );

	coneTo.ndarray( x.length, x, '10', 0 ); // $ExpectError
	coneTo.ndarray( x.length, x, true, 0 ); // $ExpectError
	coneTo.ndarray( x.length, x, false, 0 ); // $ExpectError
	coneTo.ndarray( x.length, x, null, 0 ); // $ExpectError
	coneTo.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	coneTo.ndarray( x.length, x, [], 0 ); // $ExpectError
	coneTo.ndarray( x.length, x, {}, 0 ); // $ExpectError
	coneTo.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );

	coneTo.ndarray( x.length, x, 1, '10' ); // $ExpectError
	coneTo.ndarray( x.length, x, 1, true ); // $ExpectError
	coneTo.ndarray( x.length, x, 1, false ); // $ExpectError
	coneTo.ndarray( x.length, x, 1, null ); // $ExpectError
	coneTo.ndarray( x.length, x, 1, undefined ); // $ExpectError
	coneTo.ndarray( x.length, x, 1, [] ); // $ExpectError
	coneTo.ndarray( x.length, x, 1, {} ); // $ExpectError
	coneTo.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );

	coneTo.ndarray(); // $ExpectError
	coneTo.ndarray( x.length ); // $ExpectError
	coneTo.ndarray( x.length, x ); // $ExpectError
	coneTo.ndarray( x.length, x, 1 ); // $ExpectError
	coneTo.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
