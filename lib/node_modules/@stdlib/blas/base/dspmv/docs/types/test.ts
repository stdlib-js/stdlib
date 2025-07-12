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

import dspmv = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, 1  ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 10, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( true, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( false, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( null, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( void 0, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( [], 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( {}, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( ( x: number ): number => x, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 10, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', true, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', false, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', null, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', void 0, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', [ '1' ], 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', {}, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', ( x: number ): number => x, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 'upper', '10', 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', true, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', false, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', null, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', void 0, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', [], 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', {}, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', ( x: number ): number => x, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 'upper', 10, '10', A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, true, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, false, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, null, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, void 0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, [], A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, {}, A, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, ( x: number ): number => x, A, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dspmv( 'row-major', 'upper', 10, 1.0, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, '10', x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, true, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, false, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, null, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, void 0, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, [ '1' ], x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, {}, x, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 'upper', 10, 1.0, A, 10, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, '10', 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, true, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, false, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, null, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, void 0, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, [ '1' ], 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, {}, 1, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, ( x: number ): number => x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 'upper', 10, 1.0, A, x, '10', 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, true, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, false, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, null, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, void 0, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, [], 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, {}, 1.0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, ( x: number ): number => x, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, '10', y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, true, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, false, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, null, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, void 0, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, [], y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, {}, y, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, 10, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, '10', 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, true, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, false, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, null, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, void 0, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, [ '1' ], 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, {}, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, '10' ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, true ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, false ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, null ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, void 0 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, [] ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, {} ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv(); // $ExpectError
	dspmv( 'row-major' ); // $ExpectError
	dspmv( 'row-major', 'upper' ); // $ExpectError
	dspmv( 'row-major', 'upper', 10 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0 ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y ); // $ExpectError
	dspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 10, 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( true, 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( false, 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( null, 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( void 0, 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( [], 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( {}, 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( ( x: number ): number => x, 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 10, 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', true, 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', false, 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', null, 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', void 0, 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', [ '1' ], 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', {}, 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', ( x: number ): number => x, 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', '10', 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', true, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', false, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', null, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', void 0, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', [], 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', {}, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', ( x: number ): number => x, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, '10', A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, true, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, false, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, null, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, void 0, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, [], A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, {}, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, ( x: number ): number => x, A, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, 10, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, '10', 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, true, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, false, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, null, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, void 0, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, [ '1' ], 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, {}, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, '10', x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, true, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, false, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, null, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, void 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, [ '1' ], x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, {}, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, ( x: number ): number => x, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, 10, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, '10', 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, true, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, false, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, null, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, void 0, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, [ '1' ], 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, {}, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, ( x: number ): number => x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, '10', 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, true, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, false, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, null, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, void 0, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, [], 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, {}, 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, ( x: number ): number => x, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, '10', 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, true, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, false, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, null, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, void 0, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, [], 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, {}, 1.0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, ( x: number ): number => x, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, void 0, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, [], y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, 10, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, '10', 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, true, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, false, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, null, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, void 0, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, [ '1' ], 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, {}, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, '10', 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, true, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, false, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, null, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, void 0, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, [], 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, {}, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a thirteenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, '10' ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, true ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, false ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, null ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, void 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, [] ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, {} ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspmv.ndarray(); // $ExpectError
	dspmv.ndarray( 'row-major' ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper' ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1 ); // $ExpectError
	dspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 0, x, 1, 0, 1.0, y, 1, 0, 10 ); // $ExpectError
}
