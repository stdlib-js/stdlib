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
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMINSTD;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMINSTD;

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
	* Minimum possible value.
	*/
	readonly MIN: number;

	/**
	* Maximum possible value.
	*/
	readonly MAX: number;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMINSTD;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMINSTD;

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
* Interface for generating pseudorandom integers on the interval `[1, 2147483646]`.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a pseudorandom integer on the interval `[1, 2147483646]`.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating pseudorandom integers on the interval `[1, 2147483646]`.
*/
interface Random extends PRNG {
	/**
	* Returns a pseudorandom integer on the interval `[1, 2147483646]`.
	*
	* ## Notes
	*
	* -   This pseudorandom number generator (PRNG) is a linear congruential pseudorandom number generator (LCG) whose output is shuffled using the Bays- Durham algorithm. The shuffle step considerably strengthens the "randomness quality" of a simple LCG's output.
	* -   The generator has a period of approximately `2.1e9`.
	* -   An LCG is fast and uses little memory. On the other hand, because the generator is a simple LCG, the generator has recognized shortcomings. By today's PRNG standards, the generator's period is relatively short. In general, this generator is unsuitable for Monte Carlo simulations and cryptographic applications.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = minstd();
	* // returns <number>
	*/
	(): number;

	/**
	* Returns a pseudorandom number on the interval `[0,1)`.
	*
	* @returns pseudorandom number
	*
	* @example
	* var r = minstd.normalized();
	* // returns <number>
	*/
	normalized(): number;

	/**
	* Returns a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
	*
	* @param options - function options
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws must provide valid options
	* @returns pseudorandom number generator
	*
	* @example
	* var rand = minstd.factory();
	* var v = rand();
	* // returns <number>
	*
	* @example
	* var rand = minstd.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	factory( options?: Options ): NullaryFunction;
}

/**
* Returns a pseudorandom integer on the interval `[1, 2147483646]`.
*
* ## Notes
*
* -   This pseudorandom number generator (PRNG) is a linear congruential pseudorandom number generator (LCG) whose output is shuffled using the Bays- Durham algorithm. The shuffle step considerably strengthens the "randomness quality" of a simple LCG's output.
* -   The generator has a period of approximately `2.1e9`.
* -   An LCG is fast and uses little memory. On the other hand, because the generator is a simple LCG, the generator has recognized shortcomings. By today's PRNG standards, the generator's period is relatively short. In general, this generator is unsuitable for Monte Carlo simulations and cryptographic applications.
*
* @returns pseudorandom number
*
* @example
* var v = minstd();
* // returns <number>
*
* @example
* var v = minstd.normalized();
* // returns <number>
*
* @example
* var rand = minstd.factory({
*     'seed': 12345
* });
* var v = rand();
* // returns <number>
*/
declare var minstd: Random;


// EXPORTS //

export = minstd;
