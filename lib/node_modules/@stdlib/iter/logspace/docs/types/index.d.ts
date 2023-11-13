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
	* Base of the log space.
	*/
	base?: number;
}

/**
* Returns an iterator which returns evenly spaced numbers on a log scale.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param start - exponent of starting value (inclusive)
* @param stop - exponent of stopping value (inclusive)
* @param N - number of values (default: 100)
* @param options - function options
* @param options.base - base of log space (default: 10)
* @throws `N` must be a nonnegative integer
* @throws `base` option must be a positive number
* @returns iterator
*
* @example
* var iter = iterLogspace( 0, 1000, 4 );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 10
*
* v = iter.next().value;
* // returns 100
*
* // ...
*/
declare function iterLogspace( start: number, stop: number, N?: number, options?: Options ): Iterator;

/**
* Returns an iterator which returns evenly spaced numbers on a log scale.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param start - exponent of starting value (inclusive)
* @param stop - exponent of stopping value (inclusive)
* @param options - function options
* @param options.base - base of log space (default: 10)
* @throws `base` option must be a positive number
* @returns iterator
*
* @example
* var opts = {
*     'base': 2
* };
* var iter = iterLogspace( 0, 99, opts );
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
* // ...
*/
declare function iterLogspace( start: number, stop: number, options?: Options ): Iterator;


// EXPORTS //

export = iterLogspace;
