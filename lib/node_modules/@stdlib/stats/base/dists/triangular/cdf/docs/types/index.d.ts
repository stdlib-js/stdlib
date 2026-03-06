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

// TypeScript Version: 4.1

/**
* Evaluates the cumulative distribution function (CDF) for a triangular distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a triangular distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a value `x`.
	*
	* ## Notes
	*
	* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 0.5, -1.0, 1.0, 0.0 );
	* // returns 0.875
	*
	* @example
	* var y = cdf( 0.5, -1.0, 1.0, 0.5 );
	* // returns 0.75
	*
	* @example
	* var y = cdf( -10.0, -20.0, 0.0, -2.0 );
	* // returns ~0.278
	*
	* @example
	* var y = cdf( -2.0, -1.0, 1.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 0.0, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 1.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = cdf( 2.0, 1.0, 0.0, 1.5 );
	* // returns NaN
	*/
	( x: number, a: number, b: number, c: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c`.
	*
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 0.0, 10.0, 2.0 );
	* var y = mycdf( 0.5 );
	* // returns 0.0125
	*
	* y = mycdf( 8.0 );
	* // returns 0.95
	*/
	factory( a: number, b: number, c: number ): Unary;
}

/**
* Triangular distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param a - lower limit
* @param b - upper limit
* @param c - mode
* @returns evaluated CDF
*
* @example
* var y = cdf( 0.5, -1.0, 1.0, 0.0 );
* // returns 0.875
*
* y = cdf( 0.5, -1.0, 1.0, 0.5 );
* // returns 0.75
*
* y = cdf( -10.0, -20.0, 0.0, -2.0 );
* // returns ~0.278
*
* y = cdf( -2.0, -1.0, 1.0, 0.0 );
* // returns 0.0
*
* var mycdf = cdf.factory( 0.0, 10.0, 2.0 );
* y = mycdf( 0.5 );
* // returns 0.0125
*
* y = mycdf( 8.0 );
* // returns 0.95
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
