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
* Sets an element in a `Float64Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetFloat64 = ( arr: Float64Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Float32Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetFloat32 = ( arr: Float32Array, idx: number, value: number ) => void;

/**
* Sets an element in an `Int32Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetInt32 = ( arr: Int32Array, idx: number, value: number ) => void;

/**
* Sets an element in an `Int16Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetInt16 = ( arr: Int16Array, idx: number, value: number ) => void;

/**
* Sets an element in an `Int8Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetInt8 = ( arr: Int8Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Uint32Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetUint32 = ( arr: Uint32Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Uint16Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetUint16 = ( arr: Uint16Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Uint8Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetUint8 = ( arr: Uint8Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Uint8ClampedArray`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetUint8c = ( arr: Uint8ClampedArray, idx: number, value: number ) => void;

/**
* Sets an element in a generic `Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetGeneric<T> = ( arr: Array<T>, idx: number, value: T ) => void;

/**
* Sets an element in an indexed array-like object.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetArrayLike<T> = ( arr: Collection<T>, idx: number, value: T ) => void;

/**
* Returns an accessor function for setting an element in a `Float64Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var arr = new Float64Array( 4 );
*
* var get = setter( 'float64' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3.0
*/
declare function setter( dtype: 'float64' ): SetFloat64;

/**
* Returns an accessor function for setting an element in a `Float32Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var arr = new Float32Array( 4 );
*
* var set = setter( 'float32' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3.0
*/
declare function setter( dtype: 'float32' ): SetFloat32;

/**
* Returns an accessor function for setting an element in an `Int32Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Int32Array = require( `@stdlib/array/int32` );
*
* var arr = new Int32Array( 4 );
*
* var set = setter( 'int32' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter( dtype: 'int32' ): SetInt32;

/**
* Returns an accessor function for setting an element in an `Int16Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Int16Array = require( `@stdlib/array/int16` );
*
* var arr = new Int16Array( 4 );
*
* var set = setter( 'int16' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter( dtype: 'int16' ): SetInt16;

/**
* Returns an accessor function for setting an element in an `Int8Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Int8Array = require( `@stdlib/array/int8` );
*
* var arr = new Int8Array( 4 );
*
* var set = setter( 'int8' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter( dtype: 'int8' ): SetInt8;

/**
* Returns an accessor function for setting an element in a `Uint32Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Uint32Array = require( `@stdlib/array/uint32` );
*
* var arr = new Uint32Array( 4 );
*
* var set = setter( 'uint32' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter( dtype: 'uint32' ): SetUint32;

/**
* Returns an accessor function for setting an element in a `Uint16Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Uint16Array = require( `@stdlib/array/uint16` );
*
* var arr = new Uint16Array( 4 );
*
* var set = setter( 'uint16' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter( dtype: 'uint16' ): SetUint16;

/**
* Returns an accessor function for setting an element in a `Uint8Array`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Uint8Array = require( `@stdlib/array/uint8` );
*
* var arr = new Uint8Array( 4 );
*
* var set = setter( 'uint8' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter( dtype: 'uint8' ): SetUint8;

/**
* Returns an accessor function for setting an element in a `Uint8ClampedArray`.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var Uint8ClampedArray = require( `@stdlib/array/uint8c` );
*
* var arr = new Uint8ClampedArray( 4 );
*
* var set = setter( 'uint8c' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter( dtype: 'uint8c' ): SetUint8c;

/**
* Returns an accessor function for setting an element in a "generic" array.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var arr = [ 0, 0, 0, 0 ];
*
* var set = setter( 'generic' );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter<T = unknown>( dtype: 'generic' ): SetGeneric<T>;

/**
* Returns an accessor function for setting an element in an indexed array-like object.
*
* @param dtype - data type
* @returns accessor function
*
* @example
* var dtype = require( `@stdlib/array/dtype` );
*
* var arr = [ 0, 0, 0, 0 ];
*
* var set = setter( dtype( arr ) );
* set( arr, 2, 3 );
*
* var v = arr[ 2 ];
* // returns 3
*/
declare function setter<T = unknown>( dtype: string ): SetArrayLike<T>;


// EXPORTS //

export = setter;
