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
* Evaluates the cumulative distribution function (CDF) for a Gumbel distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Gumbel distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Gumbel distribution with location parameter `mu` and scale parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param beta - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 10.0, 0.0, 3.0 );
	* // returns ~0.965
	*
	* @example
	* var y = cdf( -2.0, 0.0, 3.0 );
	* // returns ~0.143
	*
	* @example
	* var y = cdf( 0.0, 0.0, 1.0 );
	* // returns ~0.368
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
	* // Negative scale parameter:
	* var y = cdf( 0.0, 0.0, -1.0 );
	* // returns NaN
	*/
	( x: number, mu: number, beta: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Gumbel distribution with location parameter `mu` and scale parameter `beta`.
	*
	* @param mu - location parameter
	* @param beta - scale parameter
	* @returns CDF
	*
	* @example
	* var myCDF = cdf.factory( 0.0, 3.0 );
	*
	* var y = myCDF( 10.0 );
	* // returns ~0.965
	*
	* y = myCDF( -2.0 );
	* // returns ~0.143
	*/
	factory( mu: number, beta: number ): Unary;
}

/**
* Gumbel distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - location parameter
* @param beta - scale parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 10.0, 0.0, 3.0 );
* // returns ~0.965
*
* y = cdf( 0.0, 0.0, 3.0 );
* // returns ~0.368
*
* var myCDF = cdf.factory( 2.0, 3.0 );
* y = myCDF( 10.0 );
* // returns ~0.933
*
* y = myCDF( 2.0 );
* // returns ~0.368
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
