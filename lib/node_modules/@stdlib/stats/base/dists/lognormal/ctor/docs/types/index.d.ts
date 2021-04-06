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
* Lognormal distribution.
*/
declare class Lognormal {
	/**
	* Lognormal distribution constructor.
	*
	* @param mu - location parameter (default: 0.0)
	* @param sigma - scale parameter (default: 1.0)
	* @throws `sigma` must be a positive number
	* @returns distribution instance
	*
	* @example
	* var lognormal = new LogNormal( 1.0, 1.0 );
	*
	* var y = lognormal.cdf( 1.5 );
	* // returns ~0.276
	*
	* var v = lognormal.mean;
	* // returns ~4.482
	*/
	constructor( mu: number, sigma: number );

	/**
	* Lognormal distribution constructor.
	*
	* @returns distribution instance
	*
	* @example
	* var lognormal = new LogNormal();
	*
	* var y = lognormal.cdf( 1.5 );
	* // returns ~0.657
	*
	* var v = lognormal.mean;
	* // returns ~1.649
	*/
	constructor();

	/**
	*  Location parameter.
	*/
	mu: number;

	/**
	* Scale parameter. If set, the value must be greater than `0`.
	*/
	sigma: number;

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
	* Evaluates the natural logarithm of the probability density function (PDF).
	*
	* @param x - input value
	* @returns evaluated logPDF
	*/
	logpdf( x: number ): number;

	/**
	* Evaluates the probability density function (PDF).
	*
	* @param x - input value
	* @returns evaluated PDF
	*/
	pdf( x: number ): number;

	/**
	* Evaluates the quantile function at probability `p`.
	*
	* @param p - input probability
	* @returns evaluated quantile function
	*/
	quantile( p: number ): number;
}


// EXPORTS //

export = Lognormal;
