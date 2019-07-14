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
* Evaluates the cumulative distribution function (CDF) for a negative binomial distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a negative binomial distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a `r` which is not a positive number, the function returns `NaN`.
	* -   If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.
	*
	* @param x - input value
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 5.0, 20.0, 0.8 );
	* // returns ~0.617
	*
	* @example
	* var y = cdf( 21.0, 20.0, 0.5 );
	* // returns ~0.622
	*
	* @example
	* var y = cdf( 5.0, 10.0, 0.4 );
	* // returns ~0.034
	*
	* @example
	* var y = cdf( 0.0, 10.0, 0.9 );
	* // returns ~0.349
	*
	* @example
	* var y = cdf( 21.0, 15.5, 0.5 );
	* // returns ~0.859
	*
	* @example
	* var y = cdf( 5.0, 7.4, 0.4 );
	* // returns ~0.131
	*
	* @example
	* var y = cdf( 2.0, 0.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, -2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( NaN, 20.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 20.0, NaN );
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
	( x: number, r: number, p: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p`.
	*
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 10, 0.5 );
	* var y = mycdf( 3.0 );
	* // returns ~0.046
	*
	* y = mycdf( 11.0 );
	* // returns ~0.668
	*/
	factory( r: number, p: number ): Unary;
}

/**
* Negative binomial distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param r - number of successes until experiment is stopped
* @param p - success probability
* @returns evaluated CDF
*
* @example
* var y = cdf( 5.0, 20.0, 0.8 );
* // returns ~0.617
*
* y = cdf( 21.0, 20.0, 0.5 );
* // returns ~0.622
*
* y = cdf( 5.0, 10.0, 0.4 );
* // returns ~0.034
*
* y = cdf( 0.0, 10.0, 0.9 );
* // returns ~0.349
*
* y = cdf( 21.0, 15.5, 0.5 );
* // returns ~0.859
*
* y = cdf( 5.0, 7.4, 0.4 );
* // returns ~0.131
*
* var mycdf = cdf.factory( 10, 0.5 );
* y = mycdf( 3.0 );
* // returns ~0.046
*
* y = mycdf( 11.0 );
* // returns ~0.668
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
