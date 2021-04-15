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
* @returns iterator value
*/
type MapFunction = Nullary | Unary | Binary;

/**
* Creates (or fills) an array from an iterator.
*
* @param iterator - source iterator
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
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
declare function iterator2array( iterator: Iterator, mapFcn?: MapFunction, thisArg?: any ): Collection; // tslint:disable-line:max-line-length

/**
* Creates (or fills) an array from an iterator.
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
* var iter = randu({
*     'iter': 10
* });
*
* var out = new Float64Array( 10 );
* var arr = iterator2array( iter, out );
* // returns <Array>
*/
declare function iterator2array( iterator: Iterator, out: Collection, mapFcn?: MapFunction, thisArg?: any ): Collection; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterator2array;
