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
	* Boolean indicating whether to return pseudorandom numbers on the interval `[0,1)` (default: false).
	*/
	normalized?: boolean;

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMINSTD;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMINSTD;

	/**
	* Boolean indicating whether to copy a provided pseudorandom number generator state (default: true).
	*/
	copy?: boolean;

	/**
	* Number of iterations.
	*/
	iter?: number;
}

/**
* Interface for iterators to generate pseudorandom numbers.
*/
interface RandIter extends Iterator {
	/**
	* Pseudorandom number generator seed.
	*/
	readonly seed: random.PRNGSeedMINSTD;

	/**
	* Length of generator seed.
	*/
	readonly seedLength: number;

	/**
	* Generator state.
	*/
	state: random.PRNGStateMINSTD;

	/**
	* Length of generator state.
	*/
	readonly stateLength: number;

	/**
	* Size (in bytes) of generator state.
	*/
	readonly byteLength: number;
}

/**
* Returns an iterator for generating pseudorandom numbers via a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
*
* @param options - function options
* @param options.normalized - boolean indicating whether to return pseudorandom numbers on the interval `[0,1)` (default: false)
* @param options.seed - pseudorandom number generator seed
* @param options.state - pseudorandom number generator state
* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
* @param options.iter - number of iterations
* @throws must provide valid options
* @returns iterator
*
* @example
* var iter = iterator();
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
declare function iterator( options?: Options ): RandIter;


// EXPORTS //

export = iterator;
