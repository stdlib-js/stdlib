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
* Evaluates the cumulative distribution function (CDF) for a degenerate distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a degenerate distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a degenerate distribution with mean value `mu`.
	*
	* @param x - input value
	* @param mu - constant value of distribution
	* @returns evaluated cumulative distribution function
	*
	* @example
	* var y = cdf( 2.0, 3.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( 4.0, 3.0 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( 3.0, 3.0 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN );
	* // returns NaN
	*/
	( x: number, mu: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) of a degenerate distribution centered at a provided mean value.
	*
	* @param mu - constant value of distribution
	* @returns function to evaluate the cumulative distribution function
	*
	* @example
	* var mycdf = cdf.factory( 5.0 );
	*
	* var y = mycdf( 3.0 );
	* // returns 0.0
	*
	* y = mycdf( 6.0 );
	* // returns 1.0
	*
	* y = mycdf( NaN );
	* // returns NaN
	*/
	factory( mu: number ): Unary;
}

/**
* Degenerate distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - constant value of distribution
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 5.0 );
* // returns 0.0
*
* var mycdf = cdf.factory( 5.0 );
*
* y = mycdf( 3.0 );
* // returns 0.0
*
* y = mycdf( 6.0 );
* // returns 1.0
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
