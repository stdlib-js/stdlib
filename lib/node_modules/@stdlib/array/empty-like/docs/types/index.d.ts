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

import { AnyArray, DataTypeMap, TypedArray, BooleanTypedArray, ComplexTypedArray } from '@stdlib/types/array';

/**
* Creates an uninitialized array having the same length and data type as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @returns empty array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'generic' );
* // returns [ 0.0, 0.0 ]
*
* var arr = emptyLike( x );
* // returns [ 0.0, 0.0 ]
*/
declare function emptyLike( x: Array<any> ): Array<number>;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @returns empty array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float64' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'float32' );
* // returns <Float32Array>
*/
declare function emptyLike<T extends TypedArray | ComplexTypedArray | BooleanTypedArray>( x: T ): T;

/**
* Creates an uninitialized array having the same length as a provided input array.
*
* ## Notes
*
* -   In browser environments, the function always returns zero-filled arrays.
* -   If `dtype` is `'generic'`, the function always returns a zero-filled array.
* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
*
* @param x - input array from which to derive the output array length
* @param dtype - data type
* @returns empty array
*
* @example
* var zeros = require( '@stdlib/array/zeros' );
*
* var x = zeros( 2, 'float64' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* var arr = emptyLike( x, 'float32' );
* // returns <Float32Array>
*/
declare function emptyLike<T extends keyof DataTypeMap<number>>( x: AnyArray, dtype: T ): DataTypeMap<number>[T];


// EXPORTS //

export = emptyLike;
