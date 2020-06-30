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

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Returns an iterator which performs element-wise addition of two or more iterators.
*
* ## Notes
*
* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param iterN - subsequent iterators
* @throws must provide two or more iterators
* @throws must provide iterator protocol-compliant objects
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
*
* var iter = iterAdd( it1, it2 );
*
* var v = iter.next().value;
* // returns 4.0
*
* v = iter.next().value;
* // returns 6.0
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterAdd( iter0: Iterator | number, iter1: Iterator | number, ...iterN: Array<Iterator | number> ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterAdd;
