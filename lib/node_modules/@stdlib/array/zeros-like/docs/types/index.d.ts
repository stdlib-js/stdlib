/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import { Complex128Array, Complex64Array, AnyArray, DataType } from '@stdlib/types/array';

/**
* Creates a zero-filled array having the same length as a provided input array.
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
* var y = zerosLike( x, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'float64' ): Float64Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'float32' ): Float32Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'complex128' );
* // returns <Complex128Array>
*/
declare function zerosLike( x: AnyArray, dtype: 'complex128' ): Complex128Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'complex64' );
* // returns <Complex64Array>
*/
declare function zerosLike( x: AnyArray, dtype: 'complex64' ): Complex64Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'int32' ): Int32Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'int16' );
* // returns <Int16Array>[ 0, 0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'int16' ): Int16Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'int8' );
* // returns <Int8Array>[ 0, 0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'int8' ): Int8Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'uint32' );
* // returns <Uint32Array>[ 0, 0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'uint32' ): Uint32Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'uint16' );
* // returns <Uint16Array>[ 0, 0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'uint16' ): Uint16Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'uint8' );
* // returns <Uint8Array>[ 0, 0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'uint8' ): Uint8Array;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'uint8c' );
* // returns <Uint8ClampedArray>[ 0, 0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Creates a zero-filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'generic' );
* // returns [ 0.0, 0.0 ]
*/
declare function zerosLike( x: AnyArray, dtype: 'generic' ): Array<number>;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x );
* // returns <Float64Array>[ 0.0, 0.0 ]
*/
declare function zerosLike( x: Float64Array, dtype?: DataType ): Float64Array;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x );
* // returns <Float32Array>[ 0.0, 0.0 ]
*/
declare function zerosLike( x: Float32Array, dtype?: DataType ): Float32Array;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'complex128' );
* // returns <Complex128Array>
*
* var y = zerosLike( x );
* // returns <Complex128Array>
*/
declare function zerosLike( x: Complex128Array, dtype?: DataType ): Complex128Array; // tslint:disable-line:max-line-length

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'complex64' );
* // returns <Complex64Array>
*
* var y = zerosLike( x );
* // returns <Complex64Array>
*/
declare function zerosLike( x: Complex64Array, dtype?: DataType ): Complex64Array; // tslint:disable-line:max-line-length

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*
* var y = zerosLike( x );
* // returns <Int32Array>[ 0, 0 ]
*/
declare function zerosLike( x: Int32Array, dtype?: DataType ): Int32Array;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int16' );
* // returns <Int16Array>[ 0, 0 ]
*
* var y = zerosLike( x );
* // returns <Int16Array>[ 0, 0 ]
*/
declare function zerosLike( x: Int16Array, dtype?: DataType ): Int16Array;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int8' );
* // returns <Int8Array>[ 0, 0 ]
*
* var y = zerosLike( x );
* // returns <Int8Array>[ 0, 0 ]
*/
declare function zerosLike( x: Int8Array, dtype?: DataType ): Int8Array;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint32' );
* // returns <Uint32Array>[ 0, 0 ]
*
* var y = zerosLike( x );
* // returns <Uint32Array>[ 0, 0 ]
*/
declare function zerosLike( x: Uint32Array, dtype?: DataType ): Uint32Array;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint16' );
* // returns <Uint16Array>[ 0, 0 ]
*
* var y = zerosLike( x );
* // returns <Uint16Array>[ 0, 0 ]
*/
declare function zerosLike( x: Uint16Array, dtype?: DataType ): Uint16Array;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint8' );
* // returns <Uint8Array>[ 0, 0 ]
*
* var y = zerosLike( x );
* // returns <Uint8Array>[ 0, 0 ]
*/
declare function zerosLike( x: Uint8Array, dtype?: DataType ): Uint8Array;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint8c' );
* // returns <Uint8ClampedArray>[ 0, 0 ]
*
* var y = zerosLike( x );
* // returns <Uint8ClampedArray>[ 0, 0 ]
*/
declare function zerosLike( x: Uint8ClampedArray, dtype?: DataType ): Uint8ClampedArray; // tslint:disable-line:max-line-length

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'generic' );
* // returns [ 0, 0 ]
*
* var y = zerosLike( x );
* // returns [ 0, 0 ]
*/
declare function zerosLike( x: Array<any>, dtype?: DataType ): Array<number>;

/**
* Creates a zero-filled array having the same length and data type as a provided input array.
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
* @returns zero-filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zerosLike( x, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*/
declare function zerosLike( x: AnyArray, dtype?: DataType ): AnyArray;


// EXPORTS //

export = zerosLike;
