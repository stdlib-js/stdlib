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
* Evaluates the probability density function (PDF) for an F distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of an F distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` at a value `x`.
	*
	* ## Notes
	*
	* -   If `d1 <= 0` or `d2 <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param d1 - numerator degrees of freedom
	* @param d2 - denominator degrees of freedom
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 2.0, 0.5, 1.0 );
	* // returns ~0.057
	*
	* @example
	* var y = pdf( 0.1, 1.0, 1.0 );
	* // returns ~0.915
	*
	* @example
	* var y = pdf( -1.0, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( NaN, 1.0, 1.0 );
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
	* var y = pdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, -1.0, 1.0 );
	* // returns NaN
	*/
	( x: number, d1: number, d2: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for an F distribution with numerator degrees of freedom `d1` and denominator degrees of freedom `d2`.
	*
	* @param d1 - numerator degrees of freedom
	* @param d2 - denominator degrees of freedom
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 6.0, 7.0 );
	* var y = mypdf( 7.0 );
	* // returns ~0.004
	*
	* y = mypdf( 2.0 );
	* // returns ~0.166
	*/
	factory( d1: number, d2: number ): Unary;
}

/**
* F distribution probability density function (PDF).
*
* @param x - input value
* @param d1 - numerator degrees of freedom
* @param d2 - denominator degrees of freedom
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.5, 1.0 );
* // returns ~0.057
*
* y = pdf( 0.1, 1.0, 1.0 );
* // returns ~0.915
*
* var mypdf = pdf.factory( 6.0, 7.0 );
* y = mypdf( 7.0 );
* // returns ~0.004
*
* y = mypdf( 2.0 );
* // returns ~0.166
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
