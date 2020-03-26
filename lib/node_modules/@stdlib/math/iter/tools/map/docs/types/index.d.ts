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

// TypeScript Version: 2.0

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
* Function which transforms an iterated numeric value.
*
* @param value - iterated value
* @returns result
*/
type Unary = ( value: number ) => any;

/**
* Returns an iterator which invokes a unary function accepting a single numeric argument for each iterated value.
*
* ## Notes
*
* -   When invoked, the input function is provided one argument:
*
*     -   `value`: iterated value
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param fcn - function which transforms an iterated value
* @param options - options
* @param options.invalid - return value when an input iterator yields a non-numeric value
* @throws must provide valid options
* @returns iterator
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
* var sin = require( `@stdlib/math/base/special/sin` );
*
* var iter = iterMap( randu(), sin );
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
declare function iterMap( iterator: Iterator, fcn: Unary, options?: Options ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterMap;
