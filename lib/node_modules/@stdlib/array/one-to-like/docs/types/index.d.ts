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
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'float64' );
* // returns <Float64Array>[ 1.0, 2.0 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'float64' ): Float64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'float32' );
* // returns <Float32Array>[ 1.0, 2.0 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'float32' ): Float32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'complex128' );
* // returns <Complex128Array>
*/
declare function oneToLike( x: AnyArray, dtype: 'complex128' ): Complex128Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'complex64' );
* // returns <Complex64Array>
*/
declare function oneToLike( x: AnyArray, dtype: 'complex64' ): Complex64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'int32' );
* // returns <Int32Array>[ 1, 2 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'int32' ): Int32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'int16' );
* // returns <Int16Array>[ 1, 2 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'int16' ): Int16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'int8' );
* // returns <Int8Array>[ 1, 2 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'int8' ): Int8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'uint32' );
* // returns <Uint32Array>[ 1, 2 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'uint32' ): Uint32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'uint16' );
* // returns <Uint16Array>[ 1, 2 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'uint16' ): Uint16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'uint8' );
* // returns <Uint8Array>[ 1, 2 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'uint8' ): Uint8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'uint8c' );
* // returns <Uint8ClampedArray>[ 1, 2 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length as a provided input array.
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
* var y = oneToLike( x, 'generic' );
* // returns [ 1, 2 ]
*/
declare function oneToLike( x: AnyArray, dtype: 'generic' ): Array<number>;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Float64Array>[ 1.0, 2.0 ]
*/
declare function oneToLike( x: Float64Array, dtype?: NumericDataType ): Float64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Float32Array>[ 1.0, 2.0 ]
*/
declare function oneToLike( x: Float32Array, dtype?: NumericDataType ): Float32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Complex128Array>
*/
declare function oneToLike( x: Complex128Array, dtype?: NumericDataType ): Complex128Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Complex64Array>
*/
declare function oneToLike( x: Complex64Array, dtype?: NumericDataType ): Complex64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Int32Array>[ 1, 2 ]
*/
declare function oneToLike( x: Int32Array, dtype?: NumericDataType ): Int32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Int16Array>[ 1, 2 ]
*/
declare function oneToLike( x: Int16Array, dtype?: NumericDataType ): Int16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Int8Array>[ 1, 2 ]
*/
declare function oneToLike( x: Int8Array, dtype?: NumericDataType ): Int8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Uint32Array>[ 1, 2 ]
*/
declare function oneToLike( x: Uint32Array, dtype?: NumericDataType ): Uint32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Uint16Array>[ 1, 2 ]
*/
declare function oneToLike( x: Uint16Array, dtype?: NumericDataType ): Uint16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Uint8Array>[ 1, 2 ]
*/
declare function oneToLike( x: Uint8Array, dtype?: NumericDataType ): Uint8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Uint8ClampedArray>[ 1, 2 ]
*/
declare function oneToLike( x: Uint8ClampedArray, dtype?: NumericDataType ): Uint8ClampedArray;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns [ 1, 2 ]
*/
declare function oneToLike( x: Array<any>, dtype?: NumericDataType ): Array<number>;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
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
* var y = oneToLike( x );
* // returns <Float32Array>[ 1.0, 2.0 ]
*/
declare function oneToLike( x: AnyArray, dtype?: NumericDataType ): AnyArray;


// EXPORTS //

export = oneToLike;
