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
* Evaluates the probability density function (PDF) for a logistic distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a logistic distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `s < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 2.0, 0.0, 1.0 );
	* // returns ~0.105
	*
	* @example
	* var y = pdf( -1.0, 4.0, 2.0 );
	* // returns ~0.035
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
	* // Negative scale parameter:
	* var y = pdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 8.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 8.0, 8.0, 0.0 );
	* // returns Infinity
	*/
	( x: number, mu: number, s: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a logistic distribution.
	*
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns PDF
	*
	* @example
	* var pdf = factory( 10.0, 2.0 );
	* var y = pdf( 10.0 );
	* // returns 0.125
	*
	* y = pdf( 5.0 );
	* // returns ~0.035
	*/
	factory( mu: number, s: number ): Unary;
}

/**
* Logistic distribution probability density function (PDF).
*
* @param x - input value
* @param mu - location parameter
* @param s - scale parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.0, 1.0 );
* // returns ~0.105
*
* var myPDF = pdf.factory( 10.0, 2.0 );
* y = myPDF( 10.0 );
* // returns 0.125
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
