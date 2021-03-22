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

import isBufferLengthCompatible = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isBufferLengthCompatible( 4, [ 2, 2 ], [ 2, 1 ], 0 ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not a number...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	isBufferLengthCompatible( true, shape, strides, offset ); // $ExpectError
	isBufferLengthCompatible( false, shape, strides, offset ); // $ExpectError
	isBufferLengthCompatible( null, shape, strides, offset ); // $ExpectError
	isBufferLengthCompatible( undefined, shape, strides, offset ); // $ExpectError
	isBufferLengthCompatible( '5', shape, strides, offset ); // $ExpectError
	isBufferLengthCompatible( [ '1', '2' ], shape, strides, offset ); // $ExpectError
	isBufferLengthCompatible( {}, shape, strides, offset ); // $ExpectError
	isBufferLengthCompatible( ( x: number ): number => x, shape, strides, offset ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const len = 4;
	const strides = [ 2, 1 ];
	const offset = 0;
	isBufferLengthCompatible( len, true, strides, offset ); // $ExpectError
	isBufferLengthCompatible( len, false, strides, offset ); // $ExpectError
	isBufferLengthCompatible( len, null, strides, offset ); // $ExpectError
	isBufferLengthCompatible( len, undefined, strides, offset ); // $ExpectError
	isBufferLengthCompatible( len, '5', strides, offset ); // $ExpectError
	isBufferLengthCompatible( len, [ '1', '2' ], strides, offset ); // $ExpectError
	isBufferLengthCompatible( len, {}, strides, offset ); // $ExpectError
	isBufferLengthCompatible( len, ( x: number ): number => x, strides, offset ); // $ExpectError
}

// The function does not compile if provided a third argument which is not an array-like object containing numbers...
{
	const len = 4;
	const shape = [ 2, 2 ];
	const offset = 0;
	isBufferLengthCompatible( len, shape, true, offset ); // $ExpectError
	isBufferLengthCompatible( len, shape, false, offset ); // $ExpectError
	isBufferLengthCompatible( len, shape, null, offset ); // $ExpectError
	isBufferLengthCompatible( len, shape, undefined, offset ); // $ExpectError
	isBufferLengthCompatible( len, shape, '5', offset ); // $ExpectError
	isBufferLengthCompatible( len, shape, [ '1', '2' ], offset ); // $ExpectError
	isBufferLengthCompatible( len, shape, {}, offset ); // $ExpectError
	isBufferLengthCompatible( len, shape, ( x: number ): number => x, offset ); // $ExpectError
}

// The function does not compile if provided a fourth argument which is not a number...
{
	const len = 4;
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	isBufferLengthCompatible( len, shape, strides, true ); // $ExpectError
	isBufferLengthCompatible( len, shape, strides, false ); // $ExpectError
	isBufferLengthCompatible( len, shape, strides, null ); // $ExpectError
	isBufferLengthCompatible( len, shape, strides, undefined ); // $ExpectError
	isBufferLengthCompatible( len, shape, strides, '5' ); // $ExpectError
	isBufferLengthCompatible( len, shape, strides, [ '1', '2' ] ); // $ExpectError
	isBufferLengthCompatible( len, shape, strides, {} ); // $ExpectError
	isBufferLengthCompatible( len, shape, strides, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	isBufferLengthCompatible(); // $ExpectError
	isBufferLengthCompatible( 4 ); // $ExpectError
	isBufferLengthCompatible( 4, [ 2, 2 ] ); // $ExpectError
	isBufferLengthCompatible( 4, [ 2, 2 ], [ 2, 1 ] ); // $ExpectError
}
