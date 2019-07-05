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
* Evaluates the quantile function for a normal distribution.
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
* Interface for the quantile function of a normal distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a normal distribution with mean `mu` and standard deviation `sigma` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param p - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 0.0, 1.0 );
	* // returns ~0.842
	*
	* @example
	* var y = quantile( 0.5, 4.0, 2.0 );
	* // returns 4.0
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
	* // Negative standard deviation:
	* var y = quantile( 0.5, 0.0, -1.0 );
	* // returns NaN
	*/
	( p: number, mu: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the quantile function of a normal distribution.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 10.0, 2.0 );
	* var y = myQuantile( 0.5 );
	* // returns 10.0
	*
	* y = myQuantile( 0.8 );
	* // returns ~11.683
	*/
	factory( mu: number, sigma: number ): Unary;
}

/**
* Normal distribution quantile function.
*
* @param p - input value
* @param mu - mean
* @param sigma - standard deviation
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.8, 0.0, 1.0 );
* // returns ~0.842
*
* var myQuantile = quantile.factory( 10.0, 2.0 );
* y = myQuantile( 0.5 );
* // returns 10.0
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
