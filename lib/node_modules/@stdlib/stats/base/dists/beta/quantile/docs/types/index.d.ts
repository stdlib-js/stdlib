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
* Evaluates the quantile function for a beta distribution.
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
* Interface for the quantile function of a beta distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param p - input value
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 2.0, 1.0 );
	* // returns ~0.894
	*
	* @example
	* var y = quantile( 0.5, 4.0, 2.0 );
	* // returns ~0.686
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
	* Returns a function for evaluating the quantile function for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 2.5, 0.5 );
	* var y = myQuantile( 0.5 );
	* // returns ~0.904
	*
	* y = myQuantile( 0.8 );
	* // returns ~0.986
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Beta distribution quantile function.
*
* @param p - input value
* @param alpha - first shape parameter
* @param beta - second shape parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.8, 2.0, 1.0 );
* // returns ~0.894
*
* y = quantile( 0.5, 4.0, 2.0 );
* // returns ~0.686
*
* var myQuantile = quantile.factory( 2.0, 2.0 );
*
* y = myQuantile( 0.8 );
* // returns ~0.713
*
* y = myQuantile( 0.4 );
* // returns ~0.5
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
