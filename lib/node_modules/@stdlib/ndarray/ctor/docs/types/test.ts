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

import ndarray = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];

	ndarray( 'float64', [ 1, 2, 3, 4 ], shape, strides, 0, 'row-major' ); // $ExpectType ndarray
	new ndarray( 'float64', [ 1, 2, 3, 4 ], shape, strides, 0, 'row-major' ); // $ExpectType ndarray

	const buffer = new Int32Array( [ 1, 2, 3 ] );
	const order = 'column-major';

	ndarray( 'int32', buffer, shape, strides, 0, order ); // $ExpectType ndarray
	new ndarray( 'int32', buffer, shape, strides, 0, order ); // $ExpectType ndarray

	ndarray( 'int32', buffer, shape, strides, 0, order, { 'mode': 'clamp' } ); // $ExpectType ndarray
	new ndarray( 'int32', buffer, shape, strides, 0, order, { 'mode': 'clamp' } ); // $ExpectType ndarray

	ndarray( 'int32', buffer, shape, strides, 0, order, { 'submode': [ 'throw' ] } ); // $ExpectType ndarray
	new ndarray( 'int32', buffer, shape, strides, 0, order, { 'submode': [ 'throw' ] } ); // $ExpectType ndarray
}

// The function does not compile if provided a first argument which is not a recognized data type...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';

	ndarray( 'abc', buffer, shape, strides, offset, order ); // $ExpectError
	ndarray( 123, buffer, shape, strides, offset, order ); // $ExpectError
	ndarray( true, buffer, shape, strides, offset, order ); // $ExpectError
	ndarray( false, buffer, shape, strides, offset, order ); // $ExpectError
	ndarray( null, buffer, shape, strides, offset, order ); // $ExpectError
	ndarray( undefined, buffer, shape, strides, offset, order ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an array-like object or buffer...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	ndarray( 'float64', 123, shape, strides, offset, order ); // $ExpectError
	ndarray( 'float64', true, shape, strides, offset, order ); // $ExpectError
	ndarray( 'float64', false, shape, strides, offset, order ); // $ExpectError
	ndarray( 'float64', null, shape, strides, offset, order ); // $ExpectError
	ndarray( 'float64', undefined, shape, strides, offset, order ); // $ExpectError
}

// The function does not compile if provided a third argument which is not an array-like object containing numbers...
{
	const buffer = [ 1, 2, 3, 4 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	ndarray( 'float64', buffer, true, strides, offset, order ); // $ExpectError
	ndarray( 'float64', buffer, false, strides, offset, order ); // $ExpectError
	ndarray( 'float64', buffer, null, strides, offset, order ); // $ExpectError
	ndarray( 'float64', buffer, undefined, strides, offset, order ); // $ExpectError
	ndarray( 'float64', buffer, '5', strides, offset, order ); // $ExpectError
	ndarray( 'float64', buffer, [ '1', '2' ], strides, offset, order ); // $ExpectError
	ndarray( 'float64', buffer, {}, strides, offset, order ); // $ExpectError
	ndarray( 'float64', buffer, ( x: number ): number => x, strides, offset, order ); // $ExpectError
}

// The function does not compile if provided a fourth argument which is not an array-like object containing numbers...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const offset = 0;
	const order = 'row-major';
	ndarray( 'float32', buffer, shape, true, offset, order ); // $ExpectError
	ndarray( 'float32', buffer, shape, false, offset, order ); // $ExpectError
	ndarray( 'float32', buffer, shape, null, offset, order ); // $ExpectError
	ndarray( 'float32', buffer, shape, undefined, offset, order ); // $ExpectError
	ndarray( 'float32', buffer, shape, '5', offset, order ); // $ExpectError
	ndarray( 'float32', buffer, shape, [ '1', '2' ], offset, order ); // $ExpectError
	ndarray( 'float32', buffer, shape, {}, offset, order ); // $ExpectError
	ndarray( 'float32', buffer, shape, ( x: number ): number => x, offset, order ); // $ExpectError
}

// The function does not compile if provided a fifth argument which is not a number...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const order = 'row-major';
	ndarray( 'int32', buffer, shape, strides, true, order ); // $ExpectError
	ndarray( 'int32', buffer, shape, strides, false, order ); // $ExpectError
	ndarray( 'int32', buffer, shape, strides, null, order ); // $ExpectError
	ndarray( 'int32', buffer, shape, strides, undefined, order ); // $ExpectError
	ndarray( 'int32', buffer, shape, strides, '5', order ); // $ExpectError
	ndarray( 'int32', buffer, shape, strides, [ '1', '2' ], order ); // $ExpectError
	ndarray( 'int32', buffer, shape, strides, {}, order ); // $ExpectError
	ndarray( 'int32', buffer, shape, strides, ( x: number ): number => x, order ); // $ExpectError
}

// The function does not compile if provided a sixth argument which is not a known array order...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	ndarray( 'int8', buffer, shape, strides, offset, true ); // $ExpectError
	ndarray( 'int8', buffer, shape, strides, offset, false ); // $ExpectError
	ndarray( 'int8', buffer, shape, strides, offset, null ); // $ExpectError
	ndarray( 'int8', buffer, shape, strides, offset, undefined ); // $ExpectError
	ndarray( 'int8', buffer, shape, strides, offset, '5' ); // $ExpectError
	ndarray( 'int8', buffer, shape, strides, offset, [ '1', '2' ] ); // $ExpectError
	ndarray( 'int8', buffer, shape, strides, offset, {} ); // $ExpectError
	ndarray( 'int8', buffer, shape, strides, offset, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a recognized mode...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': 'abc' } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': 123 } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': true } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': false } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': null } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': [] } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': {} } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `submode` option which is not an ndarray of strings...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': 'abc' } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': 123 } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': true } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': false } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': null } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': {} } ); // $ExpectError
	ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided and invalid number of arguments...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	ndarray(); // $ExpectError
	ndarray( 'uint32' ); // $ExpectError
	ndarray( 'int8', buffer ); // $ExpectError
	ndarray( 'uint8c', buffer, shape ); // $ExpectError
	ndarray( 'uint8', buffer, shape, strides ); // $ExpectError
	ndarray( 'uint16', buffer, shape, strides, offset ); // $ExpectError
	ndarray( 'uint16', buffer, shape, strides, offset, 'row-major', {}, {} ); // $ExpectError
}
