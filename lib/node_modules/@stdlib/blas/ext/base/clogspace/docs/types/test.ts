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

import Complex64Array = require( '@stdlib/array/complex64' );
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import clogspace = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace( x.length, 10.0, start, stop, true, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace( '10', 10.0, start, stop, true, x, 1 ); // $ExpectError
	clogspace( true, 10.0, start, stop, true, x, 1 ); // $ExpectError
	clogspace( false, 10.0, start, stop, true, x, 1 ); // $ExpectError
	clogspace( null, 10.0, start, stop, true, x, 1 ); // $ExpectError
	clogspace( undefined, 10.0, start, stop, true, x, 1 ); // $ExpectError
	clogspace( [], 10.0, start, stop, true, x, 1 ); // $ExpectError
	clogspace( {}, 10.0, start, stop, true, x, 1 ); // $ExpectError
	clogspace( ( x: number ): number => x, 10.0, start, stop, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace( x.length, '10', start, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, true, start, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, false, start, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, null, start, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, undefined, start, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, [], start, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, {}, start, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, ( x: number ): number => x, start, stop, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace( x.length, 10.0, 10, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, '10', stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, true, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, false, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, null, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, undefined, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, [ '1' ], stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, {}, stop, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, ( x: number ): number => x, stop, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );

	clogspace( x.length, 10.0, start, 10, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, '10', true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, true, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, false, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, null, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, undefined, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, [ '1' ], true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, {}, true, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, ( x: number ): number => x, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a boolean...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace( x.length, 10.0, start, stop, '10', x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, 99.99, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, null, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, undefined, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, [], x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, {}, x, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace( x.length, 10.0, start, stop, true, 10, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, '10', 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, true, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, false, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, null, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, undefined, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, [], 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, {}, 1 ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace( x.length, 10.0, start, stop, true, x, '10' ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x, true ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x, false ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x, null ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x, undefined ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x, [] ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x, {} ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace(); // $ExpectError
	clogspace( x.length ); // $ExpectError
	clogspace( x.length, 10.0 ); // $ExpectError
	clogspace( x.length, 10.0, start ); // $ExpectError
	clogspace( x.length, 10.0, start, stop ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x ); // $ExpectError
	clogspace( x.length, 10.0, start, stop, true, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray( '10', 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( true, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( false, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( null, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( undefined, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( [], 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( {}, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( ( x: number ): number => x, 10.0, start, stop, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray( x.length, '10', start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, true, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, false, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, null, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, undefined, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, [], start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, {}, start, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, ( x: number ): number => x, start, stop, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray( x.length, 10.0, 10, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, '10', stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, true, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, false, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, null, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, undefined, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, [ '1' ], stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, {}, stop, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, ( x: number ): number => x, stop, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );

	clogspace.ndarray( x.length, 10.0, start, 10, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, '10', true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, true, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, false, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, null, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, undefined, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, [ '1' ], true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, {}, true, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, ( x: number ): number => x, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a boolean...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray( x.length, 10.0, start, stop, '10', x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, 99.99, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, null, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, undefined, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, [], x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, {}, x, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray( x.length, 10.0, start, stop, true, 10, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, '10', 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, true, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, false, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, null, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, undefined, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, [], 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, {}, 1, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray( x.length, 10.0, start, stop, true, x, '10', 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, true, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, false, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, null, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, undefined, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, [], 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, {}, 0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, '10' ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, true ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, false ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, null ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, undefined ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, [] ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, {} ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const start = new Complex64( 0.0, 0.0 );
	const stop = new Complex64( 10.0, 0.0 );

	clogspace.ndarray(); // $ExpectError
	clogspace.ndarray( x.length ); // $ExpectError
	clogspace.ndarray( x.length, 10.0 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1 ); // $ExpectError
	clogspace.ndarray( x.length, 10.0, start, stop, true, x, 1, 0, {} ); // $ExpectError
}
