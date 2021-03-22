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

import isSingleSegmentCompatible = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isSingleSegmentCompatible( [ 10, 10 ], [ 10, 1 ], 10 ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 10, 1 ];
	const offset = 10;
	isSingleSegmentCompatible( true, strides, offset ); // $ExpectError
	isSingleSegmentCompatible( false, strides, offset ); // $ExpectError
	isSingleSegmentCompatible( null, strides, offset ); // $ExpectError
	isSingleSegmentCompatible( undefined, strides, offset ); // $ExpectError
	isSingleSegmentCompatible( '5', strides, offset ); // $ExpectError
	isSingleSegmentCompatible( [ '1', '2' ], strides, offset ); // $ExpectError
	isSingleSegmentCompatible( {}, strides, offset ); // $ExpectError
	isSingleSegmentCompatible( ( x: number ): number => x, strides, offset ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 10, 10 ];
	const offset = 10;
	isSingleSegmentCompatible( shape, true, offset ); // $ExpectError
	isSingleSegmentCompatible( shape, false, offset ); // $ExpectError
	isSingleSegmentCompatible( shape, null, offset ); // $ExpectError
	isSingleSegmentCompatible( shape, undefined, offset ); // $ExpectError
	isSingleSegmentCompatible( shape, '5', offset ); // $ExpectError
	isSingleSegmentCompatible( shape, [ '1', '2' ], offset ); // $ExpectError
	isSingleSegmentCompatible( shape, {}, offset ); // $ExpectError
	isSingleSegmentCompatible( shape, ( x: number ): number => x, offset ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 10, 10 ];
	const strides = [ 10, 1 ];
	isSingleSegmentCompatible( shape, strides, true ); // $ExpectError
	isSingleSegmentCompatible( shape, strides, false ); // $ExpectError
	isSingleSegmentCompatible( shape, strides, null ); // $ExpectError
	isSingleSegmentCompatible( shape, strides, undefined ); // $ExpectError
	isSingleSegmentCompatible( shape, strides, '5' ); // $ExpectError
	isSingleSegmentCompatible( shape, strides, [ '1', '2' ] ); // $ExpectError
	isSingleSegmentCompatible( shape, strides, {} ); // $ExpectError
	isSingleSegmentCompatible( shape, strides, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	isSingleSegmentCompatible(); // $ExpectError
	isSingleSegmentCompatible( [ 10, 10 ] ); // $ExpectError
	isSingleSegmentCompatible( [ 10, 10 ], [ 10, 1 ] ); // $ExpectError
}
