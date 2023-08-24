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
* Interface for generating pseudorandom numbers from a triangular distribution with pre-specified parameter values.
*/
interface NullaryFunction extends PRNG {
	/**
	* Returns a pseudorandom number drawn from a triangular distribution.
	*
	* @returns pseudorandom number
	*/
	(): number;
}

/**
* Interface for generating pseudorandom numbers from a triangular distribution without pre-specified parameter values.
*/
interface BinaryFunction extends PRNG {
	/**
	* Returns a pseudorandom number drawn from a triangular distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @returns pseudorandom number
	*/
	( a: number, b: number, c: number ): number;
}

/**
* Interface for generating pseudorandom numbers drawn from a triangular distribution.
*/
interface Random extends PRNG {
	/**
	* Returns pseudorandom number drawn from a triangular distribution.
	*
	* ## Notes
	*
	* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
	* -   If either `a`, `b`, or `c` is `NaN`, the function returns `NaN`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @returns pseudorandom number
	*
	* @example
	* var v = triangular( 2.0, 5.0, 3.33 );
	* // returns <number>
	*
	* @example
	* var v = triangular( 1.0, 2.0, 1.8 );
	* // returns NaN
	*/
	( a: number, b: number, c: number ): number;

	/**
	* Returns a pseudorandom number generator for generating random numbers from a triangular distribution.
	*
	* ## Notes
	*
	* -   When provided `a`, `b`, and `c`, the returned PRNG returns random variates drawn from the specified distribution.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @param options - function options
	* @param options.prng - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param options.seed - pseudorandom number generator seed
	* @param options.state - pseudorandom number generator state
	* @param options.copy - boolean indicating whether to copy a provided pseudorandom number generator state (default: true)
	* @throws arguments must satisfy `a <= c <= b`
	* @throws must provide a valid state
	* @returns pseudorandom number generator
	*
	* @example
	* var rand = triangular.factory( 1.0, 3.0, 1.5 );
	* var v = rand();
	* // returns <number>
	*
	* @example
	* var rand = triangular.factory( 1.0, 2.0, 1.5, {
	*     'seed': 297
	* });
	* var v = rand();
	* // returns <number>
	*/
	factory( a: number, b: number, c: number, options?: Options ): NullaryFunction; // tslint-disable-line max-line-length

	/**
	* Returns a pseudorandom number generator for generating random numbers from a triangular distribution.
	*
	* ## Notes
	*
	* -   When not provided `a`, `b`, and `c`, the returned PRNG requires that `a`, `b`, and `c` be provided at each invocation.
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
	* var rand = triangular.factory();
	* var v = rand( 1.0, 3.0, 1.5 );
	* // returns <number>
	*
	* @example
	* var rand = triangular.factory({
	*     'seed': 297
	* });
	* var v = rand( 1.0, 2.0, 1.5 );
	* // returns <number>
	*/
	factory( options?: Options ): BinaryFunction;
}

/**
* Returns pseudorandom number drawn from a triangular distribution.
*
* ## Notes
*
* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
* -   If either `a`, `b`, or `c` is `NaN`, the function returns `NaN`.
*
* @param a - minimum support
* @param b - maximum support
* @param c - mode
* @returns pseudorandom number
*
* @example
* var v = triangular( 2.0, 5.0, 3.33 );
* // returns <number>
*
* @example
* var rand = triangular.factory({
*     'seed': 297
* });
* var v = rand( 1.0, 2.0, 1.5 );
* // returns <number>
*/
declare var triangular: Random;


// EXPORTS //

export = triangular;
