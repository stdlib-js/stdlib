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
import caxpb = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb( x.length, alpha, beta, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb( '10', alpha, beta, x, 1 ); // $ExpectError
	caxpb( true, alpha, beta, x, 1 ); // $ExpectError
	caxpb( false, alpha, beta, x, 1 ); // $ExpectError
	caxpb( null, alpha, beta, x, 1 ); // $ExpectError
	caxpb( undefined, alpha, beta, x, 1 ); // $ExpectError
	caxpb( [], alpha, beta, x, 1 ); // $ExpectError
	caxpb( {}, alpha, beta, x, 1 ); // $ExpectError
	caxpb( ( x: number ): number => x, alpha, beta, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb( x.length, 10, beta, x, 1 ); // $ExpectError
	caxpb( x.length, '10', beta, x, 1 ); // $ExpectError
	caxpb( x.length, true, beta, x, 1 ); // $ExpectError
	caxpb( x.length, false, beta, x, 1 ); // $ExpectError
	caxpb( x.length, null, beta, x, 1 ); // $ExpectError
	caxpb( x.length, undefined, beta, x, 1 ); // $ExpectError
	caxpb( x.length, [ '1' ], beta, x, 1 ); // $ExpectError
	caxpb( x.length, {}, beta, x, 1 ); // $ExpectError
	caxpb( x.length, ( x: number ): number => x, beta, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );

	caxpb( x.length, alpha, 10, x, 1 ); // $ExpectError
	caxpb( x.length, alpha, '10', x, 1 ); // $ExpectError
	caxpb( x.length, alpha, true, x, 1 ); // $ExpectError
	caxpb( x.length, alpha, false, x, 1 ); // $ExpectError
	caxpb( x.length, alpha, null, x, 1 ); // $ExpectError
	caxpb( x.length, alpha, undefined, x, 1 ); // $ExpectError
	caxpb( x.length, alpha, [ '1' ], x, 1 ); // $ExpectError
	caxpb( x.length, alpha, {}, x, 1 ); // $ExpectError
	caxpb( x.length, alpha, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb( x.length, alpha, beta, 10, 1 ); // $ExpectError
	caxpb( x.length, alpha, beta, '10', 1 ); // $ExpectError
	caxpb( x.length, alpha, beta, true, 1 ); // $ExpectError
	caxpb( x.length, alpha, beta, false, 1 ); // $ExpectError
	caxpb( x.length, alpha, beta, null, 1 ); // $ExpectError
	caxpb( x.length, alpha, beta, undefined, 1 ); // $ExpectError
	caxpb( x.length, alpha, beta, [ '1' ], 1 ); // $ExpectError
	caxpb( x.length, alpha, beta, {}, 1 ); // $ExpectError
	caxpb( x.length, alpha, beta, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb( x.length, alpha, beta, x, '10' ); // $ExpectError
	caxpb( x.length, alpha, beta, x, true ); // $ExpectError
	caxpb( x.length, alpha, beta, x, false ); // $ExpectError
	caxpb( x.length, alpha, beta, x, null ); // $ExpectError
	caxpb( x.length, alpha, beta, x, undefined ); // $ExpectError
	caxpb( x.length, alpha, beta, x, [] ); // $ExpectError
	caxpb( x.length, alpha, beta, x, {} ); // $ExpectError
	caxpb( x.length, alpha, beta, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb(); // $ExpectError
	caxpb( x.length ); // $ExpectError
	caxpb( x.length, alpha ); // $ExpectError
	caxpb( x.length, alpha, beta ); // $ExpectError
	caxpb( x.length, alpha, beta, x ); // $ExpectError
	caxpb( x.length, alpha, beta, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb.ndarray( x.length, alpha, beta, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb.ndarray( '10', alpha, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( true, alpha, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( false, alpha, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( null, alpha, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( undefined, alpha, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( [], alpha, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( {}, alpha, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( ( x: number ): number => x, alpha, beta, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb.ndarray( x.length, 10, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, '10', beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, true, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, false, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, null, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, undefined, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, [ '1' ], beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, {}, beta, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, ( x: number ): number => x, beta, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );

	caxpb.ndarray( x.length, alpha, 10, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, '10', x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, true, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, false, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, null, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, undefined, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, [ '1' ], x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, {}, x, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb.ndarray( x.length, alpha, beta, 10, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, '10', 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, true, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, false, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, null, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, undefined, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, [ '1' ], 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, {}, 1, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb.ndarray( x.length, alpha, beta, x, '10', 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, true, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, false, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, null, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, undefined, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, [], 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, {}, 0 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb.ndarray( x.length, alpha, beta, x, 1, '10' ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1, true ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1, false ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1, null ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1, undefined ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1, [] ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1, {} ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	caxpb.ndarray(); // $ExpectError
	caxpb.ndarray( x.length ); // $ExpectError
	caxpb.ndarray( x.length, alpha ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1 ); // $ExpectError
	caxpb.ndarray( x.length, alpha, beta, x, 1, 0, 10 ); // $ExpectError
}
