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
* Evaluates the quantile function for an inverse gamma distribution.
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
* Interface for the quantile function of an inverse gamma distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for an inverse Gamma distribution with shape parameter `alpha` and scale parameter `beta` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param p - input value
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 2.0, 1.0 );
	* // returns ~1.213
	*
	* @example
	* var y = quantile( 0.5, 4.0, 2.0 );
	* // returns ~0.545
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
	* var y = quantile( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* // Non-positive shape parameter:
	* var y = quantile( 0.5, -1.0, 1.0 );
	*
	* @example
	* // Non-positive rate parameter:
	* var y = quantile( 0.5, 1.0, -1.0 );
	* // returns NaN
	*/
	( p: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the quantile function for an inverse gamma distribution with shape parameter `alpha` and scale parameter `beta`.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 2.5, 0.5 );
	* var y = myQuantile( 0.5 );
	* // returns ~0.2298
	*
	* y = myQuantile( 0.8 );
	* // returns ~0.427
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Inverse gamma distribution quantile function.
*
* @param p - input value
* @param alpha - shape parameter
* @param beta - rate parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0, 1.0 );
* // returns ~4.481
*
* var myQuantile = quantile.factory( 2.0, 2.0 );
* y = myQuantile( 0.8 );
* // returns ~2.426
*
* y = myQuantile( 0.4 );
* // returns ~0.989
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
