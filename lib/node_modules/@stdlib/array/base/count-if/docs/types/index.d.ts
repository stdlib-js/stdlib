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
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element passes a test
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Ternary<T, U> = ( this: U, value: T, index: number, arr: Collection<T> | AccessorArrayLike<T> ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Counts the number of truthy values in an array.
*
* @param x - input array
* @param predicate - testing function
* @param thisArg - function context
* @returns number of values for which the provided function evaluates to true
*
* @example
* var x = [ 0, 1, 0, 1 ];
* function predicate( v ) {
*     return v > this;
* }
* var n = countIf( x, predicate, 0 );
* // returns 2
*/
declare function countIf<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): number;


// EXPORTS //

export = countIf;
