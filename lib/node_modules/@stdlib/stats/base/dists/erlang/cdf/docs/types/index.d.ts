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
* Evaluates the cumulative distribution function (CDF) for an Erlang distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of an Erlang distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If not provided a nonnegative integer for `k`, the function returns `NaN`.
	* -   If provided a non-positive value for `lambda`, the function returns `NaN`.
	*
	* @param x - input value
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 1, 1.0 );
	* // returns ~0.865
	*
	* @example
	* var y = cdf( 2.0, 3, 1.0 );
	* // returns ~0.323
	*
	* @example
	* var y = cdf( 2.0, 2.5, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( -1.0, 2, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( +Infinity, 4, 2.0 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( -Infinity, 4, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 0, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, -1, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 1, -1.0 );
	* // returns NaN
	*/
	( x: number, k: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda`.
	*
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 2, 0.1 );
	* var y = mycdf( 12.0 );
	* // returns ~0.337
	*
	* y = mycdf( 8.0 );
	* // returns ~0.191
	*/
	factory( k: number, lambda: number ): Unary;
}

/**
* Erlang distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param k - shape parameter
* @param lambda - rate parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 8, 3.0 );
* // returns ~0.256
*
* y = cdf( 0.0, 1, 1.0 );
* // returns 0.0
*
* var mycdf = cdf.factory( 2, 0.5 );
* y = mycdf( 6.0 );
* // returns ~0.801
*
* y = mycdf( 2.0 );
* // returns ~0.264
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
