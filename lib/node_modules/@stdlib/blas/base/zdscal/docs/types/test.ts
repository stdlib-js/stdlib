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
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import zdscal = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zdscal( x.length, 2.0, x, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zdscal( '10', 2.0, x, 1 ); // $EzxpectError
	zdscal( true, 2.0, x, 1 ); // $ExpectError
	zdscal( false, 2.0, x, 1 ); // $ExpectError
	zdscal( null, 2.0, x, 1 ); // $ExpectError
	zdscal( undefined, 2.0, x, 1 ); // $ExpectError
	zdscal( [], 2.0, x, 1 ); // $ExpectError
	zdscal( {}, 2.0, x, 1 ); // $ExpectError
	zdscal( ( x: number ): number => x, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zdscal( x.length, new Complex128( 1.0, 2.0 ), x, 1 ); // $ExpectError
	zdscal( x.length, '10', x, 1 ); // $ExpectError
	zdscal( x.length, true, x, 1 ); // $ExpectError
	zdscal( x.length, false, x, 1 ); // $ExpectError
	zdscal( x.length, null, x, 1 ); // $ExpectError
	zdscal( x.length, undefined, x, 1 ); // $ExpectError
	zdscal( x.length, [ '1' ], x, 1 ); // $ExpectError
	zdscal( x.length, {}, x, 1 ); // $ExpectError
	zdscal( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zdscal( x.length, 2.0, 10, 1 ); // $ExpectError
	zdscal( x.length, 2.0, '10', 1 ); // $ExpectError
	zdscal( x.length, 2.0, true, 1 ); // $ExpectError
	zdscal( x.length, 2.0, false, 1 ); // $ExpectError
	zdscal( x.length, 2.0, null, 1 ); // $ExpectError
	zdscal( x.length, 2.0, undefined, 1 ); // $ExpectError
	zdscal( x.length, 2.0, [ '1' ], 1 ); // $ExpectError
	zdscal( x.length, 2.0, {}, 1 ); // $ExpectError
	zdscal( x.length, 2.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zdscal( x.length, 2.0, x, '10' ); // $ExpectError
	zdscal( x.length, 2.0, x, true ); // $ExpectError
	zdscal( x.length, 2.0, x, false ); // $ExpectError
	zdscal( x.length, 2.0, x, null ); // $ExpectError
	zdscal( x.length, 2.0, x, undefined ); // $ExpectError
	zdscal( x.length, 2.0, x, [] ); // $ExpectError
	zdscal( x.length, 2.0, x, {} ); // $ExpectError
	zdscal( x.length, 2.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zdscal(); // $ExpectError
	zdscal( x.length ); // $ExpectError
	zdscal( x.length, 2.0 ); // $ExpectError
	zdscal( x.length, 2.0, x ); // $ExpectError
	zdscal( x.length, 2.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zdscal.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zdscal.ndarray( '10', 2.0, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( true, 2.0, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( false, 2.0, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( null, 2.0, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( undefined, 2.0, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( [], 2.0, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( {}, 2.0, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( ( x: number ): number => x, 2.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zdscal.ndarray( x.length, new Complex128( 1.0, 2.0 ), x, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, [ '1' ], x, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zdscal.ndarray( x.length, 2.0, 10, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, '10', 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, true, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, false, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, null, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, undefined, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, [ '1' ], 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, {}, 1, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zdscal.ndarray( x.length, 2.0, x, '10', 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, true, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, false, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, null, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, undefined, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, [], 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, {}, 0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );

	zdscal.ndarray( x.length, 2.0, x, 1, '10' ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1, undefined ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1, [] ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	zdscal.ndarray(); // $ExpectError
	zdscal.ndarray( x.length ); // $ExpectError
	zdscal.ndarray( x.length, 2.0 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1 ); // $ExpectError
	zdscal.ndarray( x.length, 2.0, x, 1, 0, 10 ); // $ExpectError
}
