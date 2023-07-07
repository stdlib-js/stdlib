/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { AnyArray, Complex128Array, Complex64Array, DataType } from '@stdlib/types/array';

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'float64' );
* // returns <Float64Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'float64' ): Float64Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'float32' );
* // returns <Float32Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'float32' ): Float32Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'complex128' );
* // returns <Complex128Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'complex128' ): Complex128Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'complex64' );
* // returns <Complex64Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'complex64' ): Complex64Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'int32' );
* // returns <Int32Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'int32' ): Int32Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'int16' );
* // returns <Int16Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'int16' ): Int16Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'int8' );
* // returns <Int8Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'int8' ): Int8Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'uint32' );
* // returns <Uint32Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'uint32' ): Uint32Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'uint16' );
* // returns <Uint16Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'uint16' ): Uint16Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'uint8' );
* // returns <Uint8Array>
*/
declare function emptyLike( x: AnyArray, dtype: 'uint8' ): Uint8Array;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'uint8c' );
* // returns <Uint8ClampedArray>
*/
declare function emptyLike( x: AnyArray, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Creates a zero-filled array having a specified length.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'generic' );
* // returns [ 0.0, 0.0 ]
*/
declare function emptyLike( x: AnyArray, dtype: 'generic' ): Array<number>;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x );
* // returns <Float64Array>
*/
declare function emptyLike( x: Float64Array, dtype?: DataType ): Float64Array;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x );
* // returns <Float32Array>
*/
declare function emptyLike( x: Float32Array, dtype?: DataType ): Float32Array;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'complex128' );
* // returns <Complex128Array>
*
* var arr = emptyLike( x );
* // returns <Complex128Array>
*/
declare function emptyLike( x: Complex128Array, dtype?: DataType ): Complex128Array; // tslint:disable-line:max-line-length

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'complex64' );
* // returns <Complex64Array>
*
* var arr = emptyLike( x );
* // returns <Complex64Array>
*/
declare function emptyLike( x: Complex64Array, dtype?: DataType ): Complex64Array; // tslint:disable-line:max-line-length

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*
* var arr = emptyLike( x );
* // returns <Int32Array>
*/
declare function emptyLike( x: Int32Array, dtype?: DataType ): Int32Array;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int16' );
* // returns <Int16Array>[ 0, 0 ]
*
* var arr = emptyLike( x );
* // returns <Int16Array>
*/
declare function emptyLike( x: Int16Array, dtype?: DataType ): Int16Array;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int8' );
* // returns <Int8Array>[ 0, 0 ]
*
* var arr = emptyLike( x );
* // returns <Int8Array>
*/
declare function emptyLike( x: Int8Array, dtype?: DataType ): Int8Array;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint32' );
* // returns <Uint32Array>[ 0, 0 ]
*
* var arr = emptyLike( x );
* // returns <Uint32Array>
*/
declare function emptyLike( x: Uint32Array, dtype?: DataType ): Uint32Array;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint16' );
* // returns <Uint16Array>[ 0, 0 ]
*
* var arr = emptyLike( x );
* // returns <Uint16Array>
*/
declare function emptyLike( x: Uint16Array, dtype?: DataType ): Uint16Array;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint8' );
* // returns <Uint8Array>[ 0, 0 ]
*
* var arr = emptyLike( x );
* // returns <Uint8Array>
*/
declare function emptyLike( x: Uint8Array, dtype?: DataType ): Uint8Array;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
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
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint8c' );
* // returns <Uint8ClampedArray>[ 0, 0 ]
*
* var arr = emptyLike( x );
* // returns <Uint8ClampedArray>
*/
declare function emptyLike( x: Uint8ClampedArray, dtype?: DataType ): Uint8ClampedArray; // tslint:disable-line:max-line-length

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'generic' );
* // returns [ 0.0, 0.0 ]
*
* var arr = emptyLike( x );
* // returns [ 0.0, 0.0 ]
*/
declare function emptyLike( x: Array<any>, dtype?: DataType ): Array<number>;

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   If `dtype` is `'generic'`, the function always returns a zero-filled array.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `int32`: 32-bit two's complement signed integers
* -   `uint32`: 32-bit unsigned integers
* -   `int16`: 16-bit two's complement signed integers
* -   `uint16`: 16-bit unsigned integers
* -   `int8`: 8-bit two's complement signed integers
* -   `uint8`: 8-bit unsigned integers
* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
* -   `generic`: generic JavaScript values
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x );
* // returns <Float32Array>
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x );
* // returns <Float64Array>
*/
declare function emptyLike( x: AnyArray, dtype?: DataType ): AnyArray;


// EXPORTS //

export = emptyLike;
