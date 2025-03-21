/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Evaluates the quantile function for a studentized range distribution.
*
* @param q - quantile of the studentized range
* @returns evaluated quantile function
*/
type Unary = ( p: number ) => number;

/**
* Interface for the quantile function of a studentized range distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a studentized range distribution at probability `p` with `r` samples and `v` degrees of freedom.
	*
	* @param p - input probability
	* @param r - sample size for range (same for each group; must be greater than or equal to `2`)
	* @param v - degrees of freedom (must be greater than or equal to `2`)
	* @param nranges - number of groups whose maximum range is considered (default: 1)
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.5, 3.0, 2.0 );
	* // returns ~0.0644
	*
	* @example
	* var y = quantile( 0.9, 17.0, 2.0 );
	* // returns ~0.913
	*
	* @example
	* var y = quantile( 0.5, 3.0, 2.0, 2 );
	* // returns ~0.01
	*/
	( p: number, r: number, v: number, nranges?: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a studentized range distribution.
	*
	* @param v - degrees of freedom
	* @param r - sample size for range (same for each group; must be greater than or equal to `2`)
	* @param v - degrees of freedom (must be greater than or equal to `2`)
	* @param nranges - number of groups whose maximum range is considered (default: 1)
	* @returns quantile function
	*
	* @example
	* var quantile = factory( 3.0, 3.0 );
	* var y = quantile( 0.5 );
	* // returns ~1.791
	*
	* y = quantile( 0.8 );
	* // returns ~3.245
	*
	* y = quantile( 1.0 );
	* // returns Infinity
	*/
	factory( r: number, v: number, nranges?: number ): Unary;
}

/**
* Evaluates the quantile function for a studentized range distribution at probability `p` with `r` samples and `v` degrees of freedom.
*
* @param p - input probability
* @param r - sample size for range (same for each group; must be greater than or equal to `2`)
* @param v - degrees of freedom (must be greater than or equal to `2`)
* @param nranges - number of groups whose maximum range is considered (default: 1)
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.5, 3.0, 2.0 );
* // returns ~1.908
*
* y = quantile( 0.1, 3.0, 4.0 );
* // returns ~0.627
*
* var myquantile = quantile.factory( 3.0, 3.0 );
*
* y = myquantile( 0.5 );
* // returns ~1.791
*
* y = myquantile( 0.8 );
* // returns ~3.245
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
