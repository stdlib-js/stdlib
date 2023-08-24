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
* Callback function which both filters and maps.
*
* @returns filter result
*/
type Nullary = () => any;

/**
* Callback function which both filters and maps.
*
* @param value - iterated value
* @returns filter result
*/
type Unary = ( value: any ) => any;

/**
* Callback function which both filters and maps.
*
* @param value - iterated value
* @param i - iteration index
* @returns filter result
*/
type Binary = ( value: any, i: number ) => any;

/**
* Callback function which both filters and maps.
*
* @param value - iterated value
* @param i - iteration index
* @returns filter result
*/
type Callback = Nullary | Unary | Binary;

/**
* Returns an iterator which both filters and maps a provided iterator's values.
*
* ## Notes
*
* -   When invoked, the callback function is provided two arguments:
*
*     -   `value`: iterated value
*     -   `index`: iteration index (zero-based)
*
* -   If the callback returns `undefined`, the iterator invokes the function for the next value of the provided iterator; otherwise, the iterator returns the callback's return value.
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param fcn - callback function which both filters and maps
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function fcn( v ) {
*     if ( v > 2 ) {
*         return v * 10;
*     }
* }
*
* var src = array2iterator( [ 1, 3, 2, 4 ] );
* var iter = iterFilterMap( src, fcn );
*
* var v = iter.next().value;
* // returns 30
*
* v = iter.next().value;
* // returns 40
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterFilterMap( iterator: Iterator, fcn: Callback, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterFilterMap;
