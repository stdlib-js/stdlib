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
import zscal = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal( x.length, alpha, x, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal( '10', alpha, x, 1 ); // $ExpectError
	zscal( true, alpha, x, 1 ); // $ExpectError
	zscal( false, alpha, x, 1 ); // $ExpectError
	zscal( null, alpha, x, 1 ); // $ExpectError
	zscal( undefined, alpha, x, 1 ); // $ExpectError
	zscal( [], alpha, x, 1 ); // $ExpectError
	zscal( {}, alpha, x, 1 ); // $ExpectError
	zscal( ( x: number ): number => x, alpha, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const x = new Complex128Array( 10 );

	zscal( x.length, 10, x, 1 ); // $ExpectError
	zscal( x.length, '10', x, 1 ); // $ExpectError
	zscal( x.length, true, x, 1 ); // $ExpectError
	zscal( x.length, false, x, 1 ); // $ExpectError
	zscal( x.length, null, x, 1 ); // $ExpectError
	zscal( x.length, undefined, x, 1 ); // $ExpectError
	zscal( x.length, [ '1' ], x, 1 ); // $ExpectError
	zscal( x.length, {}, x, 1 ); // $ExpectError
	zscal( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal( x.length, alpha, 10, 1 ); // $ExpectError
	zscal( x.length, alpha, '10', 1 ); // $ExpectError
	zscal( x.length, alpha, true, 1 ); // $ExpectError
	zscal( x.length, alpha, false, 1 ); // $ExpectError
	zscal( x.length, alpha, null, 1 ); // $ExpectError
	zscal( x.length, alpha, undefined, 1 ); // $ExpectError
	zscal( x.length, alpha, [ '1' ], 1 ); // $ExpectError
	zscal( x.length, alpha, {}, 1 ); // $ExpectError
	zscal( x.length, alpha, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal( x.length, alpha, x, '10' ); // $ExpectError
	zscal( x.length, alpha, x, true ); // $ExpectError
	zscal( x.length, alpha, x, false ); // $ExpectError
	zscal( x.length, alpha, x, null ); // $ExpectError
	zscal( x.length, alpha, x, undefined ); // $ExpectError
	zscal( x.length, alpha, x, [] ); // $ExpectError
	zscal( x.length, alpha, x, {} ); // $ExpectError
	zscal( x.length, alpha, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal(); // $ExpectError
	zscal( x.length ); // $ExpectError
	zscal( x.length, alpha ); // $ExpectError
	zscal( x.length, alpha, x ); // $ExpectError
	zscal( x.length, alpha, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( '10', alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( true, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( false, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( null, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( undefined, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( [], alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( {}, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( ( x: number ): number => x, alpha, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const x = new Complex128Array( 10 );

	zscal.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, [ '1' ], x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal( x.length, alpha, 10, 1, 0 ); // $ExpectError
	zscal( x.length, alpha, '10', 1, 0 ); // $ExpectError
	zscal( x.length, alpha, true, 1, 0 ); // $ExpectError
	zscal( x.length, alpha, false, 1, 0 ); // $ExpectError
	zscal( x.length, alpha, null, 1, 0 ); // $ExpectError
	zscal( x.length, alpha, undefined, 1, 0 ); // $ExpectError
	zscal( x.length, alpha, [ '1' ], 1, 0 ); // $ExpectError
	zscal( x.length, alpha, {}, 1, 0 ); // $ExpectError
	zscal( x.length, alpha, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( x.length, alpha, x, '10', 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, true, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, false, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, null, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, undefined, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, [], 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, {}, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( x.length, alpha, x, 1, '10' ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, true ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, false ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, null ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, undefined ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, [] ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, {} ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray(); // $ExpectError
	zscal.ndarray( x.length ); // $ExpectError
	zscal.ndarray( x.length, alpha ); // $ExpectError
	zscal.ndarray( x.length, alpha, x ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, 0, 10 ); // $ExpectError
}
