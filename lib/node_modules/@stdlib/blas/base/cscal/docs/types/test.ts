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
import cscal = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal( x.length, alpha, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal( '10', alpha, x, 1 ); // $ExpectError
	cscal( true, alpha, x, 1 ); // $ExpectError
	cscal( false, alpha, x, 1 ); // $ExpectError
	cscal( null, alpha, x, 1 ); // $ExpectError
	cscal( undefined, alpha, x, 1 ); // $ExpectError
	cscal( [], alpha, x, 1 ); // $ExpectError
	cscal( {}, alpha, x, 1 ); // $ExpectError
	cscal( ( x: number ): number => x, alpha, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const x = new Complex64Array( 10 );

	cscal( x.length, 10, x, 1 ); // $ExpectError
	cscal( x.length, '10', x, 1 ); // $ExpectError
	cscal( x.length, true, x, 1 ); // $ExpectError
	cscal( x.length, false, x, 1 ); // $ExpectError
	cscal( x.length, null, x, 1 ); // $ExpectError
	cscal( x.length, undefined, x, 1 ); // $ExpectError
	cscal( x.length, [ '1' ], x, 1 ); // $ExpectError
	cscal( x.length, {}, x, 1 ); // $ExpectError
	cscal( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal( x.length, alpha, 10, 1 ); // $ExpectError
	cscal( x.length, alpha, '10', 1 ); // $ExpectError
	cscal( x.length, alpha, true, 1 ); // $ExpectError
	cscal( x.length, alpha, false, 1 ); // $ExpectError
	cscal( x.length, alpha, null, 1 ); // $ExpectError
	cscal( x.length, alpha, undefined, 1 ); // $ExpectError
	cscal( x.length, alpha, [ '1' ], 1 ); // $ExpectError
	cscal( x.length, alpha, {}, 1 ); // $ExpectError
	cscal( x.length, alpha, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal( x.length, alpha, x, '10' ); // $ExpectError
	cscal( x.length, alpha, x, true ); // $ExpectError
	cscal( x.length, alpha, x, false ); // $ExpectError
	cscal( x.length, alpha, x, null ); // $ExpectError
	cscal( x.length, alpha, x, undefined ); // $ExpectError
	cscal( x.length, alpha, x, [] ); // $ExpectError
	cscal( x.length, alpha, x, {} ); // $ExpectError
	cscal( x.length, alpha, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal(); // $ExpectError
	cscal( x.length ); // $ExpectError
	cscal( x.length, alpha ); // $ExpectError
	cscal( x.length, alpha, x ); // $ExpectError
	cscal( x.length, alpha, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal.ndarray( '10', alpha, x, 1, 0 ); // $ExpectError
	cscal.ndarray( true, alpha, x, 1, 0 ); // $ExpectError
	cscal.ndarray( false, alpha, x, 1, 0 ); // $ExpectError
	cscal.ndarray( null, alpha, x, 1, 0 ); // $ExpectError
	cscal.ndarray( undefined, alpha, x, 1, 0 ); // $ExpectError
	cscal.ndarray( [], alpha, x, 1, 0 ); // $ExpectError
	cscal.ndarray( {}, alpha, x, 1, 0 ); // $ExpectError
	cscal.ndarray( ( x: number ): number => x, alpha, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const x = new Complex64Array( 10 );

	cscal.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, [ '1' ], x, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal.ndarray( x.length, alpha, 10, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, '10', 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, true, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, false, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, null, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, undefined, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, [ '1' ], 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, {}, 1, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal.ndarray( x.length, alpha, x, '10', 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, true, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, false, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, null, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, undefined, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, [], 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, {}, 0 ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal.ndarray( x.length, alpha, x, 1, '10' ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1, true ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1, false ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1, null ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1, undefined ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1, [] ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1, {} ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cscal.ndarray(); // $ExpectError
	cscal.ndarray( x.length ); // $ExpectError
	cscal.ndarray( x.length, alpha ); // $ExpectError
	cscal.ndarray( x.length, alpha, x ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	cscal.ndarray( x.length, alpha, x, 1, 0, 10 ); // $ExpectError
}
