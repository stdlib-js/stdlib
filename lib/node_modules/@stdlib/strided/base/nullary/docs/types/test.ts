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

import nullary = require( './index' );

/**
* Returns a constant value.
*
* @returns input value
*/
function fill(): number {
	return 3.0;
}


// TESTS //

// The function returns `undefined`...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];
	const strides = [ 1 ];

	nullary( arrays, shape, strides, fill ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1 ];

	nullary( 5, shape, strides, fill ); // $ExpectError
	nullary( true, shape, strides, fill ); // $ExpectError
	nullary( false, shape, strides, fill ); // $ExpectError
	nullary( null, shape, strides, fill ); // $ExpectError
	nullary( undefined, shape, strides, fill ); // $ExpectError
	nullary( {}, shape, strides, fill ); // $ExpectError
	nullary( [ 1 ], shape, strides, fill ); // $ExpectError
	nullary( ( x: number ): number => x, shape, strides, fill ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const strides = [ 1 ];

	nullary( arrays, '10', strides, fill ); // $ExpectError
	nullary( arrays, 10, strides, fill ); // $ExpectError
	nullary( arrays, true, strides, fill ); // $ExpectError
	nullary( arrays, false, strides, fill ); // $ExpectError
	nullary( arrays, null, strides, fill ); // $ExpectError
	nullary( arrays, undefined, strides, fill ); // $ExpectError
	nullary( arrays, [ '1' ], strides, fill ); // $ExpectError
	nullary( arrays, {}, strides, fill ); // $ExpectError
	nullary( arrays, ( x: number ): number => x, strides, fill ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];

	nullary( arrays, shape, '10', fill ); // $ExpectError
	nullary( arrays, shape, 5, fill ); // $ExpectError
	nullary( arrays, shape, true, fill ); // $ExpectError
	nullary( arrays, shape, false, fill ); // $ExpectError
	nullary( arrays, shape, null, fill ); // $ExpectError
	nullary( arrays, shape, undefined, fill ); // $ExpectError
	nullary( arrays, shape, [ '1' ], fill ); // $ExpectError
	nullary( arrays, shape, {}, fill ); // $ExpectError
	nullary( arrays, shape, ( x: number ): number => x, fill ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a nullary function...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];
	const strides = [ 1 ];

	nullary( arrays, shape, strides, '10' ); // $ExpectError
	nullary( arrays, shape, strides, 5 ); // $ExpectError
	nullary( arrays, shape, strides, true ); // $ExpectError
	nullary( arrays, shape, strides, false ); // $ExpectError
	nullary( arrays, shape, strides, null ); // $ExpectError
	nullary( arrays, shape, strides, undefined ); // $ExpectError
	nullary( arrays, shape, strides, [] ); // $ExpectError
	nullary( arrays, shape, strides, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];
	const strides = [ 1 ];

	nullary(); // $ExpectError
	nullary( arrays ); // $ExpectError
	nullary( arrays, shape ); // $ExpectError
	nullary( arrays, shape, strides ); // $ExpectError
	nullary( arrays, shape, strides, fill, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns `undefined`...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];
	const strides = [ 1 ];
	const offsets = [ 0 ];

	nullary.ndarray( arrays, shape, strides, offsets, fill ); // $ExpectType void
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1 ];
	const offsets = [ 0 ];

	nullary.ndarray( 5, shape, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( true, shape, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( false, shape, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( null, shape, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( undefined, shape, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( [ 1 ], shape, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( {}, shape, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( ( x: number ): number => x, shape, strides, offsets, fill ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const strides = [ 1 ];
	const offsets = [ 0 ];

	nullary.ndarray( arrays, '10', strides, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, 10, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, true, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, false, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, null, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, undefined, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, [ '1' ], strides, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, {}, strides, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, ( x: number ): number => x, strides, offsets, fill ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];
	const offsets = [ 0 ];

	nullary.ndarray( arrays, shape, '10', offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, 5, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, true, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, false, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, null, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, undefined, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, [ '1' ], offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, {}, offsets, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, ( x: number ): number => x, offsets, fill ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];
	const strides = [ 1 ];

	nullary.ndarray( arrays, shape, strides, '10', fill ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, 5, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, true, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, false, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, null, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, undefined, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, [ '1' ], fill ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, {}, fill ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, ( x: number ): number => x, fill ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a nullary function...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];
	const strides = [ 1 ];
	const offsets = [ 0 ];

	nullary.ndarray( arrays, shape, strides, offsets, '10' ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets, 5 ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets, true ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets, false ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets, null ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets, undefined ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets, [] ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	const arrays = [ x ];
	const shape = [ 10 ];
	const strides = [ 1 ];
	const offsets = [ 0 ];

	nullary.ndarray(); // $ExpectError
	nullary.ndarray( arrays ); // $ExpectError
	nullary.ndarray( arrays, shape ); // $ExpectError
	nullary.ndarray( arrays, shape, strides ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets ); // $ExpectError
	nullary.ndarray( arrays, shape, strides, offsets, fill, 10 ); // $ExpectError
}
