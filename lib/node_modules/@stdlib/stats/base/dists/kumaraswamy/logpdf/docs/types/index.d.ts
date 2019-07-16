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
* Evaluates the logarithm of the probability density function (PDF) for a Kumaraswamy's double bounded distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of probability density function (PDF) of a Kumaraswamy's double bounded distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b` at a value `x`.
	*
	* ## Notes
	*
	* -   If `a <= 0` or `b <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 0.5, 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = logpdf( 0.5, 2.0, 4.0 );
	* // returns ~0.523
	*
	* @example
	* var y = logpdf( 0.2, 2.0, 2.0 );
	* // returns ~-0.264
	*
	* @example
	* var y = logpdf( 0.8, 4.0, 4.0 );
	* // returns ~0.522
	*
	* @example
	* var y = logpdf( -0.5, 4.0, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 1.5, 4.0, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 2.0, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 0.5, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, 1.0, NaN );
	* // returns NaN
	*/
	( x: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b`.
	*
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 0.5, 0.5 );
	*
	* var y = mylogpdf( 0.8 );
	* // returns ~-0.151
	*
	* y = mylogpdf( 0.3 );
	* // returns ~-0.388
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Arcsine distribution logarithm of probability density function (PDF).
*
* @param x - input value
* @param a - first shape parameter
* @param b - second shape parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 0.5, 1.0, 1.0 );
* // returns 0.0
*
* y = logpdf( 0.5, 2.0, 4.0 );
* // returns ~0.523
*
* var mylogpdf = logpdf.factory( 0.5, 0.5 );
*
* y = mylogpdf( 0.8 );
* // returns ~-0.151
*
* y = mylogpdf( 0.3 );
* // returns ~-0.387
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
