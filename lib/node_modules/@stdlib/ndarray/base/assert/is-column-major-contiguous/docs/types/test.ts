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

import isColumnMajorContiguous = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isColumnMajorContiguous( [ 10, 10 ], [ 10, 1 ], 10 ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 10, 1 ];
	const offset = 10;
	isColumnMajorContiguous( true, strides, offset ); // $ExpectError
	isColumnMajorContiguous( false, strides, offset ); // $ExpectError
	isColumnMajorContiguous( null, strides, offset ); // $ExpectError
	isColumnMajorContiguous( undefined, strides, offset ); // $ExpectError
	isColumnMajorContiguous( '5', strides, offset ); // $ExpectError
	isColumnMajorContiguous( [ '1', '2' ], strides, offset ); // $ExpectError
	isColumnMajorContiguous( {}, strides, offset ); // $ExpectError
	isColumnMajorContiguous( ( x: number ): number => x, strides, offset ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 10, 10 ];
	const offset = 10;
	isColumnMajorContiguous( shape, true, offset ); // $ExpectError
	isColumnMajorContiguous( shape, false, offset ); // $ExpectError
	isColumnMajorContiguous( shape, null, offset ); // $ExpectError
	isColumnMajorContiguous( shape, undefined, offset ); // $ExpectError
	isColumnMajorContiguous( shape, '5', offset ); // $ExpectError
	isColumnMajorContiguous( shape, [ '1', '2' ], offset ); // $ExpectError
	isColumnMajorContiguous( shape, {}, offset ); // $ExpectError
	isColumnMajorContiguous( shape, ( x: number ): number => x, offset ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 10, 10 ];
	const strides = [ 10, 1 ];
	isColumnMajorContiguous( shape, strides, true ); // $ExpectError
	isColumnMajorContiguous( shape, strides, false ); // $ExpectError
	isColumnMajorContiguous( shape, strides, null ); // $ExpectError
	isColumnMajorContiguous( shape, strides, undefined ); // $ExpectError
	isColumnMajorContiguous( shape, strides, '5' ); // $ExpectError
	isColumnMajorContiguous( shape, strides, [ '1', '2' ] ); // $ExpectError
	isColumnMajorContiguous( shape, strides, {} ); // $ExpectError
	isColumnMajorContiguous( shape, strides, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	isColumnMajorContiguous(); // $ExpectError
	isColumnMajorContiguous( [ 10, 10 ] ); // $ExpectError
	isColumnMajorContiguous( [ 10, 10 ], [ 10, 1 ] ); // $ExpectError
}
