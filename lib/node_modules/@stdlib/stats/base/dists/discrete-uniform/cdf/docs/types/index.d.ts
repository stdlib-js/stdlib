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
* Evaluates the cumulative distribution function (CDF) for a discrete uniform distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a discrete uniform distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
	*
	* ## Notes
	*
	* -   If `a > b`, the function returns `NaN`.
	* -   If `a` or `b` is not an integer value, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 9.0, 0.0, 10.0 );
	* // returns ~0.909
	*
	* @example
	* var y = cdf( 0.5, 0.0, 2.0 );
	* // returns ~0.333
	*
	* @example
	* var y = cdf( +Infinity, 2.0, 4.0 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( -Infinity, 2.0, 4.0 );
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
	* var y = cdf( 2.0, 1.0, 0.0 );
	* // returns NaN
	*/
	( x: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 0.0, 10.0 );
	* var y = mycdf( 0.5 );
	* // returns ~0.091
	*
	* y = mycdf( 8.0 );
	* // returns ~0.818
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Discrete uniform distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated CDF
*
* @example
* var y = cdf( 3.0, 0, 4 );
* // returns ~0.8
*
* var mycdf = cdf.factory( 0, 10 );
* y = mycdf( 0.5 );
* // returns ~0.091
*
* y = mycdf( 8.0 );
* // returns ~0.818
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
