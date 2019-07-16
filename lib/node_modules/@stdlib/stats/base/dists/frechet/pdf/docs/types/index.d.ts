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
* Evaluates the probability density function (PDF) for a Fréchet distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a Fréchet distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `alpha <= 0` or `s <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 10.0, 2.0, 3.0, 2.0 );
	* // returns ~0.031
	*
	* @example
	* var y = pdf( -2.0, 1.0, 3.0, -1.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0.0, 2.0, 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( NaN, 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, NaN, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, 2.0, NaN, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, 2.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, -1.0, 1.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, 1.0, -1.0, 0.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, s: number, m: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
	*
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 3.0, 3.0, 5.0 );
	*
	* var y = mypdf( 10.0 );
	* // returns ~0.104
	*
	* y = mypdf( 7.0 );
	* // returns ~0.173
	*/
	factory( alpha: number, s: number, m: number ): Unary;
}

/**
* Fréchet distribution probability density function (PDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param s - scale parameter
* @param m - location parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 10.0, 2.0, 3.0, 5.0 );
* // returns ~0.698
*
* y = pdf( 0.0, 2.0, 3.0, 2.0 );
* // returns 0.0
*
* var mypdf = pdf.factory( 3.0, 3.0, 5.0 );
* y = mypdf( 10.0 );
* // returns ~0.806
*
* y = mypdf( 7.0 );
* // returns ~0.034
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
