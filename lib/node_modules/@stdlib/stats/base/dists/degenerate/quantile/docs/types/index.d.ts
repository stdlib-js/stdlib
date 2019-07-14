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
* Evaluates the quantile function for a degenerate distribution.
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
* Interface for the quantile function of a degenerate distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a degenerate distribution centered at `mu`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param p - input value
	* @param mu - constant value of the distribution
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.5, 2.0 );
	* // returns 2.0
	*
	* @example
	* var y = quantile( 0.9, 4.0 );
	* // returns 4.0
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
	* var y = quantile( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.0, NaN );
	* // returns NaN
	*/
	( p: number, mu: number ): number;

	/**
	* Returns a function for evaluating the quantile function of a degenerate distribution centered at a provided mean value.
	*
	* @param mu - value at which to center the distribution
	* @returns function to evaluate the quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 5.0 );
	*
	* var y = myQuantile( 0.3 );
	* // returns 5.0
	*
	* y = myQuantile( 0.1 );
	* // returns 5.0
	*
	* y = myQuantile( 1.1 );
	* // returns NaN
	*/
	factory( mu: number ): Unary;
}

/**
* Degenerate distribution quantile function.
*
* @param p - input value
* @param mu - constant value of the distribution
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.5, 2.0 );
* // returns 2.0
*
* var myQuantile = quantile.factory( 10.0 );
*
* y = myQuantile( 0.5 );
* // returns 10.0
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
