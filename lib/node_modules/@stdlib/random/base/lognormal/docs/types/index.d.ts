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
* Interface for generating pseudorandom numbers from a lognormal distribution with pre-specified parameter values.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a pseudorandom number drawn from a lognormal distribution.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating pseudorandom numbers from a lognormal distribution without pre-specified parameter values.
*/
interface BinaryFunction extends PRNG {
	/**
	* Returns a pseudorandom number drawn from a lognormal distribution.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns pseudorandom number
	*/
	( mu: number, sigma: number ): number;
}

/**
* Interface for generating pseudorandom numbers drawn from a lognormal distribution.
*/
interface Random extends PRNG {
	/**
	* Returns pseudorandom number drawn from a lognormal distribution.
	*
	* ## Notes
	*
	* -   If `mu` or `sigma` is `NaN` or `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = lognormal( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = lognormal( 0.0, -1.0 );
	* // returns NaN
	*/
	( mu: number, sigma: number ): number;

	/**
	* Returns a pseudorandom number generator for generating random numbers from a lognormal distribution.
	*
	* ## Notes
	*
	* -   When provided `mu` and `sigma`, the returned PRNG returns random variates drawn from the specified distribution.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws `sigma` must be a positive number
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var mylognormal = lognormal.factory( 0.0, 1.0 );
	* var v = mylognormal();
	* // returns <number>
	*
	* @example
	* var mylognormal = lognormal.factory( -3.0, 0.5, {
	*     'seed': 297
	* });
	* var v = mylognormal();
	* // returns <number>
	*/
	factory( mu: number, sigma: number, options?: Options ): NullaryFunction;

	/**
	* Returns a pseudorandom number generator for generating random numbers from a lognormal distribution.
	*
	* ## Notes
	*
	* -   When not provided `mu` and `sigma`, the returned PRNG requires that both `mu` and `sigma` be provided at each invocation.
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
	* var mylognormal = lognormal.factory();
	* var v = mylognormal( 0.0, 1.0 );
	* // returns <number>
	*
	* @example
	* var mylognormal = lognormal.factory({
	*     'seed': 297
	* });
	* var v = mylognormal( -3.0, 0.5 );
	* // returns <number>
	*/
	factory( options?: Options ): BinaryFunction;
}

/**
* Returns pseudorandom number drawn from a lognormal distribution.
*
* ## Notes
*
* -   If `mu` or `sigma` is `NaN` or `sigma <= 0`, the function returns `NaN`.
*
* @param mu - location parameter
* @param sigma - scale parameter
* @returns pseudorandom number
*
* @example
* var v = lognormal( 0.0, 2.0 );
* // returns <number>
*
* @example
* var v = lognormal( 0.0, -1.0 );
* // returns NaN
*/
declare var lognormal: Random;


// EXPORTS //

export = lognormal;
