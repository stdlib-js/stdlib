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

import { Collection, Complex128Array, Complex64Array, AccessorArrayLike } from '@stdlib/types/array';

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = toReversed( x );
* // returns <Float64Array>[ 3.0, 2.0, 1.0 ]
*/
declare function toReversed( x: Float64Array ): Float64Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = toReversed( x );
* // returns <Float32Array>[ 3.0, 2.0, 1.0 ]
*/
declare function toReversed( x: Float32Array ): Float32Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3 ] );
*
* var out = toReversed( x );
* // returns <Int32Array>[ 3, 2, 1 ]
*/
declare function toReversed( x: Int32Array ): Int32Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
*
* var x = new Int16Array( [ 1, 2, 3 ] );
*
* var out = toReversed( x );
* // returns <Int16Array>[ 3, 2, 1 ]
*/
declare function toReversed( x: Int16Array ): Int16Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
*
* var x = new Int8Array( [ 1, 2, 3 ] );
*
* var out = toReversed( x );
* // returns <Int8Array>[ 3, 2, 1 ]
*/
declare function toReversed( x: Int8Array ): Int8Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3 ] );
*
* var out = toReversed( x );
* // returns <Uint32Array>[ 3, 2, 1 ]
*/
declare function toReversed( x: Uint32Array ): Uint32Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var x = new Uint16Array( [ 1, 2, 3 ] );
*
* var out = toReversed( x );
* // returns <Uint16Array>[ 3, 2, 1 ]
*/
declare function toReversed( x: Uint16Array ): Uint16Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3 ] );
*
* var out = toReversed( x );
* // returns <Uint8Array>[ 3, 2, 1 ]
*/
declare function toReversed( x: Uint8Array ): Uint8Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3 ] );
*
* var out = toReversed( x );
* // returns <Uint8ClampedArray>[ 3, 2, 1 ]
*/
declare function toReversed( x: Uint8ClampedArray ): Uint8ClampedArray;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = toReversed( x );
* // returns <Complex128Array>[ 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
*/
declare function toReversed( x: Complex128Array ): Complex128Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = toReversed( x );
* // returns <Complex64Array>[ 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
*/
declare function toReversed( x: Complex64Array ): Complex64Array;

/**
* Returns a new array with elements in reverse order.
*
* @param x - input array
* @returns output array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3 ] );
*
* var v = x.get( 0 );
* // returns 1
*
* var out = toReversed( x );
* // returns [ 3, 2, 1 ]
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = toReversed( x );
* // returns [ 3, 2, 1 ]
*/
declare function toReversed<T = unknown>( x: Collection<T> | AccessorArrayLike<T> ): Array<T>;


// EXPORTS //

export = toReversed;
