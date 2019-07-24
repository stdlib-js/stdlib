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
* Evaluates the cumulative distribution function (CDF) for a hypergeometric distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a hypergeometric distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a population size `N`, subpopulation size `K` or draws `n` which is not a nonnegative integer, the function returns `NaN`.
	* -   If the number of draws `n` or subpopulation size `K` exceeds population size `N`, the function returns `NaN`.
	*
	* @param x - input value
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 1.0, 8, 4, 2 );
	* // returns ~0.786
	*
	* @example
	* var y = cdf( 1.5, 8, 4, 2 );
	* // returns ~0.786
	*
	* @example
	* var y = cdf( 2.0, 8, 4, 2 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( 0, 8, 4, 2 );
	* // returns ~0.214
	*
	* @example
	* var y = cdf( NaN, 10, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 10, NaN, 2 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 10, 5, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 10.5, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 10, 1.5, 2 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 10, 5, -2.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 10, 5, 12 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 8, 3, 9 );
	* // returns NaN
	*/
	( x: number, N: number, K: number, n: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n`.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 30, 20, 5 );
	* var y = mycdf( 4.0 );
	* // returns ~0.891
	*
	* y = mycdf( 1.0 );
	* // returns ~0.031
	*/
	factory( N: number, K: number, n: number ): Unary;
}

/**
* Hypergeometric distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param N - population size
* @param K - subpopulation size
* @param n - number of draws
* @returns evaluated CDF
*
* @example
* var y = cdf( 1.0, 8, 4, 2 );
* // returns ~0.786
*
* y = cdf( 1.5, 8, 4, 2 );
* // returns ~0.786
*
* y = cdf( 2.0, 8, 4, 2 );
* // returns 1.0
*
* y = cdf( 0.0, 8, 4, 2 );
* // returns ~0.214
*
* var mycdf = cdf.factory( 30, 20, 5 );
* y = mycdf( 4.0 );
* // returns ~0.891
*
* y = mycdf( 1.0 );
* // returns ~0.031
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
