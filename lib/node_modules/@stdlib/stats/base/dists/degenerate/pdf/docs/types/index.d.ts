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
* Evaluates the probability density function (PDF) for a degenerate distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a degenerate distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a degenerate distribution centered at `mu`.
	*
	* @param x - input value
	* @param mu - constant value of the distribution
	* @returns evaluated probability density function
	*
	* @example
	* var y = pdf( 2.0, 3.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 3.0, 3.0 );
	* // returns Infinity
	*
	* @example
	* var y = pdf( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, NaN );
	* // returns NaN
	*/
	( x: number, mu: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) of a degenerate distribution centered at a provided mean value.
	*
	* @param mu - value at which to center the distribution
	* @returns function to evaluate the probability density function
	*
	* @example
	* var mypdf = pdf.factory( 5.0 );
	*
	* var y = mypdf( 0.0 );
	* // returns 0.0
	*
	* y = mypdf( 5.0 );
	* // returns Infinity
	*/
	factory( mu: number ): Unary;
}

/**
* Degenerate distribution probability density function (PDF).
*
* @param x - input value
* @param mu - value at which to center the distribution
* @returns evaluated PDF
*
* @example
* var y = pdf( 2.0, 0.0 );
* // returns 0.0
*
* var mypdf = pdf.factory( 10.0 );
*
* y = mypdf( 10.0 );
* // returns Infinity
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
