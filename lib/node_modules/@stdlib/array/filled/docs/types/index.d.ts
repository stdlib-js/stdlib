/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/unified-signatures */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, DataTypeMap } from '@stdlib/types/array';
import { IterableIterator } from '@stdlib/types/iter';

/**
* Creates a filled array.
*
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var arr = filledarray();
* // returns <Float64Array>
*
* @example
* var arr = filledarray( 'float32' );
* // returns <Float32Array>
*/
declare function filledarray<T = any, U extends keyof DataTypeMap<T> = 'float64'>( dtype?: U ): DataTypeMap<any>[U];

/**
* Creates a filled array having a specified `length`.
*
* @param value - fill value
* @param length - array length
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var arr = filledarray( 1.0, 5 );
* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1.0, 5, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledarray<T, U extends keyof DataTypeMap<T> = 'float64'>( value: T, length: number, dtype?: U ): DataTypeMap<T>[U];

/**
* Creates a filled array from another `array`.
*
* @param value - fill value
* @param array - typed array or array-like object
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var arr = filledarray( 1.0, [ 5.0, -3.0, 2.0 ] );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*
* @example
* var arr = filledarray( 1.0, [ 5.0, -3.0, 2.0 ], 'float32' );
* // returns <Float32Array>[ 1.0, 1.0, 1.0 ]
*/
declare function filledarray<T, U extends keyof DataTypeMap<T> = 'float64'>( value: T, array: Collection, dtype?: U ): DataTypeMap<T>[U];

/**
* Creates a filled array from an iterable.
*
* @param value - fill value
* @param iterable - iterable
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var iterConstant = require( '@stdlib/iter/constant' );
*
* var it = iterConstant( 3.0, {
*     'iter': 3
* });
* var arr = filledarray( 1.0, it );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*
* @example
* var iterConstant = require( '@stdlib/iter/constant' );
*
* var it = iterConstant( 3.0, {
*     'iter': 3
* });
* var arr = filledarray( 1.0, it, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0, 1.0 ]
*/
declare function filledarray<T, U extends keyof DataTypeMap<T> = 'float64'>( value: T, iterable: IterableIterator, dtype?: U ): DataTypeMap<T>[U];

/**
* Returns a filled typed array view of an `ArrayBuffer`.
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param value - fill value
* @param buffer - `ArrayBuffer`
* @param byteOffset - byte offset
* @param length - view length
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf, 8, 2 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf, 8, 2, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/
declare function filledarray<T, U extends keyof DataTypeMap<T> = 'float64'>( value: T, buffer: ArrayBuffer, byteOffset: number, length: number, dtype?: U ): DataTypeMap<T>[U];

/**
* Returns a filled typed array view of an `ArrayBuffer`.
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param value - fill value
* @param buffer - `ArrayBuffer`
* @param byteOffset - byte offset
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf, 8 );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf, 8, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledarray<T, U extends keyof DataTypeMap<T> = 'float64'>( value: T, buffer: ArrayBuffer, byteOffset: number, dtype?: U ): DataTypeMap<T>[U];

/**
* Returns a filled typed array view of an `ArrayBuffer`.
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param value - fill value
* @param buffer - `ArrayBuffer`
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf );
* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarray( 1.0, buf, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledarray<T, U extends keyof DataTypeMap<T> = 'float64'>( value: T, buffer: ArrayBuffer, dtype?: U ): DataTypeMap<T>[U];


// EXPORTS //

export = filledarray;
