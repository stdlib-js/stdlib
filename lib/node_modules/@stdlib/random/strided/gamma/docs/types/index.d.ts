/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Interface describing `gamma`.
*/
interface Routine {
	/**
	* Fills a strided array with pseudorandom numbers drawn from a gamma distribution.
	*
	* @param N - number of indexed elements
	* @param alpha - shape parameter
	* @param sa - `alpha` stride length
	* @param beta - rate parameter
	* @param sb - `beta` stride length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* gamma( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*/
	<T = unknown>( N: number, alpha: Collection, sa: number, beta: Collection, sb: number, out: Collection<T>, so: number, options?: Options ): Collection<T | number>;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a gamma distribution using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - shape parameter
	* @param sa - `alpha` stride length
	* @param oa - starting index for `alpha`
	* @param beta - rate parameter
	* @param sb - `beta` stride length
	* @param ob - starting index for `beta`
	* @param out - output array
	* @param so - `out` stride length
	* @param oo - starting index for `out`
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* gamma.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	ndarray<T = unknown>( N: number, alpha: Collection, sa: number, oa: number, beta: Collection, sb: number, ob: number, out: Collection<T>, so: number, oo: number, options?: Options ): Collection<T | number>;
}

/**
* Fills a strided array with pseudorandom numbers drawn from a gamma distribution.
*
* @param N - number of indexed elements
* @param alpha - shape parameter
* @param sa - `alpha` stride length
* @param beta - rate parameter
* @param sb - `beta` stride length
* @param out - output array
* @param so - `out` stride length
* @param options - function options
* @throws must provide valid distribution parameters
* @throws must provide valid options
* @throws must provide a valid state
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* gamma( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* gamma.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
*/
declare var gamma: Routine;


// EXPORTS //

export = gamma;
