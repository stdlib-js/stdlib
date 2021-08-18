/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Evaluates the probability density function (PDF) for a truncated normal distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a truncated normal distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a truncated normal distribution with endpoints `a` and `b`, location parameter `mu`, and scale parameter `sigma` at a value `x`.
	*
	* @param x - input value
	* @param a - minimum support
	* @param b - maximum support
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 0.9, 0.0, 1.0, 0.0, 1.0 );
	* // returns ~0.7795
	*
	* @example
	* var y = pdf( 0.9, 0.0, 1.0, 0.5, 1.0 );
	* // returns ~0.9617
	*
	* @example
	* var y = pdf( 0.9, -1.0, 1.0, 0.5, 1.0 );
	* // returns ~0.5896
	*
	* @example
	* var y = pdf( 1.4, 0.0, 1.0, 0.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( -0.9, 0.0, 1.0, 0.0, 1.0 );
	* // returns 0.0
	*/
	( x: number, a: number, b: number, mu: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a truncated normal distribution with endpoints `a` and `b`, mean `mu`, and standard deviation `sigma`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns PDF
	*
	* @example
	* var myPDF = factory( 0.0, 1.0, 0.0, 1.0 );
	* var y = myPDF( 0.8 );
	* // returns ~0.849
	*
	* @example
	* var myPDF = factory( 0.0, 1.0, 0.5, 1.0 );
	* var y = myPDF( 0.8 );
	* // returns ~0.996
	*
	* @example
	* var myPDF = factory( 0.0, 1.0, 0.0, 1.0 );
	* var y = myPDF( 2.0 );
	* // returns 0.0
	*
	* @example
	* var myPDF = factory( 0.0, 1.0, 0.0, 1.0 );
	* var y = myPDF( -1.0 );
	* // returns 0.0
	*/
	factory( a: number, b: number, mu: number, sigma: number ): Unary;
}

/**
* Truncated normal distribution probability density function (PDF).
*
* @param x - input value
* @param a - minimum support
* @param b - maximum support
* @param mu - location parameter
* @param sigma - scale parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 0.9, 0.0, 1.0, 0.0, 1.0 );
* // returns ~0.7795
*
* var mypdf = pdf.factory( -1.0, 1.0, 0.0, 1.0 );
* y = mypdf( 0.9 );
* // returns ~0.5896
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
