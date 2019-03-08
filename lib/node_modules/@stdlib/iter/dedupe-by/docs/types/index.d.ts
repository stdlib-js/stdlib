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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Indicates whether an iterated value is a "duplicate".
*
* @returns resolved value
*/
type Nullary = () => any;

/**
* Indicates whether an iterated value is a "duplicate".
*
* @param curr - current source iterated value
* @returns resolved value
*/
type Unary = ( curr: any ) => any;

/**
* Indicates whether an iterated value is a "duplicate".
*
* @param curr - current source iterated value
* @param sprev - previous source iterated value
* @returns resolved value
*/
type Binary = ( curr: any, sprev: any ) => any;

/**
* Indicates whether an iterated value is a "duplicate".
*
* @param curr - current source iterated value
* @param sprev - previous source iterated value
* @param dprev - previous downstream iterated value
* @returns resolved value
*/
type Ternary = ( curr: any, sprev: any, dprev: any ) => any;

/**
* Indicates whether an iterated value is a "duplicate".
*
* @param curr - current source iterated value
* @param sprev - previous source iterated value
* @param dprev - previous downstream iterated value
* @param index - source iteration index (zero-based)
* @returns resolved value
*/
type Quaternary = ( curr: any, sprev: any, dprev: any, index: number ) => any;

/**
* Indicates whether an iterated value is a "duplicate".
*
* @param curr - current source iterated value
* @param sprev - previous source iterated value
* @param dprev - previous downstream iterated value
* @param index - source iteration index (zero-based)
* @param acc - previous resolved value
* @returns resolved value
*/
type Quinary = ( curr: any, sprev: any, dprev: any, index: number, acc: any ) => any; // tslint:disable-line: max-length

/**
* Indicates whether an iterated value is a "duplicate".
*
* @param curr - current source iterated value
* @param prev - previous iterated value
* @param index - iteration index (zero-based)
* @param acc - previous resolved value
* @returns resolved value
*/
type Callback = Nullary | Unary | Binary | Ternary | Quaternary | Quinary;

/**
* Returns an iterator which removes consecutive values that resolve to the same value according to a provided function.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator` and a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param fcn - function indicating whether an iterated value is a "duplicate"
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function fcn( v ) {
*     return v;
* }
*
* var arr = array2iterator( [ 1, 1, 2, 3, 3 ] );
* var iter = iterDedupeBy( arr, fcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* // ...
*/
declare function iterDedupeBy( iterator: Iterator, fcn: Callback ): Iterator;

/**
* Returns an iterator which removes consecutive values that resolve to the same value according to a provided function.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator` and a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param limit - number of allowed consecutive duplicates
* @param fcn - function indicating whether an iterated value is a "duplicate"
* @throws `limit` must be a positive integer
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* function fcn( v ) {
*     return v;
* }
*
* var arr = array2iterator( [ 1, 1, 2, 3, 3 ] );
* var iter = iterDedupeBy( arr, 1, fcn );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 3
*
* // ...
*/
declare function iterDedupeBy( iterator: Iterator, limit: number, fcn: Callback ): Iterator; // tslint:disable-line: max-length


// EXPORTS //

export = iterDedupeBy;
