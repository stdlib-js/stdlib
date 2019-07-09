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
* Evaluates the quantile function for an exponential distribution.
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
* Interface for the quantile function of an exponential distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for an exponential distribution with rate parameter `lambda` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param p - input value
	* @param lambda - rate parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 1.0 );
	* // returns ~1.609
	*
	* @example
	* var y = quantile( 0.5, 4.0 );
	* // returns ~0.173
	*
	* @example
	* var y = quantile( 0.5, 0.1 );
	* // returns ~6.931
	*
	* @example
	* var y = quantile( -0.2, 0.1 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative rate parameter:
	* var y = quantile( 0.5, -1.0 );
	* // returns NaN
	*/
	( p: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the quantile function of an exponential distribution with rate parameter `lambda`.
	*
	* @param lambda - rate parameter
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 0.4 );
	* var y = myQuantile( 0.4 );
	* // returns ~1.277
	*
	* y = myQuantile( 1.0 );
	* // returns Infinity
	*/
	factory( lambda: number ): Unary;
}

/**
* Exponential distribution quantile function.
*
* @param p - input value
* @param lambda - rate parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.5, 4.0 );
* // returns ~0.173
*
* var myQuantile = quantile.factory( 0.4 );
*
* y = myQuantile( 0.4 );
* // returns ~1.277
*
* y = myQuantile( 1.0 );
* // returns Infinity
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
