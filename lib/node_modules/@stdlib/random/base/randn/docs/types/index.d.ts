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
	name?: 'box-muller' | 'improved-ziggurat';

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
* Interface for generating standard normally distributed pseudorandom numbers.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a pseudorandom number drawn from a standard normal distribution.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating pseudorandom numbers drawn from a standard normal distribution.
*/
interface Random extends PRNG {
	/**
	* Returns a standard normal random number.
	*
	* ## Notes
	*
	* -   The default underlying pseudorandom number generator (PRNG) *may* change in the future. If exact reproducibility is required, either use the `factory` method to explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = randn();
	* // returns <number>
	*/
	(): number;

	/**
	* Returns a pseudorandom number generator for generating exponential distributed random numbers.
	*
	* @param options - function options
	* @param options.name - name of pseudorandom number generator (default: 'improved-ziggurat')
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var rand = randn.factory();
	*
	* var v = rand();
	* // returns <number>
	*
	* @example
	* var rand = randn.factory({
	*     'name': 'box-muller'
	* });
	* var v = rand();
	* // returns <number>
	*
	* @example
	* var rand = randn.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*
	* @example
	* var rand = randn.factory({
	*     'name': 'box-muller',
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	factory( options?: Options ): NullaryFunction;
}

/**
* Returns a standard normally distributed random number.
*
* ## Notes
*
* -   The default underlying pseudorandom number generator (PRNG) *may* change in the future. If exact reproducibility is required, either use the `factory` method to explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
*
* @returns pseudorandom number
*
* @example
* var v = randn();
* // returns <number>
*
* @example
* var rand = randn.factory({
*     'seed': 12345
* });
* var v = rand();
* // returns <number>
*/
declare var randn: Random;


// EXPORTS //

export = randn;
