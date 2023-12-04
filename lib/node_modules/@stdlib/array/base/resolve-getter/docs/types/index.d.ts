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

import { Complex64, Complex128 } from '@stdlib/types/complex';
import { Collection, Complex64Array, Complex128Array, AccessorArrayLike } from '@stdlib/types/array';

/**
* Returns an element from a `Float64Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetFloat64 = ( arr: Float64Array, idx: number ) => number | void;

/**
* Returns an element from a `Float32Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetFloat32 = ( arr: Float32Array, idx: number ) => number | void;

/**
* Returns an element from a `Complex128Array`.
*
* @param
arr - input array
* @param idx - element index
* @returns element value
*/
type GetComplex128 = ( arr: Complex128Array, idx: number ) => Complex128 | void;

/**
* Returns an element from a `Complex64Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetComplex64 = ( arr: Complex64Array, idx: number ) => Complex64 | void;

/**
* Returns an element from an `Int32Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetInt32 = ( arr: Int32Array, idx: number ) => number | void;

/**
* Returns an element from an `Int16Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetInt16 = ( arr: Int16Array, idx: number ) => number | void;

/**
* Returns an element from an `Int8Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetInt8 = ( arr: Int8Array, idx: number ) => number | void;

/**
* Returns an element from a `Uint32Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetUint32 = ( arr: Uint32Array, idx: number ) => number | void;

/**
* Returns an element from a `Uint16Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetUint16 = ( arr: Uint16Array, idx: number ) => number | void;

/**
* Returns an element from a `Uint8Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetUint8 = ( arr: Uint8Array, idx: number ) => number | void;

/**
* Returns an element from a `Uint8ClampedArray`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetUint8c = ( arr: Uint8ClampedArray, idx: number ) => number | void;

/**
* Returns an element from a generic `Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetGeneric<T> = ( arr: Array<T>, idx: number ) => T | void;

/**
* Returns an element from an indexed array-like object.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetArrayLike<T> = ( arr: Collection<T>, idx: number ) => T | void;

/**
* Returns an element from an array-like object supporting the get/set protocol.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetAccessorArrayLike<T> = ( arr: AccessorArrayLike<T>, idx: number ) => T;

/**
* Returns an accessor function for retrieving an element from a `Float64Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var arr = new Float64Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3.0
*/
declare function resolveGetter( x: Float64Array ): GetFloat64;

/**
* Returns an accessor function for retrieving an element from a `Float32Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var arr = new Float32Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3.0
*/
declare function resolveGetter( x: Float32Array ): GetFloat32;

/**
* Returns an accessor function for retrieving an element from a `Complex128Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Complex128Array = require( `@stdlib/array/complex128` );
* var real = require( `@stdlib/array/real` );
* var imag = require( `@stdlib/array/imag` );
*
* var arr = new Complex128Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 1 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 3.0
*
* var im = imag( v );
* // returns 4.0
*/
declare function resolveGetter( x: Complex128Array ): GetComplex128;

/**
* Returns an accessor function for retrieving an element from a `Complex64Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Complex64Array = require( `@stdlib/array/complex64` );
* var realf = require( `@stdlib/array/realf` );
* var imagf = require( `@stdlib/array/imagf` );
*
* var arr = new Complex64Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 3.0
*
* var im = imagf( v );
* // returns 4.0
*/
declare function resolveGetter( x: Complex64Array ): GetComplex64;

/**
* Returns an accessor function for retrieving an element from an `Int32Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Int32Array = require( `@stdlib/array/int32` );
*
* var arr = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter( x: Int32Array ): GetInt32;

/**
* Returns an accessor function for retrieving an element from an `Int16Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Int16Array = require( `@stdlib/array/int16` );
*
* var arr = new Int16Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter( x: Int16Array ): GetInt16;

/**
* Returns an accessor function for retrieving an element from an `Int8Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Int8Array = require( `@stdlib/array/int8` );
*
* var arr = new Int8Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter( x: Int8Array ): GetInt8;

/**
* Returns an accessor function for retrieving an element from a `Uint32Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Uint32Array = require( `@stdlib/array/uint32` );
*
* var arr = new Uint32Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter( x: Uint32Array ): GetUint32;

/**
* Returns an accessor function for retrieving an element from a `Uint16Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Uint16Array = require( `@stdlib/array/uint16` );
*
* var arr = new Uint16Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter( x: Uint16Array ): GetUint16;

/**
* Returns an accessor function for retrieving an element from a `Uint8Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var arr = new Uint8Array( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter( x: Uint8Array ): GetUint8;

/**
* Returns an accessor function for retrieving an element from a `Uint8ClampedArray`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var Uint8ClampedArray = require( `@stdlib/array/uint8c` );
*
* var arr = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter( x: Uint8ClampedArray ): GetUint8c;

/**
* Returns an accessor function for retrieving an element from an array-like object supporting the get/set protocol.
*
* @param x - input array
* @returns accessor function
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* function aget( idx ) {
*    return arr[ idx ];
* }
*
* function aset( value, idx ) {
*    arr[ idx ] = value;
* }
*
* arr.get = aget;
* arr.set = aset;
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter<T = unknown>( x: AccessorArrayLike<T> ): GetAccessorArrayLike<T>;

/**
* Returns an accessor function for retrieving an element from a "generic" array.
*
* @param x - input array
* @returns accessor function
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter<T = unknown>( x: Array<T> ): GetGeneric<T>;

/**
* Returns an accessor function for retrieving an element from an indexed array-like object.
*
* @param x - input array
* @returns accessor function
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 3
*/
declare function resolveGetter<T = unknown>( x: Collection<T> ): GetArrayLike<T>;


// EXPORTS //

export = resolveGetter;
