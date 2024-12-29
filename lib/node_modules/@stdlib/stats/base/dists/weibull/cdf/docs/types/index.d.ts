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

// TypeScript Version: 4.1

/**
* Evaluates the cumulative distribution function (CDF) for a Weibull distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Weibull distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Weibull distribution with scale parameter `k` and shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a non-positive value for `lambda` or `k`, the function returns `NaN`.
	*
	* @param x - input value
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 1.0, 1.0 );
	* // returns ~0.865
	*
	* @example
	* var y = cdf( -1.0, 2.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( +Infinity, 4.0, 2.0 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( -Infinity, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*/
	( x: number, k: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Weibull distribution.
	*
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns CDF
	*
	* @example
	* var myCDF = cdf.factory( 2.0, 10.0 );
	* var y = myCDF( 12.0 );
	* // returns ~0.763
	*
	* y = myCDF( 8.0 );
	* // returns ~0.473
	*/
	factory( k: number, lambda: number ): Unary;
}

/**
* Weibull distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param k - shape parameter
* @param lambda - scale parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 1.0, 1.0 );
* // returns ~0.865
*
* var myCDF = cdf.factory( 2.0, 10.0 );
* y = myCDF( 12.0 );
* // returns ~0.763
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
