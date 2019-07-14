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
* Evaluates the quantile function for a Fréchet distribution.
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
* Interface for the quantile function of a Fréchet distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided `alpha <= 0` or `s <= 0`, the function returns `NaN`.
	*
	* @param p - input probability
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.5, 2.0, 3.0, 2.0 );
	* // returns ~5.603
	*
	* @example
	* var y = quantile( 0.2, 1.0, 3.0, -1.0 );
	* // returns ~0.864
	*
	* @example
	* var y = quantile( 0.3, 2.0, 1.0, 1.0 );
	* // returns ~1.911
	*
	* @example
	* var y = quantile( NaN, 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.1, NaN, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.1, 2.0, NaN, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.1, 2.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.1, -1.0, 1.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.1, 1.0, -1.0, 0.0 );
	* // returns NaN
	*/
	( p: number, alpha: number, s: number, m: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
	*
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 3.0, 3.0, 5.0 );
	*
	* var y = myquantile( 0.8 );
	* // returns ~9.946
	*
	* y = myquantile( 0.2 );
	* // returns ~7.56
	*/
	factory( alpha: number, s: number, m: number ): Unary;
}

/**
* Fréchet distribution quantile function.
*
* @param p - input value
* @param alpha - shape parameter
* @param s - scale parameter
* @param m - location parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.3, 2.0, 3.0, 5.0 );
* // returns ~7.734
*
* y = quantile( 0.8, 2.0, 3.0, 2.0 );
* // returns ~8.351
*
* var myquantile = quantile.factory( 3.0, 3.0, 5.0 );
* y = myquantile( 0.1 );
* // returns ~7.272
*
* y = myquantile( 0.8 );
* // returns ~9.946
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
