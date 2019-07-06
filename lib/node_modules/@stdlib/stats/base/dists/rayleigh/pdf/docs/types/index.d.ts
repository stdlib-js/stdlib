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
* Evaluates the probability density function (PDF) for a Rayleigh distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a Rayleigh distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 0.3, 1.0 );
	* // returns ~0.287
	*
	* @example
	* var y = pdf( 2.0, 0.8 );
	* // returns ~0.137
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
	* // Negative scale parameter:
	* var y = pdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a Rayleigh distribution with scale parameter `sigma`.
	*
	* @param sigma - scale parameter
	* @returns PDF
	*
	* @example
	* var myPDF = pdf.factory( 0.5 );
	* var y = myPDF( 1.0 );
	* // returns ~0.541
	*
	* y = myPDF( 0.1 );
	* // returns ~0.392
	*/
	factory( sigma: number ): Unary;
}

/**
* Rayleigh distribution probability density function (PDF).
*
* @param x - input value
* @param sigma - scale parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 4.0 );
* // returns ~0.11
*
* var myPDF = pdf.factory( 4.0 );
*
* y = myPDF( 6.0 );
* // returns ~0.122
*
* y = myPDF( 4.0 );
* // returns ~0.152
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
