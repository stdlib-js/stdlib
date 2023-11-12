/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import { Collection } from '@stdlib/types/array';

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
* Returns an accessor function for retrieving an element from a `Float64Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var arr = new Float64Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'float64' );
* var v = get( arr, 2 );
* // returns 3.0
*/
declare function getter( dtype: 'float64' ): GetFloat64;

/**
* Returns an accessor function for retrieving an element from a `Float32Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var arr = new Float32Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'float32' );
* var v = get( arr, 2 );
* // returns 3.0
*/
declare function getter( dtype: 'float32' ): GetFloat32;

/**
* Returns an accessor function for retrieving an element from an `Int32Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Int32Array = require( `@stdlib/array/int32` );
*
* var arr = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'int32' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter( dtype: 'int32' ): GetInt32;

/**
* Returns an accessor function for retrieving an element from an `Int16Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Int16Array = require( `@stdlib/array/int16` );
*
* var arr = new Int16Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'int16' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter( dtype: 'int16' ): GetInt16;

/**
* Returns an accessor function for retrieving an element from an `Int8Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Int8Array = require( `@stdlib/array/int8` );
*
* var arr = new Int8Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'int8' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter( dtype: 'int8' ): GetInt8;

/**
* Returns an accessor function for retrieving an element from a `Uint32Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Uint32Array = require( `@stdlib/array/uint32` );
*
* var arr = new Uint32Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'uint32' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter( dtype: 'uint32' ): GetUint32;

/**
* Returns an accessor function for retrieving an element from a `Uint16Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Uint16Array = require( `@stdlib/array/uint16` );
*
* var arr = new Uint16Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'uint16' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter( dtype: 'uint16' ): GetUint16;

/**
* Returns an accessor function for retrieving an element from a `Uint8Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var arr = new Uint8Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'uint8' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter( dtype: 'uint8' ): GetUint8;

/**
* Returns an accessor function for retrieving an element from a `Uint8ClampedArray`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Uint8ClampedArray = require( `@stdlib/array/uint8c` );
*
* var arr = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
*
* var get = getter( 'uint8c' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter( dtype: 'uint8c' ): GetUint8c;

/**
* Returns an accessor function for retrieving an element from a "generic" array.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var arr = [ 1, 2, 3, 4 ];
*
* var get = getter( 'generic' );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter<T = unknown>( dtype: 'generic' ): GetGeneric<T>;

/**
* Returns an accessor function for retrieving an element from an indexed array-like object.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var dtype = require( `@stdlib/array/dtype` );
*
* var arr = [ 1, 2, 3, 4 ];
*
* var get = getter( dtype( arr ) );
* var v = get( arr, 2 );
* // returns 3
*/
declare function getter<T = unknown>( dtype: string ): GetArrayLike<T>;


// EXPORTS //

export = getter;
