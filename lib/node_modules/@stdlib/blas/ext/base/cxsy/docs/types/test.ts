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
import cxsy = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy( x.length, x, 1, y, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy( '10', x, 1, y, 1 ); // $ExpectError
	cxsy( true, x, 1, y, 1 ); // $ExpectError
	cxsy( false, x, 1, y, 1 ); // $ExpectError
	cxsy( null, x, 1, y, 1 ); // $ExpectError
	cxsy( undefined, x, 1, y, 1 ); // $ExpectError
	cxsy( [], x, 1, y, 1 ); // $ExpectError
	cxsy( {}, x, 1, y, 1 ); // $ExpectError
	cxsy( ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );

	cxsy( 10, 10, 1, y, 1 ); // $ExpectError
	cxsy( 10, '10', 1, y, 1 ); // $ExpectError
	cxsy( 10, true, 1, y, 1 ); // $ExpectError
	cxsy( 10, false, 1, y, 1 ); // $ExpectError
	cxsy( 10, null, 1, y, 1 ); // $ExpectError
	cxsy( 10, undefined, 1, y, 1 ); // $ExpectError
	cxsy( 10, [ '1' ], 1, y, 1 ); // $ExpectError
	cxsy( 10, {}, 1, y, 1 ); // $ExpectError
	cxsy( 10, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy( x.length, x, '10', y, 1 ); // $ExpectError
	cxsy( x.length, x, true, y, 1 ); // $ExpectError
	cxsy( x.length, x, false, y, 1 ); // $ExpectError
	cxsy( x.length, x, null, y, 1 ); // $ExpectError
	cxsy( x.length, x, undefined, y, 1 ); // $ExpectError
	cxsy( x.length, x, [], y, 1 ); // $ExpectError
	cxsy( x.length, x, {}, y, 1 ); // $ExpectError
	cxsy( x.length, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	cxsy( 10, x, 1, 10, 1 ); // $ExpectError
	cxsy( 10, x, 1, '10', 1 ); // $ExpectError
	cxsy( 10, x, 1, true, 1 ); // $ExpectError
	cxsy( 10, x, 1, false, 1 ); // $ExpectError
	cxsy( 10, x, 1, null, 1 ); // $ExpectError
	cxsy( 10, x, 1, undefined, 1 ); // $ExpectError
	cxsy( 10, x, 1, [ '1' ], 1 ); // $ExpectError
	cxsy( 10, x, 1, {}, 1 ); // $ExpectError
	cxsy( 10, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy( x.length, x, 1, y, '10' ); // $ExpectError
	cxsy( x.length, x, 1, y, true ); // $ExpectError
	cxsy( x.length, x, 1, y, false ); // $ExpectError
	cxsy( x.length, x, 1, y, null ); // $ExpectError
	cxsy( x.length, x, 1, y, undefined ); // $ExpectError
	cxsy( x.length, x, 1, y, [] ); // $ExpectError
	cxsy( x.length, x, 1, y, {} ); // $ExpectError
	cxsy( x.length, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy(); // $ExpectError
	cxsy( x.length ); // $ExpectError
	cxsy( x.length, x ); // $ExpectError
	cxsy( x.length, x, 1 ); // $ExpectError
	cxsy( x.length, x, 1, y ); // $ExpectError
	cxsy( x.length, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy.ndarray( '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( [], x, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );

	cxsy.ndarray( 10, 10, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, '10', 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, true, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, false, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, null, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, {}, 1, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy.ndarray( x.length, x, '10', 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, undefined, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, [], 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy.ndarray( x.length, x, 1, '10', y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, undefined, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, [], y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	cxsy.ndarray( 10, x, 1, 0, 10, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, x, 1, 0, '10', 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, x, 1, 0, true, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, x, 1, 0, false, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, x, 1, 0, null, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, x, 1, 0, {}, 1, 0 ); // $ExpectError
	cxsy.ndarray( 10, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy.ndarray( x.length, x, 1, 0, y, '10', 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, undefined, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, [], 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy.ndarray( x.length, x, 1, 0, y, 1, '10' ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1, undefined ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1, [] ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxsy.ndarray(); // $ExpectError
	cxsy.ndarray( x.length ); // $ExpectError
	cxsy.ndarray( x.length, x ); // $ExpectError
	cxsy.ndarray( x.length, x, 1 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	cxsy.ndarray( x.length, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}
