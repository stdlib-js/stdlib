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

import bind2vind = require( './index' );


// TESTS //

// The function returns a number...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	const mode = 'throw';
	bind2vind( shape, strides, offset, order, idx, mode ); // $ExpectType number
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	const mode = 'throw';
	bind2vind( true, strides, offset, order, idx, mode ); // $ExpectError
	bind2vind( false, strides, offset, order, idx, mode ); // $ExpectError
	bind2vind( null, strides, offset, order, idx, mode ); // $ExpectError
	bind2vind( undefined, strides, offset, order, idx, mode ); // $ExpectError
	bind2vind( '5', strides, offset, order, idx, mode ); // $ExpectError
	bind2vind( [ '1', '2' ], strides, offset, order, idx, mode ); // $ExpectError
	bind2vind( {}, strides, offset, order, idx, mode ); // $ExpectError
	bind2vind( ( x: number ): number => x, strides, offset, order, idx, mode ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 3, 3, 3 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	const mode = 'throw';
	bind2vind( shape, true, offset, order, idx, mode ); // $ExpectError
	bind2vind( shape, false, offset, order, idx, mode ); // $ExpectError
	bind2vind( shape, null, offset, order, idx, mode ); // $ExpectError
	bind2vind( shape, undefined, offset, order, idx, mode ); // $ExpectError
	bind2vind( shape, '5', offset, order, idx, mode ); // $ExpectError
	bind2vind( shape, [ '1', '2' ], offset, order, idx, mode ); // $ExpectError
	bind2vind( shape, {}, offset, order, idx, mode ); // $ExpectError
	bind2vind( shape, ( x: number ): number => x, offset, order, idx, mode ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const order = 'row-major';
	const idx = 17;
	const mode = 'throw';
	bind2vind( shape, strides, true, order, idx, mode ); // $ExpectError
	bind2vind( shape, strides, false, order, idx, mode ); // $ExpectError
	bind2vind( shape, strides, null, order, idx, mode ); // $ExpectError
	bind2vind( shape, strides, undefined, order, idx, mode ); // $ExpectError
	bind2vind( shape, strides, '5', order, idx, mode ); // $ExpectError
	bind2vind( shape, strides, [ '1', '2' ], order, idx, mode ); // $ExpectError
	bind2vind( shape, strides, {}, order, idx, mode ); // $ExpectError
	bind2vind( shape, strides, ( x: number ): number => x, order, idx, mode ); // $ExpectError
}

// The function does not compile if provided a fourth argument which is not a known array order...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const idx = 17;
	const mode = 'throw';
	bind2vind( shape, strides, offset, true, idx, mode ); // $ExpectError
	bind2vind( shape, strides, offset, false, idx, mode ); // $ExpectError
	bind2vind( shape, strides, offset, null, idx, mode ); // $ExpectError
	bind2vind( shape, strides, offset, undefined, idx, mode ); // $ExpectError
	bind2vind( shape, strides, offset, '5', idx, mode ); // $ExpectError
	bind2vind( shape, strides, offset, [ '1', '2' ], idx, mode ); // $ExpectError
	bind2vind( shape, strides, offset, {}, idx, mode ); // $ExpectError
	bind2vind( shape, strides, offset, ( x: number ): number => x, idx, mode ); // $ExpectError
}

// The function does not compile if provided a fifth argument which is not a number...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const mode = 'throw';
	bind2vind( shape, strides, offset, order, true, mode ); // $ExpectError
	bind2vind( shape, strides, offset, order, false, mode ); // $ExpectError
	bind2vind( shape, strides, offset, order, null, mode ); // $ExpectError
	bind2vind( shape, strides, offset, order, undefined, mode ); // $ExpectError
	bind2vind( shape, strides, offset, order, '5', mode ); // $ExpectError
	bind2vind( shape, strides, offset, order, [ '1', '2' ], mode ); // $ExpectError
	bind2vind( shape, strides, offset, order, {}, mode ); // $ExpectError
	bind2vind( shape, strides, offset, order, ( x: number ): number => x, mode ); // $ExpectError
}

// The function does not compile if provided a sixth argument which is not a known mode...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	bind2vind( shape, strides, offset, order, idx, true ); // $ExpectError
	bind2vind( shape, strides, offset, order, idx, false ); // $ExpectError
	bind2vind( shape, strides, offset, order, idx, null ); // $ExpectError
	bind2vind( shape, strides, offset, order, idx, undefined ); // $ExpectError
	bind2vind( shape, strides, offset, order, idx, '5' ); // $ExpectError
	bind2vind( shape, strides, offset, order, idx, [ '1', '2' ] ); // $ExpectError
	bind2vind( shape, strides, offset, order, idx, {} ); // $ExpectError
	bind2vind( shape, strides, offset, order, idx, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	bind2vind(); // $ExpectError
	bind2vind( shape ); // $ExpectError
	bind2vind( shape, strides ); // $ExpectError
	bind2vind( shape, strides, offset ); // $ExpectError
	bind2vind( shape, strides, offset, order ); // $ExpectError
	bind2vind( shape, strides, offset, order, idx ); // $ExpectError
}
