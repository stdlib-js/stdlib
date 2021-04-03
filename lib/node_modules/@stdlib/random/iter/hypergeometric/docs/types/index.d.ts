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

import * as random from '@stdlib/types/random';
import { Iterator } from '@stdlib/types/iter';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
	*/
	prng?: random.PRNG;

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state (default: true).
	*/
	copy?: boolean;

	/**
	* Number of iterations.
	*/
	iter?: number;
}

/**
* Interface for iterators of pseudorandom numbers drawn from a logistic distribution.
*/
interface RandIter extends Iterator {
	/**
	* Underlying PRNG.
	*/
	readonly PRNG: random.PRNG;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMT19937;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number;
}

/**
* Returns an iterator for generating pseudorandom numbers drawn from a hypergeometric distribution.
*
* @param N - population size
* @param K - subpopulation size
* @param n - number of draws
* @param options - function options
* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param options.seed - pseudorandom number generator seed
* @param options.state - pseudorandom number generator state
* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
* @param options.iter - number of iterations
* @throws first argument must be a nonnegative integer
* @throws second argument must be a nonnegative integer
* @throws third argument must be a nonnegative integer
* @throws `n` must be less than or equal to `N`
* @throws `K` must be less than or equal to `N`
* @throws must provide valid options
* @returns iterator
*
* @example
* var iter = iterator( 10, 5, 3 );
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/
declare function iterator( N: number, K: number, n: number, options?: Options ): RandIter; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterator;
