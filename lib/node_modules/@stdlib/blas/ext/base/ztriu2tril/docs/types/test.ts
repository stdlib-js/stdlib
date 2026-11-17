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

import Complex128Array = require( '@stdlib/array/complex128' );
import ztriu2tril = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, 2 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a valid order...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril( 5, 2, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( true, 2, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( false, 2, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( null, 2, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( void 0, 2, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( [], 2, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( {}, 2, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( ( x: number ): number => x, 2, 2, 0, A, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril( 'row-major', '5', 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', true, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', false, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', null, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', void 0, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', [], 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', {}, 2, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', ( x: number ): number => x, 2, 0, A, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril( 'row-major', 2, '5', 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, true, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, false, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, null, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, void 0, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, [], 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, {}, 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, ( x: number ): number => x, 0, A, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril( 'row-major', 2, 2, '5', A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, true, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, false, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, null, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, void 0, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, [], A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, {}, A, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, ( x: number ): number => x, A, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex128Array...
{
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril( 'row-major', 2, 2, 0, 5, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, true, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, false, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, null, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, void 0, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, [], 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, {}, 2, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, ( x: number ): number => x, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril( 'row-major', 2, 2, 0, A, '5', B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, true, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, false, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, null, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, void 0, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, [], B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, {}, B, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, ( x: number ): number => x, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Complex128Array...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ztriu2tril( 'row-major', 2, 2, 0, A, 2, 5, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, true, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, false, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, null, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, void 0, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, [], 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, {}, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, '5' ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, true ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, false ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, null ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, void 0 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, [] ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, {} ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril(); // $ExpectError
	ztriu2tril( 'row-major' ); // $ExpectError
	ztriu2tril( 'row-major', 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2 ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B ); // $ExpectError
	ztriu2tril( 'row-major', 2, 2, 0, A, 2, B, 2, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( '5', 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( true, 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( false, 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( null, 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( void 0, 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( [], 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( {}, 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( ( x: number ): number => x, 2, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, '5', 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, true, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, false, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, null, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, void 0, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, [], 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, {}, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, ( x: number ): number => x, 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, '5', A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, true, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, false, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, null, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, void 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, [], A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, {}, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, ( x: number ): number => x, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Complex128Array...
{
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, 5, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, true, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, false, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, null, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, void 0, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, [], 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, {}, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, ( x: number ): number => x, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, A, '5', 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, true, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, false, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, null, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, void 0, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, [], 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, {}, 1, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, ( x: number ): number => x, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, A, 2, '5', 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, true, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, false, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, null, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, void 0, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, [], 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, {}, 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, ( x: number ): number => x, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, '5', B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, true, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, false, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, null, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, void 0, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, [], B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, {}, B, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, ( x: number ): number => x, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Complex128Array...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, 5, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, true, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, false, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, null, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, void 0, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, [], 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, {}, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, '5', 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, true, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, false, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, null, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, void 0, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, [], 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, {}, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, '5', 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, true, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, false, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, null, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, void 0, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, [], 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, {}, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, '5' ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, true ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, false ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, null ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, void 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, [] ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, {} ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	ztriu2tril.ndarray(); // $ExpectError
	ztriu2tril.ndarray( 2 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1 ); // $ExpectError
	ztriu2tril.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0, 0 ); // $ExpectError
}
