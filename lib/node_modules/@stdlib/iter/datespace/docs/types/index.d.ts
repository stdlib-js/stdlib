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
* Interface defining function options.
*/
interface Options {
	/**
	* Specifies how sub-millisecond times should be rounded: 'floor', 'ceil', or 'round'.
	*/
	round?: string;
}

/**
* Returns an iterator which returns evenly spaced dates over a specified interval.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param start - starting date as either a `Date` object, JavaScript timestamp, or a date string (inclusive)
* @param stop - stopping date as either a `Date` object, JavaScript timestamp, or a date string (inclusive)
* @param N - number of values (default: 100)
* @param options - function options
* @param options.round - specifies how sub-millisecond times should be rounded: 'floor', 'ceil', or 'round' (default: 'floor')
* @throws a numeric `start` argument must be a nonnegative integer
* @throws a numeric `stop` argument must be a nonnegative integer
* @throws unable to parse date string
* @throws `N` must be a nonnegative integer
* @throws must provide valid options
* @returns iterator
*
* @example
* var start = new Date();
* var iter = iterDatespace( start, new Date( start.getTime()+86400000 ), 100 );
*
* var v = iter.next().value;
* // returns <Date>
*
* v = iter.next().value;
* // returns <Date>
*
* v = iter.next().value;
* // returns 2
*
* // ...
*/
declare function iterDatespace( start: number | string | Date, stop: number | string | Date, N?: number, options?: Options ): Iterator; // tslint:disable-line: max-length

/**
* Returns an iterator which returns evenly spaced dates over a specified interval.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param start - starting date as either a `Date` object, JavaScript timestamp, or a date string (inclusive)
* @param stop - stopping date as either a `Date` object, JavaScript timestamp, or a date string (inclusive)
* @param options - function options
* @param options.round - specifies how sub-millisecond times should be rounded: 'floor', 'ceil', or 'round' (default: 'floor' )
* @throws a numeric `start` argument must be a nonnegative integer
* @throws a numeric `stop` argument must be a nonnegative integer
* @throws unable to parse date string
* @throws must provide valid options
* @returns iterator
*
* @example
* var start = new Date();
* var iter = iterDatespace( start, new Date( start.getTime()+86400001 ), {
*     'round': 'floor'
* });
*
* var v = iter.next().value;
* // returns <Date>
*
* v = iter.next().value;
* // returns <Date>
*
* v = iter.next().value;
* // returns <Date>
*
* // ...
*/
declare function iterDatespace( start: number | string | Date, stop: number | string | Date, options?: Options ): Iterator; // tslint:disable-line: max-length


// EXPORTS //

export = iterDatespace;
