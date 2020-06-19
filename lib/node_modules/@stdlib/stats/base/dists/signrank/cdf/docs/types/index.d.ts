/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Evaluates the cumulative distribution function (CDF) of the Wilcoxon signed rank test statistic.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of the Wilcoxon signed rank test statistic.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) of the Wilcoxon signed rank test statistic.
	*
	* ## Notes
	*
	* -   If provided a negative value for `x`, the function returns `NaN`.
	* -   If not provided a positive integer for `n`, the function returns `NaN`.
	*
	* @param x - input value
	* @param n - number of observations
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 7.0, 9 );
	* // returns ~0.037
	*
	* @example
	* var y = cdf( 7.0, 6 );
	* // returns ~0.281
	*
	* @example
	* var y = cdf( -1.0, 40 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 10 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, -1 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 1.8 );
	* // returns NaN
	*/
	( x: number, n: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) of the Wilcoxon signed rank test statistic.
	*
	* @param n - number of observations
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 8 );
	* var y = mycdf( 3.9 );
	* // returns ~0.027
	*
	* y = mycdf( 17.0 );
	* // returns ~0.473
	*/
	factory( n: number ): Unary;
}

/**
* Wilcoxon signed rank test statistic cumulative distribution function (CDF).
*
* @param x - input value
* @param n - number of observations
* @returns evaluated CDF
*
* @example
* var y = cdf( 7.0, 9 );
* // returns ~0.037
*
* var mycdf = cdf.factory( 8 );
* var y = mycdf( 3.9 );
* // returns ~0.027
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
