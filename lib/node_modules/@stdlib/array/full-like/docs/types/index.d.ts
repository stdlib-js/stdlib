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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex128Array, Complex64Array, AnyArray, DataType } from '@stdlib/types/array';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0, 'float64' );
* // returns <Float64Array>[ 1.0, 1.0 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'float64' ): Float64Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'float32' ): Float32Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* ## Notes
*
* -   If provided a number, the function returns a complex number array where each element has a real component whose value equals the provided fill value and where each element has an imaginary component equal to `0`.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0, 'complex128' );
* // returns <Complex128Array>
*/
declare function fullLike( x: AnyArray, value: number | ComplexLike, dtype: 'complex128' ): Complex128Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* ## Notes
*
* -   If provided a number, the function returns a complex number array where each element has a real component whose value equals the provided fill value and where each element has an imaginary component equal to `0`.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0, 'complex64' );
* // returns <Complex64Array>
*/
declare function fullLike( x: AnyArray, value: number | ComplexLike, dtype: 'complex64' ): Complex64Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1, 'int32' );
* // returns <Int32Array>[ 1, 1 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'int32' ): Int32Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1, 'int16' );
* // returns <Int16Array>[ 1, 1 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'int16' ): Int16Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1, 'int8' );
* // returns <Int8Array>[ 1, 1 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'int8' ): Int8Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0, 0 ]
*
* var y = fullLike( x, 1, 'uint32' );
* // returns <Uint32Array>[ 1, 1 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'uint32' ): Uint32Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1, 'uint16' );
* // returns <Uint16Array>[ 1, 1 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'uint16' ): Uint16Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1, 'uint8' );
* // returns <Uint8Array>[ 1, 1 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'uint8' ): Uint8Array;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1, 'uint8c' );
* // returns <Uint8ClampedArray>[ 1, 1 ]
*/
declare function fullLike( x: AnyArray, value: number, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Creates a filled array having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0, 'generic' );
* // returns [ 1.0, 1.0 ]
*/
declare function fullLike( x: AnyArray, value: any, dtype: 'generic' ): Array<any>;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*/
declare function fullLike( x: Float64Array, value: number, dtype?: DataType ): Float64Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0 );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/
declare function fullLike( x: Float32Array, value: number, dtype?: DataType ): Float32Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* -   If provided a number, the function returns a complex number array where each element has a real component whose value equals the provided fill value and where each element has an imaginary component equal to `0`.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'complex128' );
* // returns <Complex128Array>
*
* var y = fullLike( x, 1.0 );
* // returns <Complex128Array>
*/
declare function fullLike( x: Complex128Array, value: number | ComplexLike, dtype?: DataType ): Complex128Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* -   If provided a number, the function returns a complex number array where each element has a real component whose value equals the provided fill value and where each element has an imaginary component equal to `0`.
*
* @param x - input array from which to derive the output array length
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'complex64' );
* // returns <Complex64Array>
*
* var y = fullLike( x, 1.0 );
* // returns <Complex64Array>
*/
declare function fullLike( x: Complex64Array, value: number | ComplexLike, dtype?: DataType ): Complex64Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*
* var y = fullLike( x, 1 );
* // returns <Int32Array>[ 1, 1 ]
*/
declare function fullLike( x: Int32Array, value: number, dtype?: DataType ): Int32Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int16' );
* // returns <Int16Array>[ 0, 0 ]
*
* var y = fullLike( x, 1 );
* // returns <Int16Array>[ 1, 1 ]
*/
declare function fullLike( x: Int16Array, value: number, dtype?: DataType ): Int16Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'int8' );
* // returns <Int8Array>[ 0, 0 ]
*
* var y = fullLike( x, 1 );
* // returns <Int8Array>[ 1, 1 ]
*/
declare function fullLike( x: Int8Array, value: number, dtype?: DataType ): Int8Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint32' );
* // returns <Uint32Array>[ 0, 0 ]
*
* var y = fullLike( x, 1 );
* // returns <Uint32Array>[ 1, 1 ]
*/
declare function fullLike( x: Uint32Array, value: number, dtype?: DataType ): Uint32Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint16' );
* // returns <Uint16Array>[ 0, 0 ]
*
* var y = fullLike( x, 1 );
* // returns <Uint16Array>[ 1, 1 ]
*/
declare function fullLike( x: Uint16Array, value: number, dtype?: DataType ): Uint16Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint8' );
* // returns <Uint8Array>[ 0, 0 ]
*
* var y = fullLike( x, 1 );
* // returns <Uint8Array>[ 1, 1 ]
*/
declare function fullLike( x: Uint8Array, value: number, dtype?: DataType ): Uint8Array;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'uint8c' );
* // returns <Uint8ClampedArray>[ 0, 0 ]
*
* var y = fullLike( x, 1 );
* // returns <Uint8ClampedArray>[ 1, 1 ]
*/
declare function fullLike( x: Uint8ClampedArray, value: number, dtype?: DataType ): Uint8ClampedArray;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'generic' );
* // returns [ 0, 0 ]
*
* var y = fullLike( x, 1.0 );
* // returns [ 1.0, 1.0 ]
*/
declare function fullLike( x: Array<any>, value: any, dtype?: DataType ): Array<any>;

/**
* Creates a filled array having the same length and data type as a provided input array.
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
* @param value - fill value
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = fullLike( x, 1.0, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/
declare function fullLike( x: AnyArray, value: any, dtype?: DataType ): AnyArray;


// EXPORTS //

export = fullLike;
