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
* Evaluates the quantile function for a hypergeometric distribution.
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
* Interface for the quantile function of a hypergeometric distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided a population size `N`, subpopulation size `K` or draws `n` which is not a nonnegative integer, the function returns `NaN`.
	* -   If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.
	*
	* @param p - input value
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.4, 40, 20, 10 );
	* // returns 5
	*
	* @example
	* var y = quantile( 0.8, 60, 40, 20 );
	* // returns 15
	*
	* @example
	* var y = quantile( 0.5, 100, 10, 10 );
	* // returns 1
	*
	* @example
	* var y = quantile( 0.0, 100, 40, 20 );
	* // returns 0
	*
	* @example
	* var y = quantile( 1.0, 100, 40, 20 );
	* // returns 20
	*
	* @example
	* var y = quantile( NaN, 40, 20, 10 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.2, NaN, 20, 10 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.2, 40, NaN, 10 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.2, 40, 20, NaN );
	* // returns NaN
	*/
	( p: number, N: number, K: number, n: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n`.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 100, 20, 10 );
	* var y = myquantile( 0.2 );
	* // returns 1
	*
	* y = myquantile( 0.9 );
	* // returns 4
	*/
	factory( N: number, K: number, n: number ): Unary;
}

/**
* Hypergeometric distribution quantile function.
*
* @param p - input value
* @param N - population size
* @param K - subpopulation size
* @param n - number of draws
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.4, 40, 20, 10 );
* // returns 5
*
* y = quantile( 0.8, 60, 40, 20 );
* // returns 15
*
* y = quantile( 0.5, 100, 10, 10 );
* // returns 1
*
* y = quantile( 0.0, 100, 40, 20 );
* // returns 0
*
* y = quantile( 1.0, 100, 40, 20 );
* // returns 20
*
* var myquantile = quantile.factory( 100, 20, 10 );
* y = myquantile( 0.2 );
* // returns 1
*
* y = myquantile( 0.9 );
* // returns 4
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
