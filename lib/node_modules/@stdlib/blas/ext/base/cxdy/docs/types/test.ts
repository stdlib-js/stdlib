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
import cxdy = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy( x.length, x, 1, y, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy( '10', x, 1, y, 1 ); // $ExpectError
	cxdy( true, x, 1, y, 1 ); // $ExpectError
	cxdy( false, x, 1, y, 1 ); // $ExpectError
	cxdy( null, x, 1, y, 1 ); // $ExpectError
	cxdy( undefined, x, 1, y, 1 ); // $ExpectError
	cxdy( [], x, 1, y, 1 ); // $ExpectError
	cxdy( {}, x, 1, y, 1 ); // $ExpectError
	cxdy( ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );

	cxdy( 10, 10, 1, y, 1 ); // $ExpectError
	cxdy( 10, '10', 1, y, 1 ); // $ExpectError
	cxdy( 10, true, 1, y, 1 ); // $ExpectError
	cxdy( 10, false, 1, y, 1 ); // $ExpectError
	cxdy( 10, null, 1, y, 1 ); // $ExpectError
	cxdy( 10, undefined, 1, y, 1 ); // $ExpectError
	cxdy( 10, [ '1' ], 1, y, 1 ); // $ExpectError
	cxdy( 10, {}, 1, y, 1 ); // $ExpectError
	cxdy( 10, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy( x.length, x, '10', y, 1 ); // $ExpectError
	cxdy( x.length, x, true, y, 1 ); // $ExpectError
	cxdy( x.length, x, false, y, 1 ); // $ExpectError
	cxdy( x.length, x, null, y, 1 ); // $ExpectError
	cxdy( x.length, x, undefined, y, 1 ); // $ExpectError
	cxdy( x.length, x, [], y, 1 ); // $ExpectError
	cxdy( x.length, x, {}, y, 1 ); // $ExpectError
	cxdy( x.length, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	cxdy( 10, x, 1, 10, 1 ); // $ExpectError
	cxdy( 10, x, 1, '10', 1 ); // $ExpectError
	cxdy( 10, x, 1, true, 1 ); // $ExpectError
	cxdy( 10, x, 1, false, 1 ); // $ExpectError
	cxdy( 10, x, 1, null, 1 ); // $ExpectError
	cxdy( 10, x, 1, undefined, 1 ); // $ExpectError
	cxdy( 10, x, 1, [ '1' ], 1 ); // $ExpectError
	cxdy( 10, x, 1, {}, 1 ); // $ExpectError
	cxdy( 10, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy( x.length, x, 1, y, '10' ); // $ExpectError
	cxdy( x.length, x, 1, y, true ); // $ExpectError
	cxdy( x.length, x, 1, y, false ); // $ExpectError
	cxdy( x.length, x, 1, y, null ); // $ExpectError
	cxdy( x.length, x, 1, y, undefined ); // $ExpectError
	cxdy( x.length, x, 1, y, [] ); // $ExpectError
	cxdy( x.length, x, 1, y, {} ); // $ExpectError
	cxdy( x.length, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy(); // $ExpectError
	cxdy( x.length ); // $ExpectError
	cxdy( x.length, x ); // $ExpectError
	cxdy( x.length, x, 1 ); // $ExpectError
	cxdy( x.length, x, 1, y ); // $ExpectError
	cxdy( x.length, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy.ndarray( '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( [], x, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );

	cxdy.ndarray( 10, 10, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, '10', 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, true, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, false, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, null, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, {}, 1, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy.ndarray( x.length, x, '10', 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, undefined, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, [], 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy.ndarray( x.length, x, 1, '10', y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, undefined, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, [], y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	cxdy.ndarray( 10, x, 1, 0, 10, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, x, 1, 0, '10', 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, x, 1, 0, true, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, x, 1, 0, false, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, x, 1, 0, null, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, x, 1, 0, {}, 1, 0 ); // $ExpectError
	cxdy.ndarray( 10, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy.ndarray( x.length, x, 1, 0, y, '10', 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, undefined, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, [], 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy.ndarray( x.length, x, 1, 0, y, 1, '10' ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1, undefined ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1, [] ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cxdy.ndarray(); // $ExpectError
	cxdy.ndarray( x.length ); // $ExpectError
	cxdy.ndarray( x.length, x ); // $ExpectError
	cxdy.ndarray( x.length, x, 1 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	cxdy.ndarray( x.length, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}
