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
* Interface describing `lognormal`.
*/
interface Routine {
	/**
	* Fills a strided array with pseudorandom numbers drawn from a lognormal distribution.
	*
	* @param N - number of indexed elements
	* @param mu - location parameter
	* @param sm - `mu` stride length
	* @param sigma - scale parameter
	* @param ss - `sigma` stride length
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
	* lognormal( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
	*/
	<T = unknown>( N: number, mu: Collection, sm: number, sigma: Collection, ss: number, out: Collection<T>, so: number, options?: Options ): Collection<T | number>;

	/**
	* Fills a strided array with pseudorandom numbers drawn from a lognormal distribution using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param mu - location parameter
	* @param sm - `mu` stride length
	* @param om - starting index for `mu`
	* @param sigma - scale parameter
	* @param ss - `sigma` stride length
	* @param os - starting index for `sigma`
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
	* lognormal.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
	*/
	ndarray<T = unknown>( N: number, mu: Collection, sm: number, om: number, sigma: Collection, ss: number, os: number, out: Collection<T>, so: number, oo: number, options?: Options ): Collection<T | number>;
}

/**
* Fills a strided array with pseudorandom numbers drawn from a lognormal distribution.
*
* @param N - number of indexed elements
* @param mu - location parameter
* @param sm - `mu` stride length
* @param sigma - scale parameter
* @param ss - `sigma` stride length
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
* lognormal( out.length, [ 2.0 ], 0, [ 5.0 ], 0, out, 1 );
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* lognormal.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, out, 1, 0 );
*/
declare var lognormal: Routine;


// EXPORTS //

export = lognormal;
