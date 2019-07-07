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
* Evaluates the natural logarithm of the probability density function (logPDF) for a chi distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a chi distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a chi distribution with degrees of freedom `k` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `k < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param k - degrees of freedom
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 0.3, 4.0 );
	* // returns ~-4.35
	*
	* @example
	* var y = logpdf( 0.7, 0.7 );
	* // returns ~-0.622
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
	* // Negative degrees of freedom:
	* var y = logpdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, k: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a chi distribution with degrees of freedom `k`.
	*
	* @param k - degrees of freedom
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 0.5 );
	*
	* var y = mylogpdf( 2.0 );
	* // returns ~-3.115
	*
	* y = mylogpdf( 1.0 );
	* // returns ~-1.268
	*/
	factory( k: number ): Unary;
}

/**
* Chi distribution natural logarithm of probability density function (logPDF).
*
* @param x - input value
* @param k - degrees of freedom
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 1.0 );
* // returns ~-2.226
*
* var mylogpdf = logpdf.factory( 6.0 );
*
* y = mylogpdf( 3.0 );
* // returns ~-1.088
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
