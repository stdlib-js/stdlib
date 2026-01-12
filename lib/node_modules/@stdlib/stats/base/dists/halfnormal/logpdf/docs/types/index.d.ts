/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Evaluates the natural logarithm of the probability density function (logPDF) for a half-normal distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a half-normal distribution.
*/
interface LogPDF {
	/**
	* Evaluates the logarithm of the probability density function (PDF) for a half-normal distribution with scale parameter `sigma`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	* -   If `x < 0`, the function returns `-Infinity`.
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated logarithm of PDF
	*
	* @example
	* var y = logpdf( 0.8, 1.0 );
	* // returns ~-0.546
	*
	* @example
	* var y = logpdf( 0.5, 1.0 );
	* // returns ~-0.351
	*
	* @example
	* var y = logpdf( 1.2, 2.0 );
	* // returns ~-1.099
	*
	* @example
	* var y = logpdf( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative scale parameter:
	* var y = logpdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability density function (PDF) for a half-normal distribution with scale parameter `sigma`.
	*
	* @param sigma - scale parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 1.0 );
	* var y = mylogpdf( 0.8 );
	* // returns ~-0.546
	*/
	factory( sigma: number ): Unary;
}

/**
* Half-normal distribution natural logarithm of probability density function (logPDF).
*
* @param x - input value
* @param sigma - scale parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 0.8, 1.0 );
* // returns ~-0.546
*
* var mylogpdf = logpdf.factory( 1.0 );
* var y = mylogpdf( 0.8 );
* // returns ~-0.546
*/
declare var logpdf: LogPDF;


// EXPORTS //

export = logpdf;
