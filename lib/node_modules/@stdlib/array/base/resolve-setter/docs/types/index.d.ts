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

import { ComplexLike } from '@stdlib/types/complex';
import { Collection, Complex64Array, Complex128Array, AccessorArrayLike } from '@stdlib/types/array';

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
* Sets an element in a `Complex128Array`.
*
* @param
arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetComplex128 = ( arr: Complex128Array, idx: number, value: ComplexLike ) => void;

/**
* Sets an element in a `Complex64Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetComplex64 = ( arr: Complex64Array, idx: number, value: ComplexLike ) => void;

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
* Sets an element in an array-like object supporting the get/set protocol.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetAccessorArrayLike<T> = ( arr: AccessorArrayLike<T>, idx: number, value: T ) => void;

/**
* Returns an accessor function for setting an element in a `Float64Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10.0 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10.0
*/
declare function resolveSetter( x: Float64Array ): SetFloat64;

/**
* Returns an accessor function for setting an element in a `Float32Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Float32Array = require( '@stdlib/array/float32' );
*
* var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10.0 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10.0
*/
declare function resolveSetter( x: Float32Array ): SetFloat32;

/**
* Returns an accessor function for setting an element in a `Complex128Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/array/real' );
* var imag = require( '@stdlib/array/imag' );
*
* var arr = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var set = resolveSetter( arr );
* set( arr, 1, new Complex128( 10.0, 11.0 ) );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 10.0
*
* var im = imag( v );
* // returns 11.0
*/
declare function resolveSetter( x: Complex128Array ): SetComplex128;

/**
* Returns an accessor function for setting an element in a `Complex64Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/array/realf' );
* var imagf = require( '@stdlib/array/imagf' );
*
* var arr = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var set = resolveSetter( arr );
* set( arr, 1, new Complex64( 10.0, 11.0 ) );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 10.0
*
* var im = imagf( v );
* // returns 11.0
*/
declare function resolveSetter( x: Complex64Array ): SetComplex64;

/**
* Returns an accessor function for setting an element in an `Int32Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Int32Array = require( '@stdlib/array/int32' );
*
* var arr = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter( x: Int32Array ): SetInt32;

/**
* Returns an accessor function for setting an element in an `Int16Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Int16Array = require( '@stdlib/array/int16' );
*
* var arr = new Int16Array( [ 1, 2, 3, 4 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter( x: Int16Array ): SetInt16;

/**
* Returns an accessor function for setting an element in an `Int8Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Int8Array = require( '@stdlib/array/int8' );
*
* var arr = new Int8Array( [ 1, 2, 3, 4 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter( x: Int8Array ): SetInt8;

/**
* Returns an accessor function for setting an element in a `Uint32Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var arr = new Uint32Array( [ 1, 2, 3, 4 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter( x: Uint32Array ): SetUint32;

/**
* Returns an accessor function for setting an element in a `Uint16Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var arr = new Uint16Array( [ 1, 2, 3, 4 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter( x: Uint16Array ): SetUint16;

/**
* Returns an accessor function for setting an element in a `Uint8Array`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var arr = new Uint8Array( [ 1, 2, 3, 4 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter( x: Uint8Array ): SetUint8;

/**
* Returns an accessor function for setting an element in a `Uint8ClampedArray`.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var arr = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter( x: Uint8ClampedArray ): SetUint8c;

/**
* Returns an accessor function for setting an element in an array-like object supporting the get/set protocol.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
*
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
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter<T = unknown>( x: AccessorArrayLike<T> ): SetAccessorArrayLike<T>;

/**
* Returns an accessor function for setting an element in a "generic" array.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
*
* var arr = [ 1, 2, 3, 4 ];
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter<T = unknown>( x: Array<T> ): SetGeneric<T>;

/**
* Returns an accessor function for setting an element in an indexed array-like object.
*
* @param x - input array
* @returns accessor function
*
* @example
* var resolveGetter = require( '@stdlib/array/base/resolve-getter' );
*
* var arr = [ 1, 2, 3, 4 ];
*
* var set = resolveSetter( arr );
* set( arr, 2, 10 );
*
* var get = resolveGetter( arr );
* var v = get( arr, 2 );
* // returns 10
*/
declare function resolveSetter<T = unknown>( x: Collection<T> ): SetArrayLike<T>;


// EXPORTS //

export = resolveSetter;
