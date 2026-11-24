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
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import caxpy = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy( x.length, alpha, x, 1, y, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy( '10', alpha, x, 1, y, 1 ); // $ExpectError
	caxpy( true, alpha, x, 1, y, 1 ); // $ExpectError
	caxpy( false, alpha, x, 1, y, 1 ); // $ExpectError
	caxpy( null, alpha, x, 1, y, 1 ); // $ExpectError
	caxpy( undefined, alpha, x, 1, y, 1 ); // $ExpectError
	caxpy( [], alpha, x, 1, y, 1 ); // $ExpectError
	caxpy( {}, alpha, x, 1, y, 1 ); // $ExpectError
	caxpy( ( x: number ): number => x, alpha, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	caxpy( x.length, 10, x, 1, y, 1 ); // $ExpectError
	caxpy( x.length, '10', x, 1, y, 1 ); // $ExpectError
	caxpy( x.length, true, x, 1, y, 1 ); // $ExpectError
	caxpy( x.length, false, x, 1, y, 1 ); // $ExpectError
	caxpy( x.length, null, x, 1, y, 1 ); // $ExpectError
	caxpy( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	caxpy( x.length, [ '1' ], x, 1, y, 1 ); // $ExpectError
	caxpy( x.length, {}, x, 1, y, 1 ); // $ExpectError
	caxpy( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy( x.length, alpha, 10, 1, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, '10', 1, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, true, 1, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, false, 1, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, null, 1, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, undefined, 1, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, [ '1' ], 1, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, {}, 1, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy( x.length, alpha, x, '10', y, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, true, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, false, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, null, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, undefined, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, [], y, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, {}, y, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy( x.length, alpha, x, 1, 10, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, '10', 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, true, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, false, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, null, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, undefined, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, [ '1' ], 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, {}, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy( x.length, alpha, x, 1, y, '10' ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y, true ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y, false ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y, null ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y, undefined ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y, [] ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y, {} ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy(); // $ExpectError
	caxpy( x.length ); // $ExpectError
	caxpy( x.length, alpha ); // $ExpectError
	caxpy( x.length, alpha, x ); // $ExpectError
	caxpy( x.length, alpha, x, 1 ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y ); // $ExpectError
	caxpy( x.length, alpha, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( '10', alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( true, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( false, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( null, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( undefined, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( [], alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( {}, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( ( x: number ): number => x, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	caxpy.ndarray( x.length, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, [ '1' ], x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( x.length, alpha, 10, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, '10', 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, true, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, false, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, null, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, {}, 1, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( x.length, alpha, x, '10', 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, true, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, false, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, null, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, undefined, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, [], 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, {}, 0, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( x.length, alpha, x, 1, '10', y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, true, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, false, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, null, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, undefined, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, [], y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, {}, y, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( x.length, alpha, x, 1, 0, 10, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, '10', 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, true, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, false, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, null, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, {}, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( x.length, alpha, x, 1, 0, y, '10', 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, true, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, false, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, null, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, undefined, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, [], 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, {}, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, '10' ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, true ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, false ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, null ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, undefined ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, [] ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, {} ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	caxpy.ndarray(); // $ExpectError
	caxpy.ndarray( x.length ); // $ExpectError
	caxpy.ndarray( x.length, alpha ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1 ); // $ExpectError
	caxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}
