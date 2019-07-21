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
* Evaluates the natural logarithm of the probability mass function (PMF) for a hypergeometric distribution.
*
* @param x - input value
* @returns evaluated natural logarithm of the PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability mass function (logPMF) of a hypergeometric distribution.
*/
interface LogPMF {
	/**
	* Evaluates the natural logarithm of the probability mass function (PMF) for a hypergeometric distribution with population size `N`, subpopulation size `K` and number of draws `n`.
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
	* @returns evaluated logPMF
	*
	* @example
	* var y = logpmf( 1.0, 8, 4, 2 );
	* // returns ~-0.56
	*
	* @example
	* var y = logpmf( 2.0, 8, 4, 2 );
	* // returns ~-1.54
	*
	* @example
	* var y = logpmf( 0.0, 8, 4, 2 );
	* // returns ~-1.54
	*
	* @example
	* var y = logpmf( 1.5, 8, 4, 2 );
	* // returns -Infinity
	*
	* @example
	* var y = logpmf( NaN, 10, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 0.0, NaN, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 0.0, 10, NaN, 2 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 0.0, 10, 5, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 10.5, 5, 2 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 5, 1.5, 2 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 10, 5, -2.0 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 10, 5, 12 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 8, 3, 9 );
	* // returns NaN
	*/
	( x: number, N: number, K: number, n: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability mass function (PMF) for a hypergeometric distribution with population size `N`, subpopulation size `K` and number of draws `n`.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @returns logPMF
	*
	* @example
	* var mylogpmf = logpmf.factory( 30, 20, 5 );
	* var y = mylogpmf( 4.0 );
	* // returns ~-1.079
	*
	* y = mylogpmf( 1.0 );
	* // returns ~-3.524
	*/
	factory( N: number, K: number, n: number ): Unary;
}

/**
* Hypergeometric distribution natural logarithm of the probability mass function (logPMF).
*
* @param x - input value
* @param N - population size
* @param K - subpopulation size
* @param n - number of draws
* @returns evaluated logPMF
*
* @example
* var y = logpmf( 1.0, 8, 4, 2 );
* // returns ~-0.56
*
* y = logpmf( 2.0, 8, 4, 2 );
* // returns ~-1.54
*
* y = logpmf( 0.0, 8, 4, 2 );
* // returns ~-1.54
*
* y = logpmf( 1.5, 8, 4, 2 );
* // returns -Infinity
*
* var mylogpmf = logpmf.factory( 30, 20, 5 );
* y = mylogpmf( 4.0 );
* // returns ~-1.079
*
* y = mylogpmf( 1.0 );
* // returns ~-3.54
*/
declare var logPMF: LogPMF;


// EXPORTS //

export = logPMF;
