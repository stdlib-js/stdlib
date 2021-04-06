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
* Pareto (Type I) distribution.
*/
declare class Pareto {
	/**
	* Pareto (Type I) distribution constructor.
	*
	* @param alpha - shape parameter (default: 1.0)
	* @param beta - scale parameter (default: 1.0)
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @returns distribution instance
	*
	* @example
	* var pareto1 = new Pareto1( 1.0, 1.0 );
	*
	* var y = pareto1.cdf( 0.8 );
	* // returns 0.0
	*
	* var mu = pareto1.mean;
	* // returns Infinity
	*/
	constructor( alpha: number, beta: number );

	/**
	* Pareto (Type I) distribution constructor.
	*
	* @returns distribution instance
	*
	* @example
	* var pareto1 = new Pareto1();
	*
	* var y = pareto1.cdf( 0.8 );
	* // returns 0.0
	*
	* var mu = pareto1.mean;
	* // returns Infinity
	*/
	constructor();

	/**
	* Shape parameter. If set, the value must be greater than `0`.
	*/
	alpha: number;

	/**
	* Scale parameter. If set, the value must be greater than `0`.
	*/
	beta: number;

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
	* Evaluates the natural logarithm of the cumulative distribution function (CDF).
	*
	* @param x - input value
	* @returns evaluated logCDF
	*/
	logcdf( x: number ): number;

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

export = Pareto;
