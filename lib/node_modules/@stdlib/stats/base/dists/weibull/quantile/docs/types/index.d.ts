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

// TypeScript Version: 4.1

/**
* Evaluates the quantile function for a Weibull distribution.
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
* Interface for the quantile function of a Weibull distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a Weibull distribution with scale parameter `k` and shape parameter `lambda` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided a nonpositive value for `lambda` or `k`, the function returns `NaN`.
	*
	* @param p - input value
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 1.0, 1.0 );
	* // returns ~1.609
	*
	* @example
	* var y = quantile( 0.5, 2.0, 4.0 );
	* // returns ~3.33
	*
	* @example
	* var y = quantile( 1.1, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( -0.2, 1.0, 1.0 );
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
	* var y = quantile( 0.5, 1.0, -1.0 );
	* // returns NaN
	*/
	( p: number, k: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a Weibull distribution.
	*
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 2.0, 10.0 );
	* var y = myQuantile( 0.4 );
	* // returns ~7.147
	*
	* y = myQuantile( 0.8 );
	* // returns ~12.686
	*/
	factory( k: number, lambda: number ): Unary;
}

/**
* Weibull distribution quantile function.
*
* @param p - input value
* @param k - shape parameter
* @param lambda - scale parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0, 1.0 );
* // returns ~1.609
*
* var myQuantile = quantile.factory( 2.0, 10.0 );
* y = myQuantile( 0.4 );
* // returns ~7.147
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
