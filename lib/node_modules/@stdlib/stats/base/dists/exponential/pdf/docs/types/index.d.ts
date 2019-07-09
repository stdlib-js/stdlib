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
* Evaluates the probability density function (PDF) for an exponential distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of an exponential distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for an exponential distribution with rate parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - rate parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 0.3, 4.0 );
	* // returns ~1.205
	*
	* @example
	* var y = pdf( 2.0, 0.7 );
	* // returns ~0.173
	*
	* @example
	* var y = pdf( -1.0, 0.5 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pdf( NaN, 2.0 );
	* // returns NaN
	*
	* @example
	* // Negative rate:
	* var y = pdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for an exponential distribution with parameter `lambda`.
	*
	* @param lambda - rate parameter
	* @returns probability density function (PDF)
	*
	* @example
	* var myPDF = pdf.factory( 0.5 );
	* var y = myPDF( 3.0 );
	* // returns ~0.112
	*
	* y = myPDF( 1.0 );
	* // returns ~0.303
	*/
	factory( lambda: number ): Unary;
}

/**
* Exponential distribution probability density function (PDF).
*
* @param x - input value
* @param lambda - rate parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 0.3, 4.0 );
* // returns ~1.205
*
* var myPDF = pdf.factory( 0.5 );
*
* y = myPDF( 3.0 );
* // returns ~0.112
*
* y = myPDF( 1.0 );
* // returns ~0.303
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
