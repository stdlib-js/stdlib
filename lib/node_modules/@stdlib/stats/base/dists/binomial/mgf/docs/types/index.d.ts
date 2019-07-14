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
* Evaluates the moment-generating function (MGF) for a binomial distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a binomial distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a binomial distribution with number of trials `n` and success probability `p` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param t - input value
	* @param n - number of trials
	* @param p - success probability
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.5, 20, 0.2 );
	* // returns ~11.471
	*
	* @example
	* var y = mgf( 5.0, 20, 0.2 );
	* // returns ~4.798e29
	*
	* @example
	* var y = mgf( 0.9, 10, 0.4 );
	* // returns ~99.338
	*
	* @example
	* var y = mgf( 0.0, 10, 0.4 );
	* // returns 1.0
	*
	* @example
	* var y = mgf( NaN, 20, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, 20, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 1.5, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, -2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 20, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 20, 1.5 );
	* // returns NaN
	*/
	( t: number, n: number, p: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a binomial distribution with number of trials `n` and success probability `p`.
	*
	* @param n - number of trials
	* @param p - success probability
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 10, 0.5 );
	* var y = mymgf( 0.3 );
	* // returns ~5.013
	*/
	factory( n: number, p: number ): Unary;
}

/**
* Binomial distribution moment-generating function (MGF).
*
* @param t - input value
* @param n - number of trials
* @param p - success probability
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.5, 20, 0.2 );
* // returns ~11.471
*
* y = mgf( 5.0, 20, 0.2 );
* // returns ~4.798e29
*
* y = mgf( 0.9, 10, 0.4 )
* // returns ~99.338
*
* var mymgf = mgf.factory( 10, 0.5 );
*
* y = mymgf( 0.3 );
* // returns ~5.013
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
