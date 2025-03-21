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

import mskunary = require( './index' );

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

	mskunary( arrays, shape, strides, identity ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	mskunary( 5, shape, strides, identity ); // $ExpectError
	mskunary( true, shape, strides, identity ); // $ExpectError
	mskunary( false, shape, strides, identity ); // $ExpectError
	mskunary( null, shape, strides, identity ); // $ExpectError
	mskunary( undefined, shape, strides, identity ); // $ExpectError
	mskunary( {}, shape, strides, identity ); // $ExpectError
	mskunary( [ 1 ], shape, strides, identity ); // $ExpectError
	mskunary( ( x: number ): number => x, shape, strides, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const strides = [ 1, 1, 1 ];

	mskunary( arrays, '10', strides, identity ); // $ExpectError
	mskunary( arrays, 10, strides, identity ); // $ExpectError
	mskunary( arrays, true, strides, identity ); // $ExpectError
	mskunary( arrays, false, strides, identity ); // $ExpectError
	mskunary( arrays, null, strides, identity ); // $ExpectError
	mskunary( arrays, undefined, strides, identity ); // $ExpectError
	mskunary( arrays, [ '1' ], strides, identity ); // $ExpectError
	mskunary( arrays, {}, strides, identity ); // $ExpectError
	mskunary( arrays, ( x: number ): number => x, strides, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];

	mskunary( arrays, shape, '10', identity ); // $ExpectError
	mskunary( arrays, shape, 5, identity ); // $ExpectError
	mskunary( arrays, shape, true, identity ); // $ExpectError
	mskunary( arrays, shape, false, identity ); // $ExpectError
	mskunary( arrays, shape, null, identity ); // $ExpectError
	mskunary( arrays, shape, undefined, identity ); // $ExpectError
	mskunary( arrays, shape, [ '1' ], identity ); // $ExpectError
	mskunary( arrays, shape, {}, identity ); // $ExpectError
	mskunary( arrays, shape, ( x: number ): number => x, identity ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	mskunary( arrays, shape, strides, '10' ); // $ExpectError
	mskunary( arrays, shape, strides, 5 ); // $ExpectError
	mskunary( arrays, shape, strides, true ); // $ExpectError
	mskunary( arrays, shape, strides, false ); // $ExpectError
	mskunary( arrays, shape, strides, null ); // $ExpectError
	mskunary( arrays, shape, strides, undefined ); // $ExpectError
	mskunary( arrays, shape, strides, [] ); // $ExpectError
	mskunary( arrays, shape, strides, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	mskunary(); // $ExpectError
	mskunary( arrays ); // $ExpectError
	mskunary( arrays, shape ); // $ExpectError
	mskunary( arrays, shape, strides ); // $ExpectError
	mskunary( arrays, shape, strides, identity, 10 ); // $ExpectError
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

	mskunary.ndarray( arrays, shape, strides, offsets, identity ); // $ExpectType void
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	mskunary.ndarray( 5, shape, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( true, shape, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( false, shape, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( null, shape, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( undefined, shape, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( [ 1 ], shape, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( {}, shape, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( ( x: number ): number => x, shape, strides, offsets, identity ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const strides = [ 1, 1, 1 ];
	const offsets = [ 0, 0, 0 ];

	mskunary.ndarray( arrays, '10', strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, 10, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, true, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, false, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, null, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, undefined, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, [ '1' ], strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, {}, strides, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, ( x: number ): number => x, strides, offsets, identity ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const offsets = [ 0, 0, 0 ];

	mskunary.ndarray( arrays, shape, '10', offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, 5, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, true, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, false, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, null, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, undefined, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, [ '1' ], offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, {}, offsets, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, ( x: number ): number => x, offsets, identity ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const m = new Uint8Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, m, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1, 1 ];

	mskunary.ndarray( arrays, shape, strides, '10', identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, 5, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, true, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, false, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, null, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, undefined, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, [ '1' ], identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, {}, identity ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, ( x: number ): number => x, identity ); // $ExpectError
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

	mskunary.ndarray( arrays, shape, strides, offsets, '10' ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets, 5 ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets, true ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets, false ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets, null ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets, undefined ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets, [] ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets, {} ); // $ExpectError
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

	mskunary.ndarray(); // $ExpectError
	mskunary.ndarray( arrays ); // $ExpectError
	mskunary.ndarray( arrays, shape ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets ); // $ExpectError
	mskunary.ndarray( arrays, shape, strides, offsets, identity, 10 ); // $ExpectError
}
