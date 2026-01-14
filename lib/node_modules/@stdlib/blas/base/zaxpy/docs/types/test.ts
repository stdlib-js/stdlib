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

import Complex128Array = require( '@stdlib/array/complex128' );
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import zaxpy = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy( x.length, alpha, x, 1, y, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy( '10', alpha, x, 1, y, 1 ); // $ExpectError
	zaxpy( true, alpha, x, 1, y, 1 ); // $ExpectError
	zaxpy( false, alpha, x, 1, y, 1 ); // $ExpectError
	zaxpy( null, alpha, x, 1, y, 1 ); // $ExpectError
	zaxpy( undefined, alpha, x, 1, y, 1 ); // $ExpectError
	zaxpy( [], alpha, x, 1, y, 1 ); // $ExpectError
	zaxpy( {}, alpha, x, 1, y, 1 ); // $ExpectError
	zaxpy( ( x: number ): number => x, alpha, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zaxpy( x.length, 10, x, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, '10', x, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, true, x, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, false, x, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, null, x, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, [ '1' ], x, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, {}, x, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy( x.length, alpha, 10, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, '10', 1, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, true, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, false, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, null, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, undefined, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, [ '1' ], 1, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, {}, 1, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy( x.length, alpha, x, '10', y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, true, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, false, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, null, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, undefined, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, [], y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, {}, y, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy( x.length, alpha, x, 1, 10, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, '10', 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, true, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, false, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, null, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, undefined, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, [ '1' ], 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, {}, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy( x.length, alpha, x, 1, y, '10' ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y, true ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y, false ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y, null ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y, undefined ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y, [] ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y, {} ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy(); // $ExpectError
	zaxpy( x.length ); // $ExpectError
	zaxpy( x.length, alpha ); // $ExpectError
	zaxpy( x.length, alpha, x ); // $ExpectError
	zaxpy( x.length, alpha, x, 1 ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y ); // $ExpectError
	zaxpy( x.length, alpha, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( '10', alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( true, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( false, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( null, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( undefined, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( [], alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( {}, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( ( x: number ): number => x, alpha, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zaxpy.ndarray( x.length, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, [ '1' ], x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( x.length, alpha, 10, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, '10', 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, true, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, false, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, null, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, {}, 1, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( x.length, alpha, x, '10', 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, true, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, false, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, null, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, undefined, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, [], 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, {}, 0, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( x.length, alpha, x, 1, '10', y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, true, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, false, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, null, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, undefined, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, [], y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, {}, y, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( x.length, alpha, x, 1, 0, 10, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, '10', 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, true, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, false, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, null, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, {}, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, '10', 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, true, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, false, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, null, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, undefined, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, [], 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, {}, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, '10' ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, true ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, false ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, null ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, undefined ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, [] ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, {} ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zaxpy.ndarray(); // $ExpectError
	zaxpy.ndarray( x.length ); // $ExpectError
	zaxpy.ndarray( x.length, alpha ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1 ); // $ExpectError
	zaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}
