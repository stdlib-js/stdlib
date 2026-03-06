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

import sspmv = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, 1  ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 10, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( true, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( false, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( null, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( void 0, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( [], 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( {}, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( ( x: number ): number => x, 'upper', 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 10, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', true, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', false, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', null, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', void 0, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', [ '1' ], 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', {}, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', ( x: number ): number => x, 10, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 'upper', '10', 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', true, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', false, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', null, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', void 0, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', [], 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', {}, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', ( x: number ): number => x, 1.0, A, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 'upper', 10, '10', A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, true, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, false, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, null, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, void 0, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, [], A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, {}, A, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, ( x: number ): number => x, A, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sspmv( 'row-major', 'upper', 10, 1.0, 10, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, '10', x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, true, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, false, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, null, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, void 0, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, [ '1' ], x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, {}, x, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float32Array...
{
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 'upper', 10, 1.0, A, 10, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, '10', 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, true, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, false, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, null, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, void 0, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, [ '1' ], 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, {}, 1, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, ( x: number ): number => x, 1, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 'upper', 10, 1.0, A, x, '10', 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, true, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, false, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, null, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, void 0, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, [], 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, {}, 1.0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, ( x: number ): number => x, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, '10', y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, true, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, false, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, null, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, void 0, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, [], y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, {}, y, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, 10, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, '10', 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, true, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, false, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, null, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, void 0, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, [ '1' ], 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, {}, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, '10' ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, true ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, false ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, null ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, void 0 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, [] ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, {} ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv(); // $ExpectError
	sspmv( 'row-major' ); // $ExpectError
	sspmv( 'row-major', 'upper' ); // $ExpectError
	sspmv( 'row-major', 'upper', 10 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0 ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y ); // $ExpectError
	sspmv( 'row-major', 'upper', 10, 1.0, A, x, 1, 1.0, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 10, 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( true, 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( false, 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( null, 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( void 0, 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( [], 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( {}, 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( ( x: number ): number => x, 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 10, 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', true, 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', false, 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', null, 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', void 0, 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', [ '1' ], 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', {}, 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', ( x: number ): number => x, 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', '10', 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', true, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', false, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', null, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', void 0, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', [], 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', {}, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', ( x: number ): number => x, 1.0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, '10', A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, true, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, false, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, null, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, void 0, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, [], A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, {}, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, ( x: number ): number => x, A, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, 10, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, '10', x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, true, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, false, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, null, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, void 0, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, [ '1' ], x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, {}, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float32Array...
{
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, 10, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, '10', 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, true, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, false, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, null, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, void 0, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, [ '1' ], 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, {}, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, ( x: number ): number => x, 1, 0, 1.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, '10', 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, true, 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, false, 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, null, 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, void 0, 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, [], 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, {}, 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, ( x: number ): number => x, 0, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, '10', 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, true, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, false, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, null, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, void 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, [], 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, {}, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, ( x: number ): number => x, 1.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, void 0, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, [], y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, 10, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, '10', 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, true, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, false, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, null, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, void 0, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, [ '1' ], 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, {}, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eleventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, '10', 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, true, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, false, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, null, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, void 0, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, [], 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, {}, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a twelfth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, '10' ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, true ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, false ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, null ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, void 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, [] ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, {} ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const A = new Float32Array( 55 );

	sspmv.ndarray(); // $ExpectError
	sspmv.ndarray( 'row-major' ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper' ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1 ); // $ExpectError
	sspmv.ndarray( 'row-major', 'upper', 10, 1.0, A, x, 1, 0, 1.0, y, 1, 0, 10 ); // $ExpectError
}
