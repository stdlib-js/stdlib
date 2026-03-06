/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import minmaxViewBufferIndex = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	minmaxViewBufferIndex( [ 10, 10 ], [ 10, 1 ], 10 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 10, 1 ];
	const offset = 10;
	minmaxViewBufferIndex( true, strides, offset ); // $ExpectError
	minmaxViewBufferIndex( false, strides, offset ); // $ExpectError
	minmaxViewBufferIndex( null, strides, offset ); // $ExpectError
	minmaxViewBufferIndex( undefined, strides, offset ); // $ExpectError
	minmaxViewBufferIndex( '5', strides, offset ); // $ExpectError
	minmaxViewBufferIndex( [ '1', '2' ], strides, offset ); // $ExpectError
	minmaxViewBufferIndex( {}, strides, offset ); // $ExpectError
	minmaxViewBufferIndex( ( x: number ): number => x, strides, offset ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 10, 10 ];
	const offset = 10;
	minmaxViewBufferIndex( shape, true, offset ); // $ExpectError
	minmaxViewBufferIndex( shape, false, offset ); // $ExpectError
	minmaxViewBufferIndex( shape, null, offset ); // $ExpectError
	minmaxViewBufferIndex( shape, undefined, offset ); // $ExpectError
	minmaxViewBufferIndex( shape, '5', offset ); // $ExpectError
	minmaxViewBufferIndex( shape, [ '1', '2' ], offset ); // $ExpectError
	minmaxViewBufferIndex( shape, {}, offset ); // $ExpectError
	minmaxViewBufferIndex( shape, ( x: number ): number => x, offset ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const shape = [ 10, 10 ];
	const strides = [ 10, 1 ];
	minmaxViewBufferIndex( shape, strides, true ); // $ExpectError
	minmaxViewBufferIndex( shape, strides, false ); // $ExpectError
	minmaxViewBufferIndex( shape, strides, null ); // $ExpectError
	minmaxViewBufferIndex( shape, strides, undefined ); // $ExpectError
	minmaxViewBufferIndex( shape, strides, '5' ); // $ExpectError
	minmaxViewBufferIndex( shape, strides, [ '1', '2' ] ); // $ExpectError
	minmaxViewBufferIndex( shape, strides, {} ); // $ExpectError
	minmaxViewBufferIndex( shape, strides, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	minmaxViewBufferIndex(); // $ExpectError
	minmaxViewBufferIndex( [ 10, 10 ] ); // $ExpectError
	minmaxViewBufferIndex( [ 10, 10 ], [ 10, 1 ] ); // $ExpectError
}
