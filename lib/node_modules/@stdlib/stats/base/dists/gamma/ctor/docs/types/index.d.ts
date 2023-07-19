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
* Gamma distribution.
*/
declare class Gamma {
	/**
	* Gamma distribution constructor.
	*
	* @param alpha - shape parameter (default: 1.0)
	* @param beta - rate parameter (default: 1.0)
	* @throws `alpha` must be a positive number
	* @throws `beta` must be a positive number
	* @returns distribution instance
	*
	* @example
	* var gamma = new Gamma( 1.0, 1.0 );
	*
	* var y = gamma.cdf( 0.8 );
	* // returns ~0.551
	*
	* var v = gamma.mode;
	* // returns 0.0
	*/
	constructor( alpha: number, beta: number );

	/**
	* Gamma distribution constructor.
	*
	* @returns distribution instance
	*
	* @example
	* var gamma = new Gamma();
	*
	* var y = gamma.cdf( 0.8 );
	* // returns ~0.551
	*
	* var v = gamma.mode;
	* // returns 0.0
	*/
	constructor();

	/**
	* Shape parameter. If set, the value must be greater than `0`.
	*/
	alpha: number;

	/**
	* Rate parameter. If set, the value must be greater than `0`.
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
	* Evaluates the moment-generating function (MGF).
	*
	* @param t - input value
	* @returns evaluated MGF
	 */
	mgf( t: number ): number;

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

export = Gamma;
