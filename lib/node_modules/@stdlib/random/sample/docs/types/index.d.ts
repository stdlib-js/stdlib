/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import { ArrayLike } from '@stdlib/types/array';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Sample size.
	*/
	size?: number;

	/**
	* Element probabilities.
	*/
	probs?: Array<number>;

	/**
	* Boolean indicating whether to sample with replacement (default: true).
	*/
	replace?: boolean;
}

/**
* Interface defining population function options.
*/
interface PopOptions {
	/**
	* Sample size.
	*/
	size?: number;

	/**
	* Boolean indicating whether to sample with replacement (default: true).
	*/
	replace?: boolean;

	/**
	* Boolean indicating whether to mutate the `pool` when sampling without replacement (default: false).
	*/
	mutate?: boolean;
}

/**
* Interface defining `factory` options when `pool` is not supplied.
*/
interface FactoryOptions {
	/**
	* Integer-valued seed.
	*/
	seed?: number;

	/**
	* Sample size.
	*/
	size?: number;

	/**
	* Boolean indicating whether to sample with replacement (default: true).
	*/
	replace?: boolean;
}

/**
* Interface defining `factory` options when `pool` is supplied.
*/
interface FactoryPopOptions extends FactoryOptions {
	/**
	* Boolean indicating whether to mutate the `pool` when sampling without replacement (default: false).
	*/
	mutate?: boolean;
}


/**
* Samples elements from an array-like object.
*
* @param x - array-like object from which to sample elements
* @param options - function options
* @param options.size - sample size
* @param options.probs - element probabilities
* @param options.replace - boolean indicating whether to sample with replacement (default: true)
* @throws must provide valid options
* @throws `size` option must be less than or equal to the length of `x` when the `replace` option is `false`
* @returns sample
*/
type SampleFunction = ( x: ArrayLike<any>, options?: Options ) => Array<any>;

/**
* Samples elements from a population.
*
* @param options - function options
* @param options.size - sample size
* @param options.replace - boolean indicating whether to sample with replacement (default: true)
* @param options.mutate - boolean indicating whether to mutate the `pool` when sampling without replacement (default: false)
* @throws must provide valid options
* @throws `size` option must be less than or equal to the population when the `replace` option is `false`
* @returns sample
*/
type SamplePopFunction = ( options?: PopOptions ) => Array<any>;

/**
* Interface for sampling elements from an array-like object.
*/
interface Sample {
	/**
	* Samples elements from an array-like object.
	*
	* @param x - array-like object from which to sample
	* @param options - function options
	* @param options.size - sample size
	* @param options.probs - element probabilities
	* @param options.replace - boolean indicating whether to sample with replacement (default: true)
	* @throws must provide valid options
	* @throws `size` option must be less than or equal to the length of `x` when the `replace` option is `false`
	* @returns sample
	*
	* @example
	* var out = sample( [ 3, null, NaN, 'abc', function(){} ] );
	* // e.g., returns [ 3, 'abc', null, 3, null ]
	*/
	( x: ArrayLike<any>, options?: Options ): Array<any>;

	/**
	* Returns a function to sample elements from an array-like object.
	*
	* @param pool - array-like object from which to sample
	* @param options - function options
	* @param options.seed - integer-valued seed
	* @param options.size - sample size
	* @param options.replace - boolean indicating whether to sample with replacement (default: true)
	* @param options.mutate - boolean indicating whether to mutate the `pool` when sampling without replacement (default: false)
	* @throws must provide valid options
	* @returns function to sample elements from an array-like object
	*
	* @example
	* var fcn = sample.factory( [ 1, 2, 3, 4, 5, 6 ], {
	*     'seed': 232,
	*     'size': 2
	* });
	* var out = fcn();
	* // e.g., returns [ 6, 4 ]
	*
	* out = fcn();
	* // e.g., returns [ 6, 5 ]
	*
	* @example
	* var fcn = sample.factory( [ 1, 2, 3, 4, 5, 6 ], {
	*     'seed': 474,
	*     'size': 3,
	*     'mutate': true,
	*     'replace': false
	* });
	* var out = fcn();
	* // e.g., returns [ 4, 3, 6 ]
	*
	* out = fcn();
	* // e.g., returns [ 1, 5, 2 ]
	*
	* out = fcn();
	* // returns null
	*
	* @example
	* var fcn = sample.factory( [ 0, 1 ], {
	*     'size': 2
	* });
	*
	* var out = fcn();
	* // e.g., returns [ 1, 1 ]
	*
	* out = fcn({
	*     'size': 10
	* });
	* // e.g., returns [ 0, 1, 1, 1, 0, 1, 0, 0, 1, 1 ]
	*
	* @example
	* var fcn = sample.factory( [ 0, 1 ], {
	*     'size': 2
	* });
	*
	* var out = fcn();
	* // e.g., returns [ 1, 1 ]
	*
	* out = fcn({
	*     'replace': false
	* });
	* // e.g., returns [ 0, 1 ] or [ 1, 0 ]
	*
	* out = fcn();
	* // e.g., returns [ 1, 1 ]
	*
	* @example
	* var fcn = sample.factory( [ 0, 1 ], {
	*     'size': 2,
	*     'mutate': true
	* });
	*
	* var out = fcn();
	* // e.g., returns [ 1, 1 ]
	*
	* out = fcn({
	*     'replace': false
	* });
	* // e.g., returns [ 0, 1 ] or [ 1, 0 ]
	*
	* out = fcn();
	* // returns null
	*/
	factory( pool: ArrayLike<any>, options?: FactoryPopOptions ): SamplePopFunction; // tslint-disable-line max-line-length

	/**
	* Returns a function to sample elements from an array-like object.
	*
	* @param options - function options
	* @param options.seed - integer-valued seed
	* @param options.size - sample size
	* @param options.replace - boolean indicating whether to sample with replacement (default: true)
	* @throws must provide valid options
	* @returns function to sample elements from an array-like object
	*
	* @example
	* var fcn = sample.factory({
	*     'seed': 232
	* });
	* var out = fcn( 'abcdefg' );
	* // e.g., returns [ 'g', 'd', 'g', 'f', 'c', 'e', 'f' ]
	*/
	factory( options?: FactoryOptions ): SampleFunction;
}

/**
* Samples elements from an array-like object.
*
* @param x - array-like object from which to sample
* @param options - function options
* @param options.size - sample size
* @param options.probs - element probabilities
* @param options.replace - boolean indicating whether to sample with replacement (default: true)
* @throws must provide valid options
* @throws `size` option must be less than or equal to the length of `x` when the `replace` option is `false`
* @returns sample
*
* @example
* var out = sample( [ 3, null, NaN, 'abc', function(){} ] );
* // e.g., returns [ 3, 'abc', null, 3, null ]
*/
declare var sample: Sample;


// EXPORTS //

export = sample;
