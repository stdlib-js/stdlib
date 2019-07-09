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
* Evaluates the cumulative distribution function (CDF) for a Bernoulli distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Bernoulli distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Bernoulli distribution with success probability `p` at a value `x`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param x - input value
	* @param p - success probability
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 0.5, 0.5 );
	* // returns 0.5
	*
	* @example
	* var y = cdf( 2.0, 0.1 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( -1.0, 0.3 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Invalid probability
	* var y = cdf( 0.5, 1.4 );
	* // returns NaN
	*/
	( x: number, p: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Bernoulli distribution with success probability `p`.
	*
	* @param p - success probability
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 0.5 );
	* var y = mycdf( 3.0 );
	* // returns 1.0
	*
	* y = mycdf( 0.7 );
	* // returns 0.5
	*/
	factory( p: number ): Unary;
}

/**
* Bernoulli distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param p - success probability
* @returns evaluated CDF
*
* @example
* var y = cdf( 1.0, 0.5 );
* // returns 1.0
*
* y = cdf( 0.5, 0.1 );
* // returns 0.9
*
* var mycdf = cdf.factory( 0.5 );
* y = mycdf( 3.0 );
* // returns 1.0
*
* y = mycdf( -1.0 );
* // returns 0.0
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
