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

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Checks whether an iterated value passes a test.
*
* @returns boolean indicating whether an iterated value passes a test
*/
type Nullary = () => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @returns boolean indicating whether an iterated value passes a test
*/
type Unary = ( value: any ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @param i - iteration index
* @returns boolean indicating whether an iterated value passes a test
*/
type Binary = ( value: any, i: number ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @param i - iteration index
* @returns boolean indicating whether an iterated value passes a test
*/
type Predicate = Nullary | Unary | Binary;

/**
* Returns an iterator which filters a provided iterator's values according to a predicate function.
*
* ## Notes
*
* -   When invoked, the `predicate` function is provided two arguments:
*
*     -   `value`: iterated value
*     -   `index`: iteration index (zero-based)
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param predicate - predicate function
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function predicate( v ) {
*     return ( v > 2 );
* }
*
* var src = array2iterator( [ 1, 3, 2, 4 ] );
* var iter = iterFilter( src, predicate );
*
* var v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterFilter( iterator: Iterator, predicate: Predicate, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterFilter;
