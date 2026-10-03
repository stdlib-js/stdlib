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

import Complex128Array = require( '@stdlib/array/complex128' );
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import zunitspace = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace( x.length, start, x, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace( '10', start, x, 1 ); // $ExpectError
	zunitspace( true, start, x, 1 ); // $ExpectError
	zunitspace( false, start, x, 1 ); // $ExpectError
	zunitspace( null, start, x, 1 ); // $ExpectError
	zunitspace( undefined, start, x, 1 ); // $ExpectError
	zunitspace( [], start, x, 1 ); // $ExpectError
	zunitspace( {}, start, x, 1 ); // $ExpectError
	zunitspace( ( x: number ): number => x, start, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not complex-like...
{
	const x = new Complex128Array( 10 );

	zunitspace( x.length, 10, x, 1 ); // $ExpectError
	zunitspace( x.length, '10', x, 1 ); // $ExpectError
	zunitspace( x.length, true, x, 1 ); // $ExpectError
	zunitspace( x.length, false, x, 1 ); // $ExpectError
	zunitspace( x.length, null, x, 1 ); // $ExpectError
	zunitspace( x.length, undefined, x, 1 ); // $ExpectError
	zunitspace( x.length, [ '1' ], x, 1 ); // $ExpectError
	zunitspace( x.length, {}, x, 1 ); // $ExpectError
	zunitspace( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace( x.length, start, 10, 1 ); // $ExpectError
	zunitspace( x.length, start, '10', 1 ); // $ExpectError
	zunitspace( x.length, start, true, 1 ); // $ExpectError
	zunitspace( x.length, start, false, 1 ); // $ExpectError
	zunitspace( x.length, start, null, 1 ); // $ExpectError
	zunitspace( x.length, start, undefined, 1 ); // $ExpectError
	zunitspace( x.length, start, [ '1' ], 1 ); // $ExpectError
	zunitspace( x.length, start, {}, 1 ); // $ExpectError
	zunitspace( x.length, start, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace( x.length, start, x, '10' ); // $ExpectError
	zunitspace( x.length, start, x, true ); // $ExpectError
	zunitspace( x.length, start, x, false ); // $ExpectError
	zunitspace( x.length, start, x, null ); // $ExpectError
	zunitspace( x.length, start, x, undefined ); // $ExpectError
	zunitspace( x.length, start, x, [] ); // $ExpectError
	zunitspace( x.length, start, x, {} ); // $ExpectError
	zunitspace( x.length, start, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace(); // $ExpectError
	zunitspace( x.length ); // $ExpectError
	zunitspace( x.length, start ); // $ExpectError
	zunitspace( x.length, start, x ); // $ExpectError
	zunitspace( x.length, start, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace.ndarray( x.length, start, x, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace.ndarray( '10', start, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( true, start, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( false, start, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( null, start, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( undefined, start, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( [], start, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( {}, start, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( ( x: number ): number => x, start, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not complex-like...
{
	const x = new Complex128Array( 10 );

	zunitspace.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, [ '1' ], x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace.ndarray( x.length, start, 10, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, '10', 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, true, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, false, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, null, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, undefined, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, [ '1' ], 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, {}, 1, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace.ndarray( x.length, start, x, '10', 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, true, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, false, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, null, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, undefined, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, [], 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, {}, 0 ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace.ndarray( x.length, start, x, 1, '10' ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1, true ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1, false ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1, null ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1, undefined ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1, [] ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1, {} ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 2.0, 2.0 );

	zunitspace.ndarray(); // $ExpectError
	zunitspace.ndarray( x.length ); // $ExpectError
	zunitspace.ndarray( x.length, start ); // $ExpectError
	zunitspace.ndarray( x.length, start, x ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1 ); // $ExpectError
	zunitspace.ndarray( x.length, start, x, 1, 0, 10 ); // $ExpectError
}
