/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Evaluates the quantile function for a Bradford distribution.
*
* ## Notes
*
* -   If `c <= 0`, the function returns `NaN`.
*
* @param c - shape parameter
* @returns evaluated quantile function
*/
type Unary = ( c: number ) => number;

/**
* Interface for the quantile function of a Bradford distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a Bradford distribution with shape parameter `c` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If `c <= 0`, the function returns `NaN`.
	*
	* @param p - input value
	* @param c - shape parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.1, 0.1 );
	* // returns ~0.096
	*
	* @example
	* var y = quantile( 0.5, 5.0 );
	* // returns ~0.290
	*
	* @example
	* var y = quantile( 1.0, 10.0 );
	* // returns 1.0
	*
	* @example
	* var y = quantile( 0.5, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 2.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 1.0, NaN );
	* // returns NaN
	*/
	( p: number, c: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a Bradford distribution with shape parameter `c`.
	*
	* @param c - shape parameter
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 5.0 );
	* var y = myquantile( 0.4 );
	* // returns ~0.210
	*
	* y = myquantile( 0.8 );
	* // returns ~0.639
	*
	* y = myquantile( 1.0 );
	* // returns 1.0
	*/
	factory( c: number ): Unary;
}

/**
* Bradford distribution quantile function.
*
* @param p - input value
* @param c - shape parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.1, 0.1 );
* // returns ~0.096
*
* y = quantile( 0.5, 5.0 );
* // returns ~0.290
*
* var myquantile = quantile.factory( 5.0 );
* y = myquantile( 0.4 );
* // returns ~0.210
*
* y = myquantile( 0.8 );
* // returns ~0.639
*
* y = myquantile( 1.0 );
* // returns 1.0
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
