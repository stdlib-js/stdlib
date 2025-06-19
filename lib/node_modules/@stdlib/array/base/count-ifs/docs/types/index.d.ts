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
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type Nullary = () => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element passes a test
*/
type Unary<T> = ( value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element passes a test
*/
type Binary<T> = ( value: T, index: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Ternary<T, U> = ( value: T, index: number, arr: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, U> = Nullary | Unary<U> | Binary<U> | Ternary<T, U>;

/**
* Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.
*
* @param x0 - input array
* @param predicate0 - predicate function
* @returns result
*
* @example
* function predicate0( v ) {
*     return v > 0;
* }
*
* var x0 = [ 0, 1, 0, 1, 1 ];
*
* var n = countIfs( x0, predicate0 );
* // returns 3
*/
declare function countIfs<T = unknown, U extends InputArray<T> = InputArray<T>>( x0: U, predicate0: Predicate<T, U> ): number;

/**
* Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.
*
* @param x0 - first input array
* @param predicate0 - first predicate function
* @param x1 - second input array
* @param predicate1 - second predicate function
* @returns result
*
* @example
* function predicate0( v ) {
*     return v > 0;
* }
*
* function predicate1( v ) {
*     return v < 0;
* }
*
* var x0 = [ 0, 1, 0, 1, 1 ];
* var x1 = [ -1, 2, 4, -5, -8 ];
*
* var n = countIfs( x0, predicate0, x1, predicate1 );
* // returns 2
*/
declare function countIfs<T = unknown, U extends InputArray<T> = InputArray<T>>( x0: U, predicate0: Predicate<T, U>, x1: U, predicate1: Predicate<T, U> ): number;

/**
* Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.
*
* @param x0 - first input array
* @param predicate0 - first predicate function
* @param x1 - second input array
* @param predicate1 - second predicate function
* @param x2 - third input array
* @param predicate2 - third predicate function
* @returns result
*
* @example
* function predicate0( v ) {
*     return v > 0;
* }
*
* function predicate1( v ) {
*     return v < 0;
* }
*
* function predicate2( v ) {
*     return v % 2 === 0;
* }
*
* var x0 = [ 0, 1, 0, 1, 1 ];
* var x1 = [ -1, -2, 4, 5, -8 ];
* var x2 = [ 0, 4, 3, 2, 12 ];
*
* var n = countIfs( x0, predicate0, x1, predicate1 );
* // returns 2
*/
declare function countIfs<T = unknown, U extends InputArray<T> = InputArray<T>>( x0: U, predicate0: Predicate<T, U>, x1: U, predicate1: Predicate<T, U>, x2: U, predicate2: Predicate<T, U> ): number;

/**
* Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.
*
* @param x0 - first input array
* @param predicate0 - first predicate function
* @param x1 - second input array
* @param predicate1 - second predicate function
* @param x2 - third input array
* @param predicate2 - third predicate function
* @param x3 - fourth input array
* @param predicate3 - fourth predicate function
* @returns result
*
* @example
* function predicate0( v ) {
*     return v > 0;
* }
*
* function predicate1( v ) {
*     return v < 0;
* }
*
* function predicate2( v ) {
*     return v % 2 === 0;
* }
*
* function predicate3( v ) {
*     return v % 2 !== 0;
* }
*
* var x0 = [ 0, 1, 0, 1, 1 ];
* var x1 = [ -1, -2, 4, 5, -8 ];
* var x2 = [ 0, 4, 3, 2, 12 ];
* var x3 = [ 2, 9, 3, 6, 5 ];
*
* var n = countIfs( x0, predicate0, x1, predicate1, x3, predicate3 );
* // returns 2
*/
declare function countIfs<T = unknown, U extends InputArray<T> = InputArray<T>>( x0: U, predicate0: Predicate<T, U>, x1: U, predicate1: Predicate<T, U>, x2: U, predicate2: Predicate<T, U>, x3: U, predicate3: Predicate<T, U> ): number;

/**
* Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.
*
* @param x0 - first input array
* @param predicate0 - first predicate function
* @param x1 - second input array
* @param predicate1 - second predicate function
* @param x2 - third input array
* @param predicate2 - third predicate function
* @param x3 - fourth input array
* @param predicate3 - fourth predicate function
* @param x4 - fifth input array
* @param predicate4 - fifth predicate function
* @param args - additional input arrays and predicate functions
* @returns result
*
* @example
* function predicate0( v ) {
*     return v > 0;
* }
*
* function predicate1( v ) {
*     return v < 0;
* }
*
* function predicate2( v ) {
*     return v % 2 === 0;
* }
*
* function predicate3( v ) {
*     return v % 2 !== 0;
* }
*
* function predicate4( v ) {
*     return v === true;
* }
*
* var x0 = [ 0, 1, 0, 1, 1 ];
* var x1 = [ -1, -2, 4, 5, -8 ];
* var x2 = [ 0, 4, 3, 2, 12 ];
* var x3 = [ 2, 9, 3, 6, 5 ];
* var x4 = [ false, true, false, true, true ]
*
* var n = countIfs( x0, predicate0, x1, predicate1, x3, predicate3, x4, predicate4 );
* // returns 2
*/
declare function countIfs<T = unknown, U extends InputArray<T> = InputArray<T>>( x0: U, predicate0: Predicate<T, U>, x1: U, predicate1: Predicate<T, U>, x2: U, predicate2: Predicate<T, U>, x3: U, predicate3: Predicate<T, U>, x4: U, predicate4: Predicate<T, U>, ...args: Array<U | Predicate<T, U>> ): number;


// EXPORTS //

export = countIfs;
