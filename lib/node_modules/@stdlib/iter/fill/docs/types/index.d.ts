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
* Returns an iterator which replaces all values from a provided iterator from a start index to an end index with a static value.
*
* ## Notes
*
* -   If `end` exceeds the length of the provided iterator, the returned iterator replaces the subsequence of iterated values starting from `begin` until the last iterated value of the provided iterator.
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param value - static (fill) value
* @param begin - start iteration index (inclusive)
* @param end - end iteration index (non-inclusive)
* @returns iterator
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
*
* var iter = iterFill( randu(), 3.14, 0, 2 );
*
* var r = iter.next().value;
* // returns 3.14
*
* r = iter.next().value;
* // returns 3.14
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/
declare function iterFill( iterator: Iterator, value: any, begin?: number, end?: number ): Iterator;


// EXPORTS //

export = iterFill;
