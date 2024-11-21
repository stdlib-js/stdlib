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

import ternary = require( './index' );

/**
* Returns the sum.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns sum
*/
function add( x: number, y: number, z: number ): number {
	return x + y + z;
}


// TESTS //

// The function returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];

	ternary( arrays, shape, strides, add ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];

	ternary( 5, shape, strides, add ); // $ExpectError
	ternary( true, shape, strides, add ); // $ExpectError
	ternary( false, shape, strides, add ); // $ExpectError
	ternary( null, shape, strides, add ); // $ExpectError
	ternary( undefined, shape, strides, add ); // $ExpectError
	ternary( {}, shape, strides, add ); // $ExpectError
	ternary( [ 1 ], shape, strides, add ); // $ExpectError
	ternary( ( x: number ): number => x, shape, strides, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const strides = [ 1, 1, 1, 1 ];

	ternary( arrays, '10', strides, add ); // $ExpectError
	ternary( arrays, 10, strides, add ); // $ExpectError
	ternary( arrays, true, strides, add ); // $ExpectError
	ternary( arrays, false, strides, add ); // $ExpectError
	ternary( arrays, null, strides, add ); // $ExpectError
	ternary( arrays, undefined, strides, add ); // $ExpectError
	ternary( arrays, [ '1' ], strides, add ); // $ExpectError
	ternary( arrays, {}, strides, add ); // $ExpectError
	ternary( arrays, ( x: number ): number => x, strides, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];

	ternary( arrays, shape, '10', add ); // $ExpectError
	ternary( arrays, shape, 5, add ); // $ExpectError
	ternary( arrays, shape, true, add ); // $ExpectError
	ternary( arrays, shape, false, add ); // $ExpectError
	ternary( arrays, shape, null, add ); // $ExpectError
	ternary( arrays, shape, undefined, add ); // $ExpectError
	ternary( arrays, shape, [ '1' ], add ); // $ExpectError
	ternary( arrays, shape, {}, add ); // $ExpectError
	ternary( arrays, shape, ( x: number ): number => x, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a ternary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];

	ternary( arrays, shape, strides, '10' ); // $ExpectError
	ternary( arrays, shape, strides, 5 ); // $ExpectError
	ternary( arrays, shape, strides, true ); // $ExpectError
	ternary( arrays, shape, strides, false ); // $ExpectError
	ternary( arrays, shape, strides, null ); // $ExpectError
	ternary( arrays, shape, strides, undefined ); // $ExpectError
	ternary( arrays, shape, strides, [] ); // $ExpectError
	ternary( arrays, shape, strides, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];

	ternary(); // $ExpectError
	ternary( arrays ); // $ExpectError
	ternary( arrays, shape ); // $ExpectError
	ternary( arrays, shape, strides ); // $ExpectError
	ternary( arrays, shape, strides, add, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0 ];

	ternary.ndarray( arrays, shape, strides, offsets, add ); // $ExpectType void
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0 ];

	ternary.ndarray( 5, shape, strides, offsets, add ); // $ExpectError
	ternary.ndarray( true, shape, strides, offsets, add ); // $ExpectError
	ternary.ndarray( false, shape, strides, offsets, add ); // $ExpectError
	ternary.ndarray( null, shape, strides, offsets, add ); // $ExpectError
	ternary.ndarray( undefined, shape, strides, offsets, add ); // $ExpectError
	ternary.ndarray( [ 1 ], shape, strides, offsets, add ); // $ExpectError
	ternary.ndarray( {}, shape, strides, offsets, add ); // $ExpectError
	ternary.ndarray( ( x: number ): number => x, shape, strides, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const strides = [ 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0 ];

	ternary.ndarray( arrays, '10', strides, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, 10, strides, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, true, strides, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, false, strides, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, null, strides, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, undefined, strides, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, [ '1' ], strides, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, {}, strides, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, ( x: number ): number => x, strides, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];
	const offsets = [ 0, 0, 0, 0 ];

	ternary.ndarray( arrays, shape, '10', offsets, add ); // $ExpectError
	ternary.ndarray( arrays, shape, 5, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, shape, true, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, shape, false, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, shape, null, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, shape, undefined, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, shape, [ '1' ], offsets, add ); // $ExpectError
	ternary.ndarray( arrays, shape, {}, offsets, add ); // $ExpectError
	ternary.ndarray( arrays, shape, ( x: number ): number => x, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];

	ternary.ndarray( arrays, shape, strides, '10', add ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, 5, add ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, true, add ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, false, add ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, null, add ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, undefined, add ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, [ '1' ], add ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, {}, add ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, ( x: number ): number => x, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a ternary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0 ];

	ternary.ndarray( arrays, shape, strides, offsets, '10' ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets, 5 ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets, true ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets, false ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets, null ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets, undefined ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets, [] ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	const arrays = [ x, y, z, w ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0 ];

	ternary.ndarray(); // $ExpectError
	ternary.ndarray( arrays ); // $ExpectError
	ternary.ndarray( arrays, shape ); // $ExpectError
	ternary.ndarray( arrays, shape, strides ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets ); // $ExpectError
	ternary.ndarray( arrays, shape, strides, offsets, add, 10 ); // $ExpectError
}
