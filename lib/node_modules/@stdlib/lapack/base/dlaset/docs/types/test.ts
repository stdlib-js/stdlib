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

import dlaset = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset( 'row-major', 'all', 2, 2, 1.0, 2.0, A, 2 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset( 5, 'all', 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( true, 'all', 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( false, 'all', 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( null, 'all', 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( void 0, 'all', 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( [], 'all', 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( {}, 'all', 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( ( x: number ): number => x, 'all', 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset( 'row-major', 5, 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', true, 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', false, 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', null, 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', void 0, 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', [], 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', {}, 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', ( x: number ): number => x, 2, 2, 2.0, 2.0, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset( 'row-major', 'all', '5', 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', true, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', false, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', null, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', void 0, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', [], 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', {}, 2, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', ( x: number ): number => x, 2, 2.0, 2.0, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset( 'row-major', 'all', 2, '5', 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, true, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, false, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, null, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, void 0, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, [], 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, {}, 2.0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, ( x: number ): number => x, 2.0, 2.0, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset( 'row-major', 'all', 2, 2, '5', 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, true, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, false, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, null, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, void 0, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, [], 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, {}, 2.0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, ( x: number ): number => x, 2.0, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset( 'row-major', 'all', 2, 2, 2.0, '5', A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, true, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, false, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, null, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, void 0, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, [], A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, {}, A, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, ( x: number ): number => x, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, '5', 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, 5, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, true, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, false, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, null, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, void 0, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, [], 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, {}, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, '5' ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, true ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, false ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, null ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, void 0 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, [] ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, {} ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset(); // $ExpectError
	dlaset( 'row-major' ); // $ExpectError
	dlaset( 'row-major', 'all' ); // $ExpectError
	dlaset( 'row-major', 'all', 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0 ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A ); // $ExpectError
	dlaset( 'row-major', 'all', 2, 2, 2.0, 2.0, A, 2, 1 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 5, 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( true, 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( false, 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( null, 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( void 0, 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( [], 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( {}, 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( ( x: number ): number => x, 2, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 'all', '5', 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', true, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', false, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', null, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', void 0, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', [], 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', {}, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', ( x: number ): number => x, 2, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 'all', 2, '5', 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, true, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, false, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, null, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, void 0, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, [], 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, {}, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, ( x: number ): number => x, 2.0, 2.0, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 'all', 2, 2, '5', 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, false, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, null, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, void 0, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, [], 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, {}, 2.0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, ( x: number ): number => x, 2.0, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 'all', 2, 2, 2.0, '5', A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, true, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, false, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, null, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, void 0, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, [], A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, {}, A, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, ( x: number ): number => x, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, '5', 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, 5, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, true, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, false, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, null, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, void 0, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, [], 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, {}, 2, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, '5', 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, true, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, false, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, null, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, void 0, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, [], 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, {}, 1, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, '5', 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, true, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, false, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, null, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, void 0, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, [], 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, {}, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, '5' ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, true ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, false ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, null ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, void 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, [] ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, {} ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlaset.ndarray(); // $ExpectError
	dlaset.ndarray( 'all' ); // $ExpectError
	dlaset.ndarray( 'all', 2 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 0 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 0, 1 ); // $ExpectError
	dlaset.ndarray( 'all', 2, 2, 2.0, 2.0, A, 0, 1, 0, 10 ); // $ExpectError
}
