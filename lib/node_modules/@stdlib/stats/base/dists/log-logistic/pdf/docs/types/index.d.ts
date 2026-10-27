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
* Evaluates the probability density function (PDF) for a log-logistic distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a log-logistic distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a log-logistic distribution with scale parameter `alpha` and shape parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - scale parameter
	* @param beta - shape parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 2.0, 1.0, 1.0 );
	* // returns ~0.111
	*
	* @example
	* var y = pdf( 4.0, 2.0, 3.0 );
	* // returns ~0.074
	*
	* @example
	* var y = pdf( -1.0, 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0.0, 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 1.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 1.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pdf( 1.0, -1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 1.0, 1.0, -1.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a log-logistic distribution.
	*
	* @param alpha - scale parameter
	* @param beta - shape parameter
	* @returns PDF
	*
	* @example
	* var myPdf = pdf.factory( 1.0, 1.0 );
	* var y = myPdf( 2.0 );
	* // returns ~0.111
	*
	* y = myPdf( -1.0 );
	* // returns 0.0
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Log-logistic distribution probability density function (PDF).
*
* @param x - input value
* @param alpha - scale parameter
* @param beta - shape parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 1.0, 1.0 );
* // returns ~0.111
*
* @example
* var myPdf = pdf.factory( 1.0, 1.0 );
* var y = myPdf( 2.0 );
* // returns ~0.111
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
