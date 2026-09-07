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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import Complex128Array = require( '@stdlib/array/complex128' );
import zlogspace = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace( x.length, 10.0, start, stop, true, x, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace( '10', 10.0, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( true, 10.0, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( false, 10.0, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( null, 10.0, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( undefined, 10.0, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( [], 10.0, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( {}, 10.0, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( ( x: number ): number => x, 10.0, start, stop, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace( x.length, '10', start, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, true, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, false, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, null, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, undefined, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, [], start, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, {}, start, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, ( x: number ): number => x, start, stop, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not complex-like...
{
	const x = new Complex128Array( 10 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace( x.length, 10.0, 10, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, '10', stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, true, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, false, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, null, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, undefined, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, [ '1' ], stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, {}, stop, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, ( x: number ): number => x, stop, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not complex-like...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );

	zlogspace( x.length, 10.0, start, 10, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, '10', true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, true, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, false, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, null, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, undefined, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, [ '1' ], true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, {}, true, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, ( x: number ): number => x, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a boolean...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace( x.length, 10.0, start, stop, '10', x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, 99.99, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, null, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, undefined, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, [], x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, {}, x, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace( x.length, 10.0, start, stop, true, 10, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, '10', 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, true, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, false, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, null, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, undefined, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, [], 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, {}, 1 ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace( x.length, 10.0, start, stop, true, x, '10' ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x, true ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x, false ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x, null ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x, undefined ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x, [] ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x, {} ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace(); // $ExpectError
	zlogspace( x.length ); // $ExpectError
	zlogspace( x.length, 10.0 ); // $ExpectError
	zlogspace( x.length, 10.0, start ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x ); // $ExpectError
	zlogspace( x.length, 10.0, start, stop, true, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray( '10', 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( true, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( false, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( null, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( undefined, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( [], 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( {}, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( ( x: number ): number => x, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray( x.length, '10', start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, true, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, false, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, null, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, undefined, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, [], start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, {}, start, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, ( x: number ): number => x, start, stop, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not complex-like...
{
	const x = new Complex128Array( 10 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray( x.length, 10.0, 10, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, '10', stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, true, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, false, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, null, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, undefined, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, [ '1' ], stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, {}, stop, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, ( x: number ): number => x, stop, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not complex-like...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );

	zlogspace.ndarray( x.length, 10.0, start, 10, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, '10', true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, true, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, false, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, null, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, undefined, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, [ '1' ], true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, {}, true, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, ( x: number ): number => x, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a boolean...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray( x.length, 10.0, start, stop, '10', x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, 99.99, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, null, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, undefined, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, [], x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, {}, x, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray( x.length, 10.0, start, stop, true, 10, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, '10', 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, true, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, false, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, null, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, undefined, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, [], 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, {}, 1, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, '10', 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, true, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, false, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, null, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, undefined, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, [], 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, {}, 0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, '10' ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, true ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, false ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, null ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, undefined ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, [] ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, {} ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const start = new Complex128( 0.0, 0.0 );
	const stop = new Complex128( 10.0, 0.0 );

	zlogspace.ndarray(); // $ExpectError
	zlogspace.ndarray( x.length ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1 ); // $ExpectError
	zlogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, 0, {} ); // $ExpectError
}
