/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Evaluates the cumulative distribution function (CDF) for a Wald distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Wald distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `mu <= 0` or `lambda < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - mean
	* @param lambda - shape parameter
	* @returns evaluated cumulative distribution function
	*
	* @example
	* var y = cdf( 2.0, 1.0, 1.0 );
	* // returns ~0.885
	*
	* @example
	* var y = cdf( 0.5, 2.0, 3.0 );
	* // returns ~0.055
	*
	* @example
	* var y = cdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* // Nonpositive mean:
	* var y = cdf( 2.0, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* // Negative shape parameter:
	* var y = cdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* // Degenerate distribution when `lambda = 0.0`:
	* var y = cdf( 2.0, 8.0, 0.0 );
	* // returns 0.0
	*/
	( x: number, mu: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Wald distribution.
	*
	* @param mu - mean
	* @param lambda - shape parameter
	* @returns function to evaluate the cumulative distribution function
	*
	* @example
	* var myCDF = cdf.factory( 10.0, 2.0 );
	* var y = myCDF( 10.0 );
	* // returns ~0.777
	*
	* y = myCDF( 12.0 );
	* // returns ~0.808
	*/
	factory( mu: number, lambda: number ): Unary;
}

/**
* Wald distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - mean
* @param lambda - shape parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 1.0, 1.0 );
* // returns ~0.885
*
* var myCDF = cdf.factory( 10.0, 2.0 );
* y = myCDF( 10.0 );
* // returns ~0.777
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
