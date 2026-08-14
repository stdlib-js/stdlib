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

import gindexOfRow = require( './index' );


// TESTS //

// The function returns a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow( 'row-major', 2, 2, A, 2, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow( 5, 2, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( true, 2, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( false, 2, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( null, 2, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( void 0, 2, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( [], 2, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( {}, 2, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( ( x: number ): number => x, 2, 2, A, 2, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow( 'row-major', '5', 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', true, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', false, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', null, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', void 0, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', [], 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', {}, 2, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', ( x: number ): number => x, 2, A, 2, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow( 'row-major', 2, '5', A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, true, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, false, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, null, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, void 0, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, [], A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, {}, A, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, ( x: number ): number => x, A, 2, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = [ 3.0, 4.0 ];

	gindexOfRow( 'row-major', 2, 2, 5, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, true, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, false, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, null, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, void 0, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, {}, 2, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, ( x: number ): number => x, 2, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow( 'row-major', 2, 2, A, '5', x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, true, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, false, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, null, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, void 0, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, [], x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, {}, x, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a collection...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfRow( 'row-major', 2, 2, A, 2, 5, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, true, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, false, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, null, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, void 0, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, {}, 1 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow( 'row-major', 2, 2, A, 2, x, '5' ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x, true ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x, false ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x, null ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x, void 0 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x, [] ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x, {} ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow(); // $ExpectError
	gindexOfRow( 'row-major' ); // $ExpectError
	gindexOfRow( 'row-major', 2 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2 ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x ); // $ExpectError
	gindexOfRow( 'row-major', 2, 2, A, 2, x, 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( '5', 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( true, 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( false, 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( null, 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( void 0, 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( [], 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( {}, 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( ( x: number ): number => x, 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, '5', A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, true, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, false, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, null, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, void 0, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, [], A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, {}, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, ( x: number ): number => x, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, 2, 5, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, true, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, false, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, null, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, void 0, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, {}, 2, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, ( x: number ): number => x, 2, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, 2, A, '5', 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, true, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, false, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, null, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, void 0, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, [], 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, {}, 1, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, ( x: number ): number => x, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, 2, A, 2, '5', 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, true, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, false, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, null, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, void 0, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, [], 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, {}, 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, ( x: number ): number => x, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, 2, A, 2, 1, '5', x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, true, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, false, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, null, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, void 0, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, [], x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, {}, x, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a collection...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, 5, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, true, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, false, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, null, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, void 0, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, {}, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, '5', 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, true, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, false, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, null, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, void 0, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, [], 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, {}, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, '5' ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, true ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, false ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, null ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, void 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, [] ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, {} ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = [ 1.0, 2.0, 3.0, 4.0 ];
	const x = [ 3.0, 4.0 ];

	gindexOfRow.ndarray(); // $ExpectError
	gindexOfRow.ndarray( 2 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1 ); // $ExpectError
	gindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, 0 ); // $ExpectError
}
