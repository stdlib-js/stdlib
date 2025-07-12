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

import dsymv = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1  ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 10, 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( true, 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( false, 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( null, 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( undefined, 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( [], 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( {}, 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( ( x: number ): number => x, 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 10, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', true, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', false, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', null, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', undefined, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', [ '1' ], 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', {}, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', ( x: number ): number => x, 10, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', '10', 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', true, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', false, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', null, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', undefined, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', [], 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', {}, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', ( x: number ): number => x, 1.0, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', 10, '10', A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, true, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, false, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, null, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, undefined, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, [], A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, {}, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, ( x: number ): number => x, A, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dsymv( 'row-major', 'upper', 10, 1.0, 10, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, '10', 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, true, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, false, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, null, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, undefined, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, [ '1' ], 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, {}, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, 10, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', 10, 1.0, A, '10', x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, true, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, false, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, null, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, undefined, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, [], x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, {}, x, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, ( x: number ): number => x, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, 10, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, '10', 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, true, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, false, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, null, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, undefined, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, [ '1' ], 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, {}, 1, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, ( x: number ): number => x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, '10', 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, true, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, false, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, null, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, undefined, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, [], 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, {}, 1.0, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, ( x: number ): number => x, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, '10', y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, true, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, false, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, null, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, undefined, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, [], y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, {}, y, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, 10, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, '10', 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, true, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, false, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, null, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, undefined, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, [ '1' ], 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, {}, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, '10' ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, true ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, false ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, null ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, undefined ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, [] ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, {} ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv(); // $ExpectError
	dsymv( 'row-major' ); // $ExpectError
	dsymv( 'row-major', 'upper' ); // $ExpectError
	dsymv( 'row-major', 'upper', 10 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0 ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y ); // $ExpectError
	dsymv( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 1.0, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 10, 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( true, 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( false, 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( null, 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( undefined, 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( [], 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( {}, 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( ( x: number ): number => x, 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 10, 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', true, 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', false, 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', null, 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', undefined, 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', [ '1' ], 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', {}, 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', ( x: number ): number => x, 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', '10', 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', true, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', false, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', null, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', undefined, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', [], 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', {}, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', ( x: number ): number => x, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, '10', A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, true, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, false, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, null, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, undefined, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, [], A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, {}, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, ( x: number ): number => x, A, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, 10, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, '10', 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, true, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, false, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, null, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, undefined, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, [ '1' ], 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, {}, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, '10', x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, true, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, false, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, null, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, undefined, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, [], x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, {}, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, ( x: number ): number => x, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, 10, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, '10', 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, true, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, false, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, null, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, undefined, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, [ '1' ], 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, {}, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, ( x: number ): number => x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, '10', 0, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, true, 0, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, false, 0, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, null, 0, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, undefined, 0, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, [], 0, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, {}, 0, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, ( x: number ): number => x, 0, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, '10', 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, true, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, false, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, null, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, undefined, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, [], 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, {}, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, ( x: number ): number => x, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, undefined, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, [], y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, 10, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, '10', 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, true, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, false, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, null, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, undefined, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, [ '1' ], 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, {}, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, '10', 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, true, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, false, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, null, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, undefined, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, [], 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, {}, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, '10' ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, true ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, false ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, null ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, undefined ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, [] ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, {} ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dsymv.ndarray(); // $ExpectError
	dsymv.ndarray( 'row-major' ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper' ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1 ); // $ExpectError
	dsymv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, x, 1, 0, 1.0, y, 1, 0, 10 ); // $ExpectError
}
