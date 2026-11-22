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
import zxsy = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy( x.length, x, 1, y, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy( '10', x, 1, y, 1 ); // $ExpectError
	zxsy( true, x, 1, y, 1 ); // $ExpectError
	zxsy( false, x, 1, y, 1 ); // $ExpectError
	zxsy( null, x, 1, y, 1 ); // $ExpectError
	zxsy( undefined, x, 1, y, 1 ); // $ExpectError
	zxsy( [], x, 1, y, 1 ); // $ExpectError
	zxsy( {}, x, 1, y, 1 ); // $ExpectError
	zxsy( ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const y = new Complex128Array( 10 );

	zxsy( 10, 10, 1, y, 1 ); // $ExpectError
	zxsy( 10, '10', 1, y, 1 ); // $ExpectError
	zxsy( 10, true, 1, y, 1 ); // $ExpectError
	zxsy( 10, false, 1, y, 1 ); // $ExpectError
	zxsy( 10, null, 1, y, 1 ); // $ExpectError
	zxsy( 10, undefined, 1, y, 1 ); // $ExpectError
	zxsy( 10, [ '1' ], 1, y, 1 ); // $ExpectError
	zxsy( 10, {}, 1, y, 1 ); // $ExpectError
	zxsy( 10, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy( x.length, x, '10', y, 1 ); // $ExpectError
	zxsy( x.length, x, true, y, 1 ); // $ExpectError
	zxsy( x.length, x, false, y, 1 ); // $ExpectError
	zxsy( x.length, x, null, y, 1 ); // $ExpectError
	zxsy( x.length, x, undefined, y, 1 ); // $ExpectError
	zxsy( x.length, x, [], y, 1 ); // $ExpectError
	zxsy( x.length, x, {}, y, 1 ); // $ExpectError
	zxsy( x.length, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zxsy( 10, x, 1, 10, 1 ); // $ExpectError
	zxsy( 10, x, 1, '10', 1 ); // $ExpectError
	zxsy( 10, x, 1, true, 1 ); // $ExpectError
	zxsy( 10, x, 1, false, 1 ); // $ExpectError
	zxsy( 10, x, 1, null, 1 ); // $ExpectError
	zxsy( 10, x, 1, undefined, 1 ); // $ExpectError
	zxsy( 10, x, 1, [ '1' ], 1 ); // $ExpectError
	zxsy( 10, x, 1, {}, 1 ); // $ExpectError
	zxsy( 10, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy( x.length, x, 1, y, '10' ); // $ExpectError
	zxsy( x.length, x, 1, y, true ); // $ExpectError
	zxsy( x.length, x, 1, y, false ); // $ExpectError
	zxsy( x.length, x, 1, y, null ); // $ExpectError
	zxsy( x.length, x, 1, y, undefined ); // $ExpectError
	zxsy( x.length, x, 1, y, [] ); // $ExpectError
	zxsy( x.length, x, 1, y, {} ); // $ExpectError
	zxsy( x.length, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy(); // $ExpectError
	zxsy( x.length ); // $ExpectError
	zxsy( x.length, x ); // $ExpectError
	zxsy( x.length, x, 1 ); // $ExpectError
	zxsy( x.length, x, 1, y ); // $ExpectError
	zxsy( x.length, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy.ndarray( '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( [], x, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const y = new Complex128Array( 10 );

	zxsy.ndarray( 10, 10, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, '10', 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, true, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, false, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, null, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, {}, 1, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy.ndarray( x.length, x, '10', 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, undefined, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, [], 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy.ndarray( x.length, x, 1, '10', y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, undefined, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, [], y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zxsy.ndarray( 10, x, 1, 0, 10, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, x, 1, 0, '10', 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, x, 1, 0, true, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, x, 1, 0, false, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, x, 1, 0, null, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, x, 1, 0, {}, 1, 0 ); // $ExpectError
	zxsy.ndarray( 10, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy.ndarray( x.length, x, 1, 0, y, '10', 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, undefined, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, [], 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy.ndarray( x.length, x, 1, 0, y, 1, '10' ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1, undefined ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1, [] ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zxsy.ndarray(); // $ExpectError
	zxsy.ndarray( x.length ); // $ExpectError
	zxsy.ndarray( x.length, x ); // $ExpectError
	zxsy.ndarray( x.length, x, 1 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	zxsy.ndarray( x.length, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}
