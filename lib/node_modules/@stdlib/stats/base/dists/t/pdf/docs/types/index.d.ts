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
* Evaluates the probability density function (PDF) for a Student's t distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a Student's t distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a non-positive value for `v`, the function returns `NaN`.
	*
	* @param x - input value
	* @param v - degrees of freedom
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 0.3, 4.0 );
	* // returns ~0.355
	*
	* @example
	* var y = pdf( 2.0, 0.7 );
	* // returns ~0.058
	*
	* @example
	* var y = pdf( -1.0, 0.5 );
	* // returns ~0.118
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
	* var y = pdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, v: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a Student's t distribution with `v` degrees of freedom.
	*
	* @param v - degrees of freedom
	* @returns PDF
	*
	* @example
	* var myPDF = pdf.factory( 1.0 );
	* var y = myPDF( 3.0 );
	* // returns ~0.032
	*
	* y = myPDF( 1.0 );
	* // returns ~0.159
	*/
	factory( v: number ): Unary;
}

/**
* Student's t distribution probability density function (PDF).
*
* @param x - input value
* @param v - degrees of freedom
* @returns evaluated PDF
*
* @example
* var y = pdf( 3.0, 1.0 );
* // returns ~0.032
*
* var myPDF = pdf.factory( 3.0 );
* y = myPDF( 1.0 );
* // returns ~0.207
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
