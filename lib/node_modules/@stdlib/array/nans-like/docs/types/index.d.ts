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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex128Array, Complex64Array, AnyArray, FloatingPointDataType } from '@stdlib/types/array';

/**
* Data type.
*/
type DataType = FloatingPointDataType | 'generic';

/**
* Creates an array filled with NaNs and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x, 'float64' );
* // returns <Float64Array>[ NaN, NaN ]
*/
declare function nansLike( x: AnyArray, dtype: 'float64' ): Float64Array;

/**
* Creates an array filled with NaNs and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x, 'float32' );
* // returns <Float32Array>[ NaN, NaN ]
*/
declare function nansLike( x: AnyArray, dtype: 'float32' ): Float32Array;

/**
* Creates an array filled with NaNs and having the same length as a provided input array.
*
* ## Notes
*
* -   Each element of the returned array has a real component equal to `NaN` and an imaginary component equal to `NaN`.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x, 'complex128' );
* // returns <Complex128Array>
*/
declare function nansLike( x: AnyArray, dtype: 'complex128' ): Complex128Array;

/**
* Creates an array filled with NaNs and having the same length as a provided input array.
*
 ## Notes
*
* -   Each element of the returned array has a real component equal to `NaN` and an imaginary component equal to `NaN`.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x, 'complex64' );
* // returns <Complex64Array>
*/
declare function nansLike( x: AnyArray, dtype: 'complex64' ): Complex64Array;

/**
* Creates an array filled with NaNs and having the same length as a provided input array.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x, 'generic' );
* // returns [ NaN, NaN ]
*/
declare function nansLike( x: AnyArray, dtype: 'generic' ): Array<number>;

/**
* Creates an array filled with NaNs and having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `generic`: generic JavaScript values
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x );
* // returns <Float64Array>[ NaN, NaN ]
*/
declare function nansLike( x: Float64Array, dtype?: DataType ): Float64Array;

/**
* Creates an array filled with NaNs and having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `generic`: generic JavaScript values
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x );
* // returns <Float32Array>[ NaN, NaN ]
*/
declare function nansLike( x: Float32Array, dtype?: DataType ): Float32Array;

/**
* Creates an array filled with NaNs and having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `generic`: generic JavaScript values
*
 ## Notes
*
* -   Each element of the returned array has a real component equal to `NaN` and an imaginary component equal to `NaN`.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'complex128' );
* // returns <Complex128Array>
*
* var y = nansLike( x );
* // returns <Complex128Array>
*/
declare function nansLike( x: Complex128Array, dtype?: DataType ): Complex128Array;

/**
* Creates an array filled with NaNs and having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `generic`: generic JavaScript values
*
 ## Notes
*
* -   Each element of the returned array has a real component equal to `NaN` and an imaginary component equal to `NaN`.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'complex64' );
* // returns <Complex64Array>
*
* var y = nansLike( x );
* // returns <Complex64Array>
*/
declare function nansLike( x: Complex64Array, dtype?: DataType ): Complex64Array;

/**
* Creates an array filled with NaNs and having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `generic`: generic JavaScript values
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'generic' );
* // returns [ 0, 0 ]
*
* var y = nansLike( x );
* // returns [ 1, 1 ]
*/
declare function nansLike( x: Array<any>, dtype?: DataType ): Array<number>;

/**
* Creates an array filled with NaNs and having the same length and data type as a provided input array.
*
* The function supports the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `generic`: generic JavaScript values
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns filled array
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x );
* // returns <Float64Array>[ NaN, NaN ]
*
* @example
* var zeros = require( `@stdlib/array/zeros` );
*
* var x = zeros( 2, 'float64' );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* var y = nansLike( x, 'float32' );
* // returns <Float32Array>[ NaN, NaN ]
*/
declare function nansLike( x: AnyArray, dtype?: DataType ): AnyArray;


// EXPORTS //

export = nansLike;
