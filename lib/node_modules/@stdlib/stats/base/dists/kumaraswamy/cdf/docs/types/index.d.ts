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
* Evaluates the cumulative distribution function (CDF) for a Kumaraswamy's double bounded distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Kumaraswamy's double bounded distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b` at a value `x`.
	*
	* ## Notes
	*
	* -   If `a <= 0` or `b <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 0.5, 1.0, 1.0 );
	* // returns ~0.5
	*
	* @example
	* var y = cdf( 0.5, 2.0, 4.0 );
	* // returns ~0.684
	*
	* @example
	* var y = cdf( 0.2, 2.0, 2.0 );
	* // returns ~0.078
	*
	* @example
	* var y = cdf( 0.8, 4.0, 4.0 );
	* // returns ~0.878
	*
	* @example
	* var y = cdf( -0.5, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( 1.5, 4.0, 2.0 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( 2.0, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 0.5, -1.0 );
	* // returns NaN
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
	*/
	( x: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b`.
	*
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 0.5, 0.5 );
	*
	* var y = mycdf( 0.8 );
	* // returns ~0.675
	*
	* y = mycdf( 0.3 );
	* // returns ~0.327
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Kumaraswamy's double bounded distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param a - first shape parameter
* @param b - second shape parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 0.5, 1.0, 1.0 );
* // returns 0.5
*
* y = cdf( 0.5, 2.0, 4.0 );
* // returns ~0.684
*
* var mycdf = cdf.factory( 0.5, 0.5 );
*
* y = mycdf( 0.8 );
* // returns ~0.675
*
* y = mycdf( 0.3 );
* // returns ~0.327
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
