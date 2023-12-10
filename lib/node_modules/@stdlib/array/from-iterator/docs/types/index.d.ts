/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { TypedIterator as Iter, TypedIterableIterator } from '@stdlib/types/iter';
import { Collection } from '@stdlib/types/array';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = Iter<T> | IterableIterator<T>;

/**
* Map function invoked for each iterated value.
*
* @returns iterator value
*/
type Nullary<U, V> = ( this: V ) => U;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @returns iterator value
*/
type Unary<T, U, V> = ( this: V, value: T ) => U;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @returns iterator value
*/
type Binary<T, U, V> = ( this: V, value: T, index: number ) => U;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @returns iterator value
*/
type MapFunction<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V>;

/**
* Creates an array from an iterator.
*
* @param iterator - source iterator
* @returns output array
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
*
* var iter = randu({
*     'iter': 10
* });
*
* var arr = iterator2array( iter );
* // returns <Array>
*/
declare function iterator2array<T = unknown>( iterator: Iterator<T> ): Array<T>;

/**
* Creates an array from an iterator.
*
* @param iterator - source iterator
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @returns output array
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
*
* function scale( v ) {
*     return v * 2.0;
* }
*
* var iter = randu({
*     'iter': 10
* });
*
* var arr = iterator2array( iter, scale );
* // returns <Array>
*/
declare function iterator2array<T = unknown, U = unknown, W = unknown>( iterator: Iterator<T>, mapFcn: MapFunction<T, U, W>, thisArg?: ThisParameterType<MapFunction<T, U, W>> ): Array<U>;

/**
* Fills an array from an iterator.
*
* @param iterator - source iterator
* @param out - output array
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var randu = require( `@stdlib/random/iter/randu` );
*
* var iter = randu({
*     'iter': 10
* });
*
* var out = new Float64Array( 10 );
* var arr = iterator2array( iter, out );
* // returns <Array>
*/
declare function iterator2array<T = unknown, U = unknown>( iterator: Iterator<T>, out: Collection<U> ): Collection<T | U>;

/**
* Fills an array from an iterator.
*
* @param iterator - source iterator
* @param out - output array
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var randu = require( `@stdlib/random/iter/randu` );
*
* function scale( v ) {
*     return v * 2.0;
* }
*
* var iter = randu({
*     'iter': 10
* });
*
* var out = new Float64Array( 10 );
* var arr = iterator2array( iter, out, scale );
* // returns <Array>
*/
declare function iterator2array<T = unknown, U = unknown, V = unknown, W = unknown>( iterator: Iterator<T>, out: Collection<V>, mapFcn: MapFunction<T, U, W>, thisArg?: ThisParameterType<MapFunction<T, U, W>> ): Collection<U | V>;


// EXPORTS //

export = iterator2array;
