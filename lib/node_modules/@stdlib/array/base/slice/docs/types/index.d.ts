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

import { Collection, Complex128Array, Complex64Array } from '@stdlib/types/array';

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Float64Array>[ 1.0, 2.0, 3.0 ]
*/
declare function slice( x: Float64Array, start: number, end: number ): Float64Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Float32Array>[ 1.0, 2.0, 3.0 ]
*/
declare function slice( x: Float32Array, start: number, end: number ): Float32Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Int32Array>[ 1, 2, 3 ]
*/
declare function slice( x: Int32Array, start: number, end: number ): Int32Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
*
* var x = new Int16Array( [ 1, 2, 3 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Int16Array>[ 1, 2, 3 ]
*/
declare function slice( x: Int16Array, start: number, end: number ): Int16Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
*
* var x = new Int8Array( [ 1, 2, 3 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Int8Array>[ 1, 2, 3 ]
*/
declare function slice( x: Int8Array, start: number, end: number ): Int8Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Uint32Array>[ 1, 2, 3 ]
*/
declare function slice( x: Uint32Array, start: number, end: number ): Uint32Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var x = new Uint16Array( [ 1, 2, 3 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Uint16Array>[ 1, 2, 3 ]
*/
declare function slice( x: Uint16Array, start: number, end: number ): Uint16Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Uint8Array>[ 1, 2, 3 ]
*/
declare function slice( x: Uint8Array, start: number, end: number ): Uint8Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Uint8ClampedArray>[ 1, 2, 3 ]
*/
declare function slice( x: Uint8ClampedArray, start: number, end: number ): Uint8ClampedArray;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*/
declare function slice( x: Complex128Array, start: number, end: number ): Complex128Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = slice( x, 0, 3 );
* // returns <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
*/
declare function slice( x: Complex64Array, start: number, end: number ): Complex64Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = slice( x, 0, 3 );
* // returns [ 1, 2, 3 ]
*/
declare function slice<T = unknown>( x: Collection<T>, start: number, end: number ): Array<T>;


// EXPORTS //

export = slice;
