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
* Evaluates the cumulative distribution function (CDF) for a normal distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a normal distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a normal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated cumulative distribution function
	*
	* @example
	* var y = cdf( 2.0, 0.0, 1.0 );
	* // returns ~0.977
	*
	* @example
	* var y = cdf( -1.0, -1.0, 2.0 );
	* // returns 0.5
	*
	* @example
	* var y = cdf( -1.0, 4.0, 2.0 );
	* // returns ~0.006
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
	* // Negative standard deviation:
	* var y = cdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*/
	( x: number, mu: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a normal distribution.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns function to evaluate the cumulative distribution function
	*
	* @example
	* var myCDF = cdf.factory( 10.0, 2.0 );
	* var y = myCDF( 10.0 );
	* // returns 0.5
	*
	* y = myCDF( 12.0 );
	* // returns ~0.841
	*/
	factory( mu: number, sigma: number ): Unary;
}

/**
* Normal distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - mean
* @param sigma - standard deviation
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.0, 1.0 );
* // returns ~0.977
*
* var myCDF = cdf.factory( 10.0, 2.0 );
* y = myCDF( 10.0 );
* // returns 0.5
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
