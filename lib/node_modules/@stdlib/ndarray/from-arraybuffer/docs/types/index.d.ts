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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray, DataType, Mode, Order, Shape, Strides } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Specifies how to handle a linear index which exceeds array dimensions (default: 'throw').
	*/
	mode?: Mode;

	/**
	* Specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: [options.mode]).
	*/
	submode?: ArrayLike<Mode>;

	/**
	* Boolean indicating whether an array should be read-only (default: false).
	*/
	readonly?: boolean;
}

/**
* Creates an ndarray from an ArrayBuffer.
*
* @param dtype - data type
* @param buffer - data buffer
* @param shape - array shape
* @param strides - array strides
* @param byteOffset - byte offset (in units of bytes) specifying the location of the first indexed element in the data buffer
* @param order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param options - function options
* @param options.mode - specifies how to handle indices which exceed array dimensions (default: 'throw')
* @param options.submode - specifies how to handle subscripts which exceed array dimensions on a per dimension basis (default: [options.mode])
* @param options.readonly - specifies whether an array should be read-only (default: false)
* @throws data type must be compatible with the provided ArrayBuffer
* @throws `shape` argument must be an array-like object containing nonnegative integers
* @throws `strides` argument must be an array-like object containing integers
* @throws `strides` argument length must equal the number of dimensions (except for zero-dimensional arrays; in which case, the `strides` argument length must be equal to `1`)
* @throws for zero-dimensional ndarrays, the `strides` argument must contain a single element equal to `0`
* @throws `byteOffset` argument must be a nonnegative integer
* @throws `buffer` argument must be compatible with specified meta data
* @throws must provide valid options
* @throws too many dimensions
* @returns ndarray instance
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2ndarray( 'float64', buf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
* // returns <ndarray>
*
* var N = numel( v );
* // returns 4
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2ndarray( 'float32', buf, [ 4, 2 ], [ 2, 1 ], 0, 'row-major' );
* // returns <ndarray>
*
* var N = numel( v );
* // returns 8
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2ndarray( 'float64', buf, [ 2, 2 ], [ -2, -1 ], 0, 'row-major' );
* // returns <ndarray>
*
* var N = numel( v );
* // returns 4
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2ndarray( 'float64', buf, [ 2, 2 ], [ -1, -2 ], 0, 'column-major' );
* // returns <ndarray>
*
* var N = numel( v );
* // returns 4
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var v = arraybuffer2ndarray( 'float64', buf, [ 2, 2, 2 ], [ 2, -4, 1 ], 0, 'row-major' );
* // returns <ndarray>
*
* var N = numel( v );
* // returns 8
*
* @example
* var numel = require( '@stdlib/ndarray/numel' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var v = arraybuffer2ndarray( 'float64', buf, [ 1, 2 ], [ -2, -1 ], 8, 'row-major' );
* // returns <ndarray>
*
* var N = numel( v );
* // returns 2
*/
declare function arraybuffer2ndarray( dtype: DataType, buffer: ArrayBuffer, shape: Shape, strides: Strides, byteOffset: number, order: Order, options?: Options ): ndarray;


// EXPORTS //

export = arraybuffer2ndarray;
