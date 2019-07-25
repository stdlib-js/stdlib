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
* Evaluates the probability mass function (PMF) for a hypergeometric distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability mass function (PMF) of a hypergeometric distribution.
*/
interface PMF {
	/**
	* Evaluates the probability mass function (PMF) for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n`.
	*
	* ## Notes
	*
	* -   If provided a population size `N`, subpopulation size `K`, or draws `n` which is not a nonnegative integer, the function returns `NaN`.
	* -   If the number of draws `n` or the subpopulation size `K` exceed population size `N`, the function returns `NaN`.
	*
	* @param x - input value
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @returns evaluated PMF
	*
	* @example
	* var y = pmf( 1.0, 8, 4, 2 );
	* // returns ~0.571
	*
	* @example
	* var y = pmf( 2.0, 8, 4, 2 );
	* // returns ~0.214
	*
	* @example
	* var y = pmf( 0.0, 8, 4, 2 );
	* // returns ~0.214
	*
	* @example
	* var y = pmf( 1.5, 8, 4, 2 );
	* // returns 0.0
	*
	* @example
	* var y = pmf( NaN, 10, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 0.0, NaN, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 0.0, 10, NaN, 2 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 0.0, 10, 5, NaN );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, 10.5, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, 5, 1.5, 2 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, 10, 5, -2.0 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, 10, 5, 12 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, 8, 3, 9 );
	* // returns NaN
	*/
	( x: number, N: number, K: number, n: number ): number;

	/**
	* Returns a function for evaluating the probability mass function (PMF) for a hypergeometric distribution with population size `N`, subpopulation size `K`, and number of draws `n`.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @returns PMF
	*
	* @example
	* var mypmf = pmf.factory( 30, 20, 5 );
	* var y = mypmf( 4.0 );
	* // returns ~0.34
	*
	* y = mypmf( 1.0 );
	* // returns ~0.029
	*/
	factory( N: number, K: number, n: number ): Unary;
}

/**
* Hypergeometric distribution probability mass function (PMF).
*
* @param x - input value
* @param N - population size
* @param K - subpopulation size
* @param n - number of draws
* @returns evaluated PMF
*
* @example
* var y = pmf( 5.0, 20.0, 0.8 );
* // returns ~0.157
*
* y = pmf( 21.0, 20.0, 0.5 );
* // returns ~0.06
*
* y = pmf( 5.0, 10.0, 0.4 );
* // returns ~0.016
*
* y = pmf( 0.0, 10.0, 0.9 );
* // returns ~0.349
*
* y = pmf( 21.0, 15.5, 0.5 );
* // returns ~0.037
*
* y = pmf( 5.0, 7.4, 0.4 );
* // returns ~0.051
*
* var mypmf = pmf.factory( 10, 0.5 );
* y = mypmf( 3.0 );
* // returns ~0.027
*
* y = mypmf( 5.0 );
* // returns ~0.061
*/
declare var pmf: PMF;


// EXPORTS //

export = pmf;
