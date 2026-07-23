/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
import claset = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset( 'row-major', 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset( 5, 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( true, 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( false, 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( null, 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( void 0, 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( [], 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( {}, 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( ( x: number ): number => x, 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset( 'row-major', 5, 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', true, 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', false, 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', null, 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', void 0, 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', [], 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', {}, 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', ( x: number ): number => x, 2, 2, alpha, beta, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset( 'row-major', 'all', '5', 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', true, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', false, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', null, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', void 0, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', [], 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', {}, 2, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', ( x: number ): number => x, 2, alpha, beta, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset( 'row-major', 'all', 2, '5', alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, true, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, false, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, null, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, void 0, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, [], alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, {}, alpha, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, ( x: number ): number => x, alpha, beta, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a complex number...
{
	const A = new Complex64Array( 4 );
	const beta = new Complex64( 3.0, 4.0 );

	claset( 'row-major', 'all', 2, 2, '5', beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, 5, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, true, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, false, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, null, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, void 0, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, [], beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, {}, beta, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, ( x: number ): number => x, beta, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a complex number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );

	claset( 'row-major', 'all', 2, 2, alpha, '5', A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, true, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, false, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, null, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, void 0, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, [], A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, {}, A, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, ( x: number ): number => x, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Complex64Array...
{
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset( 'row-major', 'all', 2, 2, alpha, beta, '5', 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, 5, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, true, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, false, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, null, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, void 0, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, [], 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, {}, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset( 'row-major', 'all', 2, 2, alpha, beta, A, '5' ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A, true ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A, false ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A, null ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A, void 0 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A, [] ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A, {} ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset(); // $ExpectError
	claset( 'row-major' ); // $ExpectError
	claset( 'row-major', 'all' ); // $ExpectError
	claset( 'row-major', 'all', 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2 ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A ); // $ExpectError
	claset( 'row-major', 'all', 2, 2, alpha, beta, A, 2, 3 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a string...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 5, 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( true, 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( false, 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( null, 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( void 0, 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( [], 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( {}, 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( ( x: number ): number => x, 2, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', '5', 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', true, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', false, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', null, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', void 0, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', [], 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', {}, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', ( x: number ): number => x, 2, alpha, beta, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', 2, '5', alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, true, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, false, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, null, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, void 0, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, [], alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, {}, alpha, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, ( x: number ): number => x, alpha, beta, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a complex number...
{
	const A = new Complex64Array( 4 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', 2, 2, '5', beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, 5, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, true, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, false, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, null, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, void 0, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, [], beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, {}, beta, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, ( x: number ): number => x, beta, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a complex number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', 2, 2, alpha, '5', A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, 5, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, true, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, false, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, null, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, void 0, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, [], A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, {}, A, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, ( x: number ): number => x, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex64Array...
{
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', 2, 2, alpha, beta, '5', 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, 5, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, true, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, false, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, null, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, void 0, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, [], 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, {}, 2, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', 2, 2, alpha, beta, A, '5', 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, true, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, false, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, null, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, void 0, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, [], 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, {}, 1, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, '5', 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, true, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, false, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, null, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, void 0, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, [], 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, {}, 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, '5' ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, true ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, false ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, null ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, void 0 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, [] ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, {} ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Complex64Array( 4 );
	const alpha = new Complex64( 1.0, 2.0 );
	const beta = new Complex64( 3.0, 4.0 );

	claset.ndarray(); // $ExpectError
	claset.ndarray( 'all' ); // $ExpectError
	claset.ndarray( 'all', 2 ); // $ExpectError
	claset.ndarray( 'all', 2, 2 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1 ); // $ExpectError
	claset.ndarray( 'all', 2, 2, alpha, beta, A, 2, 1, 0, 3 ); // $ExpectError
}
