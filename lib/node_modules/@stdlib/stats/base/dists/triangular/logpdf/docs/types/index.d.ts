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
* Evaluates the natural logarithm of the probability density function (PDF) for a triangular distribution.
*
* @param x - input value
* @returns evaluated natural logarithm of the PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a triangular distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a value `x`.
	*
	* ## Notes
	*
	* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 0.5, -1.0, 1.0, 0.0 );
	* // returns ~-0.693
	*
	* @example
	* var y = logpdf( 0.5, -1.0, 1.0, 0.5 );
	* // returns 0.0
	*
	* @example
	* var y = logpdf( -10.0, -20.0, 0.0, -2.0 );
	* // returns ~-2.89
	*
	* @example
	* var y = logpdf( -2.0, -1.0, 1.0, 0.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( NaN, 0.0, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, NaN, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 1.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 1.0, 0.0, 1.5 );
	* // returns NaN
	*/
	( x: number, a: number, b: number, c: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c`.
	*
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 0.0, 10.0, 5.0 );
	* var y = mylogpdf( 2.0 );
	* // returns ~-2.526
	*
	* y = mylogpdf( 12.0 );
	* // returns -Infinity
	*/
	factory( a: number, b: number, c: number ): Unary;
}

/**
* Triangular distribution natural logarithm of the probability density function (logPDF).
*
* @param x - input value
* @param a - lower limit
* @param b - upper limit
* @param c - mode
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 0.5, -1.0, 1.0, 0.0 );
* // returns ~-0.693
*
* y = logpdf( 0.5, -1.0, 1.0, 0.5 );
* // returns 0.0
*
* y = logpdf( -10.0, -20.0, 0.0, -2.0 );
* // returns ~-2.89
*
* var mylogpdf = logpdf.factory( 0.0, 10.0, 5.0 );
* y = mylogpdf( 2.0 );
* // returns ~-2.526
*
* y = mylogpdf( 12.0 );
* // returns -Infinity
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
