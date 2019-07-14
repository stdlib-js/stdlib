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
* Evaluates the probability mass function (PMF) for a negative binomial distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability mass function (PMF) of a negative binomial distribution.
*/
interface PMF {
	/**
	* Evaluates the probability mass function (PMF) for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p`.
	*
	* ## Notes
	*
	* -   If provided a `r` which is not a positive number, the function returns `NaN`.
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param x - input value
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns evaluated PMF
	*
	* @example
	* var y = pmf( 5.0, 20.0, 0.8 );
	* // returns ~0.157
	*
	* @example
	* var y = pmf( 21.0, 20.0, 0.5 );
	* // returns ~0.06
	*
	* @example
	* var y = pmf( 5.0, 10.0, 0.4 );
	* // returns ~0.016
	*
	* @example
	* var y = pmf( 0.0, 10.0, 0.9 );
	* // returns ~0.349
	*
	* @example
	* var y = pmf( 21.0, 15.5, 0.5 );
	* // returns ~0.037
	*
	* @example
	* var y = pmf( 5.0, 7.4, 0.4 );
	* // returns ~0.051
	*
	* @example
	* var y = pmf( 2.0, 0.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, -2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, 20, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, 20, 1.5 );
	* // returns NaN
	*
	* @example
	* var y = pmf( NaN, 20.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 0.0, 20.0, NaN );
	* // returns NaN
	*/
	( x: number, r: number, p: number ): number;

	/**
	* Returns a function for evaluating the probability mass function (PMF) for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p`.
	*
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns PMF
	*
	* @example
	* var mypmf = pmf.factory( 10, 0.5 );
	* var y = mypmf( 3.0 );
	* // returns ~0.027
	*
	* y = mypmf( 5.0 );
	* // returns ~0.061
	*/
	factory( r: number, p: number ): Unary;
}

/**
* Negative binomial distribution probability mass function (PMF).
*
* @param x - input value
* @param r - number of successes until experiment is stopped
* @param p - success probability
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
