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
* Evaluates the probability density function (PDF) for a Weibull distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a Weibull distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a Weibull distribution with shape parameter `k` and scale parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a nonpositive value for `lambda` or `k`, the function returns `NaN`.
	*
	* @param x - input value
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns evaluated probability density function
	*
	* @example
	* var y = pdf( 2.0, 1.0, 0.5 );
	* // returns ~0.037
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
	* var y = pdf( 0.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*/
	( x: number, k: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a Weibull distribution.
	*
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns function to evaluate the probability density function
	*
	* @example
	* var myPDF = pdf.factory( 7.0, 6.0 );
	* var y = myPDF( 7.0 );
	* // returns ~0.155
	*
	* y = myPDF( 5.0 );
	* // returns ~0.296
	*/
	factory( k: number, lambda: number ): Unary;
}

/**
* Weibull distribution probability density function (PDF).
*
* @param x - input value
* @param k - shape parameter
* @param lambda - scale parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 1.0, 0.5 );
* // returns ~0.037
*
* var myPDF = pdf.factory( 7.0, 6.0 );
* y = myPDF( 7.0 );
* // returns ~0.155
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
