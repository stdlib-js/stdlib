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
* Evaluates the probability density function (PDF) for a Pareto (Type I) distribution.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of a Pareto (Type I) distribution.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) for a Pareto (Type I) distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 4.0, 1.0, 1.0 );
	* // returns ~0.063
	*
	* @example
	* var y = pdf( 20.0, 1.0, 10.0 );
	* // returns 0.025
	*
	* @example
	* var y = pdf( 7.0, 2.0, 6.0 );
	* // returns ~0.21
	*
	* @example
	* var y = pdf( 7.0, 6.0, 3.0 );
	* // returns ~0.005
	*
	* @example
	* var y = pdf( 1.0, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 1.5, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( 0.5, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.5, 0.5, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.5, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.5, 1.0, NaN );
	* // returns NaN
	*/
	( x: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) for a Pareto (Type I) distribution with shape parameter `alpha` and scale parameter `beta`.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 0.5, 0.5 );
	*
	* var y = mypdf( 0.8 );
	* // returns ~0.494
	*
	* y = mypdf( 2.0 );
	* // returns ~0.125
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Pareto (Type I) distribution probability density function (PDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param beta - scale parameter
* @returns evaluated PDF
*
* @example
* var y = pdf( 4.0, 1.0, 1.0 );
* // returns ~0.044
*
* y = pdf( 20.0, 1.0, 10.0 );
* // returns 0.025
*
* y = pdf( 7.0, 2.0, 6.0 );
* // returns ~0.21
*
* var mypdf = pdf.factory( 0.5, 0.5 );
*
* y = mypdf( 0.8 );
* // returns ~0.494
*
* y = mypdf( 2.0 );
* // returns ~0.125
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
