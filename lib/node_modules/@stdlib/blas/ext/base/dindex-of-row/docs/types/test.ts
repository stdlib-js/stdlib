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

import dindexOfRow = require( './index' );


// TESTS //

// The function returns a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 5, 2, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( true, 2, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( false, 2, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( null, 2, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( void 0, 2, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( [], 2, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( {}, 2, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( ( x: number ): number => x, 2, 2, A, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 'row-major', '5', 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', true, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', false, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', null, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', void 0, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', [], 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', {}, 2, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', ( x: number ): number => x, 2, A, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 'row-major', 2, '5', A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, true, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, false, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, null, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, void 0, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, [], A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, {}, A, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, ( x: number ): number => x, A, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 'row-major', 2, 2, 5, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, true, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, false, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, null, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, void 0, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, {}, 2, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, ( x: number ): number => x, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 'row-major', 2, 2, A, '5', x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, true, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, false, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, null, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, void 0, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, [], x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, {}, x, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, ( x: number ): number => x, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 'row-major', 2, 2, A, 2, 5, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, true, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, false, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, null, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, void 0, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, {}, 1, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 'row-major', 2, 2, A, 2, x, '5', w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, true, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, false, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, null, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, void 0, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, [], w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, {}, w, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Uint8Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );

	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, 5, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, true, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, false, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, null, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, void 0, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, {}, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, '5' ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, true ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, false ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, null ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, void 0 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, [] ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, {} ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow(); // $ExpectError
	dindexOfRow( 'row-major' ); // $ExpectError
	dindexOfRow( 'row-major', 2 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1 ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w ); // $ExpectError
	dindexOfRow( 'row-major', 2, 2, A, 2, x, 1, w, 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( '5', 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( true, 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( false, 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( null, 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( void 0, 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( [], 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( {}, 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( ( x: number ): number => x, 2, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, '5', A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, true, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, false, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, null, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, void 0, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, [], A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, {}, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, ( x: number ): number => x, A, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, 5, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, true, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, false, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, null, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, void 0, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, {}, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, ( x: number ): number => x, 2, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, '5', 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, true, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, false, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, null, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, void 0, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, [], 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, {}, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, ( x: number ): number => x, 1, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, 2, '5', 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, true, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, false, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, null, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, void 0, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, [], 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, {}, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, ( x: number ): number => x, 0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, 2, 1, '5', x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, true, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, false, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, null, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, void 0, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, [], x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, {}, x, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, ( x: number ): number => x, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a Float64Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, 5, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, true, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, false, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, null, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, void 0, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, {}, 1, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, '5', 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, true, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, false, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, null, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, void 0, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, [], 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, {}, 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, '5', w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, true, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, false, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, null, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, void 0, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, [], w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, {}, w, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a Uint8Array...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );

	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, 5, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, true, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, false, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, null, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, void 0, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, '5', 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, true, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, false, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, null, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, void 0, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, [], 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, {}, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, '5' ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, true ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, false ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, null ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, void 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, [] ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, {} ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const x = new Float64Array( [ 3.0, 4.0 ] );
	const w = new Uint8Array( 2 );

	dindexOfRow.ndarray(); // $ExpectError
	dindexOfRow.ndarray( 2 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1 ); // $ExpectError
	dindexOfRow.ndarray( 2, 2, A, 2, 1, 0, x, 1, 0, w, 1, 0, 0 ); // $ExpectError
}
