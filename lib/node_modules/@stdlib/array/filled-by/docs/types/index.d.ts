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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { TypedArray } from '@stdlib/types/array';
import { Collection } from '@stdlib/types/object';
import { IterableIterator } from '@stdlib/types/iter';

/**
* Array or typed array.
*/
type ArrayOrTypedArray = Array<any> | TypedArray;

/**
* Nullary callback function.
*
* @returns fill value
*/
type Nullary = () => any;

/**
* Unary callback function.
*
* @param i - current array index
* @returns fill value
*/
type Unary = ( i: number ) => any;

/**
* Callback function.
*
* @param i - current array index
* @returns fill value
*/
type Callback = Nullary | Unary;

/**
* Creates a filled array according to a provided callback function.
*
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns filled array
*
* @example
* var randu = require( `@stdlib/random/base/randu` );
*
* var arr = filledarrayBy( randu );
* // returns <Float64Array>
*/
declare function filledarrayBy( clbk: Callback, thisArg?: any ): ArrayOrTypedArray; // tslint:disable-line:max-line-length

/**
* Creates a filled array according to a provided callback function and having a specified data type.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* @param dtype - data type
* @param clbk - callback function
* @param thisArg - callback function execution context
* @throws must provide a recognized data type
* @returns filled array
*
* @example
* var randu = require( `@stdlib/random/base/randu` );
*
* var arr = filledarrayBy( 'float32', randu );
* // returns <Float32Array>
*/
declare function filledarrayBy( dtype: string, clbk: Callback, thisArg?: any ): ArrayOrTypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Creates a filled array according to a provided callback function and having a specified `length`.
*
* @param length - array length
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var arr = filledarrayBy( 5, constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( length: number, clbk: Callback, thisArg?: any ): ArrayOrTypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Creates a filled array according to a provided callback function and having a specified `length`.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* @param length - array length
* @param dtype - data type
* @param clbk - callback function
* @param thisArg - callback function execution context
* @throws must provide a recognized data type
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var arr = filledarrayBy( 5, 'float64', constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( length: number, dtype: string, clbk: Callback, thisArg?: any ): ArrayOrTypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Creates a filled array from another `array` according to a provided callback function.
*
* @param array - typed array or array-like object
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var arr = filledarrayBy( [ 5.0, -3.0, 2.0 ], constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( array: Collection, clbk: Callback, thisArg?: any ): ArrayOrTypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Creates a filled array from another `array` according to a provided callback function.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* @param array - typed array or array-like object
* @param dtype - data type
* @param clbk - callback function
* @param thisArg - callback function execution context
* @throws must provide a recognized data type
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var arr = filledarrayBy( [ 5.0, -3.0, 2.0 ], 'float64', constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( array: Collection, dtype: string, clbk: Callback, thisArg?: any ): ArrayOrTypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Creates a filled array from an iterable according to a callback function.
*
* @param iterable - iterable
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
* var iterConstant = require( `@stdlib/iter/constant` );
*
* var it = iterConstant( 3.0, {
*     'iter': 3
* });
* var arr = filledarrayBy( it, constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( iterable: IterableIterator, callback: Callback, thisArg?: any ): ArrayOrTypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Creates a filled array from an iterable according to a callback function.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* @param iterable - iterable
* @param dtype - data type
* @param clbk - callback function
* @param thisArg - callback function execution context
* @throws must provide a recognized data type
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
* var iterConstant = require( `@stdlib/iter/constant` );
*
* var it = iterConstant( 3.0, {
*     'iter': 3
* });
* var arr = filledarrayBy( it, 'float64', constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( iterable: IterableIterator, dtype: string, callback: Callback, thisArg?: any ): ArrayOrTypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Returns a filled typed array view of an `ArrayBuffer` according to a provided callback function.
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param buffer - `ArrayBuffer`
* @param byteOffset - byte offset
* @param length - view length
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 2, constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0 ]
*/
declare function filledarrayBy( buffer: ArrayBuffer, byteOffset: number, length: number, clbk: Callback, thisArg?: any ): TypedArray; // tslint:disable-line:max-line-length

/**
* Returns a filled typed array view of an `ArrayBuffer` according to a provided callback function.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param buffer - `ArrayBuffer`
* @param byteOffset - byte offset
* @param length - view length
* @param dtype - data type
* @param clbk - callback function
* @param thisArg - callback function execution context
* @throws must provide a recognized data type
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 2, 'float64', constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0 ]
*/
declare function filledarrayBy( buffer: ArrayBuffer, byteOffset: number, length: number, dtype: string, clbk: Callback, thisArg?: any ): TypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Returns a filled typed array view of an `ArrayBuffer` according to a provided callback function.
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param buffer - `ArrayBuffer`
* @param byteOffset - byte offset
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( buffer: ArrayBuffer, byteOffset: number, clbk: Callback, thisArg?: any ): TypedArray; // tslint:disable-line:max-line-length

/**
* Returns a filled typed array view of an `ArrayBuffer` according to a provided callback function.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param buffer - `ArrayBuffer`
* @param byteOffset - byte offset
* @param dtype - data type
* @param clbk - callback function
* @param thisArg - callback function execution context
* @throws must provide a recognized data type
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 8, 'float64', constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( buffer: ArrayBuffer, byteOffset: number, dtype: string, clbk: Callback, thisArg?: any ): TypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Returns a filled typed array view of an `ArrayBuffer` according to a provided callback function.
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param buffer - `ArrayBuffer`
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( buffer: ArrayBuffer, clbk: Callback, thisArg?: any ): TypedArray; // tslint:disable-line:max-line-length unified-signatures

/**
* Returns a filled typed array view of an `ArrayBuffer` according to a provided callback function.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* ## Notes
*
* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
*
* @param buffer - `ArrayBuffer`
* @param dtype - data type
* @param clbk - callback function
* @param thisArg - callback function execution context
* @throws must provide a recognized data type
* @returns filled array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 32 );
* var arr = filledarrayBy( buf, 'float64', constantFunction( 1.0 ) );
* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledarrayBy( buffer: ArrayBuffer, dtype: string, clbk: Callback, thisArg?: any ): TypedArray; // tslint:disable-line:max-line-length unified-signatures


// EXPORTS //

export = filledarrayBy;
