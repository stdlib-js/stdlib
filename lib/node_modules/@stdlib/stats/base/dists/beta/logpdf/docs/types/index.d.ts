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
* Evaluates the natural logarithm of the probability density function (PDF) for a beta distribution.
*
* @param x - input value
* @returns evaluated natural logarithm of the PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a beta distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (logPDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 0.5, 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = logpdf( 0.5, 2.0, 4.0 );
	* // returns ~0.223
	*
	* @example
	* var y = logpdf( 0.2, 2.0, 2.0 );
	* // returns ~-0.041
	*
	* @example
	* var y = logpdf( 0.8, 4.0, 4.0 );
	* // returns ~-0.556
	*
	* @example
	* var y = logpdf( -0.5, 4.0, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 1.5, 4.0, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 0.5, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.5, 0.5, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.5, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.5, 1.0, NaN );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (logPDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 0.5, 0.5 );
	*
	* var y = mylogpdf( 0.8 );
	* // returns ~-0.228
	*
	* y = mylogpdf( 0.3 );
	* // returns ~-0.364
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Beta distribution natural logarithm of the probability density function (logPDF).
*
* @param x - input value
* @param alpha - first shape parameter
* @param beta - second shape parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 0.5, 1.0, 1.0 );
* // returns 0.0
*
* y = logpdf( 0.5, 2.0, 4.0 );
* // returns ~0.223
*
* var mylogpdf = logpdf.factory( 0.5, 0.5 );
*
* y = mylogpdf( 0.8 );
* // returns ~-0.228
*
* y = mylogpdf( 0.3 );
* // returns ~-0.364
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
