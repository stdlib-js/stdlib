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
* Evaluates the quantile function for a chi distribution.
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
* Interface for the quantile function of a chi distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a chi distribution with degrees of freedom `k` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided `k < 0`, the function returns `NaN`.
	*
	* @param p - input value
	* @param k - degrees of freedom
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 1.0 );
	* // returns ~1.282
	*
	* @example
	* var y = quantile( 0.5, 4.0 );
	* // returns ~1.832
	*
	* @example
	* var y = quantile( 0.8, 0.1 );
	* // returns ~0.116
	*
	* @example
	* var y = quantile( -0.2, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 1.1, 0.5 );
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
	* // Negative degrees of freedom:
	* var y = quantile( 0.5, -1.0 );
	* // returns NaN
	*/
	( p: number, k: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a chi distribution with degrees of freedom `k`.
	*
	* @param k - degrees of freedom
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 0.4 );
	*
	* var y = myquantile( 0.9 );
	* // returns ~1.1
	*
	* y = myquantile( 1.0 );
	* // returns Infinity
	*/
	factory( k: number ): Unary;
}

/**
* Chi distribution quantile function.
*
* @param p - input value
* @param k - degrees of freedom
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.8, 3.0 );
* // returns ~2.154
*
* var myquantile = quantile.factory( 2.0 );
*
* var y = myquantile( 0.3 );
* // returns ~0.844
*
* y = myquantile( 0.7 );
* // returns ~1.552
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
