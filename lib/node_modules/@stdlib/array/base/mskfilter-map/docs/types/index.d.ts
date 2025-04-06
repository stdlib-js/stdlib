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

import { Collection } from '@stdlib/types/array';

/**
* Callback invoked for each array element.
*
* @returns result
*/
type Nullary<U, V> = ( this: V ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @returns result
*/
type Unary<T, U, V> = ( this: V, value: T ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - current array element index
* @returns result
*/
type Binary<T, U, V> = ( this: V, value: T, index: number ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - current array element index
* @param array - input array
* @returns result
*/
type Ternary<T, U, V> = ( this: V, value: T, index: number, array: Collection<T> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - current array element index
* @param array - input array
* @returns result
*/
type Callback<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary<T, U, V>;

/**
* Interface describing the main export.
*/
interface Routine {
	/**
	* Returns a new array after applying a mask and a callback function to a provided input array.
	*
	* @param x - input array
	* @param mask - mask array
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* function scale( val ) {
	*     return 10 * val;
	* }
	*
	* var y = mskfilterMap( x, [ 0, 1, 0, 1 ], scale );
	* // returns [ 20, 40 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Collection<T>, mask: Collection, clbk: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Array<U>;

	/**
	* Applies a mask and a callback function to an input array and assigns results to elements in an output array.
	*
	* @param x - input array
	* @param mask - mask array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var mask = [ 0, 1, 0, 1 ];
	*
	* var out = [ 0, 0, 0, 0 ];
	*
	* function scale( x ) {
	*     return x * 10;
	* }
	*
	* var arr = mskfilterMap.assign( x, mask, out, 1, 0, scale );
	* // returns [ 20, 40, 0, 0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Collection<T>, mask: Collection, out: Collection<W>, stride: number, offset: number, clbk: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Collection<U | W>;
}

/**
* Returns a new array after applying a mask and a callback function to a provided input array.
*
* @param x - input array
* @param mask - mask array
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* function scale( val ) {
*     return 10 * val;
* }
*
* var y = mskfilterMap( x, [ 0, 1, 0, 1 ], scale );
* // returns [ 20, 40 ]
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* var out = [ 0, 0, 0, 0 ];
*
* function scale( x ) {
*     return x * 10;
* }
*
* var arr = mskfilterMap.assign( x, mask, out, 1, 0, scale );
* // returns [ 20, 40, 0, 0 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare var mskfilterMap: Routine;


// EXPORTS //

export = mskfilterMap;

