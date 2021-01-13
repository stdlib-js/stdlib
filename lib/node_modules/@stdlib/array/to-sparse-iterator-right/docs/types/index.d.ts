/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';
import { ArrayLike } from '@stdlib/types/array';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Map function invoked for each iterated value.
*
* @returns iterator value
*/
type Nullary = () => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @returns iterator value
*/
type Unary = ( value: any ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @returns iterator value
*/
type Binary = ( value: any, index: number ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param src - source array-like object
* @returns iterator value
*/
type Tertiary = ( value: any, index: number, src: ArrayLike<any> ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param src - source array-like object
* @returns iterator value
*/
type MapFunction = Nullary | Unary | Binary | Tertiary;

/**
* Returns an iterator which iterates from right to left over each element in a sparse array-like object.
*
* ## Notes
*
* -   For dynamic array resizing, the only behavior made intentionally consistent with iterating from left to right is when elements are pushed onto the beginning (end) of an array. In other words, iterating from left to right combined with `[].push()` is consistent with iterating from right to left combined with `[].unshift()`.
*
* @param src - input value
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @returns iterator
*
* @example
* var iter = sparsearray2iteratorRight( [ 1, , 3, 4 ] );
*
* var v = iter.next().value;
* // returns 4
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 1
*/
declare function sparsearray2iteratorRight( src: ArrayLike<any>, mapFcn?: MapFunction, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = sparsearray2iteratorRight;
