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

import unary = require( './index' );

/**
* Evaluates the identity function.
*
* @param x - input value
* @returns input value
*/
function identity( x: number ): number {
	return x;
}


// TESTS //

// The function returns `undefined`...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	unary( arrays, shape, strides, identity ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	unary( 5, shape, strides, identity ); // $ExpectError
	unary( true, shape, strides, identity ); // $ExpectError
	unary( false, shape, strides, identity ); // $ExpectError
	unary( null, shape, strides, identity ); // $ExpectError
	unary( undefined, shape, strides, identity ); // $ExpectError
	unary( {}, shape, strides, identity ); // $ExpectError
	unary( [ 1 ], shape, strides, identity ); // $ExpectError
	unary( ( x: number ): number => x, shape, strides, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const strides = [ 1, 1, 1 ];

	unary( arrays, '10', strides, identity ); // $ExpectError
	unary( arrays, 10, strides, identity ); // $ExpectError
	unary( arrays, true, strides, identity ); // $ExpectError
	unary( arrays, false, strides, identity ); // $ExpectError
	unary( arrays, null, strides, identity ); // $ExpectError
	unary( arrays, undefined, strides, identity ); // $ExpectError
	unary( arrays, [ '1' ], strides, identity ); // $ExpectError
	unary( arrays, {}, strides, identity ); // $ExpectError
	unary( arrays, ( x: number ): number => x, strides, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];

	unary( arrays, shape, '10', identity ); // $ExpectError
	unary( arrays, shape, 5, identity ); // $ExpectError
	unary( arrays, shape, true, identity ); // $ExpectError
	unary( arrays, shape, false, identity ); // $ExpectError
	unary( arrays, shape, null, identity ); // $ExpectError
	unary( arrays, shape, undefined, identity ); // $ExpectError
	unary( arrays, shape, [ '1' ], identity ); // $ExpectError
	unary( arrays, shape, {}, identity ); // $ExpectError
	unary( arrays, shape, ( x: number ): number => x, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	unary( arrays, shape, strides, '10' ); // $ExpectError
	unary( arrays, shape, strides, 5 ); // $ExpectError
	unary( arrays, shape, strides, true ); // $ExpectError
	unary( arrays, shape, strides, false ); // $ExpectError
	unary( arrays, shape, strides, null ); // $ExpectError
	unary( arrays, shape, strides, undefined ); // $ExpectError
	unary( arrays, shape, strides, [] ); // $ExpectError
	unary( arrays, shape, strides, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	unary(); // $ExpectError
	unary( arrays ); // $ExpectError
	unary( arrays, shape ); // $ExpectError
	unary( arrays, shape, strides ); // $ExpectError
	unary( arrays, shape, strides, identity, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns `undefined`...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	unary.ndarray( arrays, shape, strides, offsets, identity ); // $ExpectType void
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	unary.ndarray( 5, shape, strides, offsets, identity ); // $ExpectError
	unary.ndarray( true, shape, strides, offsets, identity ); // $ExpectError
	unary.ndarray( false, shape, strides, offsets, identity ); // $ExpectError
	unary.ndarray( null, shape, strides, offsets, identity ); // $ExpectError
	unary.ndarray( undefined, shape, strides, offsets, identity ); // $ExpectError
	unary.ndarray( [ 1 ], shape, strides, offsets, identity ); // $ExpectError
	unary.ndarray( {}, shape, strides, offsets, identity ); // $ExpectError
	unary.ndarray( ( x: number ): number => x, shape, strides, offsets, identity ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	unary.ndarray( arrays, '10', strides, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, 10, strides, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, true, strides, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, false, strides, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, null, strides, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, undefined, strides, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, [ '1' ], strides, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, {}, strides, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, ( x: number ): number => x, strides, offsets, identity ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const offsets = [ 0, 0, 0 ];

	unary.ndarray( arrays, shape, '10', offsets, identity ); // $ExpectError
	unary.ndarray( arrays, shape, 5, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, shape, true, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, shape, false, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, shape, null, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, shape, undefined, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, shape, [ '1' ], offsets, identity ); // $ExpectError
	unary.ndarray( arrays, shape, {}, offsets, identity ); // $ExpectError
	unary.ndarray( arrays, shape, ( x: number ): number => x, offsets, identity ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	unary.ndarray( arrays, shape, strides, '10', identity ); // $ExpectError
	unary.ndarray( arrays, shape, strides, 5, identity ); // $ExpectError
	unary.ndarray( arrays, shape, strides, true, identity ); // $ExpectError
	unary.ndarray( arrays, shape, strides, false, identity ); // $ExpectError
	unary.ndarray( arrays, shape, strides, null, identity ); // $ExpectError
	unary.ndarray( arrays, shape, strides, undefined, identity ); // $ExpectError
	unary.ndarray( arrays, shape, strides, [ '1' ], identity ); // $ExpectError
	unary.ndarray( arrays, shape, strides, {}, identity ); // $ExpectError
	unary.ndarray( arrays, shape, strides, ( x: number ): number => x, identity ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	unary.ndarray( arrays, shape, strides, offsets, '10' ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets, 5 ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets, true ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets, false ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets, null ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets, undefined ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets, [] ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	unary.ndarray(); // $ExpectError
	unary.ndarray( arrays ); // $ExpectError
	unary.ndarray( arrays, shape ); // $ExpectError
	unary.ndarray( arrays, shape, strides ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets ); // $ExpectError
	unary.ndarray( arrays, shape, strides, offsets, identity, 10 ); // $ExpectError
}
