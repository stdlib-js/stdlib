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
* Evaluates the cumulative distribution function (CDF) for a beta prime distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a beta prime distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 0.5, 1.0, 1.0 );
	* // returns ~0.333
	*
	* @example
	* var y = cdf( 0.5, 2.0, 4.0 );
	* // returns ~0.539
	*
	* @example
	* var y = cdf( 0.2, 2.0, 2.0 );
	* // returns ~0.074
	*
	* @example
	* var y = cdf( 0.8, 4.0, 4.0 );
	* // returns ~0.38
	*
	* @example
	* var y = cdf( -0.5, 4.0, 2.0 );
	* // returns 0.0
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
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta`.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns CDF
	*
	* @example
	* var myCDF = cdf.factory( 0.5, 0.5 );
	*
	* var y = myCDF( 0.8 );
	* // returns ~0.465
	*
	* y = myCDF( 0.3 );
	* // returns ~0.319
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Beta prime distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param alpha - first shape parameter
* @param beta - second shape parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 0.5, 1.0, 1.0 );
* // returns ~0.333
*
* y = cdf( 0.5, 2.0, 4.0 );
* // returns ~0.539
*
* var myCDF = cdf.factory( 0.5, 0.5 );
*
* var y = myCDF( 0.8 );
* // returns ~0.465
*
* y = myCDF( 0.3 );
* // returns ~0.319
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
