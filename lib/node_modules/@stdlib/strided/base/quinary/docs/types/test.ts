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

import quinary = require( './index' );

/**
* Returns the sum.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param u - input value
* @returns sum
*/
function add( x: number, y: number, z: number, w: number, u: number ): number {
	return x + y + z + w + u;
}


// TESTS //

// The function returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];

	quinary( arrays, shape, strides, add ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];

	quinary( 5, shape, strides, add ); // $ExpectError
	quinary( true, shape, strides, add ); // $ExpectError
	quinary( false, shape, strides, add ); // $ExpectError
	quinary( null, shape, strides, add ); // $ExpectError
	quinary( undefined, shape, strides, add ); // $ExpectError
	quinary( {}, shape, strides, add ); // $ExpectError
	quinary( [ 1 ], shape, strides, add ); // $ExpectError
	quinary( ( x: number ): number => x, shape, strides, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];

	quinary( arrays, '10', strides, add ); // $ExpectError
	quinary( arrays, 10, strides, add ); // $ExpectError
	quinary( arrays, true, strides, add ); // $ExpectError
	quinary( arrays, false, strides, add ); // $ExpectError
	quinary( arrays, null, strides, add ); // $ExpectError
	quinary( arrays, undefined, strides, add ); // $ExpectError
	quinary( arrays, [ '1' ], strides, add ); // $ExpectError
	quinary( arrays, {}, strides, add ); // $ExpectError
	quinary( arrays, ( x: number ): number => x, strides, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];

	quinary( arrays, shape, '10', add ); // $ExpectError
	quinary( arrays, shape, 5, add ); // $ExpectError
	quinary( arrays, shape, true, add ); // $ExpectError
	quinary( arrays, shape, false, add ); // $ExpectError
	quinary( arrays, shape, null, add ); // $ExpectError
	quinary( arrays, shape, undefined, add ); // $ExpectError
	quinary( arrays, shape, [ '1' ], add ); // $ExpectError
	quinary( arrays, shape, {}, add ); // $ExpectError
	quinary( arrays, shape, ( x: number ): number => x, add ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a quinary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];

	quinary( arrays, shape, strides, '10' ); // $ExpectError
	quinary( arrays, shape, strides, 5 ); // $ExpectError
	quinary( arrays, shape, strides, true ); // $ExpectError
	quinary( arrays, shape, strides, false ); // $ExpectError
	quinary( arrays, shape, strides, null ); // $ExpectError
	quinary( arrays, shape, strides, undefined ); // $ExpectError
	quinary( arrays, shape, strides, [] ); // $ExpectError
	quinary( arrays, shape, strides, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];

	quinary(); // $ExpectError
	quinary( arrays ); // $ExpectError
	quinary( arrays, shape ); // $ExpectError
	quinary( arrays, shape, strides ); // $ExpectError
	quinary( arrays, shape, strides, add, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0, 0 ];

	quinary.ndarray( arrays, shape, strides, offsets, add ); // $ExpectType void
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0, 0 ];

	quinary.ndarray( 5, shape, strides, offsets, add ); // $ExpectError
	quinary.ndarray( true, shape, strides, offsets, add ); // $ExpectError
	quinary.ndarray( false, shape, strides, offsets, add ); // $ExpectError
	quinary.ndarray( null, shape, strides, offsets, add ); // $ExpectError
	quinary.ndarray( undefined, shape, strides, offsets, add ); // $ExpectError
	quinary.ndarray( [ 1 ], shape, strides, offsets, add ); // $ExpectError
	quinary.ndarray( {}, shape, strides, offsets, add ); // $ExpectError
	quinary.ndarray( ( x: number ): number => x, shape, strides, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0, 0 ];

	quinary.ndarray( arrays, '10', strides, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, 10, strides, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, true, strides, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, false, strides, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, null, strides, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, undefined, strides, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, [ '1' ], strides, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, {}, strides, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, ( x: number ): number => x, strides, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];
	const offsets = [ 0, 0, 0, 0, 0, 0 ];

	quinary.ndarray( arrays, shape, '10', offsets, add ); // $ExpectError
	quinary.ndarray( arrays, shape, 5, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, shape, true, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, shape, false, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, shape, null, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, shape, undefined, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, shape, [ '1' ], offsets, add ); // $ExpectError
	quinary.ndarray( arrays, shape, {}, offsets, add ); // $ExpectError
	quinary.ndarray( arrays, shape, ( x: number ): number => x, offsets, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];

	quinary.ndarray( arrays, shape, strides, '10', add ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, 5, add ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, true, add ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, false, add ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, null, add ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, undefined, add ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, [ '1' ], add ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, {}, add ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, ( x: number ): number => x, add ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a quinary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0, 0 ];

	quinary.ndarray( arrays, shape, strides, offsets, '10' ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets, 5 ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets, true ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets, false ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets, null ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets, undefined ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets, [] ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );
	const w = new Float64Array( 10 );
	const u = new Float64Array( 10 );
	const v = new Float64Array( 10 );

	const arrays = [ x, y, z, w, u, v ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1, 1, 1, 1 ];
	const offsets = [ 0, 0, 0, 0, 0, 0 ];

	quinary.ndarray(); // $ExpectError
	quinary.ndarray( arrays ); // $ExpectError
	quinary.ndarray( arrays, shape ); // $ExpectError
	quinary.ndarray( arrays, shape, strides ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets ); // $ExpectError
	quinary.ndarray( arrays, shape, strides, offsets, add, 10 ); // $ExpectError
}
