/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Returns a boolean indicating which group an element in an array belongs to.
*
* @returns boolean indicating whether an element in an array should be placed in the first or second group
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Returns a boolean indicating which group an element in an array belongs to.
*
* @param value - current array element
* @returns boolean indicating whether an element in an array should be placed in the first or second group
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Returns a boolean indicating which group an element in an array belongs to.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element in an array should be placed in the first or second group
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Returns a boolean indicating which group an element in an array belongs to.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element in an array should be placed in the first or second group
*/
type Ternary<T, U> = ( this: U, value: T, index: number, arr: Collection<T> ) => boolean;

/**
* Returns a boolean indicating which group an element in an array belongs to.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element in an array should be placed in the first or second group
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Group results.
*/
type IndicesResults<T> = [ Array<T>, Array<T> ];

/**
* Splits element indices into two groups according to a predicate function.
*
* ## Notes
*
* -   If a predicate function returns a truthy value, an array value is placed in the first group; otherwise, an array value is placed in the second group.
*
* @param x - input array
* @param predicate - predicate function specifying which group an element in the input array belongs to
* @param thisArg - predicate function execution context
* @returns group results
*
* @example
* function predicate( v ) {
*     return v[ 0 ] === 'b';
* }
*
* var x = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = bifurcateIndicesBy( x, predicate );
* // returns [ [ 0, 1, 3 ], [ 2 ] ]
*/
declare function bifurcateIndicesBy<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): IndicesResults<number>;


// EXPORTS //

export = bifurcateIndicesBy;
