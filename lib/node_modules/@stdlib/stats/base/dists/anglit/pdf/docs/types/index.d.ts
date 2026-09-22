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
* Evaluates the probability density function (PDF) for an anglit distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of an anglit distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for an anglit distribution with location parameter `mu` and scale parameter `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	* -   If provided a value outside the support of the distribution, the function returns `0`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( -10.0, 0.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0.0, 0.0, 1.0 );
	* // returns 1.0
	*
	* @example
	* var y = pdf( 10.0, 0.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( NaN, 0.0, 1.0 );
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
	* var y = pdf( 0.0, 0.0, -1.0 );
	* // returns NaN
	*/
	( x: number, mu: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for an anglit distribution with location parameter `mu` and scale parameter `sigma` at a value `x`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns PDF
	*
	* @example
	* var myPdf = pdf.factory( 0.0, 1.0 );
	* var y = myPdf( -10.0 );
	* // returns 0.0
	*
	* y = myPdf( 0.0 );
	* // returns 1.0
	*/
	factory( mu: number, sigma: number ): Unary;
}

/**
* Anglit distribution probability density function (PDF).
*
* @param x - input value
* @param mu - location parameter
* @param sigma - scale parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 0.0, 0.0, 1.0 );
* // returns 1.0
*
* var myPdf = pdf.factory( 0.0, 1.0 );
* y = myPdf( -10.0 );
* // returns 0.0
*
* y = myPdf( 0.0 );
* // returns 1.0
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
