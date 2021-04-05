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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';
import { ArrayLike } from '@stdlib/types/array';
import { Collection } from '@stdlib/types/object';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Map function invoked for each iterated value.
*
* @returns iterator value
*/
type Nullary = () => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @returns iterator value
*/
type Unary = ( value: any ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @returns iterator value
*/
type Binary = ( value: any, index: number ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param src - source array-like object
* @returns iterator value
*/
type Tertiary = ( value: any, index: number, src: ArrayLike<any> ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param src - source array-like object
* @returns iterator value
*/
type MapFunction = Nullary | Unary | Binary | Tertiary;

/**
* Fills an array-like object view from right to left with values returned from an iterator.
*
* @param iterator - source iterator
* @param out - output array
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @throws third argument must be an integer (starting index) or a callback function
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
* var arr = iterator2arrayviewRight( iter, new Float64Array( 20 ) );
* // returns <Float64Array>
*/
declare function iterator2arrayviewRight( iterator: Iterator, out: Collection, mapFcn?: MapFunction, thisArg?: any ): Collection; // tslint:disable-line:max-line-length

/**
* Fills an array-like object view from right to left with values returned from an iterator.
*
* @param iterator - source iterator
* @param out - output array
* @param begin - starting index (inclusive) (default: 0)
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @throws third argument must be an integer (starting index) or a callback function
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
* var arr = iterator2arrayviewRight( iter, new Float64Array( 20 ), 5 );
* // returns <Float64Array>
*/
declare function iterator2arrayviewRight( iterator: Iterator, out: Collection, begin: number, mapFcn?: MapFunction, thisArg?: any ): Collection; // tslint:disable-line:max-line-length

/**
* Fills an array-like object view from right to left with values returned from an iterator.
*
* @param iterator - source iterator
* @param out - output array
* @param begin - starting index (inclusive) (default: 0)
* @param end - ending index (non-inclusive) (default: out.length)
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @throws third argument must be an integer (starting index) or a callback function
* @throws fourth argument must be an integer (ending index) or a callback function
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
* var arr = iterator2arrayviewRight( iter, new Float64Array( 20 ), 5, 8 );
* // returns <Float64Array>
*/
declare function iterator2arrayviewRight( iterator: Iterator, out: Collection, begin: number, end: number, mapFcn?: MapFunction, thisArg?: any ): Collection; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterator2arrayviewRight;
