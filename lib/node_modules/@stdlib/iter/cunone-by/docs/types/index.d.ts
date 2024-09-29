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

import { TypedIterator, TypedIterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = TypedIterator<T> | TypedIterableIterator<T>;

/**
* Checks whether an iterated value passes a test.
*
* @returns boolean indicating whether an iterated value passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @returns boolean indicating whether an iterated value passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @param index - iteration index
* @returns boolean indicating whether an iterated value passes a test
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Checks whether an iterated value passes a test.
*
* @param value - iterated value
* @param index - iteration index
* @returns boolean indicating whether an iterated value passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U>;

/**
* Returns an iterator which cumulatively tests whether every iterated value fails a test implemented by a predicate function.
*
* @param iterator - source iterator
* @param predicate - predicate function
* @param thisArg - execution context
* @returns iterator
*
* @example
* var array2iterator = require( '@stdlib/array/to-iterator' );
*
* function isPositive( v ) {
*     return ( v > 0 );
* }
*
* var it = iterCuNoneBy( array2iterator( [ 0, 0, 0, 1, 0 ] ), isPositive );
*
* var v = it.next().value;
* // returns true
*
* v = it.next().value;
* // returns true
*
* v = it.next().value;
* // returns true
*
* v = it.next().value;
* // returns false
*
* v = it.next().value;
* // returns false
*/
declare function iterCuNoneBy<T, U>( iterator: Iterator<T>, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): Iterator<boolean>;


// EXPORTS //

export = iterCuNoneBy;
