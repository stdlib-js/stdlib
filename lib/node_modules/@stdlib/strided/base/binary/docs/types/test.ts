/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import binary = require( './index' );

/**
* Returns the sum.
*
* @param x - input value
* @param y - input value
* @returns sum
*/
function add( x: number, y: number ): number {
	return x + y;
}


// TESTS //

// The function returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	binary( arrays, shape, strides, add ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	binary( 5, shape, strides, add ); // $ExpectError
	binary( true, shape, strides, add ); // $ExpectError
	binary( false, shape, strides, add ); // $ExpectError
	binary( null, shape, strides, add ); // $ExpectError
	binary( undefined, shape, strides, add ); // $ExpectError
	binary( {}, shape, strides, add ); // $ExpectError
	binary( [ 1 ], shape, strides, add ); // $ExpectError
	binary( ( x: number ): number => x, shape, strides, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const strides = [ 1, 1, 1 ];

	binary( arrays, '10', strides, add ); // $ExpectError
	binary( arrays, 10, strides, add ); // $ExpectError
	binary( arrays, true, strides, add ); // $ExpectError
	binary( arrays, false, strides, add ); // $ExpectError
	binary( arrays, null, strides, add ); // $ExpectError
	binary( arrays, undefined, strides, add ); // $ExpectError
	binary( arrays, [ '1' ], strides, add ); // $ExpectError
	binary( arrays, {}, strides, add ); // $ExpectError
	binary( arrays, ( x: number ): number => x, strides, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];

	binary( arrays, shape, '10', add ); // $ExpectError
	binary( arrays, shape, 5, add ); // $ExpectError
	binary( arrays, shape, true, add ); // $ExpectError
	binary( arrays, shape, false, add ); // $ExpectError
	binary( arrays, shape, null, add ); // $ExpectError
	binary( arrays, shape, undefined, add ); // $ExpectError
	binary( arrays, shape, [ '1' ], add ); // $ExpectError
	binary( arrays, shape, {}, add ); // $ExpectError
	binary( arrays, shape, ( x: number ): number => x, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a binary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	binary( arrays, shape, strides, '10' ); // $ExpectError
	binary( arrays, shape, strides, 5 ); // $ExpectError
	binary( arrays, shape, strides, true ); // $ExpectError
	binary( arrays, shape, strides, false ); // $ExpectError
	binary( arrays, shape, strides, null ); // $ExpectError
	binary( arrays, shape, strides, undefined ); // $ExpectError
	binary( arrays, shape, strides, [] ); // $ExpectError
	binary( arrays, shape, strides, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	binary(); // $ExpectError
	binary( arrays ); // $ExpectError
	binary( arrays, shape ); // $ExpectError
	binary( arrays, shape, strides ); // $ExpectError
	binary( arrays, shape, strides, add, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	binary.ndarray( arrays, shape, strides, offsets, add ); // $ExpectType void
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	binary.ndarray( 5, shape, strides, offsets, add ); // $ExpectError
	binary.ndarray( true, shape, strides, offsets, add ); // $ExpectError
	binary.ndarray( false, shape, strides, offsets, add ); // $ExpectError
	binary.ndarray( null, shape, strides, offsets, add ); // $ExpectError
	binary.ndarray( undefined, shape, strides, offsets, add ); // $ExpectError
	binary.ndarray( [ 1 ], shape, strides, offsets, add ); // $ExpectError
	binary.ndarray( {}, shape, strides, offsets, add ); // $ExpectError
	binary.ndarray( ( x: number ): number => x, shape, strides, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	binary.ndarray( arrays, '10', strides, offsets, add ); // $ExpectError
	binary.ndarray( arrays, 10, strides, offsets, add ); // $ExpectError
	binary.ndarray( arrays, true, strides, offsets, add ); // $ExpectError
	binary.ndarray( arrays, false, strides, offsets, add ); // $ExpectError
	binary.ndarray( arrays, null, strides, offsets, add ); // $ExpectError
	binary.ndarray( arrays, undefined, strides, offsets, add ); // $ExpectError
	binary.ndarray( arrays, [ '1' ], strides, offsets, add ); // $ExpectError
	binary.ndarray( arrays, {}, strides, offsets, add ); // $ExpectError
	binary.ndarray( arrays, ( x: number ): number => x, strides, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];
	const offsets = [ 0, 0, 0 ];

	binary.ndarray( arrays, shape, '10', offsets, add ); // $ExpectError
	binary.ndarray( arrays, shape, 5, offsets, add ); // $ExpectError
	binary.ndarray( arrays, shape, true, offsets, add ); // $ExpectError
	binary.ndarray( arrays, shape, false, offsets, add ); // $ExpectError
	binary.ndarray( arrays, shape, null, offsets, add ); // $ExpectError
	binary.ndarray( arrays, shape, undefined, offsets, add ); // $ExpectError
	binary.ndarray( arrays, shape, [ '1' ], offsets, add ); // $ExpectError
	binary.ndarray( arrays, shape, {}, offsets, add ); // $ExpectError
	binary.ndarray( arrays, shape, ( x: number ): number => x, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	binary.ndarray( arrays, shape, strides, '10', add ); // $ExpectError
	binary.ndarray( arrays, shape, strides, 5, add ); // $ExpectError
	binary.ndarray( arrays, shape, strides, true, add ); // $ExpectError
	binary.ndarray( arrays, shape, strides, false, add ); // $ExpectError
	binary.ndarray( arrays, shape, strides, null, add ); // $ExpectError
	binary.ndarray( arrays, shape, strides, undefined, add ); // $ExpectError
	binary.ndarray( arrays, shape, strides, [ '1' ], add ); // $ExpectError
	binary.ndarray( arrays, shape, strides, {}, add ); // $ExpectError
	binary.ndarray( arrays, shape, strides, ( x: number ): number => x, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a binary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	binary.ndarray( arrays, shape, strides, offsets, '10' ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets, 5 ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets, true ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets, false ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets, null ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets, undefined ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets, [] ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	const arrays = [ x, y, z ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	binary.ndarray(); // $ExpectError
	binary.ndarray( arrays ); // $ExpectError
	binary.ndarray( arrays, shape ); // $ExpectError
	binary.ndarray( arrays, shape, strides ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets ); // $ExpectError
	binary.ndarray( arrays, shape, strides, offsets, add, 10 ); // $ExpectError
}
