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

/**
* Bernoulli distribution.
*/
declare class Bernoulli {
	/**
	* Bernoulli distribution constructor.
	*
	* @param p - success probability (default: 0.5)
	* @throws `p` must be a probability
	* @returns distribution instance
	*
	* @example
	* var bernoulli = new Bernoulli();
	*
	* var y = bernoulli.cdf( 1.8 );
	* // returns 1.0
	*
	* var v = bernoulli.median;
	* // returns 0.0
	*/
	constructor( p?: number );

	/**
	* Success probability. If set, the value must be a probability.
	*/
	p: number;

	/**
	* Read-only property which returns the differential entropy.
	*/
	readonly entropy: number;

	/**
	* Read-only property which returns the excess kurtosis.
	*/
	readonly kurtosis: number;

	/**
	* Read-only property which returns the expected value.
	*/
	readonly mean: number;

	/**
	* Read-only property which returns the median.
	*/
	readonly median: number;

	/**
	* Read-only property which returns the skewness.
	*/
	readonly skewness: number;

	/**
	* Read-only property which returns the standard deviation.
	*/
	readonly stdev: number;

	/**
	* Read-only property which returns the variance.
	*/
	readonly variance: number;

	/**
	* Evaluates the cumulative distribution function (CDF).
	*
	* @param x - input value
	* @returns evaluated CDF
	*/
	cdf( x: number ): number;

	/**
	* Evaluates the moment-generating function (MGF).
	*
	* @param t - input value
	* @returns evaluated MGF
	 */
	mgf( t: number ): number;

	/**
	* Evaluates the probability mass function (PMF).
	*
	* @param x - input value
	* @returns evaluated PMF
	*/
	pmf( x: number ): number;

	/**
	* Evaluates the quantile function at probability `p`.
	*
	* @param p - input probability
	* @returns evaluated quantile function
	*/
	quantile( p: number ): number;
}


// EXPORTS //

export = Bernoulli;
