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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Returns a transformed element.
*
* @param value - current array element
* @returns transformed array element
*/
type Unary<T, U, V> = ( this: U, value: T ) => V;

/**
* Returns a transformed element.
*
* @param value - current array element
* @param index - current array element index
* @returns transformed array element
*/
type Binary<T, U, V> = ( this: U, value: T, index: number ) => V;

/**
* Returns a transformed element.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns transformed array element
*/
type Ternary<T, U, V> = ( this: U, value: T, index: number, arr: Collection<T> | AccessorArrayLike<T> ) => V;

/**
* Returns a transformed element.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns transformed array element
*/
type Callback<T, U, V> = Unary<T, U, V> | Binary<T, U, V> | Ternary<T, U, V>;

/**
* Interface describing `mskrejectMap`.
*/
interface MskrejectMap {
	/**
	* Returns a new array by applying a mask and mapping the unmasked values according to a callback function.
	*
	* @param x - input array
	* @param mask - mask array
	* @param clbk - mapping function
	* @param thisArg - function context
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = mskrejectMap( x, [ 0, 1, 0, 1 ], function( val ) {
	*     return val * 2;
	* } );
	* // returns [ 2, 6 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, mask: Collection, clbk: Callback<T, U, V>, thisArg?: U ): Array<T>;

	/**
	* Applies a mask to a provided input array, maps the unmasked values according to a callback function, and assigns to elements in a provided output array.
	*
	* @param x - input array
	* @param mask - mask array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @param clbk - mapping function
	* @param thisArg - function context
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var mask = [ 1, 0, 1, 0 ];
	* var out = [ 0, 0, 0, 0 ];
	*
	* function clbk( val ) {
	*     return val * 2;
	* }
	*
	* var arr = mskrejectMap.assign( x, mask, out, -2, out.length-1, clbk );
	* // returns [ 0, 8, 0, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Collection | AccessorArrayLike<T>, mask: Collection, out: Collection<T>, stride: number, offset: number, clbk: Callback<T, U, V>, thisArg?: U ): Collection<T>;
}

/**
* Returns a new array by applying a mask and mapping the unmasked values according to a callback function.
*
* @param x - input array
* @param mask - mask array
* @param clbk - mapping function
* @param thisArg - function context
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = mskrejectMap( x, [ 0, 1, 0, 1 ], function( val ) {
*     return val * 2;
* } );
* // returns [ 2, 6 ]
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 1, 0, 1, 0 ];
* var out = [ 0, 0, 0, 0 ];
*
* function clbk( val ) {
*     return val * 2;
* }
*
* var arr = mskrejectMap.assign( x, mask, out, -2, out.length-1, clbk );
* // returns [ 0, 8, 0, 4 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare var mskrejectMap: MskrejectMap;


// EXPORTS //

export = mskrejectMap;
