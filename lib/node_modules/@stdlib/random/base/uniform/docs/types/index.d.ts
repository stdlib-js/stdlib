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
* Interface for generating uniform distributed pseudorandom numbers with pre-specified parameter values.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a uniform distributed pseudorandom number with minimum support `a` and maximum support `b`.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating uniform distributed pseudorandom numbers without pre-specified parameter values.
*/
interface BinaryFunction extends PRNG {
	/**
	* Returns a uniform distributed pseudorandom number with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support (inclusive)
	* @param b - maximum support (exclusive)
	* @returns pseudorandom number
	*/
	( a: number, b: number ): number;
}

/**
* Interface for generating pseudorandom numbers drawn from a uniform distribution.
*/
interface Random extends PRNG {
	/**
	* Returns a uniform distributed pseudorandom number with minimum support `a` and maximum support `b`.
	*
	* ## Notes
	*
	* -   If `a >= b`, the function returns `NaN`.
	* -   If `a` or `b` is `NaN`, the function returns `NaN`.
	*
	* @param a - minimum support (inclusive)
	* @param b - maximum support (exclusive)
	* @returns pseudorandom number
	*
	* @example
	* var v = uniform( 0.0, 1.0 );
	* // returns <number>
	*/
	( a: number, b: number ): number;

	/**
	* Returns a pseudorandom number generator for generating uniform distributed random numbers.
	*
	* ## Notes
	*
	* -   When provided `a` and `b`, the returned PRNG returns random variates drawn from the specified distribution.
	*
	* @param a - minimum support (inclusive)
	* @param b - maximum support (exclusive)
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws `a` must be less than `b`
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var myuniform = uniform.factory( 0.0, 1.0 );
	*
	* var v = myuniform();
	* // returns <number>
	*
	* @example
	* var myuniform = uniform.factory( -3.0, -1.0, {
	*     'seed': 297
	* });
	* var v = myuniform();
	* // returns <number>
	*/
	factory( a: number, b: number, options?: Options ): NullaryFunction;

	/**
	* Returns a pseudorandom number generator for generating uniform distributed random numbers.
	*
	* ## Notes
	*
	* -   When not provided `a` and `b`, the returned PRNG requires that both `a` and `b` be provided at each invocation.
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
	* var myuniform = uniform.factory();
	*
	* var v = myuniform( 0.0, 1.0 );
	* // returns <number>
	*
	* @example
	* var myuniform = uniform.factory({
	*     'seed': 297
	* });
	* var v = myuniform( -3.0, -1.0 );
	* // returns <number>
	*/
	factory( options?: Options ): BinaryFunction;
}

/**
* Returns a uniform distributed pseudorandom number with minimum support `a` and maximum support `b`.
*
* ## Notes
*
* -   If `a >= b`, the function returns `NaN`.
* -   If `a` or `b` is `NaN`, the function returns `NaN`.
*
* @param a - minimum support (inclusive)
* @param b - maximum support (exclusive)
* @returns pseudorandom number
*
* @example
* var v = uniform( 0.0, 1.0 );
* // returns <number>
*
* @example
* var myuniform = uniform.factory( 0.0, 1.0 );
*
* var v = myuniform();
* // returns <number>
*/
declare var uniform: Random;


// EXPORTS //

export = uniform;
