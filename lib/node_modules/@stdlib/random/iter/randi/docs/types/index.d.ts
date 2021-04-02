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
	* Name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937').
	*/
	name?: 'mt19937' | 'minstd' | 'minstd-shuffle';

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: any;

	/**
	* Pseudorandom number generator state.
	*/
	state?: any;

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
* Interface of iterators for generating pseudorandom numbers having integer values.
*/
interface RandIter extends Iterator {
	/**
	* Underlying pseudorandom number generator.
	*/
	readonly PRNG: random.PRNG;

	/**
	* Pseudorandom number generator seed.
	*/
	readonly seed: any;

	/**
	* Length of generator seed.
	*/
	readonly seedLength: number;

	/**
	* Generator state.
	*/
	state: any;

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
* Returns an iterator for generating pseudorandom numbers having integer values.
*
* @param options - function options
* @param options.name - name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers (default: 'mt19937')
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
