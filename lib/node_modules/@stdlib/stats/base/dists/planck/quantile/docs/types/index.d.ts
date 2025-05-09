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
* Evaluates the quantile function for a Planck distribution.
*
* ## Notes
*
* -   If `p < 0` or `p > 1`, the function returns `NaN`.
*
* @param p - input value
* @returns evaluated quantile function
*/
type Unary = ( p: number ) => number;

/**
* Interface for the quantile function of a Planck distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a Planck distribution with shape parameter `lambda` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param p - input value
	* @param lambda - shape parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 0.4 );
	* // returns 4
	*
	* @example
	* var y = quantile( 0.5, 1.4 );
	* // returns 0
	*
	* @example
	* var y = quantile( 0.9, 2.1 );
	* // returns 1
	*
	* @example
	* var y = quantile( 0.2, -0.1 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 0.8 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.4, NaN );
	* // returns NaN
	*
	* @example
	* var y = quantile( -0.5, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 1.5, 1.0 );
	* // returns NaN
	*/
	( p: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a Planck distribution with shape parameter `lambda`.
	*
	* @param lambda - shape parameter
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 0.4 );
	* var y = myquantile( 0.4 );
	* // returns 1
	*
	* y = myquantile( 0.8 );
	* // returns 4
	*
	* y = myquantile( 1.0 );
	* // returns Infinity
	*/
	factory( lambda: number ): Unary;
}

/**
* Evaluates the quantile function for a Planck distribution with shape parameter `lambda` at a probability `p`.
*
* @param p - input value
* @param lambda - shape parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.8, 0.4 );
* // returns 4
*
* y = quantile( 0.5, 1.4 );
* // returns 0
*
* var myquantile = quantile.factory( 0.4 );
* y = myquantile( 0.4 );
* // returns 1
*
* y = myquantile( 0.8 );
* // returns 4
*
* y = myquantile( 1.0 );
* // returns Infinity
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
