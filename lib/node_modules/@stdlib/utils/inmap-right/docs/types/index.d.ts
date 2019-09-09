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
* Returns an updated collection element.
*
* @returns updated element
*/
type Nullary = () => any;

/**
* Returns an updated collection element.
*
* @param value - collection value
* @returns updated element
*/
type Unary = ( value: any ) => any;

/**
* Returns an updated collection element.
*
* @param value - collection value
* @param index - collection index
* @returns updated element
*/
type Binary = ( value: any, index: number ) => any;

/**
* Returns an updated collection element.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns updated element
*/
type Tertiary = ( value: any, index: number, collection: Collection ) => any;

/**
* Returns an updated collection element.
*
* @param value - collection value
* @param index - collection index
* @param collection - input collection
* @returns updated element
*/
type Callback = Nullary | Unary | Binary | Tertiary;

/**
* Invokes a function once for each element in a collection and updates the collection in-place, iterating from right to left.
*
* ## Notes
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with `inmap` (iterating from left to right) is when elements are pushed onto the beginning (end) of an array. In other words, for `inmap()`, `[].push()` behavior is consistent with `inmapRight()` `[].unshift()` behavior.
*
*
* @param collection - input collection
* @param fcn - function to invoke
* @param thisArg - execution context
* @returns input collection
*
* @example
* function scale( value, index, collection ) {
*     console.log( '%s: %d', index, value );
*     return value * index;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var out = inmapRight( arr, scale );
* // returns [ 0, 2, 6, 12 ]
*
* var bool = ( out === arr );
* // returns true
*/
declare function inmapRight( collection: Collection, fcn: Callback, thisArg?: any ): Collection; // tslint-disable-line max-line-length


// EXPORTS //

export = inmapRight;
