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
import * as random from '@stdlib/types/random';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Pseudorandom number generator which generates uniformly distributed pseudorandom numbers on the interval `[0,1)`.
	*
	* ## Notes
	*
	* -   If provided, the `state` and `seed` options are ignored. In order to seed the returned iterator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
	*/
	prng?: random.PRNG;

	/**
	* Pseudorandom number generator state.
	*
	* ## Notes
	*
	* -   If provided, the `seed` option is ignored.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state.
	*
	* ## Notes
	*
	* -   Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned iterator has exclusive control over its internal state.
	*/
	copy?: boolean;
}

/**
* Interface defining a returned iterator.
*/
interface ExtendedIter extends Iter {
	/**
	* Underlying PRNG.
	*/
	readonly PRNG: random.PRNG;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMT19937 | null;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number | null;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937 | null;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number | null;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number | null;
}

/**
* Interface defining a returned iterable iterator.
*/
interface ExtendedIterableIterator extends ExtendedIter {
	/**
	* Returns a new iterable iterator.
	*
	* @returns iterable iterator
	*/
	[Symbol.iterator](): IterableIterator;
}

// Define a union type representing both iterable and non-iterable returned iterators:
type ExtendedIterator = ExtendedIter | ExtendedIterableIterator;

/**
* Returns an iterator which introduces additive white uniform noise with standard deviation `sigma`.
*
* @param iterator - input iterator
* @param sigma - standard deviation of the noise
* @param options - function options
* @param options.prng - pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`
* @param options.state - pseudorandom number generator state
* @param options.seed - pseudorandom number generator seed
* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
* @throws `sigma` must be a positive number
* @throws must provide a valid state
* @returns iterator
*
* @example
* var iterSineWave = require( `@stdlib/simulate/iter/sine-wave` );
*
* var sine = iterSineWave({
*     'iter': 100
* });
*
* var it = iterawun( sine, 0.5 );
*
* var v = it.next().value;
* // returns <number>
*
* v = it.next().value;
* // returns <number>
*
* v = it.next().value;
* // returns <number>
*
* // ...
*/
declare function iterawun( iterator: Iterator, sigma: number, options?: Options ): ExtendedIterator; // tslint:disable-line: max-line-length


// EXPORTS //

export = iterawun;
