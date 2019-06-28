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
* Evaluates the probability density function (PDF) for a beta distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a beta distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 0.5, 1.0, 1.0 );
	* // returns 1.0
	*
	* @example
	* var y = pdf( 0.5, 2.0, 4.0 );
	* // returns 1.25
	*
	* @example
	* var y = pdf( 0.2, 2.0, 2.0 );
	* // returns ~0.96
	*
	* @example
	* var y = pdf( 0.8, 4.0, 4.0 );
	* // returns ~0.573
	*
	* @example
	* var y = pdf( -0.5, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 1.5, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0.5, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.5, 0.5, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.5, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.5, 1.0, NaN );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns PDF
	*
	* @example
	* var myPDF = pdf.factory( 0.5, 0.5 );
	*
	* var y = myPDF( 0.8 );
	* // returns ~0.796
	*
	* y = myPDF( 0.3 );
	* // returns ~0.695
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Beta distribution probability density function (PDF).
*
* @param x - input value
* @param alpha - first shape parameter
* @param beta - second shape parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 0.5, 1.0, 1.0 );
* // returns 1.0
*
* y = pdf( 0.5, 2.0, 4.0 );
* // returns 1.25
*
* var myPDF = pdf.factory( 0.5, 0.5 );
*
* y = myPDF( 0.8 );
* // returns ~0.796
*
* y = myPDF( 0.3 );
* // returns ~0.695
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
