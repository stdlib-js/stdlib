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
* Evaluates the cumulative distribution function (CDF) for a Cauchy distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Cauchy distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `gamma <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 4.0, 0.0, 2.0 );
	* // returns ~0.852
	*
	* @example
	* var y = cdf( 1.0, 0.0, 2.0 );
	* // returns ~0.648
	*
	* @example
	* var y = cdf( 1.0, 3.0, 2.0 );
	* // returns 0.25
	*
	* @example
	* var y = cdf( NaN, 0.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 1.0, 2.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 1.0, NaN, 3.0 );
	* // returns NaN
	*/
	( x: number, x0: number, gamma: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma`.
	*
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 10.0, 2.0 );
	*
	* var y = mycdf( 10.0 );
	* // returns 0.5
	*
	* y = mycdf( 12.0 );
	* // returns 0.75
	*/
	factory( x0: number, gamma: number ): Unary;
}

/**
* Cauchy distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param x0 - location parameter
* @param gamma - scale parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.0, 1.0 );
* // returns ~0.852
*
* var mycdf = cdf.factory( 1.5, 3.0 );
*
* y = mycdf( 1.0 );
* // returns ~0.447
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
