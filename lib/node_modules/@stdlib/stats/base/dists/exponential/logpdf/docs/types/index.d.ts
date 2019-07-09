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
* Evaluates the natural logarithm of the probability density function (logPDF) for an exponential distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of an exponential distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for an exponential distribution with rate parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - rate parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 0.3, 4.0 );
	* // returns ~0.186
	*
	* @example
	* var y = logpdf( 2.0, 0.7 );
	* // returns ~-1.757
	*
	* @example
	* var y = logpdf( -1.0, 0.5 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpdf( NaN, 2.0 );
	* // returns NaN
	*
	* @example
	* // Negative rate:
	* var y = logpdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for an exponential distribution with parameter `lambda`.
	*
	* @param lambda - rate parameter
	* @returns logarithm of probability density function (logPDF)
	*
	* @example
	* var mylogPDF = logpdf.factory( 0.5 );
	* var y = mylogPDF( 3.0 );
	* // returns ~-2.193
	*
	* y = mylogPDF( 1.0 );
	* // returns ~-1.193
	*/
	factory( lambda: number ): Unary;
}

/**
* Exponential distribution natural logarithm of probability density function (logPDF).
*
* @param x - input value
* @param lambda - rate parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 0.3, 4.0 );
* // returns ~0.186
*
* var mylogPDF = logpdf.factory( 0.5 );
*
* y = mylogPDF( 3.0 );
* // returns ~-2.193
*
* y = mylogPDF( 1.0 );
* // returns ~-1.193
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
