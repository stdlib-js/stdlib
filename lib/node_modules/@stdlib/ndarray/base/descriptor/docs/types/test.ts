/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import descriptor = require( './index' );


// TESTS //

// The function returns an ndarray descriptor...
{
	descriptor( 'float64', [ 1, 2, 3, 4 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' ); // $ExpectType Descriptor
}

// The compiler throws an error if the function is provided a first argument which is not a recognized data type...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';

	descriptor( 'abc', buffer, shape, strides, offset, order ); // $ExpectError
	descriptor( 123, buffer, shape, strides, offset, order ); // $ExpectError
	descriptor( true, buffer, shape, strides, offset, order ); // $ExpectError
	descriptor( false, buffer, shape, strides, offset, order ); // $ExpectError
	descriptor( null, buffer, shape, strides, offset, order ); // $ExpectError
	descriptor( void 0, buffer, shape, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object or buffer...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';

	descriptor( 'float64', 123, shape, strides, offset, order ); // $ExpectError
	descriptor( 'float64', true, shape, strides, offset, order ); // $ExpectError
	descriptor( 'float64', false, shape, strides, offset, order ); // $ExpectError
	descriptor( 'float64', null, shape, strides, offset, order ); // $ExpectError
	descriptor( 'float64', void 0, shape, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const buffer = [ 1, 2, 3, 4 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';

	descriptor( 'float64', buffer, true, strides, offset, order ); // $ExpectError
	descriptor( 'float64', buffer, false, strides, offset, order ); // $ExpectError
	descriptor( 'float64', buffer, null, strides, offset, order ); // $ExpectError
	descriptor( 'float64', buffer, void 0, strides, offset, order ); // $ExpectError
	descriptor( 'float64', buffer, '5', strides, offset, order ); // $ExpectError
	descriptor( 'float64', buffer, [ '1', '2' ], strides, offset, order ); // $ExpectError
	descriptor( 'float64', buffer, {}, strides, offset, order ); // $ExpectError
	descriptor( 'float64', buffer, ( x: number ): number => x, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object containing numbers...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const offset = 0;
	const order = 'row-major';

	descriptor( 'float32', buffer, shape, true, offset, order ); // $ExpectError
	descriptor( 'float32', buffer, shape, false, offset, order ); // $ExpectError
	descriptor( 'float32', buffer, shape, null, offset, order ); // $ExpectError
	descriptor( 'float32', buffer, shape, void 0, offset, order ); // $ExpectError
	descriptor( 'float32', buffer, shape, '5', offset, order ); // $ExpectError
	descriptor( 'float32', buffer, shape, [ '1', '2' ], offset, order ); // $ExpectError
	descriptor( 'float32', buffer, shape, {}, offset, order ); // $ExpectError
	descriptor( 'float32', buffer, shape, ( x: number ): number => x, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const order = 'row-major';

	descriptor( 'int32', buffer, shape, strides, true, order ); // $ExpectError
	descriptor( 'int32', buffer, shape, strides, false, order ); // $ExpectError
	descriptor( 'int32', buffer, shape, strides, null, order ); // $ExpectError
	descriptor( 'int32', buffer, shape, strides, void 0, order ); // $ExpectError
	descriptor( 'int32', buffer, shape, strides, '5', order ); // $ExpectError
	descriptor( 'int32', buffer, shape, strides, [ '1', '2' ], order ); // $ExpectError
	descriptor( 'int32', buffer, shape, strides, {}, order ); // $ExpectError
	descriptor( 'int32', buffer, shape, strides, ( x: number ): number => x, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a known array order...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;

	descriptor( 'int8', buffer, shape, strides, offset, true ); // $ExpectError
	descriptor( 'int8', buffer, shape, strides, offset, false ); // $ExpectError
	descriptor( 'int8', buffer, shape, strides, offset, null ); // $ExpectError
	descriptor( 'int8', buffer, shape, strides, offset, void 0 ); // $ExpectError
	descriptor( 'int8', buffer, shape, strides, offset, '5' ); // $ExpectError
	descriptor( 'int8', buffer, shape, strides, offset, [ '1', '2' ] ); // $ExpectError
	descriptor( 'int8', buffer, shape, strides, offset, {} ); // $ExpectError
	descriptor( 'int8', buffer, shape, strides, offset, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;

	descriptor(); // $ExpectError
	descriptor( 'uint32' ); // $ExpectError
	descriptor( 'int8', buffer ); // $ExpectError
	descriptor( 'uint8c', buffer, shape ); // $ExpectError
	descriptor( 'uint8', buffer, shape, strides ); // $ExpectError
	descriptor( 'uint16', buffer, shape, strides, offset ); // $ExpectError
	descriptor( 'uint16', buffer, shape, strides, offset, 'row-major', {} ); // $ExpectError
}
