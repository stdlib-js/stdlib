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
* Evaluates the probability density function (PDF) for a Cauchy distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a Cauchy distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `gamma <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 2.0, 1.0, 1.0 );
	* // returns ~0.159
	*
	* @example
	* var y = pdf( 4.0, 3.0, 0.1 );
	* // returns ~0.0315
	*
	* @example
	* var y = pdf( 4.0, 3.0, 3.0 );
	* // returns ~0.095
	*
	* @example
	* var y = pdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative scale parameter:
	* var y = pdf( 2.0, 1.0, -2.0 );
	* // returns NaN
	*/
	( x: number, x0: number, gamma: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma`.
	*
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 4.0, 2.0 );
	*
	* var y = mypdf( 10.0 );
	* // returns ~0.0159
	*
	* y = mypdf( 3.0 );
	* // returns ~0.127
	*/
	factory( x0: number, gamma: number ): Unary;
}

/**
* Cauchy distribution probability density function (PDF).
*
* @param x - input value
* @param x0 - location parameter
* @param gamma - scale parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.0, 1.0 );
* // returns ~0.063
*
* var mypdf = factory( 10.0, 2.0 );
*
* y = mypdf( 10.0 );
* // returns ~0.159
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
