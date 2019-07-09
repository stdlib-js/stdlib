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
* Evaluates the probability density function (PDF) for a chi distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a chi distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a chi distribution with degrees of freedom `k` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `k < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param k - degrees of freedom
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 0.3, 4.0 );
	* // returns ~0.013
	*
	* @example
	* var y = pdf( 0.7, 0.7 );
	* // returns ~0.537
	*
	* @example
	* var y = pdf( -1.0, 0.5 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pdf( NaN, 2.0 );
	* // returns NaN
	*
	* @example
	* // Negative degrees of freedom:
	* var y = pdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, k: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a chi distribution with degrees of freedom `k`.
	*
	* @param k - degrees of freedom
	* @returns PDF
	*
	* @example
	* var myPDF = pdf.factory( 0.5 );
	*
	* var y = myPDF( 2.0 );
	* // returns ~0.04
	*
	* y = myPDF( 1.0 );
	* // returns ~0.281
	*/
	factory( k: number ): Unary;
}

/**
* Chi distribution probability density function (PDF).
*
* @param x - input value
* @param k - degrees of freedom
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 1.0 );
* // returns ~0.108
*
* var myPDF = pdf.factory( 6.0 );
*
* y = myPDF( 3.0 );
* // returns ~0.337
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
