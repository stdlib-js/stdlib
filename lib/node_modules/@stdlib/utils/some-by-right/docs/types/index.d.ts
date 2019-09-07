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

import { Collection } from '@stdlib/types/object';

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
type Unary = ( value: any ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type Binary = ( value: any, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Tertiary = ( value: any, index: number, collection: Collection ) => boolean; // tslint-disable-line max-line-length

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Predicate = Nullary | Unary | Binary | Tertiary;

/**
* Tests whether a collection contains at least `n` elements which pass a test implemented by a predicate function, iterating from right to left.
*
* ## Notes
*
* -   The predicate function is provided three arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* -   The function immediately returns upon finding `n` successful elements.
*
* -   If provided an empty collection, the function returns `false`.
*
* @param collection - input collection
* @param n - number of elements
* @param predicate - test function
* @param thisArg - execution context
* @throws second argument must be a positive integer
* @returns boolean indicating whether a collection contains at least `n` elements which pass a test
*
* @example
* function isNegative( v ) {
*     return ( v < 0 );
* }
*
* var arr = [ -1, 1, -2, 3, 4 ];
*
* var bool = someByRight( arr, 2, isNegative );
* // returns true
*/
declare function someByRight( collection: Collection, n: number, predicate: Predicate, thisArg?: any ): boolean; // tslint-disable-line max-line-length


// EXPORTS //

export = someByRight;
