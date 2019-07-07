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
* Evaluates the cumulative distribution function (CDF) for a chi-squared distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a chi-squared distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a chi-squared distribution with degrees of freedom `k` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `k < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param k - degrees of freedom
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 3.0 );
	* // returns ~0.428
	*
	* @example
	* var y = cdf( 1.0, 0.5 );
	* // returns ~0.846
	*
	* @example
	* var y = cdf( -1.0, 4.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative degrees of freedom:
	* var y = cdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, k: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a chi-squared distribution with degrees of freedom `k`.
	*
	* @param k - degrees of freedom
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 3.0 );
	*
	* var y = mycdf( 6.0 );
	* // returns ~0.888
	*
	* y = mycdf( 1.5 );
	* // returns ~0.318
	*/
	factory( k: number ): Unary;
}

/**
* Chi-squared distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param k - degrees of freedom
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 8.0 );
* // returns ~0.019
*
* y = cdf( 0.0, 1.0 );
* // returns 0.0
*
* var mycdf = cdf.factory( 1.0 );
*
* var y = mycdf( 2.0 );
* // returns ~0.843
*
* y = mycdf( 1.2 );
* // returns ~0.727
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
