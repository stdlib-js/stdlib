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
type UnaryPredicate<T> = ( value: T ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @returns boolean indicating whether an element in a collection passes a test
*/
type BinaryPredicate<T> = ( value: T, index: number ) => boolean;

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type TernaryPredicate<T> = ( value: T, index: number, collection: Collection<T> ) => boolean; // tslint-disable-line max-line-length

/**
* Checks whether an element in a collection passes a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns boolean indicating whether an element in a collection passes a test
*/
type Predicate<T> = NullaryPredicate | UnaryPredicate<T> | BinaryPredicate<T> | TernaryPredicate<T>; // tslint-disable-line max-line-length

/**
* Function invoked for each collection element passing a test.
*/
type Nullary = () => void;

/**
* Function invoked for each collection element passing a test.
*
* @param value - collection value
*/
type Unary<T> = ( value: T ) => void;

/**
* Function invoked for each collection element passing a test.
*
* @param value - collection value
* @param index - collection index
*/
type Binary<T> = ( value: T, index: number ) => void;

/**
* Function invoked for each collection element passing a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
*/
type Ternary<T> = ( value: T, index: number, collection: Collection<T> ) => void; // tslint-disable-line max-line-length

/**
* Function invoked for each collection element passing a test.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
*/
type Callback<T> = Nullary | Unary<T> | Binary<T> | Ternary<T>;

/**
* While a test condition is true, invokes a function once for each element in a collection.
*
* ## Notes
*
* -   When invoked, both the predicate function and the function to apply are provided three arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* @param collection - input collection
* @param predicate - function which indicates whether to continue iterating over a collection
* @param fcn - function to invoke
* @param thisArg - execution context for the applied function
* @returns input collection
*
* @example
* function predicate( v, index, collection ) {
*     return ( v === v );
* }
*
* function log( v, index, collection ) {
*     console.log( '%s: %d', index, v );
* }
*
* var arr = [ 1, 2, 3, 4, NaN, 5 ];
*
* whileEach( arr, predicate, log );
*/
declare function whileEach<T = any>( collection: Collection<T>, predicate: Predicate<T>, fcn: Callback<T>, thisArg?: any ): Collection<T>; // tslint-disable-line max-line-length


// EXPORTS //

export = whileEach;
