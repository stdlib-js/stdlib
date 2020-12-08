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

import quaternary = require( './index' );

/**
* Returns the sum.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @returns sum
*/
function add( x: number, y: number, z: number, w: number ): number {
	return x + y + z + w;
}


// TESTS //

// The function returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];

	quaternary( arrays, shape, strides, add ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];

	quaternary( 5, shape, strides, add ); // $ExpectError
	quaternary( true, shape, strides, add ); // $ExpectError
	quaternary( false, shape, strides, add ); // $ExpectError
	quaternary( null, shape, strides, add ); // $ExpectError
	quaternary( undefined, shape, strides, add ); // $ExpectError
	quaternary( {}, shape, strides, add ); // $ExpectError
	quaternary( [ 1 ], shape, strides, add ); // $ExpectError
	quaternary( ( x: number ): number => x, shape, strides, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const strides = [ 1, 1, 1, 1, 1 ];

	quaternary( arrays, '10', strides, add ); // $ExpectError
	quaternary( arrays, 10, strides, add ); // $ExpectError
	quaternary( arrays, true, strides, add ); // $ExpectError
	quaternary( arrays, false, strides, add ); // $ExpectError
	quaternary( arrays, null, strides, add ); // $ExpectError
	quaternary( arrays, undefined, strides, add ); // $ExpectError
	quaternary( arrays, [ '1' ], strides, add ); // $ExpectError
	quaternary( arrays, {}, strides, add ); // $ExpectError
	quaternary( arrays, ( x: number ): number => x, strides, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];

	quaternary( arrays, shape, '10', add ); // $ExpectError
	quaternary( arrays, shape, 5, add ); // $ExpectError
	quaternary( arrays, shape, true, add ); // $ExpectError
	quaternary( arrays, shape, false, add ); // $ExpectError
	quaternary( arrays, shape, null, add ); // $ExpectError
	quaternary( arrays, shape, undefined, add ); // $ExpectError
	quaternary( arrays, shape, [ '1' ], add ); // $ExpectError
	quaternary( arrays, shape, {}, add ); // $ExpectError
	quaternary( arrays, shape, ( x: number ): number => x, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a quaternary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];

	quaternary( arrays, shape, strides, '10' ); // $ExpectError
	quaternary( arrays, shape, strides, 5 ); // $ExpectError
	quaternary( arrays, shape, strides, true ); // $ExpectError
	quaternary( arrays, shape, strides, false ); // $ExpectError
	quaternary( arrays, shape, strides, null ); // $ExpectError
	quaternary( arrays, shape, strides, undefined ); // $ExpectError
	quaternary( arrays, shape, strides, [] ); // $ExpectError
	quaternary( arrays, shape, strides, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];

	quaternary(); // $ExpectError
	quaternary( arrays ); // $ExpectError
	quaternary( arrays, shape ); // $ExpectError
	quaternary( arrays, shape, strides ); // $ExpectError
	quaternary( arrays, shape, strides, add, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0 ];

	quaternary.ndarray( arrays, shape, strides, offsets, add ); // $ExpectType void
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0 ];

	quaternary.ndarray( 5, shape, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( true, shape, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( false, shape, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( null, shape, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( undefined, shape, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( [ 1 ], shape, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( {}, shape, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( ( x: number ): number => x, shape, strides, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const strides = [ 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0 ];

	quaternary.ndarray( arrays, '10', strides, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, 10, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, true, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, false, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, null, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, undefined, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, [ '1' ], strides, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, {}, strides, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, ( x: number ): number => x, strides, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];
	const offsets = [ 0, 0, 0, 0, 0 ];

	quaternary.ndarray( arrays, shape, '10', offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, 5, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, true, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, false, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, null, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, undefined, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, [ '1' ], offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, {}, offsets, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, ( x: number ): number => x, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];

	quaternary.ndarray( arrays, shape, strides, '10', add ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, 5, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, true, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, false, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, null, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, undefined, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, [ '1' ], add ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, {}, add ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, ( x: number ): number => x, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a quaternary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0 ];

	quaternary.ndarray( arrays, shape, strides, offsets, '10' ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets, 5 ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets, true ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets, false ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets, null ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets, undefined ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets, [] ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0 ];

	quaternary.ndarray(); // $ExpectError
	quaternary.ndarray( arrays ); // $ExpectError
	quaternary.ndarray( arrays, shape ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets ); // $ExpectError
	quaternary.ndarray( arrays, shape, strides, offsets, add, 10 ); // $ExpectError
}
