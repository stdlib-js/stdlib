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
* Evaluates the cumulative distribution function (CDF) for an inverse gamma distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of an inverse gamma distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for an inverse gamma distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 1.0, 1.0 );
	* // returns ~0.607
	*
	* @example
	* var y = cdf( 2.0, 3.0, 1.0 );
	* // returns ~0.986
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
	* var y = cdf( 2.0, -1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for an inverse gamma distribution with shape parameter `alpha` and scale parameter `beta`.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 3.0, 1.5 );
	*
	* var y = mycdf( 1.0 );
	* // returns ~0.809
	*
	* y = mycdf( 2.0 );
	* // returns ~0.96
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Inverse gamma distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param beta - rate parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 1.0, 8.0, 3.0 );
* // returns ~0.988
*
* y = cdf( 0.0, 1.0, 1.0 );
* // returns 0.0
*
* var mycdf = cdf.factory( 2.0, 0.5 );
* y = mycdf( 0.5 );
* // returns ~0.736
*
* y = mycdf( 2.0 );
* // returns ~0.973
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
