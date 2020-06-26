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
* Evaluates the quantile function of the Wilcoxon signed rank test statistic.
*
* ## Notes
*
* -   If `p < 0` or `p > 1`, the function returns `NaN`.
*
* @param p - input value
* @returns evaluated quantile function
*/
type Unary = ( p: number ) => number;

/**
* Interface for the quantile function of the Wilcoxon signed rank test statistic.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for the Wilcoxon signed rank test statistic with `n` observations at probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If not provided a positive integer for `n`, the function returns `NaN`.
	*
	* @param p - input value
	* @param n - number of observations
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 5 );
	* // returns 11
	*
	* @example
	* var y = quantile( 0.5, 4 );
	* // returns 5
	*
	* @example
	* var y = quantile( 1.1, 5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( -0.2, 5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.0, NaN );
	* // returns NaN
	*/
	( p: number, n: number ): number;

	/**
	* Returns a function for evaluating the quantile function of the Wilcoxon signed rank test statistic with `n` observations.
	*
	* @param n - number of observations
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 10 );
	* var y = myQuantile( 0.5 );
	* // returns 27
	*
	* y = myQuantile( 0.8 );
	* // returns 36
	*/
	factory( n: number ): Unary;
}

/**
* Wilcoxon signed rank test statistic quantile function.
*
* @param p - input value
* @param n - number of observations
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.5, 4 );
* // returns 5
*
* var myQuantile = quantile.factory( 10 );
*
* y = myQuantile( 0.5 );
* // returns 27
*
* y = myQuantile( 0.8 );
* // returns 36
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
