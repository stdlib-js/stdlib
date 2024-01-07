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
* Callback function invoked for each iterated value.
*
* @returns callback result
*/
type Nullary = () => any;

/**
* Callback function invoked for each iterated value.
*
* @param value - iterated value
* @returns callback result
*/
type Unary = ( value: any ) => any;

/**
* Callback function invoked for each iterated value.
*
* @param value - iterated value
* @param i - iteration index
* @returns callback result
*/
type Binary = ( value: any, i: number ) => any;

/**
* Callback function invoked for each iterated value.
*
* @param value - iterated value
* @param i - iteration index
* @returns callback result
*/
type Callback = Nullary | Unary | Binary;

/**
* Returns an iterator which invokes a function for each iterated value before returning the iterated value.
*
* ## Notes
*
* -   When invoked, the callback function is provided two arguments:
*
*     -   `value`: iterated value
*     -   `index`: iteration index (zero-based)
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param fcn - callback function to invoke for each iterated value
* @param thisArg - execution context
* @returns iterator
*
* @example
* var randu = require( '@stdlib/random/iter/randu' );
* var isnan = require( '@stdlib/math/base/assert/is-nan' );
*
* function assert( v ) {
*     if ( isnan( v ) ) {
*         throw new Error( 'should not be NaN' );
*     }
* }
*
* var iter = iterForEach( randu(), assert );
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
declare function iterForEach( iterator: Iterator, fcn: Callback, thisArg?: any ): Iterator;


// EXPORTS //

export = iterForEach;
