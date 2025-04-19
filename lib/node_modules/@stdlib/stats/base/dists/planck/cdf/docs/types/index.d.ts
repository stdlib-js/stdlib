/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluates the cumulative distribution function (CDF) for a Planck distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Planck distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - shape parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 0.5 );
	* // returns ~0.7769
	*
	* @example
	* var y = cdf( 2.0, 1.5 );
	* // returns ~0.9889
	*
	* @example
	* var y = cdf( -1.0, 0.5 );
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
	* var y = cdf( 2.0, 1.4 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda`.
	*
	* @param lambda - shape parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 1.5 );
	* var y = mycdf( 3.0 );
	* // returns ~0.9975
	*
	* y = mycdf( 1.0 );
	* // returns ~0.9502
	*/
	factory( lambda: number ): Unary;
}

/**
* Planck distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param lambda - shape parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.5 );
* // returns ~0.7769
*
* y = cdf( 2.0, 1.5 );
* // returns ~0.9889
*
* var mycdf = cdf.factory( 1.5 );
* y = mycdf( 3.0 );
* // returns ~0.9975
*
* y = mycdf( 1.0 );
* // returns ~0.9502
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
