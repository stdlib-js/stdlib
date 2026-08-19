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
* Evaluates the natural logarithm of the probability density function (PDF) for a Wald distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (PDF) of a Wald distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `mu <= 0` or `lambda < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - mean
	* @param lambda - shape parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.0, 1.0, 1.0 );
	* // returns ~-2.209
	*
	* @example
	* var y = logpdf( 0.5, 2.0, 3.0 );
	* // returns ~-1.017
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
	*
	* @example
	* // Nonpositive mean:
	* var y = logpdf( 2.0, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* // Negative shape parameter:
	* var y = logpdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* // Degenerate distribution when `lambda = 0.0`:
	* var y = logpdf( 2.0, 8.0, 0.0 );
	* // returns -Infinity
	*/
	( x: number, mu: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a Wald distribution.
	*
	* @param mu - mean
	* @param lambda - shape parameter
	* @returns function to evaluate the natural logarithm of the probability density function
	*
	* @example
	* var mylogpdf = logpdf.factory( 10.0, 2.0 );
	* var y = mylogpdf( 10.0 );
	* // returns ~-4.026
	*
	* y = mylogpdf( 12.0 );
	* // returns ~-4.303
	*/
	factory( mu: number, lambda: number ): Unary;
}

/**
* Wald distribution natural logarithm of the probability density function (PDF).
*
* @param x - input value
* @param mu - mean
* @param lambda - shape parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 1.0, 1.0 );
* // returns ~-2.209
*
* var mylogpdf = logpdf.factory( 10.0, 2.0 );
* y = mylogpdf( 10.0 );
* // returns ~-4.026
*/
declare var logpdf: LogPDF;


// EXPORTS //

export = logpdf;
