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

import ind2sub = require( './index' );


// TESTS //

// The function returns an array...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	const mode = 'throw';
	ind2sub( shape, strides, offset, order, idx, mode ); // $ExpectType number[]
}

// The function does not compile if provided a first argument which is not an array-like object containing numbers...
{
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	const mode = 'throw';
	ind2sub( true, strides, offset, order, idx, mode ); // $ExpectError
	ind2sub( false, strides, offset, order, idx, mode ); // $ExpectError
	ind2sub( null, strides, offset, order, idx, mode ); // $ExpectError
	ind2sub( undefined, strides, offset, order, idx, mode ); // $ExpectError
	ind2sub( '5', strides, offset, order, idx, mode ); // $ExpectError
	ind2sub( [ '1', '2' ], strides, offset, order, idx, mode ); // $ExpectError
	ind2sub( {}, strides, offset, order, idx, mode ); // $ExpectError
	ind2sub( ( x: number ): number => x, strides, offset, order, idx, mode ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const shape = [ 3, 3, 3 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	const mode = 'throw';
	ind2sub( shape, true, offset, order, idx, mode ); // $ExpectError
	ind2sub( shape, false, offset, order, idx, mode ); // $ExpectError
	ind2sub( shape, null, offset, order, idx, mode ); // $ExpectError
	ind2sub( shape, undefined, offset, order, idx, mode ); // $ExpectError
	ind2sub( shape, '5', offset, order, idx, mode ); // $ExpectError
	ind2sub( shape, [ '1', '2' ], offset, order, idx, mode ); // $ExpectError
	ind2sub( shape, {}, offset, order, idx, mode ); // $ExpectError
	ind2sub( shape, ( x: number ): number => x, offset, order, idx, mode ); // $ExpectError
}

// The function does not compile if provided a third argument which is not a number...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const order = 'row-major';
	const idx = 17;
	const mode = 'throw';
	ind2sub( shape, strides, true, order, idx, mode ); // $ExpectError
	ind2sub( shape, strides, false, order, idx, mode ); // $ExpectError
	ind2sub( shape, strides, null, order, idx, mode ); // $ExpectError
	ind2sub( shape, strides, undefined, order, idx, mode ); // $ExpectError
	ind2sub( shape, strides, '5', order, idx, mode ); // $ExpectError
	ind2sub( shape, strides, [ '1', '2' ], order, idx, mode ); // $ExpectError
	ind2sub( shape, strides, {}, order, idx, mode ); // $ExpectError
	ind2sub( shape, strides, ( x: number ): number => x, order, idx, mode ); // $ExpectError
}

// The function does not compile if provided a fourth argument which is not a known array order...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const idx = 17;
	const mode = 'throw';
	ind2sub( shape, strides, offset, true, idx, mode ); // $ExpectError
	ind2sub( shape, strides, offset, false, idx, mode ); // $ExpectError
	ind2sub( shape, strides, offset, null, idx, mode ); // $ExpectError
	ind2sub( shape, strides, offset, undefined, idx, mode ); // $ExpectError
	ind2sub( shape, strides, offset, '5', idx, mode ); // $ExpectError
	ind2sub( shape, strides, offset, [ '1', '2' ], idx, mode ); // $ExpectError
	ind2sub( shape, strides, offset, {}, idx, mode ); // $ExpectError
	ind2sub( shape, strides, offset, ( x: number ): number => x, idx, mode ); // $ExpectError
}

// The function does not compile if provided a fifth argument which is not a number...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const mode = 'throw';
	ind2sub( shape, strides, offset, order, true, mode ); // $ExpectError
	ind2sub( shape, strides, offset, order, false, mode ); // $ExpectError
	ind2sub( shape, strides, offset, order, null, mode ); // $ExpectError
	ind2sub( shape, strides, offset, order, undefined, mode ); // $ExpectError
	ind2sub( shape, strides, offset, order, '5', mode ); // $ExpectError
	ind2sub( shape, strides, offset, order, [ '1', '2' ], mode ); // $ExpectError
	ind2sub( shape, strides, offset, order, {}, mode ); // $ExpectError
	ind2sub( shape, strides, offset, order, ( x: number ): number => x, mode ); // $ExpectError
}

// The function does not compile if provided a sixth argument which is not a known mode...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	ind2sub( shape, strides, offset, order, idx, true ); // $ExpectError
	ind2sub( shape, strides, offset, order, idx, false ); // $ExpectError
	ind2sub( shape, strides, offset, order, idx, null ); // $ExpectError
	ind2sub( shape, strides, offset, order, idx, undefined ); // $ExpectError
	ind2sub( shape, strides, offset, order, idx, '5' ); // $ExpectError
	ind2sub( shape, strides, offset, order, idx, [ '1', '2' ] ); // $ExpectError
	ind2sub( shape, strides, offset, order, idx, {} ); // $ExpectError
	ind2sub( shape, strides, offset, order, idx, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	const shape = [ 3, 3, 3 ];
	const strides = [ 9, 6, 1 ];
	const offset = 0;
	const order = 'row-major';
	const idx = 17;
	ind2sub(); // $ExpectError
	ind2sub( shape ); // $ExpectError
	ind2sub( shape, strides ); // $ExpectError
	ind2sub( shape, strides, offset ); // $ExpectError
	ind2sub( shape, strides, offset, order ); // $ExpectError
	ind2sub( shape, strides, offset, order, idx ); // $ExpectError
}
