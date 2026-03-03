/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
import scasum = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Complex64Array( 10 );

	scasum( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scasum( '10', x, 1 ); // $ExpectError
	scasum( true, x, 1 ); // $ExpectError
	scasum( false, x, 1 ); // $ExpectError
	scasum( null, x, 1 ); // $ExpectError
	scasum( undefined, x, 1 ); // $ExpectError
	scasum( [], x, 1 ); // $ExpectError
	scasum( {}, x, 1 ); // $ExpectError
	scasum( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	scasum( x.length, 10, 1 ); // $ExpectError
	scasum( x.length, '10', 1 ); // $ExpectError
	scasum( x.length, true, 1 ); // $ExpectError
	scasum( x.length, false, 1 ); // $ExpectError
	scasum( x.length, null, 1 ); // $ExpectError
	scasum( x.length, undefined, 1 ); // $ExpectError
	scasum( x.length, [], 1 ); // $ExpectError
	scasum( x.length, {}, 1 ); // $ExpectError
	scasum( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scasum( x.length, x, '10' ); // $ExpectError
	scasum( x.length, x, true ); // $ExpectError
	scasum( x.length, x, false ); // $ExpectError
	scasum( x.length, x, null ); // $ExpectError
	scasum( x.length, x, undefined ); // $ExpectError
	scasum( x.length, x, [] ); // $ExpectError
	scasum( x.length, x, {} ); // $ExpectError
	scasum( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );

	scasum(); // $ExpectError
	scasum( x.length ); // $ExpectError
	scasum( x.length, x ); // $ExpectError
	scasum( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Complex64Array( 10 );

	scasum.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scasum.ndarray( '10', x, 1, 0 ); // $ExpectError
	scasum.ndarray( true, x, 1, 0 ); // $ExpectError
	scasum.ndarray( false, x, 1, 0 ); // $ExpectError
	scasum.ndarray( null, x, 1, 0 ); // $ExpectError
	scasum.ndarray( undefined, x, 1, 0 ); // $ExpectError
	scasum.ndarray( [], x, 1, 0 ); // $ExpectError
	scasum.ndarray( {}, x, 1, 0 ); // $ExpectError
	scasum.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	scasum.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	scasum.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	scasum.ndarray( x.length, true, 1, 0 ); // $ExpectError
	scasum.ndarray( x.length, false, 1, 0 ); // $ExpectError
	scasum.ndarray( x.length, null, 1, 0 ); // $ExpectError
	scasum.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	scasum.ndarray( x.length, [], 1, 0 ); // $ExpectError
	scasum.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	scasum.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scasum.ndarray( x.length, x, '10', 0 ); // $ExpectError
	scasum.ndarray( x.length, x, true, 0 ); // $ExpectError
	scasum.ndarray( x.length, x, false, 0 ); // $ExpectError
	scasum.ndarray( x.length, x, null, 0 ); // $ExpectError
	scasum.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	scasum.ndarray( x.length, x, [], 0 ); // $ExpectError
	scasum.ndarray( x.length, x, {}, 0 ); // $ExpectError
	scasum.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scasum.ndarray( x.length, x, 1, '10' ); // $ExpectError
	scasum.ndarray( x.length, x, 1, true ); // $ExpectError
	scasum.ndarray( x.length, x, 1, false ); // $ExpectError
	scasum.ndarray( x.length, x, 1, null ); // $ExpectError
	scasum.ndarray( x.length, x, 1, undefined ); // $ExpectError
	scasum.ndarray( x.length, x, 1, [] ); // $ExpectError
	scasum.ndarray( x.length, x, 1, {} ); // $ExpectError
	scasum.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );

	scasum.ndarray(); // $ExpectError
	scasum.ndarray( x.length ); // $ExpectError
	scasum.ndarray( x.length, x ); // $ExpectError
	scasum.ndarray( x.length, x, 1 ); // $ExpectError
	scasum.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}
