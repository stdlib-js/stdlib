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

import { Complex128Array, Complex64Array, NumericDataType } from '@stdlib/types/array';

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'float64' );
* // returns <Float64Array>[ 1.0, 2.0 ]
*/
declare function oneTo( n: number, dtype: 'float64' ): Float64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'float32' );
* // returns <Float32Array>[ 1.0, 2.0 ]
*/
declare function oneTo( n: number, dtype: 'float32' ): Float32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* ## Notes
*
* -   Each element has an imaginary component equal to `0`.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'complex128' );
* // returns <Complex128Array>
*/
declare function oneTo( n: number, dtype: 'complex128' ): Complex128Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* ## Notes
*
* -   Each element has an imaginary component equal to `0`.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'complex64' );
* // returns <Complex64Array>
*/
declare function oneTo( n: number, dtype: 'complex64' ): Complex64Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'int32' );
* // returns <Int32Array>[ 1, 2 ]
*/
declare function oneTo( n: number, dtype: 'int32' ): Int32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'int16' );
* // returns <Int16Array>[ 1, 2 ]
*/
declare function oneTo( n: number, dtype: 'int16' ): Int16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'int8' );
* // returns <Int8Array>[ 1, 2 ]
*/
declare function oneTo( n: number, dtype: 'int8' ): Int8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'uint32' );
* // returns <Uint32Array>[ 1, 2 ]
*/
declare function oneTo( n: number, dtype: 'uint32' ): Uint32Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'uint16' );
* // returns <Uint16Array>[ 1, 2 ]
*/
declare function oneTo( n: number, dtype: 'uint16' ): Uint16Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'uint8' );
* // returns <Uint8Array>[ 1, 2 ]
*/
declare function oneTo( n: number, dtype: 'uint8' ): Uint8Array;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'uint8c' );
* // returns <Uint8ClampedArray>[ 1, 2 ]
*/
declare function oneTo( n: number, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2, 'generic' );
* // returns [ 1, 2 ]
*/
declare function oneTo( n: number, dtype: 'generic' ): Array<number>;

/**
* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
*
* @param n - number of elements
* @param dtype - data type (default: 'float64')
* @returns linearly spaced numeric array
*
* @example
* var arr = oneTo( 2 );
* // returns <Float64Array>[ 1.0, 2.0 ]
*
* @example
* var arr = oneTo( 2, 'float32' );
* // returns <Float32Array>[ 1.0, 2.0 ]
*/
declare function oneTo( n: number, dtype?: NumericDataType ): Float64Array;


// EXPORTS //

export = oneTo;
