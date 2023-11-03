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

import { AnyArray, Collection, Complex128Array, Complex64Array } from '@stdlib/types/array';

/**
* Converts an array to the same data type as a `Float64Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Float64Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convertSame( x: Collection, y: Float64Array ): Float64Array;

/**
* Converts an array to a `Float32Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Float32Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convertSame( x: Collection, y: Float32Array ): Float32Array;

/**
* Converts an array to an `Int32Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Int32Array = require( `@stdlib/array/int32` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Int32Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Int32Array>[ 1, 2, 3, 4 ]
*/
declare function convertSame( x: Collection, y: Int32Array ): Int32Array;

/**
* Converts an array to an `Int16Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Int16Array = require( `@stdlib/array/int16` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Int16Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Int16Array>[ 1, 2, 3, 4 ]
*/
declare function convertSame( x: Collection, y: Int16Array ): Int16Array;

/**
* Converts an array to an `Int8Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Int8Array = require( `@stdlib/array/int8` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Int8Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Int8Array>[ 1, 2, 3, 4 ]
*/
declare function convertSame( x: Collection, y: Int8Array ): Int8Array;

/**
* Converts an array to a `Uint32Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Uint32Array = require( `@stdlib/array/uint32` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Uint32Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Uint32Array>[ 1, 2, 3, 4 ]
*/
declare function convertSame( x: Collection, y: Uint32Array ): Uint32Array;

/**
* Converts an array to a `Uint16Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Uint16Array = require( `@stdlib/array/uint16` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Uint16Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Uint16Array>[ 1, 2, 3, 4 ]
*/
declare function convertSame( x: Collection, y: Uint16Array ): Uint16Array;

/**
* Converts an array to a `Uint8Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Uint8Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Uint8Array>[ 1, 2, 3, 4 ]
*/
declare function convertSame( x: Collection, y: Uint8Array ): Uint8Array;

/**
* Converts an array to a `Uint8ClampedArray`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Uint8ClampedArray = require( `@stdlib/array/uint8c` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Uint8ClampedArray( 0 );
*
* var out = convertSame( x, y );
* // returns <Uint8ClampedArray>[ 1, 2, 3, 4 ]
*/
declare function convertSame( x: Collection, y: Uint8ClampedArray ): Uint8ClampedArray;

/**
* Converts an array to a `Complex128Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Complex128Array = require( `@stdlib/array/complex128` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Complex128Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Complex128Array>
*/
declare function convertSame( x: Collection, y: Complex128Array ): Complex128Array;

/**
* Converts an array to a `Complex64Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Complex64Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Complex64Array>
*/
declare function convertSame( x: Collection, y: Complex64Array ): Complex64Array;

/**
* Converts an array to a generic `Array`.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = [];
*
* var out = convertSame( x, y );
* // returns [ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convertSame( x: Collection, y: Array<any> ): Array<any>;

/**
* Converts an array to the same data type as a second input array.
*
* @param x - array to convert
* @param y - array having the desired output data type
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = new Float64Array( 0 );
*
* var out = convertSame( x, y );
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function convertSame( x: Collection, y: AnyArray ): AnyArray;


// EXPORTS //

export = convertSame;
