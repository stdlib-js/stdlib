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
* Tests whether a value is different from a previously identified unique value.
*
* @param a - a previously identified unique value
* @param b - the value whose uniqueness is being determined
* @returns boolean indicating whether a value is different
*/
type Predicate = ( a: any, b: any ) => boolean;

/**
* Returns an iterator which returns unique values according to a predicate function.
*
* ## Notes
*
* -   A returned iterator internally buffers unique values and, thus, has `O(N)` memory requirements.
* -   A predicate function is invoked for each iterated value against each value in an internal buffer consisting of previously identified unique values. Thus, as the number of unique values grows, so, too, does the number of predicate function invocations per iterated value.
* -   An iterated value is considered "unique" if the predicate function returns truthy values for all comparisons of the iterated value with each value in the internal buffer.
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param predicate - predicate function
* @param thisArg - predicate function execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function predicate( a, b ) {
*     return ( a !== b );
* }
*
* var iter = iterUniqueBy( array2iterator( [ 1, 2, 1, 2, 4 ] ), predicate );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 4
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterUniqueBy( iterator: Iterator, predicate: Predicate, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterUniqueBy;
