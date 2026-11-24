/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import { Collection, AccessorArrayLike, TypedArray, ComplexTypedArray, BooleanTypedArray } from '@stdlib/types/array';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Callback invoked for each array element.
*
* @returns fill value
*/
type Nullary<V, ThisArg> = ( this: ThisArg ) => V;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @returns fill value
*/
type Unary<T, V, ThisArg> = ( this: ThisArg, value: T ) => V;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
* @returns fill value
*/
type Binary<T, V, ThisArg> = ( this: ThisArg, value: T, index: number ) => V;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns fill value
*/
type Ternary<T, U, V, ThisArg> = ( this: ThisArg, value: T, index: number, arr: U ) => V;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns fill value
*/
type Callback<T, U, V, ThisArg> = Nullary<V, ThisArg> | Unary<T, V, ThisArg> | Binary<T, V, ThisArg> | Ternary<T, U, V, ThisArg>;

/**
* Fills all elements within a portion of an array according to a provided callback function.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns modified input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* function fcn() {
*     return 4.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* var out = fillBy( x, 0, 3, fcn );
* // returns <Float64Array>[ 4.0, 4.0, 4.0 ]
*/
declare function fillBy<U extends TypedArray, ThisArg = unknown>( x: U, start: number, end: number, fcn: Callback<number, U, number, ThisArg>, thisArg?: ThisParameterType<Callback<number, U, number, ThisArg>> ): U;

/**
* Fills all elements within a portion of an array according to a provided callback function.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns modified input array
*
* @example
* var BooleanArray = require( '@stdlib/array/bool' );
*
* function fcn() {
*     return true;
* }
*
* var x = new BooleanArray( [ false, false, false ] );
*
* var out = fillBy( x, 0, 3, fcn );
* // returns <BooleanArray>[ true, true, true ]
*/
declare function fillBy<U extends BooleanTypedArray, ThisArg = unknown>( x: U, start: number, end: number, fcn: Callback<boolean, U, boolean, ThisArg>, thisArg?: ThisParameterType<Callback<boolean, U, boolean, ThisArg>> ): U; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Fills all elements within a portion of an array according to a provided callback function.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns modified input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* function fcn() {
*     return new Complex128( 7.0, 8.0 );
* }
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = fillBy( x, 0, 3, fcn );
* // returns <Complex128Array>[ 7.0, 8.0, 7.0, 8.0, 7.0, 8.0 ]
*/
declare function fillBy<U extends ComplexTypedArray, ThisArg = unknown>( x: U, start: number, end: number, fcn: Callback<ComplexLike, U, ComplexLike, ThisArg>, thisArg?: ThisParameterType<Callback<ComplexLike, U, ComplexLike, ThisArg>> ): U; // eslint-disable-line @typescript-eslint/unified-signatures

/**
* Fills all elements within a portion of an array according to a provided callback function.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns modified input array
*
* @example
* function fcn() {
*     return 4;
* }
*
* var x = [ 1, 2, 3 ];
*
* var out = fillBy( x, 0, 3, fcn );
* // returns [ 4, 4, 4 ]
*
* @example
* function fcn() {
*     return 8;
* }
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = fillBy( x, 0, 3, fcn );
* // returns [ 8, 8, 8, 4, 5, 6 ]
*/
declare function fillBy<T = unknown, V = unknown, ThisArg = unknown>( x: Array<T>, start: number, end: number, fcn: Callback<T, Array<T>, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, Array<T>, V, ThisArg>> ): Array<T | V>;

/**
* Fills all elements within a portion of an array according to a provided callback function.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns modified input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* function fcn() {
*     return 4;
* }
*
* var x = [ 1, 2, 3 ];
*
* var out = fillBy( toAccessorArray( x ), 0, 3, fcn );
* // returns [ 4, 4, 4 ]
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* function fcn() {
*     return 8;
* }
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = fillBy( toAccessorArray( x ), 0, 3, fcn );
* // returns [ 8, 8, 8, 4, 5, 6 ]
*/
declare function fillBy<T = unknown, V = unknown, ThisArg = unknown>( x: AccessorArrayLike<T>, start: number, end: number, fcn: Callback<T, AccessorArrayLike<T>, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, AccessorArrayLike<T>, V, ThisArg>> ): AccessorArrayLike<T | V>;

/**
* Fills all elements within a portion of an array according to a provided callback function.
*
* @param x - input array
* @param start - starting index (inclusive)
* @param end - ending index (exclusive)
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns modified input array
*
* @example
* function fcn() {
*     return 4;
* }
*
* var x = [ 1, 2, 3 ];
*
* var out = fillBy( x, 0, 3, fcn );
* // returns [ 4, 4, 4 ]
*
* @example
* function fcn() {
*     return 8;
* }
*
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = fillBy( x, 0, 3, fcn );
* // returns [ 8, 8, 8, 4, 5, 6 ]
*/
declare function fillBy<T = unknown, V = unknown, ThisArg = unknown>( x: Collection<T>, start: number, end: number, fcn: Callback<T, Collection<T>, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, Collection<T>, V, ThisArg>> ): Collection<T | V>;


// EXPORTS //

export = fillBy;
