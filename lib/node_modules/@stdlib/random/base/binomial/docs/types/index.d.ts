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
* Interface for generating binomially distributed pseudorandom numbers with pre-specified parameter values.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a binomially distributed pseudorandom number.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating binomially distributed pseudorandom numbers without pre-specified parameter values.
*/
interface BinaryFunction extends PRNG {
	/**
	* Returns a binomially distributed pseudorandom number.
	*
	* @param n - number of trials
	* @param p - success probability
	* @returns pseudorandom number
	*/
	( n: number, p: number ): number;
}

/**
* Interface for generating pseudorandom numbers drawn from a binomial distribution.
*/
interface Random extends PRNG {
	/**
	* Returns a binomially distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `n` is not a positive integer or `p` is not a probability, the function returns `NaN`.
	* -   If `n` or `p` is `NaN`, the function returns `NaN`.
	*
	* @param n - number of trials
	* @param p - success probability
	* @returns pseudorandom number
	*
	* @example
	* var v = binomial( 8, 0.5 );
	* // returns <number>
	*/
	( n: number, p: number ): number;

	/**
	* Returns a pseudorandom number generator for generating binomially distributed random numbers.
	*
	* ## Notes
	*
	* -   When provided `n` and `p`, the returned PRNG returns random variates drawn from the specified distribution.
	*
	* @param n - number of trials
	* @param p - success probability
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var mybinomial = binomial.factory( 8, 0.5 );
	*
	* var v = mybinomial();
	* // returns <number>
	*
	* @example
	* var mybinomial = binomial.factory( 3, 0.2, {
	*     'seed': 297
	* });
	* var v = mybinomial();
	* // returns <number>
	*/
	factory( n: number, p: number, options?: Options ): NullaryFunction;

	/**
	* Returns a pseudorandom number generator for generating binomially distributed random numbers.
	*
	* ## Notes
	*
	* -   When not provided `n` and `p`, the returned PRNG requires that both `n` and `p` be provided at each invocation.
	*
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var mybinomial = binomial.factory();
	*
	* var v = mybinomial( 8, 0.5 );
	* // returns <number>
	*
	* @example
	* var mybinomial = binomial.factory({
	*     'seed': 297
	* });
	* var v = mybinomial( 8, 0.5 );
	* // returns <number>
	*/
	factory( options?: Options ): BinaryFunction;
}

/**
* Returns a binomially distributed pseudorandom number.
*
* ## Notes
*
* -   If `n` is not a positive integer or `p` is not a probability, the function returns `NaN`.
* -   If `n` or `p` is `NaN`, the function returns `NaN`.
*
* @param n - number of trials
* @param p - success probability
* @returns pseudorandom number
*
* @example
* var v = binomial( 10, 0.8 );
* // returns <number>
*
* @example
* var mybinomial = binomial.factory( 10, 0.8 );
*
* var v = mybinomial();
* // returns <number>
*/
declare var binomial: Random;


// EXPORTS //

export = binomial;
