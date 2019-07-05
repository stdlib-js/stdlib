/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Evaluates the cumulative distribution function (CDF) for a lognormal distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a lognormal distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a lognormal distribution with location parameter `mu` and scale parameter `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 0.0, 1.0 );
	* // returns ~0.756
	*
	* @example
	* var y = cdf( 5.0, 10.0, 3.0 );
	* // returns ~0.003
	*
	* @example
	* var y = cdf( 2.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( NaN, 0.0, 1.0 );
	* // returns NaN
	*/
	( x: number, mu: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a lognormal distribution with location parameter `mu` and scale parameter `sigma`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 3.0, 1.5 );
	*
	* var y = mycdf( 1.0 );
	* // returns ~0.023
	*
	* y = mycdf( 4.0 );
	* // returns ~0.141
	*/
	factory( mu: number, sigma: number ): Unary;
}

/**
* Lognormal distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - location parameter
* @param sigma - scale parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.0, 1.0 );
* // returns ~0.756
*
* y = cdf( 5.0, 10.0, 3.0 );
* // returns ~0.003
*
* var mycdf = cdf.factory( 3.0, 1.5 );
*
* y = mycdf( 1.0 );
* // returns ~0.023
*
* y = mycdf( 4.0 );
* // returns ~0.141
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
