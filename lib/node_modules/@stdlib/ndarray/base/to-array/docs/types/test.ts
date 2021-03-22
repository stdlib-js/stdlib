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

import ndarray2array = require( './index' );


// TESTS //

// The function returns an array...
{
	ndarray2array( [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' ); // $ExpectType any[]
	ndarray2array( [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'column-major' ); // $ExpectType any[]
}

// The function does not compile if provided a first argument which is not an array-like object or buffer...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	ndarray2array( 123, shape, strides, offset, order ); // $ExpectError
	ndarray2array( true, shape, strides, offset, order ); // $ExpectError
	ndarray2array( false, shape, strides, offset, order ); // $ExpectError
	ndarray2array( null, shape, strides, offset, order ); // $ExpectError
	ndarray2array( undefined, shape, strides, offset, order ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object containing numbers...
{
	const buffer = [ 1, 2, 3, 4 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	ndarray2array( buffer, true, strides, offset, order ); // $ExpectError
	ndarray2array( buffer, false, strides, offset, order ); // $ExpectError
	ndarray2array( buffer, null, strides, offset, order ); // $ExpectError
	ndarray2array( buffer, undefined, strides, offset, order ); // $ExpectError
	ndarray2array( buffer, '5', strides, offset, order ); // $ExpectError
	ndarray2array( buffer, [ '1', '2' ], strides, offset, order ); // $ExpectError
	ndarray2array( buffer, {}, strides, offset, order ); // $ExpectError
	ndarray2array( buffer, ( x: number ): number => x, strides, offset, order ); // $ExpectError
}

// The function does not compile if provided a third argument which is not an array-like object containing numbers...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const offset = 0;
	const order = 'row-major';
	ndarray2array( buffer, shape, true, offset, order ); // $ExpectError
	ndarray2array( buffer, shape, false, offset, order ); // $ExpectError
	ndarray2array( buffer, shape, null, offset, order ); // $ExpectError
	ndarray2array( buffer, shape, undefined, offset, order ); // $ExpectError
	ndarray2array( buffer, shape, '5', offset, order ); // $ExpectError
	ndarray2array( buffer, shape, [ '1', '2' ], offset, order ); // $ExpectError
	ndarray2array( buffer, shape, {}, offset, order ); // $ExpectError
	ndarray2array( buffer, shape, ( x: number ): number => x, offset, order ); // $ExpectError
}

// The function does not compile if provided a fourth argument which is not a number...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const order = 'row-major';
	ndarray2array( buffer, shape, strides, true, order ); // $ExpectError
	ndarray2array( buffer, shape, strides, false, order ); // $ExpectError
	ndarray2array( buffer, shape, strides, null, order ); // $ExpectError
	ndarray2array( buffer, shape, strides, undefined, order ); // $ExpectError
	ndarray2array( buffer, shape, strides, '5', order ); // $ExpectError
	ndarray2array( buffer, shape, strides, [ '1', '2' ], order ); // $ExpectError
	ndarray2array( buffer, shape, strides, {}, order ); // $ExpectError
	ndarray2array( buffer, shape, strides, ( x: number ): number => x, order ); // $ExpectError
}

// The function does not compile if provided a fifth argument which is not a known array order...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	ndarray2array( buffer, shape, strides, offset, true ); // $ExpectError
	ndarray2array( buffer, shape, strides, offset, false ); // $ExpectError
	ndarray2array( buffer, shape, strides, offset, null ); // $ExpectError
	ndarray2array( buffer, shape, strides, offset, undefined ); // $ExpectError
	ndarray2array( buffer, shape, strides, offset, '5' ); // $ExpectError
	ndarray2array( buffer, shape, strides, offset, [ '1', '2' ] ); // $ExpectError
	ndarray2array( buffer, shape, strides, offset, {} ); // $ExpectError
	ndarray2array( buffer, shape, strides, offset, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	ndarray2array(); // $ExpectError
	ndarray2array( buffer ); // $ExpectError
	ndarray2array( buffer, shape ); // $ExpectError
	ndarray2array( buffer, shape, strides ); // $ExpectError
	ndarray2array( buffer, shape, strides, offset ); // $ExpectError
}
