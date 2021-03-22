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

import isRowMajorContiguous = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isRowMajorContiguous( [ 10, 10 ], [ 10, 1 ], 10 ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 10, 1 ];
	const offset = 10;
	isRowMajorContiguous( true, strides, offset ); // $ExpectError
	isRowMajorContiguous( false, strides, offset ); // $ExpectError
	isRowMajorContiguous( null, strides, offset ); // $ExpectError
	isRowMajorContiguous( undefined, strides, offset ); // $ExpectError
	isRowMajorContiguous( '5', strides, offset ); // $ExpectError
	isRowMajorContiguous( [ '1', '2' ], strides, offset ); // $ExpectError
	isRowMajorContiguous( {}, strides, offset ); // $ExpectError
	isRowMajorContiguous( ( x: number ): number => x, strides, offset ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 10, 10 ];
	const offset = 10;
	isRowMajorContiguous( shape, true, offset ); // $ExpectError
	isRowMajorContiguous( shape, false, offset ); // $ExpectError
	isRowMajorContiguous( shape, null, offset ); // $ExpectError
	isRowMajorContiguous( shape, undefined, offset ); // $ExpectError
	isRowMajorContiguous( shape, '5', offset ); // $ExpectError
	isRowMajorContiguous( shape, [ '1', '2' ], offset ); // $ExpectError
	isRowMajorContiguous( shape, {}, offset ); // $ExpectError
	isRowMajorContiguous( shape, ( x: number ): number => x, offset ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 10, 10 ];
	const strides = [ 10, 1 ];
	isRowMajorContiguous( shape, strides, true ); // $ExpectError
	isRowMajorContiguous( shape, strides, false ); // $ExpectError
	isRowMajorContiguous( shape, strides, null ); // $ExpectError
	isRowMajorContiguous( shape, strides, undefined ); // $ExpectError
	isRowMajorContiguous( shape, strides, '5' ); // $ExpectError
	isRowMajorContiguous( shape, strides, [ '1', '2' ] ); // $ExpectError
	isRowMajorContiguous( shape, strides, {} ); // $ExpectError
	isRowMajorContiguous( shape, strides, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	isRowMajorContiguous(); // $ExpectError
	isRowMajorContiguous( [ 10, 10 ] ); // $ExpectError
	isRowMajorContiguous( [ 10, 10 ], [ 10, 1 ] ); // $ExpectError
}
