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
import capx = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx( x.length, alpha, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx( '10', alpha, x, 1 ); // $ExpectError
	capx( true, alpha, x, 1 ); // $ExpectError
	capx( false, alpha, x, 1 ); // $ExpectError
	capx( null, alpha, x, 1 ); // $ExpectError
	capx( undefined, alpha, x, 1 ); // $ExpectError
	capx( [], alpha, x, 1 ); // $ExpectError
	capx( {}, alpha, x, 1 ); // $ExpectError
	capx( ( x: number ): number => x, alpha, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );

	capx( x.length, 10, x, 1 ); // $ExpectError
	capx( x.length, '10', x, 1 ); // $ExpectError
	capx( x.length, true, x, 1 ); // $ExpectError
	capx( x.length, false, x, 1 ); // $ExpectError
	capx( x.length, null, x, 1 ); // $ExpectError
	capx( x.length, undefined, x, 1 ); // $ExpectError
	capx( x.length, [ '1' ], x, 1 ); // $ExpectError
	capx( x.length, {}, x, 1 ); // $ExpectError
	capx( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx( x.length, alpha, 10, 1 ); // $ExpectError
	capx( x.length, alpha, '10', 1 ); // $ExpectError
	capx( x.length, alpha, true, 1 ); // $ExpectError
	capx( x.length, alpha, false, 1 ); // $ExpectError
	capx( x.length, alpha, null, 1 ); // $ExpectError
	capx( x.length, alpha, undefined, 1 ); // $ExpectError
	capx( x.length, alpha, [ '1' ], 1 ); // $ExpectError
	capx( x.length, alpha, {}, 1 ); // $ExpectError
	capx( x.length, alpha, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx( x.length, alpha, x, '10' ); // $ExpectError
	capx( x.length, alpha, x, true ); // $ExpectError
	capx( x.length, alpha, x, false ); // $ExpectError
	capx( x.length, alpha, x, null ); // $ExpectError
	capx( x.length, alpha, x, undefined ); // $ExpectError
	capx( x.length, alpha, x, [] ); // $ExpectError
	capx( x.length, alpha, x, {} ); // $ExpectError
	capx( x.length, alpha, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx(); // $ExpectError
	capx( x.length ); // $ExpectError
	capx( x.length, alpha ); // $ExpectError
	capx( x.length, alpha, x ); // $ExpectError
	capx( x.length, alpha, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx.ndarray( '10', alpha, x, 1, 0 ); // $ExpectError
	capx.ndarray( true, alpha, x, 1, 0 ); // $ExpectError
	capx.ndarray( false, alpha, x, 1, 0 ); // $ExpectError
	capx.ndarray( null, alpha, x, 1, 0 ); // $ExpectError
	capx.ndarray( undefined, alpha, x, 1, 0 ); // $ExpectError
	capx.ndarray( [], alpha, x, 1, 0 ); // $ExpectError
	capx.ndarray( {}, alpha, x, 1, 0 ); // $ExpectError
	capx.ndarray( ( x: number ): number => x, alpha, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );

	capx.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, [ '1' ], x, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx.ndarray( x.length, alpha, 10, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, '10', 1, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, true, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, false, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, null, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, undefined, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, [ '1' ], 1, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, {}, 1, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx.ndarray( x.length, alpha, x, '10', 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, x, true, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, x, false, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, x, null, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, x, undefined, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, x, [], 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, x, {}, 0 ); // $ExpectError
	capx.ndarray( x.length, alpha, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx.ndarray( x.length, alpha, x, 1, '10' ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1, true ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1, false ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1, null ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1, undefined ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1, [] ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1, {} ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	capx.ndarray(); // $ExpectError
	capx.ndarray( x.length ); // $ExpectError
	capx.ndarray( x.length, alpha ); // $ExpectError
	capx.ndarray( x.length, alpha, x ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	capx.ndarray( x.length, alpha, x, 1, 0, 10 ); // $ExpectError
}
