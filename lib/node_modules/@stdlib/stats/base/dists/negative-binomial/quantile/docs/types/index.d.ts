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
* Evaluates the quantile function for a negative binomial distribution.
*
* ## Notes
*
* -   If `k < 0` or `k > 1`, the function returns `NaN`.
*
* @param k - input value
* @returns evaluated quantile function
*/
type Unary = ( k: number ) => number;

/**
* Interface for the quantile function of a negative binomial distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p` at a probability `k`.
	*
	* ## Notes
	*
	* -   If provided a `k` outside of `[0,1]`, the function returns `NaN`.
	* -   If provided a `r` which is not a positive number, the function returns `NaN`.
	* -   If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.
	*
	* @param k - input value
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.9, 20.0, 0.2 );
	* // returns 106
	*
	* @example
	* var y = quantile( 0.9, 20.0, 0.8 );
	* // returns 8
	*
	* @example
	* var y = quantile( 0.5, 10.0, 0.4 );
	* // returns 14
	*
	* @example
	* var y = quantile( 0.0, 10.0, 0.9 );
	* // returns 0
	*
	* @example
	* var y = quantile( 1.1, 20.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( -0.1, 20.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 0.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, -2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.3, 20.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.3, 20.0, 1.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 20.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.3, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.3, 20.0, NaN );
	* // returns NaN
	*/
	( k: number, r: number, p: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a negative binomial distribution with number of successes until experiment is stopped `r` and success probability `p`.
	*
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 10.0, 0.5 );
	* var y = myquantile( 0.1 );
	* // returns 5
	*
	* y = myquantile( 0.9 );
	* // returns 16
	*/
	factory( r: number, p: number ): Unary;
}

/**
* Negative binomial distribution quantile function.
*
* @param k - input value
* @param r - number of successes until experiment is stopped
* @param p - success probability
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.9, 20.0, 0.2 );
* // returns 106
*
* y = quantile( 0.9, 20.0, 0.8 );
* // returns 8
*
* var myquantile = quantile.factory( 10.0, 0.5 );
* y = myquantile( 0.1 );
* // returns 5
*
* y = myquantile( 0.9 );
* // returns 16
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
