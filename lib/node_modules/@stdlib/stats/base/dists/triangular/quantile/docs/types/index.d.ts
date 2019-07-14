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
* Evaluates the quantile function for a triangular distribution.
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
* Interface for the quantile function of a triangular distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
	*
	* @param p - input value
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.9, -1.0, 1.0, 0.0 );
	* // returns ~0.553
	*
	* @example
	* var y = quantile( 0.1, -1.0, 1.0, 0.5 );
	* // returns ~-0.452
	*
	* @example
	* var y = quantile( 0.1, -20.0, 0.0, -2.0 );
	* // returns -14.0
	*
	* @example
	* var y = quantile( 0.8, 0.0, 20.0, 0.0 );
	* // returns ~11.056
	*
	* @example
	* var y = quantile( 1.1, -1.0, 1.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( -0.1, -1.0, 1.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 0.0, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.3, NaN, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.3, 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.3, 1.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.3, 1.0, 0.0, 1.5 );
	* // returns NaN
	*/
	( p: number, a: number, b: number, c: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a triangular distribution with lower limit `a`, upper limit `b` and mode `c`.
	*
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 2.0, 4.0, 2.5 );
	* var y = myquantile( 0.4 );
	* // returns ~2.658
	*
	* y = myquantile( 0.8 );
	* // returns ~3.225
	*/
	factory( a: number, b: number, c: number ): Unary;
}

/**
* Triangular distribution quantile function.
*
* @param p - input value
* @param a - lower limit
* @param b - upper limit
* @param c - mode
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.9, -1.0, 1.0, 0.0 );
* // returns ~0.553
*
* y = quantile( 0.1, -1.0, 1.0, 0.5 );
* // returns ~-0.452
*
* y = quantile( 0.1, -20.0, 0.0, -2.0 );
* // returns -14.0
*
* y = quantile( 0.8, 0.0, 20.0, 0.0 );
* // returns ~11.056
*
* var myquantile = quantile.factory( 2.0, 4.0, 2.5 );
* y = myquantile( 0.4 );
* // returns ~2.658
*
* y = myquantile( 0.8 );
* // returns ~3.225
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
