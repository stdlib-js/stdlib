/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
import { Collection } from '@stdlib/types/array';

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
	* Specifies whether to copy a provided pseudorandom number generator state (default: `true`).
	*/
	copy?: boolean;
}

/**
* Interface for PRNG properties and methods.
*/
interface PRNG {
	/**
	* Underlying pseudorandom number generator.
	*/
	readonly PRNG: random.PRNG;

	/**
	* PRNG seed.
	*/
	readonly seed: random.PRNGSeedMT19937 | null;

	/**
	* PRNG seed length.
	*/
	readonly seedLength: number | null;

	/**
	* PRNG state.
	*/
	state: random.PRNGStateMT19937 | null;

	/**
	* PRNG state length.
	*/
	readonly stateLength: number | null;

	/**
	* PRNG state size (in bytes).
	*/
	readonly byteLength: number | null;
}

/**
* Interface for filling strided arrays with pseudorandom numbers drawn from a chi distribution.
*/
interface Random extends PRNG {
	/**
	* Fills a strided array with pseudorandom numbers drawn from a chi distribution.
	*
	* @param N - number of indexed elements
	* @param k - degrees of freedom
	* @param sk - `k` strided length
	* @param out - output array
	* @param so - `out` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* chi( out.length, [ 2.0 ], 0, out, 1 );
	*/
	<T = unknown>( N: number, k: Collection<number>, sk: number, out: Collection<T>, so: number ): Collection<T | number>;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a chi distribution using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param k - degrees of freedom
	* @param sk - `k` strided length
	* @param ok - starting index for `k`
	* @param out - output array
	* @param so - `out` stride length
	* @param oo - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* chi.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	ndarray<T = unknown>( N: number, k: Collection<number>, sk: number, ok: number, out: Collection<T>, so: number, oo: number ): Collection<T | number>;
}

/**
* Interface describing the main export.
*/
interface Routine extends Random {
	/**
	* Returns a function for filling strided arrays with pseudorandom numbers drawn from a chi distribution.
	*
	* @param options - function options
	* @throws must provide a valid state
	* @returns function for filling strided arrays
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* // Create a new PRNG function:
	* var random = chi.factory();
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* random( out.length, [ 2.0 ], 0, out, 1 );
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* // Create a new PRNG function:
	* var random = chi.factory({
	*     'seed': 297
	* });
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* random( out.length, [ 2.0 ], 0, out, 1 );
	*/
	factory( options?: Options ): Random;
}

/**
* Fills a strided array with pseudorandom numbers drawn from a chi distribution.
*
* @param N - number of indexed elements
* @param k - degrees of freedom
* @param sk - `k` stride length
* @param out - output array
* @param so - `out` stride length
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* chi( out.length, [ 2.0 ], 0, out, 1 );
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* chi.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
*/
declare var chi: Routine;


// EXPORTS //

export = chi;
