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
* Evaluates the cumulative distribution function (CDF) for a Fréchet distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Fréchet distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `alpha <= 0` or `s <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 10.0, 2.0, 3.0, 2.0 );
	* // returns ~0.869
	*
	* @example
	* var y = cdf( -0.2, 1.0, 3.0, -1.0 );
	* // returns ~0.024
	*
	* @example
	* var y = cdf( 1.5, 2.0, 1.0, 1.0 );
	* // returns ~0.018
	*
	* @example
	* var y = cdf( NaN, 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 2.0, NaN, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 2.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, -1.0, 1.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 1.0, -1.0, 0.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, s: number, m: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
	*
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 3.0, 3.0, 5.0 );
	*
	* var y = mycdf( 10.0 );
	* // returns ~0.806
	*
	* y = mycdf( 7.0 );
	* // returns ~0.034
	*/
	factory( alpha: number, s: number, m: number ): Unary;
}

/**
* Fréchet distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param s - scale parameter
* @param m - location parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 10.0, 2.0, 3.0, 5.0 );
* // returns ~0.698
*
* y = cdf( 0.0, 2.0, 3.0, 2.0 );
* // returns 0.0
*
* var mycdf = cdf.factory( 3.0, 3.0, 5.0 );
* y = mycdf( 10.0 );
* // returns ~0.806
*
* y = mycdf( 7.0 );
* // returns ~0.034
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
