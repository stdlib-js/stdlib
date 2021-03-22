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

import isContiguous = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isContiguous( [ 10, 10 ], [ 10, 1 ], 10 ); // $ExpectType boolean
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 10, 1 ];
	const offset = 10;
	isContiguous( true, strides, offset ); // $ExpectError
	isContiguous( false, strides, offset ); // $ExpectError
	isContiguous( null, strides, offset ); // $ExpectError
	isContiguous( undefined, strides, offset ); // $ExpectError
	isContiguous( '5', strides, offset ); // $ExpectError
	isContiguous( [ '1', '2' ], strides, offset ); // $ExpectError
	isContiguous( {}, strides, offset ); // $ExpectError
	isContiguous( ( x: number ): number => x, strides, offset ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 10, 10 ];
	const offset = 10;
	isContiguous( shape, true, offset ); // $ExpectError
	isContiguous( shape, false, offset ); // $ExpectError
	isContiguous( shape, null, offset ); // $ExpectError
	isContiguous( shape, undefined, offset ); // $ExpectError
	isContiguous( shape, '5', offset ); // $ExpectError
	isContiguous( shape, [ '1', '2' ], offset ); // $ExpectError
	isContiguous( shape, {}, offset ); // $ExpectError
	isContiguous( shape, ( x: number ): number => x, offset ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 10, 10 ];
	const strides = [ 10, 1 ];
	isContiguous( shape, strides, true ); // $ExpectError
	isContiguous( shape, strides, false ); // $ExpectError
	isContiguous( shape, strides, null ); // $ExpectError
	isContiguous( shape, strides, undefined ); // $ExpectError
	isContiguous( shape, strides, '5' ); // $ExpectError
	isContiguous( shape, strides, [ '1', '2' ] ); // $ExpectError
	isContiguous( shape, strides, {} ); // $ExpectError
	isContiguous( shape, strides, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	isContiguous(); // $ExpectError
	isContiguous( [ 10, 10 ] ); // $ExpectError
	isContiguous( [ 10, 10 ], [ 10, 1 ] ); // $ExpectError
}
