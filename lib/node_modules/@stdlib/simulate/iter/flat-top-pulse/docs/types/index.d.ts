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
	* Pulse period (i.e., the number of iterations until a waveform repeats).
	*/
	period?: number;

	/**
	* Pulse duration.
	*/
	duration?: number;

	/**
	* Amplitude.
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
* Returns an iterator which generates a flat top pulse waveform.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param options - function options
* @param options.period - number of iterations before a waveform repeats (default: 100)
* @param options.duration - pulse duration (default: options.period)
* @param options.amplitude - amplitude (default: 1.0)
* @param options.offset - phase offset (in units of iterations; default: 0)
* @param options.iter - number of iterations (default: 1e308)
* @throws `duration` option must be a positive integer
* @throws `period` option must be a positive integer
* @throws `offset` option must be an integer
* @throws `amplitude` option must be a positive number
* @throws `iter` option must be a nonnegative integer
* @throws `duration` option must be less than or equal to the `period`
* @throws `duration` option must be greater than 2
* @returns iterator
*
* @example
* var opts = {
*     'period': 10
* };
*
* var iter = iterFlatTopPulse( opts );
*
* var v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* v = iter.next().value;
* // returns <number>
*
* // ...
*/
declare function iterFlatTopPulse( options?: Options ): Iterator;


// EXPORTS //

export = iterFlatTopPulse;
