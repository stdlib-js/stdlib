/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import unaryBy = require( './index' );

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
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy( arrays, shape, strides, identity, identity ); // $ExpectType void
	unaryBy( arrays, shape, strides, identity, identity, {} ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy( 5, shape, strides, identity, identity ); // $ExpectError
	unaryBy( true, shape, strides, identity, identity ); // $ExpectError
	unaryBy( false, shape, strides, identity, identity ); // $ExpectError
	unaryBy( null, shape, strides, identity, identity ); // $ExpectError
	unaryBy( undefined, shape, strides, identity, identity ); // $ExpectError
	unaryBy( {}, shape, strides, identity, identity ); // $ExpectError
	unaryBy( [ 1 ], shape, strides, identity, identity ); // $ExpectError
	unaryBy( ( x: number ): number => x, shape, strides, identity, identity ); // $ExpectError

	unaryBy( 5, shape, strides, identity, identity, {} ); // $ExpectError
	unaryBy( true, shape, strides, identity, identity, {} ); // $ExpectError
	unaryBy( false, shape, strides, identity, identity, {} ); // $ExpectError
	unaryBy( null, shape, strides, identity, identity, {} ); // $ExpectError
	unaryBy( undefined, shape, strides, identity, identity, {} ); // $ExpectError
	unaryBy( {}, shape, strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ 1 ], shape, strides, identity, identity, {} ); // $ExpectError
	unaryBy( ( x: number ): number => x, shape, strides, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const strides = [ 1, 1 ];

	unaryBy( arrays, '10', strides, identity, identity ); // $ExpectError
	unaryBy( arrays, 10, strides, identity, identity ); // $ExpectError
	unaryBy( arrays, true, strides, identity, identity ); // $ExpectError
	unaryBy( arrays, false, strides, identity, identity ); // $ExpectError
	unaryBy( arrays, null, strides, identity, identity ); // $ExpectError
	unaryBy( arrays, undefined, strides, identity, identity ); // $ExpectError
	unaryBy( arrays, [ '1' ], strides, identity, identity ); // $ExpectError
	unaryBy( arrays, {}, strides, identity, identity ); // $ExpectError
	unaryBy( arrays, ( x: number ): number => x, strides, identity, identity ); // $ExpectError

	unaryBy( arrays, '10', strides, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, 10, strides, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, true, strides, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, false, strides, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, null, strides, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, undefined, strides, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, [ '1' ], strides, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, {}, strides, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, ( x: number ): number => x, strides, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];

	unaryBy( arrays, shape, '10', identity, identity ); // $ExpectError
	unaryBy( arrays, shape, 5, identity, identity ); // $ExpectError
	unaryBy( arrays, shape, true, identity, identity ); // $ExpectError
	unaryBy( arrays, shape, false, identity, identity ); // $ExpectError
	unaryBy( arrays, shape, null, identity, identity ); // $ExpectError
	unaryBy( arrays, shape, undefined, identity, identity ); // $ExpectError
	unaryBy( arrays, shape, [ '1' ], identity, identity ); // $ExpectError
	unaryBy( arrays, shape, {}, identity, identity ); // $ExpectError
	unaryBy( arrays, shape, ( x: number ): number => x, identity, identity ); // $ExpectError

	unaryBy( arrays, shape, '10', identity, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, 5, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, true, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, false, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, null, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, undefined, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, [ '1' ], identity, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, {}, identity, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, ( x: number ): number => x, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy( arrays, shape, strides, '10', identity ); // $ExpectError
	unaryBy( arrays, shape, strides, 5, identity ); // $ExpectError
	unaryBy( arrays, shape, strides, true, identity ); // $ExpectError
	unaryBy( arrays, shape, strides, false, identity ); // $ExpectError
	unaryBy( arrays, shape, strides, null, identity ); // $ExpectError
	unaryBy( arrays, shape, strides, undefined, identity ); // $ExpectError
	unaryBy( arrays, shape, strides, [], identity ); // $ExpectError
	unaryBy( arrays, shape, strides, {}, identity ); // $ExpectError

	unaryBy( arrays, shape, strides, '10', identity, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, 5, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, true, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, false, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, null, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, undefined, identity, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, [], identity, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, {}, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy( arrays, shape, strides, identity, '10' ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, 5 ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, true ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, false ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, null ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, undefined ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, [] ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, {} ); // $ExpectError

	unaryBy( arrays, shape, strides, identity, '10', {} ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, 5, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, true, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, false, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, null, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, undefined, {} ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, [], {} ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy(); // $ExpectError
	unaryBy( arrays ); // $ExpectError
	unaryBy( arrays, shape ); // $ExpectError
	unaryBy( arrays, shape, strides ); // $ExpectError
	unaryBy( arrays, shape, strides, identity ); // $ExpectError
	unaryBy( arrays, shape, strides, identity, identity, identity, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( arrays, shape, strides, offsets, identity, identity ); // $ExpectType void
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, identity, {} ); // $ExpectType void
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not an array-like object containing array-like objects...
{
	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( 5, shape, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( true, shape, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( false, shape, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( null, shape, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( undefined, shape, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ 1 ], shape, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( {}, shape, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( ( x: number ): number => x, shape, strides, offsets, identity, identity ); // $ExpectError

	unaryBy.ndarray( 5, shape, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( true, shape, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( false, shape, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( null, shape, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( undefined, shape, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ 1 ], shape, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( {}, shape, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( ( x: number ): number => x, shape, strides, offsets, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( arrays, '10', strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, 10, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, true, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, false, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, null, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, undefined, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, [ '1' ], strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, {}, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, ( x: number ): number => x, strides, offsets, identity, identity ); // $ExpectError

	unaryBy.ndarray( arrays, '10', strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, 10, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, true, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, false, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, null, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, undefined, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, [ '1' ], strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, {}, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, ( x: number ): number => x, strides, offsets, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( arrays, shape, '10', offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, 5, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, true, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, false, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, null, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, undefined, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, [ '1' ], offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, {}, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, ( x: number ): number => x, offsets, identity, identity ); // $ExpectError

	unaryBy.ndarray( arrays, shape, '10', offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, 5, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, true, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, false, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, null, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, undefined, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, [ '1' ], offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, {}, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, ( x: number ): number => x, offsets, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy.ndarray( arrays, shape, strides, '10', identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, 5, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, true, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, false, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, null, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, undefined, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, [ '1' ], identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, {}, identity, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, ( x: number ): number => x, identity, identity ); // $ExpectError

	unaryBy.ndarray( arrays, shape, strides, '10', identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, 5, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, true, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, false, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, null, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, undefined, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, [ '1' ], identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, {}, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, ( x: number ): number => x, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( arrays, shape, strides, offsets, '10', identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, 5, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, true, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, false, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, null, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, undefined, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, [], identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, {}, identity ); // $ExpectError

	unaryBy.ndarray( arrays, shape, strides, offsets, '10', identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, 5, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, true, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, false, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, null, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, undefined, identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, [], identity, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, {}, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( arrays, shape, strides, offsets, identity, '10' ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, 5 ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, true ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, false ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, null ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, undefined ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, [] ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, {} ); // $ExpectError

	unaryBy.ndarray( arrays, shape, strides, offsets, identity, '10', {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, 5, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, true, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, false, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, null, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, undefined, {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, [], {} ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, {}, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const arrays = [ x, y ];
	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray(); // $ExpectError
	unaryBy.ndarray( arrays ); // $ExpectError
	unaryBy.ndarray( arrays, shape ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity ); // $ExpectError
	unaryBy.ndarray( arrays, shape, strides, offsets, identity, identity, identity, 10 ); // $ExpectError
}
