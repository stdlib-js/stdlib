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
* Evaluates the probability density function (PDF) for a lognormal distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a lognormal distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a lognormal distribution with location parameter `mu` and scale parameter `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 2.0, 0.0, 1.0 );
	* // returns ~0.157
	*
	* @example
	* var y = pdf( 1.0, 0.0, 1.0 );
	* // returns ~0.399
	*
	* @example
	* var y = pdf( 1.0, 3.0, 1.0 );
	* // returns ~0.004
	*
	* @example
	* var y = pdf( -1.0, 4.0, 2.0 );
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
	* // Negative scale parameter:
	* var y = pdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*/
	( x: number, mu: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a lognormal distribution with location parameter `mu` and scale parameter `sigma`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 4.0, 2.0 );
	* var y = mypdf( 10.0 );
	* // returns ~0.014
	*
	* y = mypdf( 2.0 );
	* // returns ~0.025
	*/
	factory( mu: number, sigma: number ): Unary;
}

/**
* Lognormal distribution probability density function (PDF).
*
* @param x - input value
* @param mu - location parameter
* @param sigma - scale parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.0, 1.0 );
* // returns ~0.157
*
* y = pdf( 1.0, 0.0, 1.0 );
* // returns ~0.399
*
* y = pdf( 1.0, 3.0, 1.0 );
* // returns ~0.004
*
* var mypdf = pdf.factory( 4.0, 2.0 );
* y = mypdf( 10.0 );
* // returns ~0.014
*
* y = mypdf( 2.0 );
* // returns ~0.025
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
