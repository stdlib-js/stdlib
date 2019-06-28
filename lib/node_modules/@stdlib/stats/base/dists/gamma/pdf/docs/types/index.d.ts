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
* Evaluates the probability density function (PDF) for a gamma distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a gamma distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If `alpha < 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 2.0, 0.5, 1.0 );
	* // returns ~0.054
	*
	* @example
	* var y = pdf( 0.1, 1.0, 1.0 );
	* // returns ~0.905
	*
	* @example
	* var y = pdf( -1.0, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( NaN, 0.6, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative shape parameter:
	* var y = pdf( 2.0, -1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* // Negative rate parameter:
	* var y = pdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta`.
	*
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @returns PDF
	*
	* @example
	* var myPDF = pdf.factory( 3.0, 1.5 );
	*
	* var y = myPDF( 1.0 );
	* // returns ~0.377
	*
	* y = myPDF( 4.0 );
	* // returns ~0.067
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Gamma distribution probability density function (PDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param beta - rate parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.5, 1.0 );
* // returns ~0.054
*
* var myPDF = pdf.factory( 6.0, 7.0 );
* y = myPDF( 2.0 );
* // returns ~0.026
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
