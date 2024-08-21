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

import dtrsv = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv( 10, 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( true, 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( false, 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( null, 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( undefined, 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( [], 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( {}, 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( ( x: number ): number => x, 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv( 'row-major', 10, 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', true, 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', false, 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', null, 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', undefined, 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', [], 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', {}, 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', ( x: number ): number => x, 'no-transpose', 'unit', 10, A, 10, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv( 'row-major', 'upper', 10, 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', true, 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', false, 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', null, 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', undefined, 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', [], 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', {}, 'unit', 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', ( x: number ): number => x, 'unit', 10, A, 10, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv( 'row-major', 'upper', 'no-transpose', 10, 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', true, 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', false, 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', null, 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', undefined, 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', [], 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', {}, 10, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', ( x: number ): number => x, 10, A, 10, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', '10', A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', true, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', false, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', null, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', undefined, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', [], A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', {}, A, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', ( x: number ): number => x, A, 10, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, 10, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, '10', 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, true, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, false, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, null, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, undefined, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, [ '1' ], 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, {}, 10, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, ( x: number ): number => x, 10, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, '10', x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, true, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, false, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, null, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, undefined, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, [], x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, {}, x, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float64Array...
{
	const A = new Float64Array( 20 );

	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, 10, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, '10', 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, true, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, false, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, null, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, undefined, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, [ '1' ], 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, {}, 1 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, '10' ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, true ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, false ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, null ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, undefined ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, [] ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, {} ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv(); // $ExpectError
	dtrsv( 'row-major' ); // $ExpectError
	dtrsv( 'row-major', 'upper' ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose' ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit' ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10 ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x ); // $ExpectError
	dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 10, A, 10, x, 1, 1 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 10, 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( true, 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( false, 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( null, 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( undefined, 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( [], 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( {}, 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( ( x: number ): number => x, 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 10, 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', true, 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', false, 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', null, 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', undefined, 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', [], 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', {}, 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', ( x: number ): number => x, 'unit', 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 10, 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', true, 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', false, 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', null, 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', undefined, 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', [], 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', {}, 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', ( x: number ): number => x, 10, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', '10', A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', true, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', false, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', null, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', undefined, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', [], A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', {}, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', ( x: number ): number => x, A, 10, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, 10, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, '10', 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, true, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, false, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, null, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, undefined, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, [ '1' ], 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, {}, 10, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, ( x: number ): number => x, 10, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, '10', 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, true, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, false, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, null, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, undefined, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, [], 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, {}, 1, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, ( x: number ): number => x, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, '10', 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, true, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, false, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, null, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, undefined, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, [], 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, {}, 0, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, ( x: number ): number => x, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, '10', x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, true, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, false, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, null, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, undefined, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, [], x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, {}, x, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a Float64Array...
{
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, 10, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, '10', 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, true, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, false, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, null, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, undefined, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, {}, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, '10', 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, true, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, false, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, null, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, undefined, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, [], 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, {}, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, '10' ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, true ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, false ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, null ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, undefined ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, [] ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, {} ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 20 );

	dtrsv.ndarray(); // $ExpectError
	dtrsv.ndarray( 'upper' ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose' ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit' ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1 ); // $ExpectError
	dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 10, A, 10, 1, 0, x, 1, 0, 10 ); // $ExpectError
}
