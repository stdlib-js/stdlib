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

import { TypedIterator, TypedIterableIterator } from '@stdlib/types/iter';
import { Collection } from '@stdlib/types/object';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator<T> = TypedIterator<T> | TypedIterableIterator<T>;

/**
* Map function invoked for each iterated value.
*
* @returns iterator value
*/
type Nullary<U> = () => U;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @returns iterator value
*/
type Unary<T, U> = ( value: T ) => U;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @returns iterator value
*/
type Binary<T, U> = ( value: T, index: number ) => U;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param src - source array-like object
* @returns iterator value
*/
type Ternary<T, U> = ( value: T, index: number, src: Collection<U> ) => U;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param src - source array-like object
* @returns iterator value
*/
type MapFunction<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Fills an array-like object view with values returned from an iterator.
*
* @param iterator - source iterator
* @param out - output array
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @returns output array
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
* var Float64Array = require( `@stdlib/array/float64` );
*
* var iter = randu({
*     'iter': 10
* });
*
* var arr = iterator2arrayview( iter, new Float64Array( 20 ) );
* // returns <Float64Array>
*/
declare function iterator2arrayview<T = any, U = T>( iterator: Iterator<T>, out: Collection<U>, mapFcn?: MapFunction<T, U>, thisArg?: any ): Collection<U>;

/**
* Fills an array-like object view with values returned from an iterator.
*
* @param iterator - source iterator
* @param out - output array
* @param begin - starting index (inclusive) (default: 0)
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @returns output array
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
* var Float64Array = require( `@stdlib/array/float64` );
*
* var iter = randu({
*     'iter': 10
* });
*
* var arr = iterator2arrayview( iter, new Float64Array( 20 ), 5 );
* // returns <Float64Array>
*/
declare function iterator2arrayview<T = any, U = T>( iterator: Iterator<T>, out: Collection<U>, begin: number, mapFcn?: MapFunction<T, U>, thisArg?: any ): Collection<U>;

/**
* Fills an array-like object view with values returned from an iterator.
*
* @param iterator - source iterator
* @param out - output array
* @param begin - starting index (inclusive) (default: 0)
* @param end - ending index (non-inclusive) (default: out.length)
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @returns output array
*
* @example
* var randu = require( `@stdlib/random/iter/randu` );
* var Float64Array = require( `@stdlib/array/float64` );
*
* var iter = randu({
*     'iter': 10
* });
*
* var arr = iterator2arrayview( iter, new Float64Array( 20 ), 5, 8 );
* // returns <Float64Array>
*/
declare function iterator2arrayview<T = any, U = T>( iterator: Iterator<T>, out: Collection<U>, begin: number, end: number, mapFcn?: MapFunction<T, U>, thisArg?: any ): Collection<U>;


// EXPORTS //

export = iterator2arrayview;
