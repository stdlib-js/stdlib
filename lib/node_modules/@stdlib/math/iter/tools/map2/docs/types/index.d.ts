/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Interface describing function options.
*/
interface Options {
	/**
	* Return value when an input iterator yields a non-numeric value.
	*/
	invalid?: any;
}

/**
* Function which transforms iterated numeric values.
*
* @param x - iterated value from first input iterator
* @param y - iterated value from second input iterator
* @returns result
*/
type Binary = ( x: number, y: number ) => any;

/**
* Returns an iterator which invokes a binary function accepting numeric arguments for each iterated value.
*
* ## Notes
*
* -   When invoked, the input function is provided two arguments:
*
*     -   `x`: iterated value from first input iterator
*     -   `y`: iterated value from second input iterator
*
* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
*
* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
*
* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
*
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param fcn - function which transforms iterated values
* @param options - options
* @param options.invalid - return value when an input iterator yields a non-numeric value
* @throws must provide valid options
* @returns iterator
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
* var copysign = require( `@stdlib/math/base/special/copysign` );
*
* var iter = iterMap2( randu(), randu(), copysign );
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/
declare function iterMap2( iter0: Iterator | number, iter1: Iterator | number, fcn: Binary, options?: Options ): Iterator;


// EXPORTS //

export = iterMap2;
