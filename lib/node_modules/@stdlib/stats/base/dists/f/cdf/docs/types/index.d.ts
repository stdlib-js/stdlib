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
* Evaluates the cumulative distribution function (CDF) for an F distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of an F distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a value `x`.
	*
	* ## Notes
	*
	* -   If `d1 <= 0` or `d2 <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param d1 - numerator degrees of freedom
	* @param d2 - denominator degrees of freedom
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 1.0, 1.0 );
	* // returns ~0.608
	*
	* @example
	* var y = cdf( 2.0, 8.0, 4.0 );
	* // returns ~0.737
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
	* var y = cdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, -1.0, 1.0 );
	* // returns NaN
	*/
	( x: number, d1: number, d2: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2`.
	*
	* @param d1 - numerator degrees of freedom
	* @param d2 - denominator degrees of freedom
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 10.0, 2.0 );
	*
	* var y = mycdf( 10.0 );
	* // returns ~0.906
	*
	* y = mycdf( 8.0 );
	* // returns ~0.884
	*/
	factory( d1: number, d2: number ): Unary;
}

/**
* F distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param d1 - numerator degrees of freedom
* @param d2 - denominator degrees of freedom
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 1.0, 1.0 );
* // returns ~0.608
*
* y = cdf( 2.0, 8.0, 4.0 );
* // returns ~0.737
*
* y = cdf( -1.0, 2.0, 2.0 );
* // returns 0.0
*
* var mycdf = cdf.factory( 10.0, 2.0 );
*
* y = mycdf( 10.0 );
* // returns ~0.906
*
* y = mycdf( 8.0 );
* // returns ~0.884
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
