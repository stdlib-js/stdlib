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

interface Options {
	/**
	* Period (i.e., the number of iterations before a cosine wave repeats).
	*/
	period?: number;

	/**
	* Peak amplitude.
	*/
	amplitude?: number;

	/**
	* Phase offset (in units of iterations; zero-based).
	*
	* ## Notes
	*
	* -   A negative offset translates a waveform to the left.
	* -   A positive offset translates a waveform to the right.
	*/
	offset?: number;

	/**
	* Number of iterations.
	*/
	iter?: number;
}

/**
* Returns an iterator which generates a cosine wave.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param options - function options
* @param options.period - number of iterations before a cosine wave repeats (default: 10)
* @param options.amplitude - peak amplitude (default: 1.0)
* @param options.offset - phase offset (in units of iterations; default: 0)
* @param options.iter - number of iterations (default: 1e308)
* @throws `period` option must be a positive integer
* @throws `amplitude` must be a nonnegative number
* @throws `offset` option must be an integer
* @throws `iter` option must be a nonnegative integer
* @returns iterator
*
* @example
* var opts = {
*     'period': 4
* };
*
* var iter = iterCosineWave( opts );
*
* var v = iter.next().value;
* // returns 1.0
*
* v = iter.next().value;
* // returns 0.0
*
* v = iter.next().value;
* // returns -1.0
*
* // ...
*/
declare function iterCosineWave( options?: Options ): Iterator;


// EXPORTS //

export = iterCosineWave;
