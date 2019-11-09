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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import * as random from '@stdlib/types/random';

/**
* Interface defining `factory` options.
*/
interface Options {
	/**
	* Name of pseudorandom number generator.
	*/
	name?: 'mt19937' | 'minstd' | 'minstd-shuffle';

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state.
	*/
	copy?: boolean;
}

/**
* Interface for PRNG properties and methods.
*/
interface PRNG {
	/**
	* Generator name.
	*/
	readonly NAME: string;

	/**
	* Underlying pseudorandom number generator.
	*/
	readonly PRNG: random.PRNG;

	/**
	* Minimum possible value (specific to underlying PRNG).
	*/
	readonly MIN: number;

	/**
	* Maximum possible value (specific to underlying PRNG).
	*/
	readonly MAX: number;

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

	/**
	* Serializes the pseudorandom number generator as a JSON object.
	*
	* @returns JSON representation
	*/
	toJSON(): string;
}

/**
* Interface for generating uniformly distributed pseudorandom numbers.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a pseudorandom number drawn from a uniform distribution.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating pseudorandom numbers drawn from a uniform distribution.
*/
interface Random extends PRNG {
	/**
	* Returns a uniformly distributed random number.
	*
	* ## Notes
	*
	* -   The default underlying pseudorandom number generator (PRNG) *may* change in the future. If exact reproducibility is required, either use the `factory` method to explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = randu();
	* // returns <number>
	*/
	(): number;

	/**
	* Returns a pseudorandom number generator for generating uniformly distributed random numbers on the interval \\( [0,1) \\).
	*
	* @param options - function options
	* @param options.name - name of pseudorandom number generator (default: `mt19937`)
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws must provide valid options
	* @throws must provide the name of a supported pseudorandom number generator
	* @returns pseudorandom number generator
	*
	* @example
	* var uniform = randu.factory();
	* var v = uniform();
	* // returns <number>
	*
	* @example
	* var uniform = randu.factory({
	*     'name': 'minstd'
	* });
	* var v = uniform();
	* // returns <number>
	*
	* @example
	* var uniform = randu.factory({
	*     'seed': 12345
	* });
	* var v = uniform();
	* // returns <number>
	*
	* @example
	* var uniform = randu.factory({
	*     'name': 'minstd',
	*     'seed': 12345
	* });
	* var v = uniform();
	* // returns <number>
	*/
	factory( options?: Options ): NullaryFunction;
}

/**
* Returns a uniformly distributed random number.
*
* ## Notes
*
* -   The default underlying pseudorandom number generator (PRNG) *may* change in the future. If exact reproducibility is required, either use the `factory` method to explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
*
* @returns pseudorandom number
*
* @example
* var v = randu();
* // returns <number>
*
* @example
* var uniform = randu.factory({
*     'seed': 12345
* });
* var v = uniform();
* // returns <number>
*/
declare var randu: Random;


// EXPORTS //

export = randu;
