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
* Function applied against an accumulator.
*
* @returns accumulator value
*/
type Nullary = () => void;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @returns accumulator value
*/
type Unary = ( accumulator: any ) => any;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - collection value
* @returns accumulator value
*/
type Binary = ( accumulator: any, value: any ) => any;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @returns accumulator value
*/
type Tertiary = ( accumulator: any, value: any, index: number ) => any;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @param collection - the input collection
* @returns accumulator value
*/
type Quaternary = ( accumulator: any, value: any, index: number, collection: Collection ) => any; // tslint-disable-line max-line-length

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - collection value
* @param index - collection index
* @param collection - the input collection
* @returns accumulator value
*/
type Reducer = Nullary | Unary | Binary | Tertiary | Quaternary;

/**
* Applies a function against an accumulator and each element in a collection and returns the accumulated result, iterating from right to left.
*
* ## Notes
*
* -   When invoked, the reduction function is provided four arguments:
*
*     -   `accumulator`: accumulated value
*     -   `value`: collection value
*     -   `index`: collection index
*     -   `collection`: the input collection
*
* -   If provided an empty collection, the function returns the initial value.
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with `reduce` (iterating from left to right) is when elements are pushed onto the beginning (end) of an array. In other words, for `reduce()`, `[].push()` behavior is consistent with `reduceRight()` `[].unshift()` behavior.
*
* @param collection - input collection
* @param initial - initial value
* @param reducer - reduction function
* @param thisArg - reduction function execution context
* @returns accumulated result
*
* @example
* function sum( acc, value, index ) {
*     console.log( '%s: %d', index, value );
*     return acc + value;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var s = reduceRight( arr, 0, sum );
* // returns 10
*/
declare function reduceRight( collection: Collection, initial: any, reducer: Reducer, thisArg?: any ): any; // tslint-disable-line max-line-length


// EXPORTS //

export = reduceRight;
