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
* Evaluates the quantile function for a Poisson distribution.
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
* Interface for the quantile function of a Poisson distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a Poisson distribution with mean parameter `lambda` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param p - input value
	* @param lambda - mean parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.5, 2.0 );
	* // returns 2
	*
	* @example
	* var y = quantile( 0.9, 4.0 );
	* // returns 7
	*
	* @example
	* var y = quantile( 0.1, 200.0 );
	* // returns 182
	*
	* @example
	* var y = quantile( 1.1, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( -0.2, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.0, NaN );
	* // returns NaN
	*/
	( p: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a Poisson distribution with mean parameter `lambda`.
	*
	* @param lambda - mean parameter
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 5.0 );
	* var y = myquantile( 0.4 );
	* // returns 4
	*
	* y = myquantile( 0.8 );
	* // returns 7
	*
	* y = myquantile( 1.0 );
	* // returns Infinity
	*/
	factory( lambda: number ): Unary;
}

/**
* Poisson distribution quantile function.
*
* @param p - input value
* @param lambda - mean parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.5, 2.0 );
* // returns 2
*
* y = quantile( 0.9, 4.0 );
* // returns 7
*
* y = quantile( 0.1, 200.0 );
* // returns 182
*
* var myquantile = quantile.factory( 5.0 );
* y = myquantile( 0.4 );
* // returns 4
*
* y = myquantile( 0.8 );
* // returns 7
*
* y = myquantile( 1.0 );
* // returns Infinity
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
