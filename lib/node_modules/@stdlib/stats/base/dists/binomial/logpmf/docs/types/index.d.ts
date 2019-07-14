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
* Evaluates the natural logarithm of the probability mass function (PMF) for a binomial distribution.
*
* @param x - input value
* @returns evaluated natural logarithm of the PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability mass function (logPMF) of a binomial distribution.
*/
interface LogPMF {
	/**
	* Evaluates the natural logarithm of the probability mass function (PMF) for a binomial distribution with number of trials `n` and success probability `p` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param x - input value
	* @param n - number of trials
	* @param p - success probability
	* @returns evaluated logPMF
	*
	* @example
	* var y = logpmf( 3.0, 20, 0.2 );
	* // returns ~-1.583
	*
	* @example
	* var y = logpmf( 21.0, 20, 0.2 );
	* // returns -Infinity
	*
	* @example
	* var y = logpmf( 5.0, 10, 0.4 );
	* // returns ~-1.606
	*
	* @example
	* var y = logpmf( 0.0, 10, 0.4 );
	* // returns ~-5.108
	*
	* @example
	* var y = logpmf( NaN, 20, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 0.0, 20, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 1.5, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, -2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 20, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 20, 1.5 );
	* // returns NaN
	*/
	( x: number, n: number, p: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability mass function (PMF) for a binomial distribution with number of trials `n` and success probability `p`.
	*
	* @param n - number of trials
	* @param p - success probability
	* @returns logPMF
	*
	* @example
	* var mylogpmf = logpmf.factory( 10, 0.5 );
	* var y = mylogpmf( 3.0 );
	* // returns ~-2.144
	*
	* y = mylogpmf( 5.0 );
	* // returns ~-1.402
	*/
	factory( n: number, p: number ): Unary;
}

/**
* Binomial distribution natural logarithm of the probability mass function (logPMF).
*
* @param x - input value
* @param n - number of trials
* @param p - success probability
* @returns evaluated logPMF
*
* @example
* var y = logpmf( 3.0, 20, 0.2 );
* // returns ~-1.583
*
* y = logpmf( 21.0, 20, 0.2 );
* // returns -Infinity
*
* y = logpmf( 5.0, 10, 0.4 );
* // returns ~-1.606
*
* y = logpmf( 0.0, 10, 0.4 );
* // returns ~-5.108
*
* var mylogpmf = logpmf.factory( 10, 0.5 );
*
* y = mylogpmf( 3.0 );
* // returns ~-2.146
*
* y = mylogpmf( 5.0 );
* // returns ~-1.402
*/
declare var logPMF: LogPMF;


// EXPORTS //

export = logPMF;
