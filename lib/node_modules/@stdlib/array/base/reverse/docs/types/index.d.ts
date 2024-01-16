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
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = reverse( x );
* // returns <Float64Array>[ 3.0, 2.0, 1.0 ]
*/
declare function reverse( x: Float64Array ): Float64Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = reverse( x );
* // returns <Float32Array>[ 3.0, 2.0, 1.0 ]
*/
declare function reverse( x: Float32Array ): Float32Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3 ] );
*
* var out = reverse( x );
* // returns <Int32Array>[ 3, 2, 1 ]
*/
declare function reverse( x: Int32Array ): Int32Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
*
* var x = new Int16Array( [ 1, 2, 3 ] );
*
* var out = reverse( x );
* // returns <Int16Array>[ 3, 2, 1 ]
*/
declare function reverse( x: Int16Array ): Int16Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
*
* var x = new Int8Array( [ 1, 2, 3 ] );
*
* var out = reverse( x );
* // returns <Int8Array>[ 3, 2, 1 ]
*/
declare function reverse( x: Int8Array ): Int8Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3 ] );
*
* var out = reverse( x );
* // returns <Uint32Array>[ 3, 2, 1 ]
*/
declare function reverse( x: Uint32Array ): Uint32Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var x = new Uint16Array( [ 1, 2, 3 ] );
*
* var out = reverse( x );
* // returns <Uint16Array>[ 3, 2, 1 ]
*/
declare function reverse( x: Uint16Array ): Uint16Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3 ] );
*
* var out = reverse( x );
* // returns <Uint8Array>[ 3, 2, 1 ]
*/
declare function reverse( x: Uint8Array ): Uint8Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3 ] );
*
* var out = reverse( x );
* // returns <Uint8ClampedArray>[ 3, 2, 1 ]
*/
declare function reverse( x: Uint8ClampedArray ): Uint8ClampedArray;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = reverse( x );
* // returns <Complex128Array>[ 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
*/
declare function reverse( x: Complex128Array ): Complex128Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = reverse( x );
* // returns <Complex64Array>[ 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
*/
declare function reverse( x: Complex64Array ): Complex64Array;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3 ] );
*
* var v = x.get( 0 );
* // returns 1
*
* var out = reverse( x );
*
* v = out.get( 0 );
* // returns 3
*/
declare function reverse<T = unknown>( x: AccessorArrayLike<T> ): AccessorArrayLike<T>;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = reverse( x );
* // returns [ 3, 2, 1 ]
*/
declare function reverse<T = unknown>( x: Array<T> ): Array<T>;

/**
* Reverses an array in-place.
*
* @param x - input array
* @returns input array
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = reverse( x );
* // returns [ 3, 2, 1 ]
*/
declare function reverse<T = unknown>( x: Collection<T> ): Collection<T>;


// EXPORTS //

export = reverse;
