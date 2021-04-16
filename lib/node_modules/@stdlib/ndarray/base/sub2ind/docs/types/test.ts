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

import sub2ind = require( './index' );


// TESTS //

// The function returns a number...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 3, 1 ];
	const offset = 0;
	const mode = [ 'throw' ];
	sub2ind( shape, strides, offset, 1, 2, 2, mode ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 10, 1 ];
	const offset = 10;
	const mode = [ 'throw' ];
	sub2ind( true, strides, offset, 0, 0, mode ); // $ExpectError
	sub2ind( false, strides, offset, 0, 0, mode ); // $ExpectError
	sub2ind( null, strides, offset, 0, 0, mode ); // $ExpectError
	sub2ind( undefined, strides, offset, 0, 0, mode ); // $ExpectError
	sub2ind( '5', strides, offset, 0, 0, mode ); // $ExpectError
	sub2ind( [ '1', '2' ], strides, offset, 0, 0, mode ); // $ExpectError
	sub2ind( {}, strides, offset, 0, 0, mode ); // $ExpectError
	sub2ind( ( x: number ): number => x, strides, offset, 0, 0, mode ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 3, 3, 3 ];
	const offset = 10;
	const mode = [ 'throw' ];
	sub2ind( shape, true, offset, 0, 0, mode ); // $ExpectError
	sub2ind( shape, false, offset, 0, 0, mode ); // $ExpectError
	sub2ind( shape, null, offset, 0, 0, mode ); // $ExpectError
	sub2ind( shape, undefined, offset, 0, 0, mode ); // $ExpectError
	sub2ind( shape, '5', offset, 0, 0, mode ); // $ExpectError
	sub2ind( shape, [ '1', '2' ], offset, 0, 0, mode ); // $ExpectError
	sub2ind( shape, {}, offset, 0, 0, mode ); // $ExpectError
	sub2ind( shape, ( x: number ): number => x, offset, 0, 0, mode ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 10, 10 ];
	const strides = [ 10, 1 ];
	const mode = [ 'throw' ];
	sub2ind( shape, strides, true, 0, 0, mode ); // $ExpectError
	sub2ind( shape, strides, false, 0, 0, mode ); // $ExpectError
	sub2ind( shape, strides, null, 0, 0, mode ); // $ExpectError
	sub2ind( shape, strides, undefined, 0, 0, mode ); // $ExpectError
	sub2ind( shape, strides, '5', 0, 0, mode ); // $ExpectError
	sub2ind( shape, strides, [ '1', '2' ], 0, 0, mode ); // $ExpectError
	sub2ind( shape, strides, {}, 0, 0, mode ); // $ExpectError
	sub2ind( shape, strides, ( x: number ): number => x, 0, 0, mode ); // $ExpectError
}

// The function does not compile if provided further arguments which are not numbers followed by an array of strings...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 3, 1 ];
	const offset = 0;
	sub2ind( shape, strides, offset, true ); // $ExpectError
	sub2ind( shape, strides, offset, false ); // $ExpectError
	sub2ind( shape, strides, offset, null ); // $ExpectError
	sub2ind( shape, strides, offset, undefined ); // $ExpectError
	sub2ind( shape, strides, offset, 'abc' ); // $ExpectError
	sub2ind( shape, strides, offset, {} ); // $ExpectError
	sub2ind( shape, strides, offset, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	sub2ind(); // $ExpectError
	sub2ind( [ 10, 10 ] ); // $ExpectError
	sub2ind( [ 10, 10 ], [ 10, 1 ] ); // $ExpectError
}
