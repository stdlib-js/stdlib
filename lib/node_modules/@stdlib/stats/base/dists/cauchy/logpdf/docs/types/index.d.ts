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
* Evaluates the natural logarithm of the probability density function (logPDF) for a Cauchy distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a Cauchy distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (logPDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `gamma <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.0, 1.0, 1.0 );
	* // returns ~-1.838
	*
	* @example
	* var y = logpdf( 4.0, 3.0, 0.1 );
	* // returns ~-3.457
	*
	* @example
	* var y = logpdf( 4.0, 3.0, 3.0 );
	* // returns ~-2.349
	*
	* @example
	* var y = logpdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative scale parameter:
	* var y = logpdf( 2.0, 1.0, -2.0 );
	* // returns NaN
	*/
	( x: number, x0: number, gamma: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (logPDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma`.
	*
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 4.0, 2.0 );
	*
	* var y = mylogpdf( 10.0 );
	* // returns ~-4.14
	*
	* y = mylogpdf( 3.0 );
	* // returns ~-2.061
	*/
	factory( x0: number, gamma: number ): Unary;
}

/**
* Cauchy distribution natural logarithm of probability density function (logPDF).
*
* @param x - input value
* @param x0 - location parameter
* @param gamma - scale parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.0, 1.0 );
* // returns ~-2.765
*
* var mylogpdf = logpdf.factory( 10.0, 2.0 );
*
* y = mylogpdf( 10.0 );
* // returns ~-1.839
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
