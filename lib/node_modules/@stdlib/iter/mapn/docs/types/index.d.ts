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
* Callback function which transforms iterated values.
*
* @param args - iterated values and the iteration index
* @returns callback result
*/
type Callback = ( ...args: Array<any> ) => any;

/**
* Returns an iterator which transforms iterated values from two iterators by applying the iterated values as arguments to a provided function.
*
* ## Notes
*
* -   When invoked, the callback function is provided `3` arguments:
*
*     -   `value0`: iterated value from first iterator
*     -   `value1`: iterated value from second iterator
*     -   `index`: iteration index (zero-based)
*
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
*
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param fcn - callback function which transforms an iterated value
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function transform( x, y ) {
*     return x + y;
* }
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
*
* var iter = iterMapN( it1, it2, transform );
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
declare function iterMapN( iter0: Iterator, iter1: Iterator, fcn: Callback, thisArg?: any ): Iterator;

/**
* Returns an iterator which transforms iterated values from three iterators by applying the iterated values as arguments to a provided function.
*
* ## Notes
*
* -   When invoked, the callback function is provided `4` arguments:
*
*     -   `value0`: iterated value from first iterator
*     -   `value1`: iterated value from second iterator
*     -   `value2`: iterated value from third iterator
*     -   `index`: iteration index (zero-based)
*
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
*
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param iter2 - third iterator
* @param fcn - callback function which transforms an iterated value
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function transform( x, y, z ) {
*     return x + y + z;
* }
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
* var it3 = array2iterator( [ 5.0, 6.0 ] );
*
* var iter = iterMapN( it1, it2, it3, transform );
*
* var v = iter.next().value;
* // returns 9.0
*
* v = iter.next().value;
* // returns 12.0
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterMapN( iter0: Iterator, iter1: Iterator, iter2: Iterator, fcn: Callback, thisArg?: any ): Iterator;

/**
* Returns an iterator which transforms iterated values from four iterators by applying the iterated values as arguments to a provided function.
*
* ## Notes
*
* -   When invoked, the callback function is provided `5` arguments:
*
*     -   `value0`: iterated value from first iterator
*     -   `value1`: iterated value from second iterator
*     -   `value2`: iterated value from third iterator
*     -   `value3`: iterated value from fourth iterator
*     -   `index`: iteration index (zero-based)
*
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
*
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param iter2 - third iterator
* @param iter3 - fourth iterator
* @param fcn - callback function which transforms an iterated value
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function transform( x, y, z, w ) {
*     return x + y + z + w;
* }
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
* var it3 = array2iterator( [ 5.0, 6.0 ] );
* var it4 = array2iterator( [ 7.0, 8.0 ] );
*
* var iter = iterMapN( it1, it2, it3, it4, transform );
*
* var v = iter.next().value;
* // returns 16.0
*
* v = iter.next().value;
* // returns 20.0
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterMapN( iter0: Iterator, iter1: Iterator, iter2: Iterator, iter3: Iterator, fcn: Callback, thisArg?: any ): Iterator;

/**
* Returns an iterator which transforms iterated values from five iterators by applying the iterated values as arguments to a provided function.
*
* ## Notes
*
* -   When invoked, the callback function is provided `6` arguments:
*
*     -   `value0`: iterated value from first iterator
*     -   `value1`: iterated value from second iterator
*     -   `value2`: iterated value from third iterator
*     -   `value3`: iterated value from fourth iterator
*     -   `value4`: iterated value from fifth iterator
*     -   `index`: iteration index (zero-based)
*
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
*
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param iter2 - third iterator
* @param iter3 - fourth iterator
* @param iter4 - fifth iterator
* @param fcn - callback function which transforms an iterated value
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function transform( x, y, z, w, v ) {
*     return x + y + z + w + v;
* }
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
* var it3 = array2iterator( [ 5.0, 6.0 ] );
* var it4 = array2iterator( [ 7.0, 8.0 ] );
* var it5 = array2iterator( [ 9.0, 10.0 ] );
*
* var iter = iterMapN( it1, it2, it3, it4, it5, transform );
*
* var v = iter.next().value;
* // returns 25.0
*
* v = iter.next().value;
* // returns 30.0
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterMapN( iter0: Iterator, iter1: Iterator, iter2: Iterator, iter3: Iterator, iter4: Iterator, fcn: Callback, thisArg?: any ): Iterator;

/**
* Returns an iterator which transforms iterated values from two or more iterators by applying the iterated values as arguments to a provided function.
*
* ## Notes
*
* -   When invoked, the callback function is provided `N+1` arguments, where `N` is the number of provided iterators and the last argument is the iteration index:
*
*     -   `...value`: iterated values
*     -   `index`: iteration index (zero-based)
*
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
*
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param args - subsequent iterators, a callback function which transforms an iterated value, and an optional execution context
* @throws callback argument must be a function
* @throws arguments preceding the callback argument must be iterators
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function transform( x, y ) {
*     return x + y;
* }
*
* var it1 = array2iterator( [ 1.0, 2.0 ] );
* var it2 = array2iterator( [ 3.0, 4.0 ] );
*
* var iter = iterMapN( it1, it2, transform );
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
declare function iterMapN( iter0: Iterator, iter1: Iterator, ...args: Array<any> ): Iterator;


// EXPORTS //

export = iterMapN;
