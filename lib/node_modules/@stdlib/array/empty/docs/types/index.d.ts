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

import { Complex128Array, Complex64Array, DataType } from '@stdlib/types/array';

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'float64' );
* // returns <Float64Array>
*/
declare function empty( length: number, dtype: 'float64' ): Float64Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'float32' );
* // returns <Float32Array>
*/
declare function empty( length: number, dtype: 'float32' ): Float32Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'complex128' );
* // returns <Complex128Array>
*/
declare function empty( length: number, dtype: 'complex128' ): Complex128Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'complex64' );
* // returns <Complex64Array>
*/
declare function empty( length: number, dtype: 'complex64' ): Complex64Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'int32' );
* // returns <Int32Array>
*/
declare function empty( length: number, dtype: 'int32' ): Int32Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'int16' );
* // returns <Int16Array>
*/
declare function empty( length: number, dtype: 'int16' ): Int16Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'int8' );
* // returns <Int8Array>
*/
declare function empty( length: number, dtype: 'int8' ): Int8Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'uint32' );
* // returns <Uint32Array>
*/
declare function empty( length: number, dtype: 'uint32' ): Uint32Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'uint16' );
* // returns <Uint16Array>
*/
declare function empty( length: number, dtype: 'uint16' ): Uint16Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'uint8' );
* // returns <Uint8Array>
*/
declare function empty( length: number, dtype: 'uint8' ): Uint8Array;

/**
* Creates an uninitialized array having a specified length.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param length - array length
* @param dtype - data type
* @returns empty array
*
* @example
* var arr = empty( 2, 'uint8c' );
* // returns <Uint8ClampedArray>
*/
declare function empty( length: number, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Creates a zero-filled array having a specified length.
*
* @param length - array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var arr = empty( 2, 'generic' );
* // returns
*/
declare function empty( length: number, dtype: 'generic' ): Array<number>;

/**
* Creates an uninitialized array having a specified length.
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
* @param length - array length
* @param dtype - data type (default: 'float64')
* @returns empty array
*
* @example
* var arr = empty( 2 );
* // returns <Float64Array>
*
* @example
* var arr = empty( 2, 'float32' );
* // returns <Float32Array>
*/
declare function empty( length: number, dtype?: DataType ): Float64Array;


// EXPORTS //

export = empty;
