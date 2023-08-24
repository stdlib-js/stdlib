/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Function invoked for each collection element.
*/
type Nullary<U> = ( this: U ) => void;

/**
* Function invoked for each collection element.
*
* @param value - collection value
*/
type Unary<T, U> = ( this: U, value: T ) => void;

/**
* Function invoked for each collection element.
*
* @param value - collection value
* @param index - collection index
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => void;

/**
* Function invoked for each collection element.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
*/
type Ternary<T, U> = ( this: U, value: T, index: number, collection: Collection<T> ) => void;

/**
* Function invoked for each collection element.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
*/
type Callback<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Invokes a function once for each element in a collection, iterating from right to left.
*
* ## Notes
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with `forEach` (iterating from left to right) is when elements are pushed onto the beginning (end) of an array. In other words, for `forEach()`, `[].push()` behavior is consistent with `forEachRight()` `[].unshift()` behavior.
*
* -   When invoked, the input function is provided three arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* @param collection - input collection
* @param fcn - function to invoke
* @param thisArg - execution context
* @returns input collection
*
* @example
* function log( v, index, collection ) {
*     console.log( '%s: %d', index, v );
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* forEachRight( arr, log );
*/
declare function forEachRight<T = unknown, U = unknown>( collection: Collection<T>, fcn: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): Collection<T>;


// EXPORTS //

export = forEachRight;
