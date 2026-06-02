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
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import cunitspace = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace( x.length, start, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace( '10', start, x, 1 ); // $ExpectError
	cunitspace( true, start, x, 1 ); // $ExpectError
	cunitspace( false, start, x, 1 ); // $ExpectError
	cunitspace( null, start, x, 1 ); // $ExpectError
	cunitspace( undefined, start, x, 1 ); // $ExpectError
	cunitspace( [], start, x, 1 ); // $ExpectError
	cunitspace( {}, start, x, 1 ); // $ExpectError
	cunitspace( ( x: number ): number => x, start, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );

	cunitspace( x.length, 10, x, 1 ); // $ExpectError
	cunitspace( x.length, '10', x, 1 ); // $ExpectError
	cunitspace( x.length, true, x, 1 ); // $ExpectError
	cunitspace( x.length, false, x, 1 ); // $ExpectError
	cunitspace( x.length, null, x, 1 ); // $ExpectError
	cunitspace( x.length, undefined, x, 1 ); // $ExpectError
	cunitspace( x.length, [ '1' ], x, 1 ); // $ExpectError
	cunitspace( x.length, {}, x, 1 ); // $ExpectError
	cunitspace( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace( x.length, start, 10, 1 ); // $ExpectError
	cunitspace( x.length, start, '10', 1 ); // $ExpectError
	cunitspace( x.length, start, true, 1 ); // $ExpectError
	cunitspace( x.length, start, false, 1 ); // $ExpectError
	cunitspace( x.length, start, null, 1 ); // $ExpectError
	cunitspace( x.length, start, undefined, 1 ); // $ExpectError
	cunitspace( x.length, start, [ '1' ], 1 ); // $ExpectError
	cunitspace( x.length, start, {}, 1 ); // $ExpectError
	cunitspace( x.length, start, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace( x.length, start, x, '10' ); // $ExpectError
	cunitspace( x.length, start, x, true ); // $ExpectError
	cunitspace( x.length, start, x, false ); // $ExpectError
	cunitspace( x.length, start, x, null ); // $ExpectError
	cunitspace( x.length, start, x, undefined ); // $ExpectError
	cunitspace( x.length, start, x, [] ); // $ExpectError
	cunitspace( x.length, start, x, {} ); // $ExpectError
	cunitspace( x.length, start, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace(); // $ExpectError
	cunitspace( x.length ); // $ExpectError
	cunitspace( x.length, start ); // $ExpectError
	cunitspace( x.length, start, x ); // $ExpectError
	cunitspace( x.length, start, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace.ndarray( x.length, start, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace.ndarray( '10', start, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( true, start, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( false, start, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( null, start, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( undefined, start, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( [], start, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( {}, start, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( ( x: number ): number => x, start, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );

	cunitspace.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, [ '1' ], x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace.ndarray( x.length, start, 10, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, '10', 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, true, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, false, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, null, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, undefined, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, [ '1' ], 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, {}, 1, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace.ndarray( x.length, start, x, '10', 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, true, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, false, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, null, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, undefined, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, [], 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, {}, 0 ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace.ndarray( x.length, start, x, 1, '10' ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1, true ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1, false ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1, null ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1, undefined ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1, [] ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1, {} ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 2.0, 2.0 );

	cunitspace.ndarray(); // $ExpectError
	cunitspace.ndarray( x.length ); // $ExpectError
	cunitspace.ndarray( x.length, start ); // $ExpectError
	cunitspace.ndarray( x.length, start, x ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1 ); // $ExpectError
	cunitspace.ndarray( x.length, start, x, 1, 0, 10 ); // $ExpectError
}
