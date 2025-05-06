/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Evaluates the cumulative distribution function (CDF) for a Bradford distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;


/**
* Interface for the cumulative distribution function (CDF) of a Bradford distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Bradford distribution with shape parameter `c` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `c <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param c - shape parameter
	* @returns evaluated CDF
	*
	* @example
	* var v = cdf( 0.1, 0.1 );
	* // returns ~0.104
	*
	* @example
	* var v = cdf( 0.5, 5.0 );
	* // returns ~0.699
	*
	* @example
	* var v = cdf( 1.0, 10.0 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( -1.0, 0.5 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( 2.0, 0.5 );
	* // returns 1.0
	*
	* @example
	* var y = cdf( 0.5, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.5, -5.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 1.0, NaN );
	* // returns NaN
	*/
	( x: number, c: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Bradford distribution with shape parameter `c`.
	*
	* @param c - shape parameter
	* @returns CDF
	*
	* @example
	* var mypdf = cdf.factory( 5.0 );
	* var y = mypdf( 0.5 );
	* // returns ~0.699
	*
	* y = mypdf( 1.0 );
	* // returns 1.0
	*/
	factory( c: number ): Unary;
}

/**
* Bradford distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param c - shape parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 0.5, 5.0 );
* // returns ~0.699
*
* var mycdf = cdf.factory( 5.0 );
* y = mycdf( 0.5 );
* // returns ~0.699
*
* y = mycdf( 1.0 );
* // returns 1.0
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
