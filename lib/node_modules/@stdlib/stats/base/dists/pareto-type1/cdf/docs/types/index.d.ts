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
* Evaluates the cumulative distribution function (CDF) for a Pareto (Type I) distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Pareto (Type I) distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Pareto (Type I) distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
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
	* // returns 0.5
	*
	* @example
	* var y = cdf( 5.0, 2.0, 4.0 );
	* // returns ~0.36
	*
	* @example
	* var y = cdf( 4.0, 2.0, 2.0 );
	* // returns 0.75
	*
	* @example
	* var y = cdf( 1.9, 2.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( +Infinity, 4.0, 2.0 );
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
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Pareto (Type I) distribution with shape parameter `alpha` and scale parameter `beta`.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 10.0, 2.0 );
	* var y = mycdf( 3.0 );
	* // returns ~0.983
	*
	* y = mycdf( 2.5 );
	* // returns ~0.893
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Pareto (Type I) distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param beta - scale parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 1.0, 1.0 );
* // returns 0.5
*
* y = cdf( 5.0, 2.0, 4.0 );
* // returns ~0.36
*
* y = cdf( 4.0, 2.0, 2.0 );
* // returns 0.75
*
* y = cdf( 1.9, 2.0, 2.0 );
* // returns 0.0
*
* y = cdf( +Infinity, 4.0, 2.0 );
* // returns 1.0
*
* var mycdf = cdf.factory( 10.0, 2.0 );
* y = mycdf( 3.0 );
* // returns ~0.983
*
* y = mycdf( 2.5 );
* // returns ~0.893
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
