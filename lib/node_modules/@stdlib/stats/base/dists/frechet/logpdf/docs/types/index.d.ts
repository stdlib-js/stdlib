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
* Evaluates the natural logarithm of the probability density function (PDF) for a Fréchet distribution.
*
* @param x - input value
* @returns evaluated natural logarithm of the PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a Fréchet distribution.
*/
interface LogPDF {
	/**
	* Evaluates the logarithm of the probability density function (PDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `alpha <= 0` or `s <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 10.0, 2.0, 3.0, 2.0 );
	* // returns ~-3.489
	*
	* @example
	* var y = logpdf( -2.0, 1.0, 3.0, -3.0 );
	* // returns ~-1.901
	*
	* @example
	* var y = logpdf( 0.0, 2.0, 1.0, 1.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( NaN, 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, NaN, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, 2.0, NaN, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, 2.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, -1.0, 1.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, 1.0, -1.0, 0.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, s: number, m: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability density function (PDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
	*
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 3.0, 3.0, 5.0 );
	*
	* var y = mylogpdf( 10.0 );
	* // returns ~-2.259
	*
	* y = mylogpdf( 7.0 );
	* // returns ~-1.753
	*/
	factory( alpha: number, s: number, m: number ): Unary;
}

/**
* Fréchet distribution natural logarithm of the probability density function (logPDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param s - scale parameter
* @param m - location parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 10.0, 2.0, 3.0, 5.0 );
* // returns ~-2.298
*
* y = logpdf( 0.0, 2.0, 3.0, 2.0 );
* // returns -Infinity
*
* var mylogpdf = logpdf.factory( 3.0, 3.0, 5.0 );
* y = mylogpdf( 10.0 );
* // returns ~-2.259
*
* y = mylogpdf( 7.0 );
* // returns ~-1.753
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
