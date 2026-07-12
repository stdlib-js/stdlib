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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Returns an accessed value.
*
* @returns accessed value
*/
type Nullary<ThisArg> = ( this: ThisArg ) => number | void;

/**
* Returns an accessed value.
*
* @param value - current array element
* @returns accessed value
*/
type Unary<T, ThisArg> = ( this: ThisArg, value: T ) => number | void;

/**
* Returns an accessed value.
*
* @param value - current array element
* @param index - current array index
* @returns accessed value
*/
type Binary<T, ThisArg> = ( this: ThisArg, value: T, index: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - current array element
* @param index - current array index
* @param array - input array
* @returns accessed value
*/
type Ternary<T, U, ThisArg> = ( this: ThisArg, value: T, index: number, array: U ) => number | void;

/**
* Returns an accessed value.
*
* @param value - current array element
* @param index - current array index
* @param array - input array
* @returns accessed value
*/
type Callback<T, U, ThisArg> = Nullary<ThisArg> | Unary<T, ThisArg> | Binary<T, ThisArg> | Ternary<T, U, ThisArg>;

/**
* Computes the maximum value of an array via a callback function.
*
* @param x - input array
* @param clbk - callback
* @param thisArg - execution context
* @returns maximum value
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var v = maxBy( x, accessor );
* // returns 8.0
*/
declare function maxBy<T = unknown, U extends InputArray<T> = InputArray<T>, ThisArg = unknown>( x: U, clbk: Callback<T, U, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, ThisArg>> ): number;


// EXPORTS //

export = maxBy;
