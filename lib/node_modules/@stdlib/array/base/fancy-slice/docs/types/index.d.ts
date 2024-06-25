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
import { Slice } from '@stdlib/types/slice';

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Float64Array>[ 3.0, 2.0, 1.0 ]
*/
declare function slice( x: Float64Array, s: Slice, strict: boolean ): Float64Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Float32Array>[ 3.0, 2.0, 1.0 ]
*/
declare function slice( x: Float32Array, s: Slice, strict: boolean ): Float32Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Int32Array>[ 3, 2, 1 ]
*/
declare function slice( x: Int32Array, s: Slice, strict: boolean ): Int32Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Int16Array = require( '@stdlib/array/int16' );
*
* var x = new Int16Array( [ 1, 2, 3 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Int16Array>[ 3, 2, 1 ]
*/
declare function slice( x: Int16Array, s: Slice, strict: boolean ): Int16Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Int8Array = require( '@stdlib/array/int8' );
*
* var x = new Int8Array( [ 1, 2, 3 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Int8Array>[ 3, 2, 1 ]
*/
declare function slice( x: Int8Array, s: Slice, strict: boolean ): Int8Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Uint32Array>[ 3, 2, 1 ]
*/
declare function slice( x: Uint32Array, s: Slice, strict: boolean ): Uint32Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var x = new Uint16Array( [ 1, 2, 3 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Uint16Array>[ 3, 2, 1 ]
*/
declare function slice( x: Uint16Array, s: Slice, strict: boolean ): Uint16Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Uint8Array>[ 3, 2, 1 ]
*/
declare function slice( x: Uint8Array, s: Slice, strict: boolean ): Uint8Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Uint8ClampedArray>[ 3, 2, 1 ]
*/
declare function slice( x: Uint8ClampedArray, s: Slice, strict: boolean ): Uint8ClampedArray;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Complex128Array>[ 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
*/
declare function slice( x: Complex128Array, s: Slice, strict: boolean ): Complex128Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns <Complex64Array>[ 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
*/
declare function slice( x: Complex64Array, s: Slice, strict: boolean ): Complex64Array;

/**
* Returns a shallow copy of a portion of an array.
*
* @param x - input array
* @param s - slice object
* @param strict - boolean indicating whether to enforce strict bounds checking
* @returns output array
*
* @example
* var Slice = require( '@stdlib/slice/ctor' );
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = slice( x, new Slice( null, null, -1 ), false );
* // returns [ 6, 5, 4, 3, 2, 1 ]
*/
declare function slice<T = unknown>( x: Collection<T> | AccessorArrayLike<T>, s: Slice, strict: boolean ): Array<T>;


// EXPORTS //

export = slice;
