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

import vind2bind = require( './index' );


// TESTS //

// The function returns a number...
{
	const shape = [ 3, 3 ];
	const strides = [ -3, 1 ];
	const offset = 6;
	const order = 'row-major';
	const mode = 'throw';
	vind2bind( shape, strides, offset, order, 1, mode ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ -3, 1 ];
	const offset = 6;
	const order = 'row-major';
	const mode = 'throw';
	vind2bind( true, strides, offset, order, 1, mode ); // $ExpectError
	vind2bind( false, strides, offset, order, 1, mode ); // $ExpectError
	vind2bind( null, strides, offset, order, 1, mode ); // $ExpectError
	vind2bind( undefined, strides, offset, order, 1, mode ); // $ExpectError
	vind2bind( '5', strides, offset, order, 1, mode ); // $ExpectError
	vind2bind( [ '1', '2' ], strides, offset, order, 1, mode ); // $ExpectError
	vind2bind( {}, strides, offset, order, 1, mode ); // $ExpectError
	vind2bind( ( x: number ): number => x, strides, offset, order, 1, mode ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 3, 3 ];
	const offset = 6;
	const order = 'row-major';
	const mode = 'throw';
	vind2bind( shape, true, offset, order, 1, mode ); // $ExpectError
	vind2bind( shape, false, offset, order, 1, mode ); // $ExpectError
	vind2bind( shape, null, offset, order, 1, mode ); // $ExpectError
	vind2bind( shape, undefined, offset, order, 1, mode ); // $ExpectError
	vind2bind( shape, '5', offset, order, 1, mode ); // $ExpectError
	vind2bind( shape, [ '1', '2' ], offset, order, 1, mode ); // $ExpectError
	vind2bind( shape, {}, offset, order, 1, mode ); // $ExpectError
	vind2bind( shape, ( x: number ): number => x, offset, order, 1, mode ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 3, 3 ];
	const strides = [ -3, 1 ];
	const order = 'row-major';
	const mode = 'throw';
	vind2bind( shape, strides, true, order, 1, mode ); // $ExpectError
	vind2bind( shape, strides, false, order, 1, mode ); // $ExpectError
	vind2bind( shape, strides, null, order, 1, mode ); // $ExpectError
	vind2bind( shape, strides, undefined, order, 1, mode ); // $ExpectError
	vind2bind( shape, strides, '5', order, 1, mode ); // $ExpectError
	vind2bind( shape, strides, [ '1', '2' ], order, 1, mode ); // $ExpectError
	vind2bind( shape, strides, {}, order, 1, mode ); // $ExpectError
	vind2bind( shape, strides, ( x: number ): number => x, order, 1, mode ); // $ExpectError
}

// The function does not compile if provided a fourth argument which is not a recognized array order...
{
	const shape = [ 3, 3 ];
	const strides = [ -3, 1 ];
	const offset = 6;
	const mode = 'throw';
	vind2bind( shape, strides, offset, 'abc', 1, mode ); // $ExpectError
	vind2bind( shape, strides, offset, true, 1, mode ); // $ExpectError
	vind2bind( shape, strides, offset, false, 1, mode ); // $ExpectError
	vind2bind( shape, strides, offset, null, 1, mode ); // $ExpectError
	vind2bind( shape, strides, offset, undefined, 1, mode ); // $ExpectError
	vind2bind( shape, strides, offset, 123, 1, mode ); // $ExpectError
	vind2bind( shape, strides, offset, [], 1, mode ); // $ExpectError
	vind2bind( shape, strides, offset, {}, 1, mode ); // $ExpectError
	vind2bind( shape, strides, offset, ( x: number ): number => x, 1, mode ); // $ExpectError
}

// The function does not compile if provided a fifth argument which is not a number...
{
	const shape = [ 3, 3 ];
	const strides = [ -3, 1 ];
	const offset = 6;
	const order = 'row-major';
	const mode = 'throw';
	vind2bind( shape, strides, offset, order, true, mode ); // $ExpectError
	vind2bind( shape, strides, offset, order, false, mode ); // $ExpectError
	vind2bind( shape, strides, offset, order, null, mode ); // $ExpectError
	vind2bind( shape, strides, offset, order, undefined, mode ); // $ExpectError
	vind2bind( shape, strides, offset, order, 'abc', mode ); // $ExpectError
	vind2bind( shape, strides, offset, order, [], mode ); // $ExpectError
	vind2bind( shape, strides, offset, order, {}, mode ); // $ExpectError
	vind2bind( shape, strides, offset, order, ( x: number ): number => x, mode ); // $ExpectError
}

// The function does not compile if provided a sixth argument which is not a recognized mode...
{
	const shape = [ 3, 3 ];
	const strides = [ -3, 1 ];
	const offset = 6;
	const order = 'row-major';
	vind2bind( shape, strides, offset, order, 1, 123 ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1, true ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1, false ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1, null ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1, undefined ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1, 'abc' ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1, [] ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1, {} ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	const shape = [ 3, 3 ];
	const strides = [ -3, 1 ];
	const offset = 6;
	const order = 'row-major';
	vind2bind(); // $ExpectError
	vind2bind( shape ); // $ExpectError
	vind2bind( shape, strides ); // $ExpectError
	vind2bind( shape, strides, offset ); // $ExpectError
	vind2bind( shape, strides, offset, order ); // $ExpectError
	vind2bind( shape, strides, offset, order, 1 ); // $ExpectError
}
