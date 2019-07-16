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
* Evaluates the probability density function (PDF) for a triangular distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a triangular distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a value `x`.
	*
	* ## Notes
	*
	* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 0.5, -1.0, 1.0, 0.0 );
	* // returns 0.5
	*
	* @example
	* var y = pdf( 0.5, -1.0, 1.0, 0.5 );
	* // returns 1.0
	*
	* @example
	* var y = pdf( -10.0, -20.0, 0.0, -2.0 );
	* // returns ~0.056
	*
	* @example
	* var y = pdf( -2.0, -1.0, 1.0, 0.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( NaN, 0.0, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, NaN, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 1.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 1.0, 0.0, 1.5 );
	* // returns NaN
	*/
	( x: number, a: number, b: number, c: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a triangular distribution with lower limit `a` and upper limit `b` and mode `c`.
	*
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 0.0, 10.0, 5.0 );
	* var y = mypdf( 2.0 );
	* // returns 0.08
	*
	* y = mypdf( 12.0 );
	* // returns 0.0
	*/
	factory( a: number, b: number, c: number ): Unary;
}

/**
* Triangular distribution probability density function (PDF).
*
* @param x - input value
* @param a - lower limit
* @param b - upper limit
* @param c - mode
* @returns evaluated PDF
*
* @example
* var y = pdf( 0.5, -1.0, 1.0, 0.0 );
* // returns 0.5
*
* y = pdf( 0.5, -1.0, 1.0, 0.5 );
* // returns 1.0
*
* y = pdf( -10.0, -20.0, 0.0, -2.0 );
* // returns ~0.056
*
* var mypdf = pdf.factory( 0.0, 10.0, 5.0 );
* y = mypdf( 2.0 );
* // returns 0.08
*
* y = mypdf( 12.0 );
* // returns 0.0
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
