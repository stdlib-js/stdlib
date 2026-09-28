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

/* eslint-disable space-in-parens */

import gindexOfTruthyRow = require( './index' );


// TESTS //

// The function returns a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow( 'row-major', 2, 2, A, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow( 5, 2, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( true, 2, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( false, 2, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( null, 2, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( void 0, 2, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( [], 2, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( {}, 2, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( ( x: number ): number => x, 2, 2, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow( 'row-major', '5', 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', true, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', false, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', null, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', void 0, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', [], 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', {}, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', ( x: number ): number => x, 2, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow( 'row-major', 2, '5', A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, true, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, false, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, null, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, void 0, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, [], A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, {}, A, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, ( x: number ): number => x, A, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	gindexOfTruthyRow( 'row-major', 2, 2, 5, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, true, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, false, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, null, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, void 0, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, {}, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow( 'row-major', 2, 2, A, '5' ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A, true ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A, false ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A, null ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A, void 0 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A, [] ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A, {} ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow(); // $ExpectError
	gindexOfTruthyRow( 'row-major' ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2 ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A ); // $ExpectError
	gindexOfTruthyRow( 'row-major', 2, 2, A, 2, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow.ndarray( '5', 2, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( true, 2, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( false, 2, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( null, 2, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( void 0, 2, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( [], 2, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( {}, 2, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( ( x: number ): number => x, 2, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow.ndarray( 2, '5', A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, true, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, false, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, null, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, void 0, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, [], A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, {}, A, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, ( x: number ): number => x, A, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	gindexOfTruthyRow.ndarray( 2, 2, 5, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, true, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, false, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, null, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, void 0, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, {}, 2, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow.ndarray( 2, 2, A, '5', 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, true, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, false, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, null, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, void 0, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, [], 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, {}, 1, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow.ndarray( 2, 2, A, 2, '5', 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, true, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, false, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, null, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, void 0, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, [], 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, {}, 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, '5' ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, true ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, false ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, null ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, void 0 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, [] ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, {} ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfTruthyRow.ndarray(); // $ExpectError
	gindexOfTruthyRow.ndarray( 2 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1 ); // $ExpectError
	gindexOfTruthyRow.ndarray( 2, 2, A, 2, 1, 0, 0 ); // $ExpectError
}
