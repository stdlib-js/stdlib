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
* Evaluates the quantile function for a Student's t distribution.
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
* Interface for the quantile function of a Student's t distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a Student's t distribution with degrees of freedom `v` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If provided a non-positive value for `v`, the function returns `NaN`.
	*
	* @param p - input value
	* @param v - degrees of freedom
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.8, 1.0 );
	* // returns ~1.376
	*
	* @example
	* var y = quantile( 0.1, 1.0 );
	* // returns ~-3.078
	*
	* @example
	* var y = quantile( 0.5, 0.1 );
	* // returns 0.0
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
	* var y = quantile( 0.5, -1.0 );
	* // returns NaN
	*/
	( p: number, v: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a Student's t distribution with degrees of freedom `v`.
	*
	* @param v - degrees of freedom
	* @returns quantile function
	*
	* @example
	* var myquantile = quantile.factory( 0.5 );
	* var y = myquantile( 0.5 );
	* // returns 0.0
	*
	* y = myquantile( 0.8 );
	* // returns ~2.513
	*
	* y = myquantile( 1.0 );
	* // returns Infinity
	*/
	factory( v: number ): Unary;
}

/**
* Student's t distribution quantile function.
*
* @param p - input value
* @param v - degrees of freedom
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0 );
* // returns ~1.376
*
* y = quantile( 0.1, 1.0 );
* // returns ~-3.078
*
* y = quantile( 0.5, 0.1 );
* // returns 0.0
*
* var myquantile = quantile.factory( 4.0 );
*
* y = myquantile( 0.2 );
* // returns ~-0.941
*
* y = myquantile( 0.9 );
* // returns ~1.533
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
