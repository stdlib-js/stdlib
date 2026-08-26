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
* Evaluates the cumulative distribution function (CDF) for a log-logistic distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a log-logistic distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a log-logistic distribution with scale parameter `alpha` and shape parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - scale parameter
	* @param beta - shape parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 1.0, 1.0 );
	* // returns ~0.667
	*
	* @example
	* var y = cdf( 4.0, 2.0, 3.0 );
	* // returns ~0.889
	*
	* @example
	* var y = cdf( -1.0, 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( 0.0, 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 1.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 1.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 1.0, -1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 1.0, 1.0, -1.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a log-logistic distribution.
	*
	* @param alpha - scale parameter
	* @param beta - shape parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 1.0, 1.0 );
	* var y = mycdf( 2.0 );
	* // returns ~0.667
	*
	* y = mycdf( -1.0 );
	* // returns 0.0
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Log-logistic distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param alpha - scale parameter
* @param beta - shape parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 1.0, 1.0 );
* // returns ~0.667
*
* @example
* var mycdf = cdf.factory( 1.0, 1.0 );
* var y = mycdf( 2.0 );
* // returns ~0.667
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
