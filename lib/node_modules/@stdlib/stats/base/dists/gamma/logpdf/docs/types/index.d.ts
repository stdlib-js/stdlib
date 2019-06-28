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
* Evaluates the logarithm of the probability density function (PDF) for a gamma distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a gamma distribution.
*/
interface LogPDF {
	/**
	* Evaluates the logarithm of the probability density function (PDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If `alpha < 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 2.0, 0.5, 1.0 );
	* // returns ~-2.919
	*
	* @example
	* var y = logpdf( 0.1, 1.0, 1.0 );
	* // returns ~-0.1
	*
	* @example
	* var y = logpdf( -1.0, 4.0, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( NaN, 0.6, 1.0 );
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
	* // Negative shape parameter:
	* var y = logpdf( 2.0, -1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* // Negative rate parameter:
	* var y = logpdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability density function (PDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta`.
	*
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 3.0, 1.5 );
	*
	* var y = mylogpdf( 1.0 );
	* // returns ~-0.977
	*
	* y = mylogpdf( 4.0 );
	* // returns ~-2.704
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Gamma distribution natural logarithm of the probability density function (logPDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param beta - rate parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.5, 1.0 );
* // returns ~-2.919
*
* var mylogpdf = logpdf.factory( 6.0, 7.0 );
* var y = mylogpdf( 2.0 );
* // returns ~-3.646
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
