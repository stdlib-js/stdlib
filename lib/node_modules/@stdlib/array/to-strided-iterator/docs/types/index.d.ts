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
* @param n - iteration count (zero-based)
* @returns iterator value
*/
type Tertiary = ( value: any, index: number, n: number ) => any;

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param n - iteration count (zero-based)
* @param src - source array-like object
* @returns iterator value
*/
type Quaternary = ( value: any, index: number, n: number, src: ArrayLike<any> ) => any; // tslint:disable-line:max-line-length

/**
* Map function invoked for each iterated value.
*
* @param value - iterated value
* @param index - iterated value index
* @param n - iteration count (zero-based)
* @param src - source array-like object
* @returns iterator value
*/
type MapFunction = Nullary | Unary | Binary | Tertiary | Quaternary;

/**
* Returns an iterator which iterates over elements in an array-like object according to specified stride parameters.
*
* @param N - number of values to iterate
* @param src - input value
* @param stride - stride length
* @param offset - starting index
* @param mapFcn - function to invoke for each iterated value
* @param thisArg - execution context
* @throws first argument must be a nonnegative integer
* @throws third argument must be an integer
* @throws fourth argument must be a nonnegative integer
* @returns iterator
*
* @example
* var values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
*
* var N = 4;
* var stride = -2;
* var offset = 6;
*
* var iter = stridedarray2iterator( N, values, stride, offset );
*
* var v = iter.next().value;
* // returns 7
*
* v = iter.next().value;
* // returns 5
*
* v = iter.next().value;
* // returns 3
*
* // ...
*/
declare function stridedarray2iterator( N: number, src: ArrayLike<any>, stride: number, offset: number, mapFcn?: MapFunction, thisArg?: any ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = stridedarray2iterator;
