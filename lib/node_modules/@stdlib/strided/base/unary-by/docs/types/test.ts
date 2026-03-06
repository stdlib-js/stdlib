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

	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy( [ x, y ], shape, strides, identity, identity ); // $ExpectType void
	unaryBy( [ x, y ], shape, strides, identity, identity, {} ); // $ExpectType void
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

	const strides = [ 1, 1 ];

	unaryBy( [ x, y ], '10', strides, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], 10, strides, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], true, strides, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], false, strides, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], null, strides, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], undefined, strides, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], [ '1' ], strides, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], {}, strides, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], ( x: number ): number => x, strides, identity, identity ); // $ExpectError

	unaryBy( [ x, y ], '10', strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], 10, strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], true, strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], false, strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], null, strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], undefined, strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], [ '1' ], strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], {}, strides, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], ( x: number ): number => x, strides, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];

	unaryBy( [ x, y ], shape, '10', identity, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, 5, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, true, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, false, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, null, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, undefined, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, [ '1' ], identity, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, {}, identity, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, ( x: number ): number => x, identity, identity ); // $ExpectError

	unaryBy( [ x, y ], shape, '10', identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, 5, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, true, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, false, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, null, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, undefined, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, [ '1' ], identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, {}, identity, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, ( x: number ): number => x, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy( [ x, y ], shape, strides, '10', identity ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, 5, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, true, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, false, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, null, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, undefined, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, [], identity ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, {}, identity ); // $ExpectError

	unaryBy( [ x, y ], shape, strides, '10', identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, 5, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, true, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, false, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, null, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, undefined, identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, [], identity, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, {}, identity, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy( [ x, y ], shape, strides, identity, '10' ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, 5 ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, true ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, false ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, null ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, undefined ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, [] ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, {} ); // $ExpectError

	unaryBy( [ x, y ], shape, strides, identity, '10', {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, 5, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, true, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, false, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, null, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, undefined, {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, [], {} ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy(); // $ExpectError
	unaryBy( [ x, y ] ); // $ExpectError
	unaryBy( [ x, y ], shape ); // $ExpectError
	unaryBy( [ x, y ], shape, strides ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity ); // $ExpectError
	unaryBy( [ x, y ], shape, strides, identity, identity, identity, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns `undefined`...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, identity ); // $ExpectType void
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, identity, {} ); // $ExpectType void
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

	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( [ x, y ], '10', strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], 10, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], true, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], false, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], null, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], undefined, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], [ '1' ], strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], {}, strides, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], ( x: number ): number => x, strides, offsets, identity, identity ); // $ExpectError

	unaryBy.ndarray( [ x, y ], '10', strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], 10, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], true, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], false, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], null, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], undefined, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], [ '1' ], strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], {}, strides, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], ( x: number ): number => x, strides, offsets, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( [ x, y ], shape, '10', offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, 5, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, true, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, false, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, null, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, undefined, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, [ '1' ], offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, {}, offsets, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, ( x: number ): number => x, offsets, identity, identity ); // $ExpectError

	unaryBy.ndarray( [ x, y ], shape, '10', offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, 5, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, true, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, false, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, null, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, undefined, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, [ '1' ], offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, {}, offsets, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, ( x: number ): number => x, offsets, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object containing numbers...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const strides = [ 1, 1 ];

	unaryBy.ndarray( [ x, y ], shape, strides, '10', identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, 5, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, true, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, false, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, null, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, undefined, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, [ '1' ], identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, {}, identity, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, ( x: number ): number => x, identity, identity ); // $ExpectError

	unaryBy.ndarray( [ x, y ], shape, strides, '10', identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, 5, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, true, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, false, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, null, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, undefined, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, [ '1' ], identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, {}, identity, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, ( x: number ): number => x, identity, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( [ x, y ], shape, strides, offsets, '10', identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, 5, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, true, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, false, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, null, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, undefined, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, [], identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, {}, identity ); // $ExpectError

	unaryBy.ndarray( [ x, y ], shape, strides, offsets, '10', identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, 5, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, true, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, false, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, null, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, undefined, identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, [], identity, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, {}, identity, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, '10' ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, 5 ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, true ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, false ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, null ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, undefined ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, [] ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, {} ); // $ExpectError

	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, '10', {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, 5, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, true, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, false, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, null, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, undefined, {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, [], {} ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, {}, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	const shape = [ 10 ];
	const strides = [ 1, 1 ];
	const offsets = [ 0, 0 ];

	unaryBy.ndarray(); // $ExpectError
	unaryBy.ndarray( [ x, y ] ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity ); // $ExpectError
	unaryBy.ndarray( [ x, y ], shape, strides, offsets, identity, identity, identity, 10 ); // $ExpectError
}
