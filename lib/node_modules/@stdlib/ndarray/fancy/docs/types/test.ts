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

import FancyArray = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];

	let x = FancyArray( 'float64', [ 1, 2, 3, 4 ], shape, strides, 0, 'row-major' ); // $ExpectType ndarray
	x = new FancyArray( 'float64', [ 1, 2, 3, 4 ], shape, strides, 0, 'row-major' ); // $ExpectType ndarray

	const buffer = new Int32Array( [ 1, 2, 3 ] );
	const order = 'column-major';

	x = FancyArray( 'int32', buffer, shape, strides, 0, order ); // $ExpectType ndarray
	x = new FancyArray( 'int32', buffer, shape, strides, 0, order ); // $ExpectType ndarray

	x = FancyArray( 'int32', buffer, shape, strides, 0, order, { 'mode': 'clamp' } ); // $ExpectType ndarray
	x = new FancyArray( 'int32', buffer, shape, strides, 0, order, { 'mode': 'clamp' } ); // $ExpectType ndarray

	x = FancyArray( 'int32', buffer, shape, strides, 0, order, { 'submode': [ 'throw' ] } ); // $ExpectType ndarray
	x = new FancyArray( 'int32', buffer, shape, strides, 0, order, { 'submode': [ 'throw' ] } ); // $ExpectType ndarray

	if ( x.shape[ 0 ] !== x.shape[ 0 ] ) {
		throw new Error( 'unexpected error' );
	}
}

// The compiler throws an error if the function is provided a first argument which is not a recognized data type...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';

	FancyArray( 'abc', buffer, shape, strides, offset, order ); // $ExpectError
	FancyArray( 123, buffer, shape, strides, offset, order ); // $ExpectError
	FancyArray( true, buffer, shape, strides, offset, order ); // $ExpectError
	FancyArray( false, buffer, shape, strides, offset, order ); // $ExpectError
	FancyArray( null, buffer, shape, strides, offset, order ); // $ExpectError
	FancyArray( undefined, buffer, shape, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object or buffer...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	FancyArray( 'float64', 123, shape, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', true, shape, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', false, shape, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', null, shape, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', undefined, shape, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const buffer = [ 1, 2, 3, 4 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	FancyArray( 'float64', buffer, true, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', buffer, false, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', buffer, null, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', buffer, undefined, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', buffer, '5', strides, offset, order ); // $ExpectError
	FancyArray( 'float64', buffer, [ '1', '2' ], strides, offset, order ); // $ExpectError
	FancyArray( 'float64', buffer, {}, strides, offset, order ); // $ExpectError
	FancyArray( 'float64', buffer, ( x: number ): number => x, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object containing numbers...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const offset = 0;
	const order = 'row-major';
	FancyArray( 'float32', buffer, shape, true, offset, order ); // $ExpectError
	FancyArray( 'float32', buffer, shape, false, offset, order ); // $ExpectError
	FancyArray( 'float32', buffer, shape, null, offset, order ); // $ExpectError
	FancyArray( 'float32', buffer, shape, undefined, offset, order ); // $ExpectError
	FancyArray( 'float32', buffer, shape, '5', offset, order ); // $ExpectError
	FancyArray( 'float32', buffer, shape, [ '1', '2' ], offset, order ); // $ExpectError
	FancyArray( 'float32', buffer, shape, {}, offset, order ); // $ExpectError
	FancyArray( 'float32', buffer, shape, ( x: number ): number => x, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const order = 'row-major';
	FancyArray( 'int32', buffer, shape, strides, true, order ); // $ExpectError
	FancyArray( 'int32', buffer, shape, strides, false, order ); // $ExpectError
	FancyArray( 'int32', buffer, shape, strides, null, order ); // $ExpectError
	FancyArray( 'int32', buffer, shape, strides, undefined, order ); // $ExpectError
	FancyArray( 'int32', buffer, shape, strides, '5', order ); // $ExpectError
	FancyArray( 'int32', buffer, shape, strides, [ '1', '2' ], order ); // $ExpectError
	FancyArray( 'int32', buffer, shape, strides, {}, order ); // $ExpectError
	FancyArray( 'int32', buffer, shape, strides, ( x: number ): number => x, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a known array order...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	FancyArray( 'int8', buffer, shape, strides, offset, true ); // $ExpectError
	FancyArray( 'int8', buffer, shape, strides, offset, false ); // $ExpectError
	FancyArray( 'int8', buffer, shape, strides, offset, null ); // $ExpectError
	FancyArray( 'int8', buffer, shape, strides, offset, undefined ); // $ExpectError
	FancyArray( 'int8', buffer, shape, strides, offset, '5' ); // $ExpectError
	FancyArray( 'int8', buffer, shape, strides, offset, [ '1', '2' ] ); // $ExpectError
	FancyArray( 'int8', buffer, shape, strides, offset, {} ); // $ExpectError
	FancyArray( 'int8', buffer, shape, strides, offset, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a recognized mode...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'mode': 'abc' } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'mode': 123 } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'mode': true } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'mode': false } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'mode': null } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'mode': [] } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'mode': {} } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `submode` option which is not an FancyArray of strings...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'submode': 'abc' } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'submode': 123 } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'submode': true } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'submode': false } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'submode': null } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'submode': {} } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'readonly': 'abc' } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'readonly': 123 } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'readonly': [] } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'readonly': null } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'readonly': {} } ); // $ExpectError
	FancyArray( 'float64', buffer, shape, strides, offset, order, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided and invalid number of arguments...
{
	const buffer = [ 1, 2, 3, 4 ];
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	FancyArray(); // $ExpectError
	FancyArray( 'uint32' ); // $ExpectError
	FancyArray( 'int8', buffer ); // $ExpectError
	FancyArray( 'uint8c', buffer, shape ); // $ExpectError
	FancyArray( 'uint8', buffer, shape, strides ); // $ExpectError
	FancyArray( 'uint16', buffer, shape, strides, offset ); // $ExpectError
	FancyArray( 'uint16', buffer, shape, strides, offset, 'row-major', {}, {} ); // $ExpectError
}
