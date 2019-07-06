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
* Evaluates the natural logarithm of the probability density function (logPDF) for a Rayleigh distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a Rayleigh distribution.
*/
interface LogPDF {
	/**
	* Evaluates the logarithm of the probability density function (PDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 0.3, 1.0 );
	* // returns ~-1.249
	*
	* @example
	* var y = logpdf( 2.0, 0.8 );
	* // returns ~-1.986
	*
	* @example
	* var y = logpdf( -1.0, 0.5 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpdf( NaN, 2.0 );
	* // returns NaN
	*
	* @example
	* // Negative scale parameter:
	* var y = logpdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability density function (PDF) for a Rayleigh distribution with scale parameter `sigma`.
	*
	* @param sigma - scale parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 0.5 );
	* var y = mylogpdf( 1.0 );
	* // returns ~-0.614
	*
	* y = mylogpdf( 0.1 );
	* // returns ~-0.936
	*/
	factory( sigma: number ): Unary;
}

/**
* Rayleigh distribution natural logarithm of probability density function (logPDF).
*
* @param x - input value
* @param sigma - scale parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 4.0 );
* // returns ~-2.207
*
* var mylogpdf = logpdf.factory( 4.0 );
*
* y = mylogpdf( 6.0 );
* // returns ~-2.104
*
* y = mylogpdf( 4.0 );
* // returns ~-1.884
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
