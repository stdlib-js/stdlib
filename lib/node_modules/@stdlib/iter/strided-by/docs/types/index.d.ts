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
* Callback function which returns the next stride.
*
* @returns callback result
*/
type Nullary = () => number;

/**
* Callback function which returns the next stride.
*
* @param value - iterated value
* @returns callback result
*/
type Unary = ( value: any ) => number;

/**
* Callback function which returns the next stride.
*
* @param value - iterated value
* @param i - input iteration index
* @returns callback result
*/
type Binary = ( value: any, i: number ) => number;

/**
* Callback function which returns the next stride.
*
* @param value - iterated value
* @param i - input iteration index
* @param n - output (strided) iteration index
* @returns callback result
*/
type Ternary = ( value: any, i: number, n: number ) => number;

/**
* Callback function which returns the next stride.
*
* @param value - iterated value
* @param i - input iteration index
* @param n - output (strided) iteration index
* @param curr - current stride
* @returns callback result
*/
type Quaternary = ( value: any, i: number, n: number, curr: number ) => number;

/**
* Callback function which returns the next stride.
*
* @param value - iterated value
* @param i - input iteration index
* @param n - output (strided) iteration index
* @param curr - current stride
* @returns callback result
*/
type Callback = Nullary | Unary | Binary | Ternary | Quaternary;

/**
* Returns an iterator which steps according to a callback function.
*
* ## Notes
*
* -   When invoked, the callback function is provided four arguments:
*
*     -   `value`: iterated value
*     -   `i`: input iteration index (zero-based)
*     -   `n`: output (strided) iteration index (zero-based)
*     -   `curr`: current stride
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param fcn - callback function which returns the next stride
* @param offset - offset
* @param eager - boolean indicating whether to eagerly advance an input iterator when provided a non-zero `offset` (default: false)
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var arr = array2iterator( [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
*
* function stride( v, i ) {
*     return (i % 10) + 1;
* }
*
* var iter = iterStridedBy( arr, stride, 1, true );
*
* var r = iter.next().value;
* // returns 1
*
* r = iter.next().value;
* // returns 2
*
* r = iter.next().value;
* // returns 4
*
* // ...
*/
declare function iterStridedBy( iterator: Iterator, fcn: Callback, offset?: number, eager?: boolean, thisArg?: any ): Iterator;

/**
* Returns an iterator which steps according to a callback function.
*
* ## Notes
*
* -   When invoked, the callback function is provided four arguments:
*
*     -   `value`: iterated value
*     -   `i`: input iteration index (zero-based)
*     -   `n`: output (strided) iteration index (zero-based)
*     -   `curr`: current stride
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param fcn - callback function which returns the next stride
* @param offset - offset
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var arr = array2iterator( [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
*
* function stride( v, i ) {
*     return (i % 10) + 1;
* }
*
* var iter = iterStridedBy( arr, stride, 1 );
*
* var r = iter.next().value;
* // returns 1
*
* r = iter.next().value;
* // returns 2
*
* r = iter.next().value;
* // returns 4
*
* // ...
*/
declare function iterStridedBy( iterator: Iterator, fcn: Callback, offset?: number, thisArg?: any ): Iterator;

/**
* Returns an iterator which steps according to a callback function.
*
* ## Notes
*
* -   When invoked, the callback function is provided four arguments:
*
*     -   `value`: iterated value
*     -   `i`: input iteration index (zero-based)
*     -   `n`: output (strided) iteration index (zero-based)
*     -   `curr`: current stride
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param fcn - callback function which returns the next stride
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var arr = array2iterator( [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
*
* function stride( v, i ) {
*     return (i % 10) + 1;
* }
*
* var iter = iterStridedBy( arr, stride, null );
*
* var r = iter.next().value;
* // returns 0
*
* r = iter.next().value;
* // returns 1
*
* r = iter.next().value;
* // returns 2
*
* // ...
*/
declare function iterStridedBy( iterator: Iterator, fcn: Callback, thisArg?: any ): Iterator;


// EXPORTS //

export = iterStridedBy;
