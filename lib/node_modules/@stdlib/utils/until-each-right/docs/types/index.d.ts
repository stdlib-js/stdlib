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
type NullaryPredicate = () => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @returns boolean indicating whether an element in a collection passes a test
*/
type UnaryPredicate = ( value: any ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type BinaryPredicate = ( value: any, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type TertiaryPredicate = ( value: any, index: number, collection: Collection ) => boolean; // tslint-disable-line max-line-length

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Predicate = NullaryPredicate | UnaryPredicate | BinaryPredicate | TertiaryPredicate; // tslint-disable-line max-line-length

/**
* Function invoked for each collection element until test condition is true.
*/
type Nullary = () => void;

/**
* Function invoked for each collection element until test condition is true.
*
* @param value - collection value
*/
type Unary = ( value: any ) => void;

/**
* Function invoked for each collection element until test condition is true.
*
* @param value - collection value
* @param index - collection index
*/
type Binary = ( value: any, index: number ) => void;

/**
* Function invoked for each collection element until test condition is true.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
*/
type Tertiary = ( value: any, index: number, collection: Collection ) => void;

/**
* Function invoked for each collection element until test condition is true.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
*/
type Callback = Nullary | Unary | Binary | Tertiary;

/**
* Until a test condition is true, invokes a function once for each element in a collection, iterating from right to left.
*
* ## Notes
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with `untilEach` (iterating from left to right) is when elements are pushed onto the beginning (end) of an array. In other words, for `untilEach()`, `[].push()` behavior is consistent with `untilEachRight()` `[].unshift()` behavior.
*
* -   When invoked, both the predicate function and the function to apply are provided three arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* @param collection - input collection
* @param predicate - function which indicates whether to stop iterating over a collection
* @param fcn - function to invoke
* @param thisArg - execution context for the applied function
* @returns input collection
*
* @example
* function predicate( v, index, collection ) {
*     return ( v !== v );
* }
*
* function log( v, index, collection ) {
*     console.log( '%s: %d', index, v );
* }
*
* var arr = [ 1, NaN, 2, 3, 4, 5 ];
*
* untilEachRight( arr, predicate, log );
*/
declare function untilEachRight( collection: Collection, predicate: Predicate, fcn: Callback, thisArg?: any ): Collection; // tslint-disable-line max-line-length


// EXPORTS //

export = untilEachRight;
