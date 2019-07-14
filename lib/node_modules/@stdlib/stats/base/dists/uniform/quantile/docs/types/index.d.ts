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
* Evaluates the quantile function for a uniform distribution.
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
* Interface for the quantile function of a uniform distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a uniform distribution with minimum support `a` and maximum support `b` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided `a >= b`, the function returns `NaN`.
	*
	* @param p - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 0.0, 1.0 );
	* // returns 0.8
	*
	* @example
	* var y = quantile( 0.5, 0.0, 10.0 );
	* // returns 5.0
	*
	* @example
	* var y = quantile( 1.1, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( -0.2, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 2.0, 1.0 );
	* // returns NaN
	*/
	( p: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a uniform distribution with minimum support `a` an maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 2.0, 4.0 );
	* var y = myQuantile( 0.4 );
	* // returns 2.8
	*
	* y = myQuantile( 0.8 );
	* // returns 3.6
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Uniform distribution quantile function.
*
* @param p - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.5, 0.0, 10.0 );
* // returns 5.0
*
* y = quantile( 0.8, 0.0, 1.0 );
* // returns 0.8
*
* var myQuantile = quantile.factory( 0.0, 4.0 );
* y = myQuantile( 0.8 );
* // returns 3.2
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
