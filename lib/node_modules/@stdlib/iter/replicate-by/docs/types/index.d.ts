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
* Returns the number of times an iterated value should be replicated.
*
* @returns number of times an iterated value should be replicated
*/
type Nullary = () => number;

/**
* Returns the number of times an iterated value should be replicated.
*
* @param value - iterated value
* @returns number of times an iterated value should be replicated
*/
type Unary = ( value: any ) => number;

/**
* Returns the number of times an iterated value should be replicated.
*
* @param value - iterated value
* @param index - source iteration index (zero-based)
* @returns number of times an iterated value should be replicated
*/
type Binary = ( value: any, index: number ) => number;

/**
* Returns the number of times an iterated value should be replicated.
*
* @param value - iterated value
* @param index - source iteration index (zero-based)
* @param n - iteration index (zero-based)
* @returns number of times an iterated value should be replicated
*/
type Ternary = ( value: any, index: number, n: number ) => number;

/**
* Returns the number of times an iterated value should be replicated.
*
* @param value - iterated value
* @param index - source iteration index (zero-based)
* @param n - iteration index (zero-based)
* @returns number of times an iterated value should be replicated
*/
type Callback = Nullary | Unary | Binary | Ternary;

/**
* Returns an iterator which invokes a function for each iterated value.
*
* ## Notes
*
* -   The callback function is provided three arguments:
*
*     -   `value`: iterated value
*     -   `index`: source iteration index (zero-based)
*     -   `n`: iteration index (zero-based)
*
* -   The callback function is invoked **once** per iterated value of the provided iterator.
*
* -   The callback function **must** return an integer value. If the return value is less than or equal to zero, the returned iterator skips an iterated value and invokes the callback for the next iterated value of the provided iterator.
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param fcn - callback function which returns the number of times an iterated value should be replicated
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function fcn( v, i ) {
*     return i + 1;
* }
*
* var src = array2iterator( [ 1, 2, 3, 4 ] );
* var iter = iterReplicateBy( src, fcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 3
*/
declare function iterReplicateBy( iterator: Iterator, fcn: Callback, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterReplicateBy;
