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
import chemv = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 1.0, 0.0 );
	const beta = new Complex64( 1.0, 0.0 );

	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 10, 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( true, 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( false, 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( null, 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( undefined, 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( [], 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( {}, 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( ( x: number ): number => x, 'lower', 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 10, 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', true, 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', false, 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', null, 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', undefined, 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', [], 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', {}, 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', ( x: number ): number => x, 10, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 'lower', '10', alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', true, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', false, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', null, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', undefined, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', [], alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', {}, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', ( x: number ): number => x, alpha, A, 10, x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a forth argument which is not a Complex64...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 'lower', 10, '10', A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, true, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, false, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, null, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, undefined, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, [], A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, {}, A, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, ( x: number ): number => x, A, 10, x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 'lower', 10, alpha, 10, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, '10', 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, true, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, false, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, null, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, undefined, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, [ '1' ], 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, {}, 10, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, ( x: number ): number => x, 10, x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 'lower', 10, alpha, A, '10', x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, true, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, false, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, null, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, undefined, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, [], x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, {}, x, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, ( x: number ): number => x, x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an seventh argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 'lower', 10, alpha, A, 10, 10, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, '10', 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, true, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, false, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, null, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, undefined, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, [ '1' ], 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, {}, 1, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, ( x: number ): number => x, 1, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a eighth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, '10', beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, true, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, false, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, null, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, undefined, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, [], beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, {}, beta, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, ( x: number ): number => x, beta, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a Complex64...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );

	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, '10', y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, true, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, false, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, null, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, undefined, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, [], y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, {}, y, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an tenth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, 10, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, '10', 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, true, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, false, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, null, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, undefined, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, [], 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, {}, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a eleventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, '10' ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, true ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, false ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, null ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, undefined ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, [] ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, {} ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv(); // $ExpectError
	chemv( 'row-major' ); // $ExpectError
	chemv( 'row-major', 'lower' ); // $ExpectError
	chemv( 'row-major', 'lower', 10 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1 ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y ); // $ExpectError
	chemv( 'row-major', 'lower', 10, alpha, A, 10, x, 1, beta, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 10, 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( true, 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( false, 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( null, 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( undefined, 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( [ '1' ], 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( {}, 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( ( x: number ): number => x, 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', '10',  alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', true, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', false, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', null, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', undefined, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', [], alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', {}, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', ( x: number ): number => x, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, '10', A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, 10, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, true, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, false, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, null, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, undefined, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, [], A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, {}, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, ( x: number ): number => x, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a forth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, 10, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, '10', 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, true, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, false, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, null, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, undefined, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, [], 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, {}, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, ( x: number ): number => x, 10, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, '10', 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, true, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, false, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, null, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, undefined, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, [], 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, {}, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, ( x: number ): number => x, 1, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, '10', 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, true, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, false, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, null, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, undefined, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, [], 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, {}, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, ( x: number ): number => x, 0, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, '10', x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, true, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, false, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, null, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, undefined, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, [], x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, {}, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, ( x: number ): number => x, x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a eighth argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, 10, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, '10', 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, true, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, false, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, null, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, undefined, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, [], 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, {}, 1, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, ( x: number ): number => x, 1, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, '10', 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, true, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, false, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, null, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, undefined, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, [], 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, {}, 0, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, ( x: number ): number => x, 0, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an tenth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, '10', beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, true, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, false, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, null, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, undefined, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, [], beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, {}, beta, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, ( x: number ): number => x, beta, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a eleventh argument which is not a Complex64...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, 10, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, undefined, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, [], y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, 10, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, '10', 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, true, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, false, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, null, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, undefined, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, [], 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, {}, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, '10', 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, true, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, false, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, null, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, undefined, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, [], 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, {}, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourteenth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, '10' ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, true ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, false ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, null ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, undefined ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, [] ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, {} ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const A = new Complex64Array( 20 );
	const alpha = new Complex64( 0.5, 0.5 );
	const beta = new Complex64( 0.5, -0.5 );

	chemv.ndarray(); // $ExpectError
	chemv.ndarray( 'lower' ); // $ExpectError
	chemv.ndarray( 'lower', 10 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1 ); // $ExpectError
	chemv.ndarray( 'lower', 10, alpha, A, 10, 1, 0, x, 1, 0, beta, y, 1, 0, 10 ); // $ExpectError
}
