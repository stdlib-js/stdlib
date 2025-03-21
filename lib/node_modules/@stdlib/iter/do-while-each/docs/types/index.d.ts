/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
type nullaryCallback = () => any;

/**
* Callback function invoked for each iterated value.
*
* @param value - iterated value
* @returns callback result
*/
type unaryCallback = ( value: any ) => any;

/**
* Callback function invoked for each iterated value.
*
* @param value - iterated value
* @param i - iteration index
* @returns callback result
*/
type binaryCallback = ( value: any, i: number ) => any;

/**
* Callback function invoked for each iterated value.
*
* @param value - iterated value
* @param i - iteration index
* @returns callback result
*/
type Callback = nullaryCallback | unaryCallback | binaryCallback;

/**
* Predicate function invoked for each iterated value.
*
* @returns a boolean indicating whether to continue iterating or not
*/
type nullaryPredicate = () => boolean;

/**
* Predicate function invoked for each iterated value.
*
* @param value - iterated value
* @returns a boolean indicating whether to continue iterating or not
*/
type unaryPredicate = ( value: any ) => boolean;

/**
* Predicate function invoked for each iterated value.
*
* @param value - iterated value
* @param i - iteration index
* @returns a boolean indicating whether to continue iterating or not
*/
type binaryPredicate = ( value: any, i: number ) => boolean;

/**
* Predicate function invoked for each iterated value.
*
* @param value - iterated value
* @param i - iteration index
* @returns a boolean indicating whether to continue iterating or not
*/
type Predicate = nullaryPredicate | unaryPredicate | binaryPredicate;

/**
* Returns an iterator which invokes a function for each iterated value **before** returning the iterated value until either a predicate function returns `false` or the iterator has iterated over all values.
* The condition is evaluated *after* executing the provided function; thus, fcn` *always* executes at least once.
*
* ## Notes
*
* -   When invoked, both the `predicate` and callback functions are provided two arguments:
*
*     -   **value**: iterated value
*     -   **index**: iteration index (zero-based)
*
* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
*
* @param iterator - input iterator
* @param predicate - function which indicates whether to continue iterating
* @param fcn - callback function to invoke for each iterated value
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function predicate( v ) {
*     return v < 3;
* }
*
* function assert( v, i ) {
*     if ( i > 1 ) {
*         throw new Error( 'unexpected error' );
*     }
* }
*
* var it = iterDoWhileEach( array2iterator( [ 1, 2, 3, 4 ] ), predicate, assert );
* // returns {}
*
* var r = it.next().value;
* // returns 1
*
* r = it.next().value;
* // returns 2
*
* r = it.next().value;
* // undefined
*
* // ...
*/
declare function iterDoWhileEach( iterator: Iterator, predicate: Predicate, fcn: Callback, thisArg?: any ): Iterator;


// EXPORTS //

export = iterDoWhileEach;
