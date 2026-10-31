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

import arraybuffer2ndarray = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];

	arraybuffer2ndarray( 'float64', new ArrayBuffer( 32 ), shape, strides, 0, 'row-major' ); // $ExpectType ndarray

	arraybuffer2ndarray( 'int32', new ArrayBuffer( 16 ), shape, strides, 0, 'row-major', { 'mode': 'clamp' } ); // $ExpectType ndarray

	arraybuffer2ndarray( 'int32', new ArrayBuffer( 16 ), shape, strides, 0, 'row-major', { 'submode': [ 'throw' ] } ); // $ExpectType ndarray
}

// The compiler throws an error if the function is provided a first argument which is not a recognized data type...
{
	const buffer = new ArrayBuffer( 32 );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';

	arraybuffer2ndarray( 'abc', buffer, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 123, buffer, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( true, buffer, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( false, buffer, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( null, buffer, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( undefined, buffer, shape, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ArrayBuffer...
{
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	arraybuffer2ndarray( 'float64', 123, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', true, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', false, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', null, shape, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', undefined, shape, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	const buffer = new ArrayBuffer( 32 );
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	arraybuffer2ndarray( 'float64', buffer, true, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, false, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, null, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, undefined, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, '5', strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, [ '1', '2' ], strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, {}, strides, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, ( x: number ): number => x, strides, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object containing numbers...
{
	const buffer = new ArrayBuffer( 32 );
	const shape = [ 2, 2 ];
	const offset = 0;
	const order = 'row-major';
	arraybuffer2ndarray( 'float32', buffer, shape, true, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float32', buffer, shape, false, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float32', buffer, shape, null, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float32', buffer, shape, undefined, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float32', buffer, shape, '5', offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float32', buffer, shape, [ '1', '2' ], offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float32', buffer, shape, {}, offset, order ); // $ExpectError
	arraybuffer2ndarray( 'float32', buffer, shape, ( x: number ): number => x, offset, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const buffer = new ArrayBuffer( 32 );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const order = 'row-major';
	arraybuffer2ndarray( 'int32', buffer, shape, strides, true, order ); // $ExpectError
	arraybuffer2ndarray( 'int32', buffer, shape, strides, false, order ); // $ExpectError
	arraybuffer2ndarray( 'int32', buffer, shape, strides, null, order ); // $ExpectError
	arraybuffer2ndarray( 'int32', buffer, shape, strides, undefined, order ); // $ExpectError
	arraybuffer2ndarray( 'int32', buffer, shape, strides, '5', order ); // $ExpectError
	arraybuffer2ndarray( 'int32', buffer, shape, strides, [ '1', '2' ], order ); // $ExpectError
	arraybuffer2ndarray( 'int32', buffer, shape, strides, {}, order ); // $ExpectError
	arraybuffer2ndarray( 'int32', buffer, shape, strides, ( x: number ): number => x, order ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a known array order...
{
	const buffer = new ArrayBuffer( 32 );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	arraybuffer2ndarray( 'int8', buffer, shape, strides, offset, true ); // $ExpectError
	arraybuffer2ndarray( 'int8', buffer, shape, strides, offset, false ); // $ExpectError
	arraybuffer2ndarray( 'int8', buffer, shape, strides, offset, null ); // $ExpectError
	arraybuffer2ndarray( 'int8', buffer, shape, strides, offset, undefined ); // $ExpectError
	arraybuffer2ndarray( 'int8', buffer, shape, strides, offset, '5' ); // $ExpectError
	arraybuffer2ndarray( 'int8', buffer, shape, strides, offset, [ '1', '2' ] ); // $ExpectError
	arraybuffer2ndarray( 'int8', buffer, shape, strides, offset, {} ); // $ExpectError
	arraybuffer2ndarray( 'int8', buffer, shape, strides, offset, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a recognized mode...
{
	const buffer = new ArrayBuffer( 32 );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': 'abc' } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': 123 } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': true } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': false } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': null } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': [] } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': {} } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `submode` option which is not an array of strings...
{
	const buffer = new ArrayBuffer( 32 );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': 'abc' } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': 123 } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': true } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': false } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': null } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': {} } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	const buffer = new ArrayBuffer( 32 );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	const order = 'row-major';
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'readonly': 'abc' } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'readonly': 123 } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'readonly': [] } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'readonly': null } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'readonly': {} } ); // $ExpectError
	arraybuffer2ndarray( 'float64', buffer, shape, strides, offset, order, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided and invalid number of arguments...
{
	const buffer = new ArrayBuffer( 32 );
	const shape = [ 2, 2 ];
	const strides = [ 2, 1 ];
	const offset = 0;
	arraybuffer2ndarray(); // $ExpectError
	arraybuffer2ndarray( 'uint32' ); // $ExpectError
	arraybuffer2ndarray( 'int8', buffer ); // $ExpectError
	arraybuffer2ndarray( 'uint8c', buffer, shape ); // $ExpectError
	arraybuffer2ndarray( 'uint8', buffer, shape, strides ); // $ExpectError
	arraybuffer2ndarray( 'uint16', buffer, shape, strides, offset ); // $ExpectError
	arraybuffer2ndarray( 'uint16', buffer, shape, strides, offset, 'row-major', {}, {} ); // $ExpectError
}
