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
* Evaluates the natural logarithm of the probability density function (logPDF) for a Gumbel distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a Gumbel distribution.
*/
interface LogPDF {
	/**
	* Evaluates the logarithm of the probability density function (PDF) for a Gumbel distribution with location parameter `mu` and scale parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param beta - scale parameter
	* @returns evaluated logarithm of PDF
	*
	* @example
	* var y = logpdf( 0.0, 0.0, 2.0 );
	* // returns ~-1.693
	*
	* @example
	* var y = logpdf( 0.0, 0.0, 1.0 );
	* // returns ~-1.0
	*
	* @example
	* var y = logpdf( 1.0, 3.0, 2.0 );
	* // returns ~-2.411
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
	( x: number, mu: number, beta: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability density function (PDF) for a Gumbel distribution with location parameter `mu` and scale parameter `beta`.
	*
	* @param mu - location parameter
	* @param beta - scale parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 0.0, 2.0 );
	* var y = mylogpdf( 0.0 );
	* // returns ~-1.693
	*/
	factory( mu: number, beta: number ): Unary;
}

/**
* Gumbel distribution natural logarithm of probability density function (logPDF).
*
* @param x - input value
* @param mu - location parameter
* @param beta - scale parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.0, 1.0 );
* // returns ~-2.137
*
* var mylogpdf = logpdf.factory( 10.0, 2.0 );
* y = mylogpdf( 10.0 );
* // returns ~-1.693
*
* y = mylogpdf( 12.0 );
* // returns ~-2.064
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
