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

import { Complex128Array, Complex64Array, FloatingPointDataType } from '@stdlib/types/array';

/**
* Data type.
*/
type DataType = FloatingPointDataType | 'generic';

/**
* Creates an array filled with NaNs and having a specified length.
*
* @param length - array length
* @param dtype - data type
* @returns filled array
*
* @example
* var arr = nans( 2, 'float64' );
* // returns <Float64Array>[ NaN, NaN ]
*/
declare function nans( length: number, dtype: 'float64' ): Float64Array;

/**
* Creates an array filled with NaNs and having a specified length.
*
* @param length - array length
* @param dtype - data type
* @returns filled array
*
* @example
* var arr = nans( 2, 'float32' );
* // returns <Float32Array>[ NaN, NaN ]
*/
declare function nans( length: number, dtype: 'float32' ): Float32Array;

/**
* Creates an array filled with NaNs and having a specified length.
*
* ## Notes
*
* -   Each element has a real component equal to `NaN` and an imaginary component equal to `NaN`.
*
* @param length - array length
* @param dtype - data type
* @returns filled array
*
* @example
* var arr = nans( 2, 'complex128' );
* // returns <Complex128Array>
*/
declare function nans( length: number, dtype: 'complex128' ): Complex128Array;

/**
* Creates an array filled with NaNs and having a specified length.
*
* ## Notes
*
* -   Each element has a real component equal to `NaN` and an imaginary component equal to `NaN`.
*
* @param length - array length
* @param dtype - data type
* @returns filled array
*
* @example
* var arr = nans( 2, 'complex64' );
* // returns <Complex64Array>
*/
declare function nans( length: number, dtype: 'complex64' ): Complex64Array;

/**
* Creates an array filled with NaNs and having a specified length.
*
* @param length - array length
* @param dtype - data type
* @returns filled array
*
* @example
* var arr = nans( 2, 'generic' );
* // returns [ NaN, NaN ]
*/
declare function nans( length: number, dtype: 'generic' ): Array<number>;

/**
* Creates an array filled with NaNs and having a specified length.
*
* The function recognizes the following data types:
*
* -   `float64`: double-precision floating-point numbers (IEEE 754)
* -   `float32`: single-precision floating-point numbers (IEEE 754)
* -   `complex128`: double-precision complex floating-point numbers
* -   `complex64`: single-precision complex floating-point numbers
* -   `generic`: generic JavaScript values
*
* @param length - array length
* @param dtype - data type (default: 'float64')
* @returns filled array
*
* @example
* var arr = nans( 2 );
* // returns <Float64Array>[ NaN, NaN ]
*
* @example
* var arr = nans( 2, 'float32' );
* // returns <Float32Array>[ NaN, NaN ]
*/
declare function nans( length: number, dtype?: DataType ): Float64Array;


// EXPORTS //

export = nans;
