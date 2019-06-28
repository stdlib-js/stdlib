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
* Evaluates the logarithm of the probability density function (PDF) for a raised cosine distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (PDF) of a raised cosine distribution.
*/
interface LogPDF {
	/**
	* Evaluates the logarithm of the probability density function (PDF) for a raised cosine distribution with location parameter `mu` and scale parameter `s` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `s < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.0, 0.0, 3.0 );
	* // returns ~-2.485
	*
	* @example
	* var y = logpdf( 1.5, 4.0, 4.0 );
	* // returns ~-2.562
	*
	* @example
	* var y = logpdf( NaN, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative scale parameter:
	* var y = logpdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 8.0, 0.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 8.0, 8.0, 0.0 );
	* // returns Infinity
	*/
	( x: number, mu: number, s: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability density function (PDF) for a raised cosine distribution.
	*
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 10.0, 2.0 );
	* var y = mylogpdf( 10.0 );
	* // returns ~-0.693
	*
	* y = mylogpdf( 9.0 );
	* // returns ~-1.386
	*/
	factory( mu: number, s: number ): Unary;
}

/**
* Raised cosine distribution logarithm of probability density function (PDF).
*
* @param x - input value
* @param mu - location parameter
* @param s - scale parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.0, 1.0 );
* // returns ~-2.254
*
* var mylogpdf = logpdf.factory( 10.0, 2.0 );
* y = mylogpdf( 10.0 );
* // returns ~-0.693
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
