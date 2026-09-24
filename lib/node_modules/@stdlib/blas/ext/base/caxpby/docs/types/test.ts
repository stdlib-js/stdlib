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
import caxpby = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby( x.length, alpha, x, 1, beta, y, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby( '10', alpha, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( true, alpha, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( false, alpha, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( null, alpha, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( undefined, alpha, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( [], alpha, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( {}, alpha, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( ( x: number ): number => x, alpha, x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby( x.length, 10, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( x.length, '10', x, 1, beta, y, 1 ); // $ExpectError
	caxpby( x.length, true, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( x.length, false, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( x.length, null, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( x.length, undefined, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( x.length, [ '1' ], x, 1, beta, y, 1 ); // $ExpectError
	caxpby( x.length, {}, x, 1, beta, y, 1 ); // $ExpectError
	caxpby( x.length, ( x: number ): number => x, x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby( 10, alpha, 10, 1, beta, y, 1 ); // $ExpectError
	caxpby( 10, alpha, '10', 1, beta, y, 1 ); // $ExpectError
	caxpby( 10, alpha, true, 1, beta, y, 1 ); // $ExpectError
	caxpby( 10, alpha, false, 1, beta, y, 1 ); // $ExpectError
	caxpby( 10, alpha, null, 1, beta, y, 1 ); // $ExpectError
	caxpby( 10, alpha, undefined, 1, beta, y, 1 ); // $ExpectError
	caxpby( 10, alpha, [ '1' ], 1, beta, y, 1 ); // $ExpectError
	caxpby( 10, alpha, {}, 1, beta, y, 1 ); // $ExpectError
	caxpby( 10, alpha, ( x: number ): number => x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby( x.length, alpha, x, '10', beta, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, true, beta, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, false, beta, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, null, beta, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, undefined, beta, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, [], beta, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, {}, beta, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, ( x: number ): number => x, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );

	caxpby( x.length, alpha, x, 1, 10, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, '10', y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, true, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, false, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, null, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, undefined, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, [ '1' ], y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, {}, y, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby( 10, alpha, x, 1, beta, 10, 1 ); // $ExpectError
	caxpby( 10, alpha, x, 1, beta, '10', 1 ); // $ExpectError
	caxpby( 10, alpha, x, 1, beta, true, 1 ); // $ExpectError
	caxpby( 10, alpha, x, 1, beta, false, 1 ); // $ExpectError
	caxpby( 10, alpha, x, 1, beta, null, 1 ); // $ExpectError
	caxpby( 10, alpha, x, 1, beta, undefined, 1 ); // $ExpectError
	caxpby( 10, alpha, x, 1, beta, [ '1' ], 1 ); // $ExpectError
	caxpby( 10, alpha, x, 1, beta, {}, 1 ); // $ExpectError
	caxpby( 10, alpha, x, 1, beta, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby( x.length, alpha, x, 1, beta, y, '10' ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y, true ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y, false ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y, null ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y, undefined ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y, [] ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y, {} ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby(); // $ExpectError
	caxpby( x.length ); // $ExpectError
	caxpby( x.length, alpha ); // $ExpectError
	caxpby( x.length, alpha, x ); // $ExpectError
	caxpby( x.length, alpha, x, 1 ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y ); // $ExpectError
	caxpby( x.length, alpha, x, 1, beta, y, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( '10', alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( true, alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( false, alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( null, alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( undefined, alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( [], alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( {}, alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( ( x: number ): number => x, alpha, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( x.length, 10, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, '10', x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, true, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, false, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, null, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, undefined, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, [ '1' ], x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, {}, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, ( x: number ): number => x, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( 10, alpha, 10, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, '10', 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, true, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, false, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, null, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, undefined, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, [ '1' ], 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, {}, 1, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, ( x: number ): number => x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( x.length, alpha, x, '10', 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, true, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, false, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, null, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, undefined, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, [], 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, {}, 0, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, ( x: number ): number => x, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( x.length, alpha, x, 1, '10', beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, true, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, false, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, null, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, undefined, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, [], beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, {}, beta, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, ( x: number ): number => x, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );

	caxpby.ndarray( x.length, alpha, x, 1, 0, 10, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, undefined, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, [ '1' ], y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( 10, alpha, x, 1, 0, beta, 10, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, x, 1, 0, beta, '10', 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, x, 1, 0, beta, true, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, x, 1, 0, beta, false, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, x, 1, 0, beta, null, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, x, 1, 0, beta, undefined, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, x, 1, 0, beta, [ '1' ], 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, x, 1, 0, beta, {}, 1, 0 ); // $ExpectError
	caxpby.ndarray( 10, alpha, x, 1, 0, beta, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, '10', 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, true, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, false, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, null, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, undefined, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, [], 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, {}, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, '10' ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, true ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, false ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, null ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, undefined ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, [] ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, {} ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 1.0 );
	const beta = new Complex64( 1.0, -1.0 );

	caxpby.ndarray(); // $ExpectError
	caxpby.ndarray( x.length ); // $ExpectError
	caxpby.ndarray( x.length, alpha ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1 ); // $ExpectError
	caxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, 0, 10 ); // $ExpectError
}
