/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { AnyArray, Collection, Complex128Array, Complex64Array, DataType } from '@stdlib/types/array';

/**
* Converts an array to a `Float64Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'float64' );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convert( x: Collection, dtype: 'float64' ): Float64Array;

/**
* Converts an array to a `Float32Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'float32' );
* // returns <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convert( x: Collection, dtype: 'float32' ): Float32Array;

/**
* Converts an array to an `Int32Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'int32' );
* // returns <Int32Array>[ 1, 2, 3, 4 ]
*/
declare function convert( x: Collection, dtype: 'int32' ): Int32Array;

/**
* Converts an array to an `Int16Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'int16' );
* // returns <Int16Array>[ 1, 2, 3, 4 ]
*/
declare function convert( x: Collection, dtype: 'int16' ): Int16Array;

/**
* Converts an array to an `Int8Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'int8' );
* // returns <Int8Array>[ 1, 2, 3, 4 ]
*/
declare function convert( x: Collection, dtype: 'int8' ): Int8Array;

/**
* Converts an array to a `Uint32Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'uint32' );
* // returns <Uint32Array>[ 1, 2, 3, 4 ]
*/
declare function convert( x: Collection, dtype: 'uint32' ): Uint32Array;

/**
* Converts an array to a `Uint16Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'uint16' );
* // returns <Uint16Array>[ 1, 2, 3, 4 ]
*/
declare function convert( x: Collection, dtype: 'uint16' ): Uint16Array;

/**
* Converts an array to a `Uint8Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'uint8' );
* // returns <Uint8Array>[ 1, 2, 3, 4 ]
*/
declare function convert( x: Collection, dtype: 'uint8' ): Uint8Array;

/**
* Converts an array to a `Uint8ClampedArray`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'uint8c' );
* // returns <Uint8ClampedArray>[ 1, 2, 3, 4 ]
*/
declare function convert( x: Collection, dtype: 'uint8c' ): Uint8ClampedArray;

/**
* Converts an array to a `Complex128Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'complex128' );
* // returns <Complex128>
*/
declare function convert( x: Collection, dtype: 'complex128' ): Complex128Array;

/**
* Converts an array to a `Complex64Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'complex64' );
* // returns <Complex64>
*/
declare function convert( x: Collection, dtype: 'complex64' ): Complex64Array;

/**
* Converts an array to an `Array`.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'generic' );
* // returns [ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convert( x: Collection, dtype: 'generic' ): Array<any>;

/**
* Converts an array to an array of a different data type.
*
* @param x - array to convert
* @param dtype - output data type
* @returns output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
* var out = convert( arr, 'float64' );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convert( x: Collection, dtype: DataType ): AnyArray;


// EXPORTS //

export = convert;
