/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Evaluates the quantile function for a log-logistic distribution.
*
* ## Notes
*
* -   If `p < 0` or `p > 1`, the function returns `NaN`.
*
* @param p - input probability
* @returns evaluated quantile function
*/
type Unary = ( p: number ) => number;

/**
* Interface for the quantile function of a log-logistic distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a log-logistic distribution with scale parameter `alpha` and shape parameter `beta` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param p - input probability
	* @param alpha - scale parameter
	* @param beta - shape parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.5, 1.0, 1.0 );
	* // returns 1.0
	*
	* @example
	* var y = quantile( 0.5, 4.0, 2.0 );
	* // returns 4.0
	*
	* @example
	* var y = quantile( 0.8, 1.0, 1.0 );
	* // returns 4.0
	*
	* @example
	* var y = quantile( 0.0, 1.0, 1.0 );
	* // returns 0.0
	*
	* @example
	* var y = quantile( 1.0, 1.0, 1.0 );
	* // returns Infinity
	*
	* @example
	* var y = quantile( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, -1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.5, 1.0, -1.0 );
	* // returns NaN
	*/
	( p: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a log-logistic distribution.
	*
	* @param alpha - scale parameter
	* @param beta - shape parameter
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 1.0, 1.0 );
	* var y = myQuantile( 0.5 );
	* // returns 1.0
	*
	* y = myQuantile( 0.8 );
	* // returns 4.0
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Log-logistic distribution quantile function.
*
* @param p - input probability
* @param alpha - scale parameter
* @param beta - shape parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.5, 1.0, 1.0 );
* // returns 1.0
*
* @example
* var myQuantile = quantile.factory( 1.0, 1.0 );
* var y = myQuantile( 0.5 );
* // returns 1.0
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
