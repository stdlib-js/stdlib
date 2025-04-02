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

import { typedndarray, complexndarray, genericndarray } from '@stdlib/types/ndarray';

/**
* Callback invoked for each ndarray element.
*
* @returns fill value
*/
type Nullary<U, ThisArg> = ( this: ThisArg ) => U;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @returns fill value
*/
type Unary<T, U, ThisArg> = ( this: ThisArg, value: T ) => U;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @returns fill value
*/
type Binary<T, U, ThisArg> = ( this: ThisArg, value: T, indices: Array<number> ) => U;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns fill value
*/
type Ternary<T, U, V, ThisArg> = ( this: ThisArg, value: T, indices: Array<number>, arr: V ) => U;

/**
* Callback invoked for each ndarray element.
*
* @param value - current array element
* @param indices - current array element indices
* @param arr - input array
* @returns fill value
*/
type Callback<T, U, V, ThisArg> = Nullary<U, ThisArg> | Unary<T, U, ThisArg> | Binary<T, U, ThisArg> | Ternary<T, U, V, ThisArg>;

/**
* Fills an input ndarray according to a callback function.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* function fcn() {
*     return new Complex128( 10.0, 0.0 );
* }
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'complex128'
* });
*
* fillBy( x, fcn );
*
* console.log( getData( x ) );
* // => <Complex128Array>[ 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0, 10.0, 0.0 ]
*/
declare function fillBy<T = unknown, U = unknown, V extends complexndarray = complexndarray, ThisArg = unknown>( x: V, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): V;

/**
* Fills an input ndarray according to a callback function.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* function fcn() {
*     return 10.0;
* }
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'generic'
* });
*
* fillBy( x, fcn );
*
* console.log( getData( x ) );
* // => [ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
*/
declare function fillBy<T = unknown, U = unknown, V extends genericndarray<T> = genericndarray<T>, ThisArg = unknown>( x: V, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): V;

/**
* Fills an input ndarray according to a callback function.
*
* @param x - input ndarray
* @param fcn - callback function
* @param thisArg - callback function execution context
* @returns input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
*
* function fcn() {
*     return 10.0;
* }
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'float64'
* });
*
* fillBy( x, fcn );
*
* console.log( getData( x ) );
* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
*/
declare function fillBy<T = unknown, U = unknown, V extends typedndarray<T> = typedndarray<T>, ThisArg = unknown>( x: V, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): V;


// EXPORTS //

export = fillBy;
