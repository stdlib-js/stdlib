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

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Number of iterations.
	*/
	iter?: number;

	/**
	* Iteration direction (default: 1).
	*/
	dir?: number;
}

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
* @param n - iteration count
* @returns iterator value
*/
type Tertiary = ( value: any, index: number, n: number ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param n - iteration count
* @param src - source array-like object
* @returns iterator value
*/
type Quaternary = ( value: any, index: number, n: number, src: ArrayLike<any> ) => any; // tslint-disable-line max-line-length

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param n - iteration count
* @param src - source array-like object
* @returns iterator value
*/
type MapFunction = Nullary | Unary | Binary | Tertiary | Quaternary;

/**
* Returns an iterator which repeatedly iterates over each element in an array-like object.
*
* @param src - input value
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @throws must provide valid options
* @returns iterator
*
* @example
* var iter = circarray2iterator( [ 1, 2, 3, 4 ] );
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
declare function circarray2iterator( src: ArrayLike<any>, mapFcn?: MapFunction, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length

/**
* Returns an iterator which repeatedly iterates over each element in an array-like object.
*
* @param src - input value
* @param options - function options
* @param options.iter - number of iterations
* @param options.dir - iteration direction
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @throws must provide valid options
* @returns iterator
*
* @example
* var opts = {
*     'dir': -1
* };
* var it = circarray2iterator( [ 1, 2, 3, 4 ], opts );
* // returns <Object>
*
* var v = it.next().value;
* // returns 4
*
* v = it.next().value;
* // returns 3
*
* v = it.next().value;
* // returns 2
*/
declare function circarray2iterator( src: ArrayLike<any>, options: Options, mapFcn?: MapFunction, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = circarray2iterator;
