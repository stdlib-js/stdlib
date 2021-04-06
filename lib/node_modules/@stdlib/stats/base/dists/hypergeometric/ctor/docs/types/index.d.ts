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
* Hypergeometric Distribution.
*/
declare class Hypergeometric {
	/**
	* Hypergeometric distribution constructor.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @throws `N` must be a nonnegative integer
	* @throws `K` must be a nonnegative integer
	* @throws `n` must be a nonnegative integer
	* @throws `K` must not exceed `N`
	* @throws `n` must not exceed `N`
	* @returns distribution instance
	*
	* @example
	* var hypergeometric = new Hypergeometric( 10, 5, 7 );
	*
	* var y = hypergeometric.cdf( 0.8 );
	* // returns 0.0
	*
	* var v = hypergeometric.mode;
	* // returns 4.0
	*/
	constructor( N: number, K: number, n: number );

	/**
	* Population size. If set, must be a nonnegative integer larger than or equal to `K` and `n`.
	*/
	N: number;

	/**
	* Subpopulation size. If set, must be a nonnegative integer smaller than or equal to `N`.
	*/
	K: number;

	/**
	* Number of draws. If set, must be a nonnegative integer smaller than or equal to `N`.
	*/
	n: number;

	/**
	* Read-only property which returns the excess kurtosis.
	*/
	readonly kurtosis: number;

	/**
	* Read-only property which returns the expected value.
	*/
	readonly mean: number;

	/**
	* Read-only property which returns the mode.
	*/
	readonly mode: number;

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
	* Evaluates the natural logarithm of the probability mass function (PMF).
	*
	* @param x - input value
	* @returns evaluated logPMF
	*/
	logpmf( x: number ): number;

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

export = Hypergeometric;
