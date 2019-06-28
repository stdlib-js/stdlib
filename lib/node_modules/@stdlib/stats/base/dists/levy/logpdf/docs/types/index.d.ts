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
* Evaluates the logarithm of the probability density function (PDF) for a Lévy distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (PDF) of a Lévy distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a Lévy distribution with location parameter `mu` and scale parameter `c` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `c <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param c - scale parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.0, 0.0, 1.0 );
	* // returns ~-2.209
	*
	* @example
	* var y = logpdf( -1.0, 4.0, 2.0 );
	* // returns -Infinity
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
	*/
	( x: number, mu: number, c: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a Lévy distribution.
	*
	* @param mu - location parameter
	* @param c - scale parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 10.0, 2.0 );
	* var y = mylogpdf( 11.0 );
	* // returns ~-1.572
	*
	* y = mylogpdf( 10.0 );
	* // returns -Infinity
	*/
	factory( mu: number, c: number ): Unary;
}

/**
* Lévy distribution natural logarithm of probability density function (PDF).
*
* @param x - input value
* @param mu - location parameter
* @param c - scale parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.0, 1.0 );
* // returns ~-2.209
*
* var mylogpdf = logpdf.factory( 10.0, 2.0 );
* y = mylogpdf( 11.0 );
* // returns ~-1.572
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
