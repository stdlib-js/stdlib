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
* Tests whether all elements in a collection fail a test implemented by a predicate function.
*
* ## Notes
*
* -   The predicate function is provided three arguments:
*
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* -   The function immediately returns upon encountering a truthy return value.
* -   If provided an empty collection, the function returns `true`.
*
* @param collection - input collection
* @param predicate - test function
* @param thisArg - execution context
* @returns boolean indicating whether all elements fail a test
*
* @example
* function isPositive( v ) {
*     return ( v > 0 );
* }
*
* var arr = [ -1, -2, -3, -4 ];
*
* var bool = noneBy( arr, isPositive );
* // returns true
*/
declare function noneBy( collection: Collection, predicate: Predicate, thisArg?: any ): boolean; // tslint-disable-line max-line-length


// EXPORTS //

export = noneBy;
