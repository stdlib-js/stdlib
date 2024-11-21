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

import dlacpy = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy( 5, 'all', 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( true, 'all', 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( false, 'all', 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( null, 'all', 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( void 0, 'all', 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( [], 'all', 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( {}, 'all', 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( ( x: number ): number => x, 'all', 2, 2, A, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy( 'row-major', 5, 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', true, 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', false, 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', null, 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', void 0, 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', [], 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', {}, 2, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', ( x: number ): number => x, 2, 2, A, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy( 'row-major', 'all', '5', 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', true, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', false, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', null, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', void 0, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', [], 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', {}, 2, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', ( x: number ): number => x, 2, A, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy( 'row-major', 'all', 2, '5', A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, true, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, false, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, null, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, void 0, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, [], A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, {}, A, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, ( x: number ): number => x, A, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const B = new Float64Array( 4 );

	dlacpy( 'row-major', 'all', 2, 2, '5', 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, 5, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, true, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, false, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, null, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, void 0, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, [], 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, {}, 2, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, ( x: number ): number => x, 2, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy( 'row-major', 'all', 2, 2, A, '5', B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, true, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, false, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, null, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, void 0, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, [], B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, {}, B, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, ( x: number ): number => x, B, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlacpy( 'row-major', 'all', 2, 2, A, 2, '5', 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, 5, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, true, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, false, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, null, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, void 0, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, [], 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, {}, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, '5' ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, true ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, false ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, null ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, void 0 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, [] ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, {} ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy(); // $ExpectError
	dlacpy( 'row-major' ); // $ExpectError
	dlacpy( 'row-major', 'all' ); // $ExpectError
	dlacpy( 'row-major', 'all', 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2 ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B ); // $ExpectError
	dlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 5, 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( true, 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( false, 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( null, 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( void 0, 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( [], 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( {}, 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( ( x: number ): number => x, 2, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', '5', 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', true, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', false, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', null, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', void 0, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', [], 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', {}, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', ( x: number ): number => x, 2, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, '5', A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, true, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, false, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, null, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, void 0, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, [], A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, {}, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, ( x: number ): number => x, A, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, 2, '5', 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, 5, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, true, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, false, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, null, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, void 0, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, [], 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, {}, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, ( x: number ): number => x, 2, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, 2, A, '5', 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, true, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, false, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, null, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, void 0, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, [], 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, {}, 1, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, ( x: number ): number => x, 1, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, 2, A, 2, '5', 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, true, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, false, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, null, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, void 0, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, [], 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, {}, 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, ( x: number ): number => x, 0, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, '5', B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, true, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, false, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, null, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, void 0, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, [], B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, {}, B, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, ( x: number ): number => x, B, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, '5', 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, 5, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, true, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, false, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, null, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, void 0, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, [], 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, {}, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, '5', 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, true, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, false, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, null, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, void 0, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, [], 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, {}, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, '5', 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, true, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, false, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, null, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, void 0, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, [], 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, {}, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, '5' ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, true ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, false ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, null ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, void 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, [] ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, {} ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const B = new Float64Array( 4 );

	dlacpy.ndarray(); // $ExpectError
	dlacpy.ndarray( 'all' ); // $ExpectError
	dlacpy.ndarray( 'all', 2 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1 ); // $ExpectError
	dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, 0, 10 ); // $ExpectError
}
