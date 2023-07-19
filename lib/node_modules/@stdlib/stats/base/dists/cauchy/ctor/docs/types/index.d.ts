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
* Cauchy distribution.
*/
declare class Cauchy {
	/**
	* Cauchy distribution constructor.
	*
	* @param x0 - location parameter (default: 0.0)
	* @param gamma - scale parameter (default: 1.0)
	* @throws `gamma` must be a positive number
	* @returns distribution instance
	*
	* @example
	* var cauchy = new Cauchy( 1.0, 1.0 );
	*
	* var y = cauchy.cdf( 0.8 );
	* // returns ~0.437
	*
	* var v = cauchy.median;
	* // returns 1.0
	*/
	constructor( x0: number, gamma: number );

	/**
	* Cauchy distribution constructor.
	*
	* @returns distribution instance
	*
	* @example
	* var cauchy = new Cauchy();
	*
	* var y = cauchy.cdf( 0.8 );
	* // returns ~0.715
	*
	* var v = cauchy.median;
	* // returns 0.0
	*/
	constructor();

	/**
	*  Location parameter.
	*/
	x0: number;

	/**
	* Scale parameter. If set, the value must be greater than `0`.
	*/
	gamma: number;

	/**
	* Read-only property which returns the differential entropy.
	*/
	readonly entropy: number;

	/**
	* Read-only property which returns the median.
	*/
	readonly median: number;

	/**
	* Read-only property which returns the mode.
	*/
	readonly mode: number;

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

export = Cauchy;
