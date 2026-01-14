/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Complex128Array, Complex64Array, AnyArray, NumericDataType } from '@stdlib/types/array';

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'float64' );
* // returns <Float64Array>[ 0.0, 1.0 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'float64' ): Float64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'float32' );
* // returns <Float32Array>[ 0.0, 1.0 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'float32' ): Float32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* ## Notes
*
* -   Each element has an imaginary component equal to `0`.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'complex128' );
* // returns <Complex128Array>
*/
declare function zeroToLike( x: AnyArray, dtype: 'complex128' ): Complex128Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* ## Notes
*
* -   Each element has an imaginary component equal to `0`.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'complex64' );
* // returns <Complex64Array>
*/
declare function zeroToLike( x: AnyArray, dtype: 'complex64' ): Complex64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'int32' );
* // returns <Int32Array>[ 0, 1 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'int32' ): Int32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'int16' );
* // returns <Int16Array>[ 0, 1 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'int16' ): Int16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'int8' );
* // returns <Int8Array>[ 0, 1 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'int8' ): Int8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'uint32' );
* // returns <Uint32Array>[ 0, 1 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'uint32' ): Uint32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'uint16' );
* // returns <Uint16Array>[ 0, 1 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'uint16' ): Uint16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'uint8' );
* // returns <Uint8Array>[ 0, 1 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'uint8' ): Uint8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'uint8c' );
* // returns <Uint8ClampedArray>[ 0, 1 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x, 'generic' );
* // returns [ 0, 1 ]
*/
declare function zeroToLike( x: AnyArray, dtype: 'generic' ): Array<number>;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x );
* // returns <Float64Array>[ 0.0, 1.0 ]
*/
declare function zeroToLike( x: Float64Array, dtype?: NumericDataType ): Float64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x );
* // returns <Float32Array>[ 0.0, 1.0 ]
*/
declare function zeroToLike( x: Float32Array, dtype?: NumericDataType ): Float32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* ## Notes
*
* -   Each element has an imaginary component equal to `0`.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'complex128' );
* // returns <Complex128Array>
*
* var y = zeroToLike( x );
* // returns <Complex128Array>
*/
declare function zeroToLike( x: Complex128Array, dtype?: NumericDataType ): Complex128Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* ## Notes
*
* -   Each element has an imaginary component equal to `0`.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'complex64' );
* // returns <Complex64Array>
*
* var y = zeroToLike( x );
* // returns <Complex64Array>
*/
declare function zeroToLike( x: Complex64Array, dtype?: NumericDataType ): Complex64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*
* var y = zeroToLike( x );
* // returns <Int32Array>[ 0, 1 ]
*/
declare function zeroToLike( x: Int32Array, dtype?: NumericDataType ): Int32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'int16' );
* // returns <Int16Array>[ 0, 0 ]
*
* var y = zeroToLike( x );
* // returns <Int16Array>[ 0, 1 ]
*/
declare function zeroToLike( x: Int16Array, dtype?: NumericDataType ): Int16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'int8' );
* // returns <Int8Array>[ 0, 0 ]
*
* var y = zeroToLike( x );
* // returns <Int8Array>[ 0, 1 ]
*/
declare function zeroToLike( x: Int8Array, dtype?: NumericDataType ): Int8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'uint32' );
* // returns <Uint32Array>[ 0, 0 ]
*
* var y = zeroToLike( x );
* // returns <Uint32Array>[ 0, 1 ]
*/
declare function zeroToLike( x: Uint32Array, dtype?: NumericDataType ): Uint32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'uint16' );
* // returns <Uint16Array>[ 0, 0 ]
*
* var y = zeroToLike( x );
* // returns <Uint16Array>[ 0, 1 ]
*/
declare function zeroToLike( x: Uint16Array, dtype?: NumericDataType ): Uint16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'uint8' );
* // returns <Uint8Array>[ 0, 0 ]
*
* var y = zeroToLike( x );
* // returns <Uint8Array>[ 0, 1 ]
*/
declare function zeroToLike( x: Uint8Array, dtype?: NumericDataType ): Uint8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'uint8c' );
* // returns <Uint8ClampedArray>[ 0, 0 ]
*
* var y = zeroToLike( x );
* // returns <Uint8ClampedArray>[ 0, 1 ]
*/
declare function zeroToLike( x: Uint8ClampedArray, dtype?: NumericDataType ): Uint8ClampedArray;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'generic' );
* // returns [ 0, 0 ]
*
* var y = zeroToLike( x );
* // returns [ 0, 1 ]
*/
declare function zeroToLike( x: Array<any>, dtype?: NumericDataType ): Array<number>;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = zeroToLike( x );
* // returns <Float32Array>[ 0.0, 1.0 ]
*/
declare function zeroToLike( x: AnyArray, dtype?: NumericDataType ): AnyArray;


// EXPORTS //

export = zeroToLike;
