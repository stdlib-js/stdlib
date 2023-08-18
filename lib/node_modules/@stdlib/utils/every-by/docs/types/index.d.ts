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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Checks whether an element in a collection passes a test.
*
* @returns boolean indicating whether an element in a collection passes a test
*/
type Nullary = () => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @returns boolean indicating whether an element in a collection passes a test
*/
type Unary<T> = ( value: T ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type Binary<T> = ( value: T, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Ternary<T> = ( value: T, index: number, collection: Collection<T> ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Predicate<T> = Nullary | Unary<T> | Binary<T> | Ternary<T>;

/**
* Tests whether all elements in a collection pass a test implemented by a predicate function.
*
* ## Notes
*
* -   The predicate function is provided three arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* -   The function immediately returns upon encountering a non-truthy return value.
*
* -   If provided an empty collection, the function returns `true`.
*
* @param collection - input collection
* @param predicate - test function
* @param thisArg - execution context
* @returns boolean indicating whether all elements pass a test
*
* @example
* function isPositive( v ) {
*     return ( v > 0 );
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var bool = everyBy( arr, isPositive );
* // returns true
*/
declare function everyBy<T = unknown>( collection: Collection<T>, predicate: Predicate<T>, thisArg?: ThisParameterType<Predicate<T>> ): boolean;


// EXPORTS //

export = everyBy;
