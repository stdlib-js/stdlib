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

import minViewBufferIndex = require( './index' );


// TESTS //

// The function returns a number...
{
	minViewBufferIndex( [ 10, 10 ], [ 10, 1 ], 10 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 10, 1 ];
	const offset = 10;
	minViewBufferIndex( true, strides, offset ); // $ExpectError
	minViewBufferIndex( false, strides, offset ); // $ExpectError
	minViewBufferIndex( null, strides, offset ); // $ExpectError
	minViewBufferIndex( undefined, strides, offset ); // $ExpectError
	minViewBufferIndex( '5', strides, offset ); // $ExpectError
	minViewBufferIndex( [ '1', '2' ], strides, offset ); // $ExpectError
	minViewBufferIndex( {}, strides, offset ); // $ExpectError
	minViewBufferIndex( ( x: number ): number => x, strides, offset ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 10, 10 ];
	const offset = 10;
	minViewBufferIndex( shape, true, offset ); // $ExpectError
	minViewBufferIndex( shape, false, offset ); // $ExpectError
	minViewBufferIndex( shape, null, offset ); // $ExpectError
	minViewBufferIndex( shape, undefined, offset ); // $ExpectError
	minViewBufferIndex( shape, '5', offset ); // $ExpectError
	minViewBufferIndex( shape, [ '1', '2' ], offset ); // $ExpectError
	minViewBufferIndex( shape, {}, offset ); // $ExpectError
	minViewBufferIndex( shape, ( x: number ): number => x, offset ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 10, 10 ];
	const strides = [ 10, 1 ];
	minViewBufferIndex( shape, strides, true ); // $ExpectError
	minViewBufferIndex( shape, strides, false ); // $ExpectError
	minViewBufferIndex( shape, strides, null ); // $ExpectError
	minViewBufferIndex( shape, strides, undefined ); // $ExpectError
	minViewBufferIndex( shape, strides, '5' ); // $ExpectError
	minViewBufferIndex( shape, strides, [ '1', '2' ] ); // $ExpectError
	minViewBufferIndex( shape, strides, {} ); // $ExpectError
	minViewBufferIndex( shape, strides, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	minViewBufferIndex(); // $ExpectError
	minViewBufferIndex( [ 10, 10 ] ); // $ExpectError
	minViewBufferIndex( [ 10, 10 ], [ 10, 1 ] ); // $ExpectError
}
