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
* Evaluates the natural logarithm of the probability density function (PDF) for a uniform distribution.
*
* @param x - input value
* @returns evaluated natural logarithm of the PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a uniform distribution.
*/
interface LogPDF {
	/**
	* Evaluates the logarithm of the probability density function (PDF) for a uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `a >= b`, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.0, 0.0, 4.0 );
	* // returns ~-1.386
	*
	* @example
	* var y = logpdf( 5.0, 0.0, 4.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 0.25, 0.0, 1.0 );
	* // returns 0.0
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
	* var y = logpdf( 2.0, 3.0, 1.0 );
	* // returns NaN
	*/
	( x: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability density function (PDF) for a uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns logPDF
	*
	* @example
	* var mylogPDF = logpdf.factory( 0.0, 10.0 );
	* var y = mylogPDF( 2.0 );
	* // returns ~-2.303
	*
	* y = mylogPDF( 12.0 );
	* // returns -Infinity
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Uniform distribution natural logarithm of the probability density function (logPDF).
*
* @param x - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 3.0, 2.0, 6.0 );
* // returns ~-1.386
*
* var mylogPDF = logpdf.factory( 6.0, 7.0 );
* y = mylogPDF( 7.0 );
* // returns 0.0
*
* y = mylogPDF( 5.0 );
* // returns -Infinity
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
