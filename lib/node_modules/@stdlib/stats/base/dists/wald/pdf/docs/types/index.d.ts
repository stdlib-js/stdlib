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
* Evaluates the probability density function (PDF) for a Wald distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a Wald distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `mu <= 0` or `lambda < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - mean parameter
	* @param lambda - shape parameter
	* @returns evaluated probability density function
	*
	* @example
	* var y = pdf( 2.0, 1.0, 1.0 );
	* // returns ~0.110
	*
	* @example
	* var y = pdf( 5.0, 3.0, 2.0 );
	* // returns ~0.046
	*
	* @example
	* var y = pdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* // Non-positive mean:
	* var y = pdf( 2.0, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* // Negative shape parameter:
	* var y = pdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 1.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 1.0, 1.0, 0.0 );
	* // returns Infinity
	*/
	( x: number, mu: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a Wald distribution.
	*
	* @param mu - mean parameter
	* @param lambda - shape parameter
	* @returns function to evaluate the probability density function
	*
	* @example
	* var myPDF = pdf.factory( 3.0, 2.0 );
	* var y = myPDF( 2.0 );
	* // returns ~0.189
	*
	* y = myPDF( 5.0 );
	* // returns ~0.046
	*/
	factory( mu: number, lambda: number ): Unary;
}

/**
* Wald distribution probability density function (PDF).
*
* @param x - input value
* @param mu - mean parameter
* @param lambda - shape parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 1.0, 1.0 );
* // returns ~0.110
*
* var myPDF = pdf.factory( 3.0, 2.0 );
* y = myPDF( 2.0 );
* // returns ~0.189
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
