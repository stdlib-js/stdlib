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
* Evaluates the cumulative distribution function (CDF) for a binomial distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a binomial distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a binomial distribution with number of trials `n` and success probability `p` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param x - input value
	* @param n - number of trials
	* @param p - success probability
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 3.0, 20, 0.2 );
	* // returns ~0.411
	*
	* @example
	* var y = cdf( 21.0, 20, 0.2 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( 5.0, 10, 0.4 );
	* // returns ~0.834
	*
	* @example
	* var y = cdf( 0.0, 10, 0.4 );
	* // returns ~0.006
	*
	* @example
	* var y = cdf( NaN, 20, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 20, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 1.5, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, -2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 20, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 20, 1.5 );
	* // returns NaN
	*/
	( x: number, n: number, p: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a binomial distribution with number of trials `n` and success probability `p`.
	*
	* @param n - number of trials
	* @param p - success probability
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 10, 0.5 );
	* var y = mycdf( 3.0 );
	* // returns ~0.172
	*
	* y = mycdf( 1.0 );
	* // returns ~0.011
	*/
	factory( n: number, p: number ): Unary;
}

/**
* Binomial distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param n - number of trials
* @param p - success probability
* @returns evaluated CDF
*
* @example
* var y = cdf( 3.0, 20, 0.2 );
* // returns ~0.411
*
* y = cdf( 21.0, 20, 0.2 );
* // returns 1.0
*
* y = cdf( 5.0, 10, 0.4 );
* // returns ~0.834
*
* y = cdf( 0.0, 10, 0.4 );
* // returns ~0.06
*
* var mycdf = cdf.factory( 10, 0.5 );
*
* y = mycdf( 3.0 );
* // returns ~0.172
*
* y = mycdf( 1.0 );
* // returns ~0.011
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
