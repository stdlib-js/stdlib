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
* Evaluates the cumulative distribution function (CDF) for a logistic distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a logistic distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `s < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 0.0, 1.0 );
	* // returns ~0.881
	*
	* @example
	* var y = cdf( 5.0, 10.0, 3.0 );
	* // returns ~0.159
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
	( x: number, mu: number, s: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a logistic distribution with location parameter `mu` and scale parameter `s`.
	*
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 3.0, 1.5 );
	*
	* var y = mycdf( 1.0 );
	* // returns ~0.209
	*
	* y = mycdf( 4.0 );
	* // returns ~0.661
	*/
	factory( mu: number, s: number ): Unary;
}

/**
* Logistic distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - location parameter
* @param s - scale parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.0, 1.0 );
* // returns ~0.881
*
* var mycdf = cdf.factory( 3.0, 1.5 );
*
* y = mycdf( 1.0 );
* // returns ~0.209
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
