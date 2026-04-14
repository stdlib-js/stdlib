/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Callback function applied to each element of an ndarray.
*
* @returns result
*/
type Nullary<ThisArg> = ( this: ThisArg ) => number | void;

/**
* Callback function applied to each element of an ndarray.
*
* @param value - current array element
* @returns result
*/
type Unary<T, ThisArg> = ( this: ThisArg, value: T ) => number | void;

/**
* Callback function applied to each element of an ndarray.
*
* @param value - current array element
* @param index - current array element index
* @returns result
*/
type Binary<T, ThisArg> = ( this: ThisArg, value: T, index: number ) => number | void;

/**
* Callback function applied to each element of an ndarray.
*
* @param value - current array element
* @param index - current array element index
* @param array - input ndarray
* @returns result
*/
type Ternary<T, U, ThisArg> = ( this: ThisArg, value: T, index: number, array: U ) => number | void;

/**
* Callback function applied to each element of an ndarray.
*
* @param value - current array element
* @param index - current array element index
* @param array - input ndarray
* @returns result
*/
type Callback<T, U, ThisArg> = Nullary<ThisArg> | Unary<T, ThisArg> | Binary<T, ThisArg> | Ternary<T, U, ThisArg>;

/**
* Computes the mid-range of a one-dimensional ndarray via a callback function, ignoring `NaN` values.
*
* @param arrays - array-like object containing an input ndarray
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns mid-range
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* function clbk( value ) {
*     return value * 2.0;
* }
*
* var xbuf = [ 1.0, -2.0, NaN, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = nanmidrangeBy( [ x ], clbk );
* // returns 0.0
*/
declare function nanmidrangeBy<T = unknown, U extends typedndarray<T> = typedndarray<T>, ThisArg = unknown>( arrays: [ U ], clbk: Callback<T, U, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, ThisArg>> ): number;


// EXPORTS //

export = nanmidrangeBy;
