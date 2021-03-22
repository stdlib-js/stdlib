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

import maxViewBufferIndex = require( './index' );


// TESTS //

// The function returns a number...
{
	maxViewBufferIndex( [ 10, 10 ], [ 10, 1 ], 10 ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 10, 1 ];
	const offset = 10;
	maxViewBufferIndex( true, strides, offset ); // $ExpectError
	maxViewBufferIndex( false, strides, offset ); // $ExpectError
	maxViewBufferIndex( null, strides, offset ); // $ExpectError
	maxViewBufferIndex( undefined, strides, offset ); // $ExpectError
	maxViewBufferIndex( '5', strides, offset ); // $ExpectError
	maxViewBufferIndex( [ '1', '2' ], strides, offset ); // $ExpectError
	maxViewBufferIndex( {}, strides, offset ); // $ExpectError
	maxViewBufferIndex( ( x: number ): number => x, strides, offset ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 10, 10 ];
	const offset = 10;
	maxViewBufferIndex( shape, true, offset ); // $ExpectError
	maxViewBufferIndex( shape, false, offset ); // $ExpectError
	maxViewBufferIndex( shape, null, offset ); // $ExpectError
	maxViewBufferIndex( shape, undefined, offset ); // $ExpectError
	maxViewBufferIndex( shape, '5', offset ); // $ExpectError
	maxViewBufferIndex( shape, [ '1', '2' ], offset ); // $ExpectError
	maxViewBufferIndex( shape, {}, offset ); // $ExpectError
	maxViewBufferIndex( shape, ( x: number ): number => x, offset ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 10, 10 ];
	const strides = [ 10, 1 ];
	maxViewBufferIndex( shape, strides, true ); // $ExpectError
	maxViewBufferIndex( shape, strides, false ); // $ExpectError
	maxViewBufferIndex( shape, strides, null ); // $ExpectError
	maxViewBufferIndex( shape, strides, undefined ); // $ExpectError
	maxViewBufferIndex( shape, strides, '5' ); // $ExpectError
	maxViewBufferIndex( shape, strides, [ '1', '2' ] ); // $ExpectError
	maxViewBufferIndex( shape, strides, {} ); // $ExpectError
	maxViewBufferIndex( shape, strides, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	maxViewBufferIndex(); // $ExpectError
	maxViewBufferIndex( [ 10, 10 ] ); // $ExpectError
	maxViewBufferIndex( [ 10, 10 ], [ 10, 1 ] ); // $ExpectError
}
