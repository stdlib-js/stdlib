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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type Nullary<ThisArg> = ( this: ThisArg ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element passes a test
*/
type Unary<T, ThisArg> = ( this: ThisArg, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element passes a test
*/
type Binary<T, ThisArg> = ( this: ThisArg, value: T, index: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param array - input ndarray
* @returns boolean indicating whether an element passes a test
*/
type Ternary<T, U, ThisArg> = ( this: ThisArg, value: T, index: number, array: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param array - input ndarray
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, U, ThisArg> = Nullary<ThisArg> | Unary<T, ThisArg> | Binary<T, ThisArg> | Ternary<T, U, ThisArg>;

/**
* Returns the index of the first element in a one-dimensional ndarray which passes a test implemented by a predicate function.
*
* ## Notes
*
* -   If no element passes a test implemented by a predicate function, the function returns `-1`.
*
* @param arrays - array-like object containing an input ndarray
* @param clbk - predicate function
* @param thisArg - predicate function execution context
* @returns index
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* function clbk( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = gfindIndex( [ x ], clbk );
* // returns 2
*/
declare function gfindIndex<T = unknown, U extends typedndarray<T> = typedndarray<T>, ThisArg = unknown>( arrays: [ U ], clbk: Predicate<T, U, ThisArg>, thisArg?: ThisParameterType<Predicate<T, U, ThisArg>> ): number;


// EXPORTS //

export = gfindIndex;
