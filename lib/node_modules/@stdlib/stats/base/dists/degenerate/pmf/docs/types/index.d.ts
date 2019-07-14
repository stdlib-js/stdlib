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
* Evaluates the probability mass function (PMF) for a degenerate distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability mass function (PMF) of a degenerate distribution.
*/
interface PMF {
	/**
	* Evaluates the probability mass function (PMF) for a degenerate distribution centered at `mu`.
	*
	* @param x - input value
	* @param mu - constant value of the distribution
	* @returns evaluated probability mass function
	*
	* @example
	* var y = pmf( 2.0, 3.0 );
	* // returns 0.0
	*
	* @example
	* var y = pmf( 3.0, 3.0 );
	* // returns 1.0
	*
	* @example
	* var y = pmf( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 0.0, NaN );
	* // returns NaN
	*/
	( x: number, mu: number ): number;

	/**
	* Returns a function for evaluating the probability mass function (PMF) of a degenerate distribution centered at a provided mean value.
	*
	* @param mu - value at which to center the distribution
	* @returns function to evaluate the probability mass function
	*
	* @example
	* var mypmf = pmf.factory( 5.0 );
	*
	* var y = mypmf( 0.0 );
	* // returns 0.0
	*
	* y = mypmf( 5.0 );
	* // returns 1.0
	*/
	factory( mu: number ): Unary;
}

/**
* Degenerate distribution probability mass function (PMF).
*
* @param x - input value
* @param mu - value at which to center the distribution
* @returns evaluated PMF
*
* @example
* var y = pmf( 2.0, 0.0 );
* // returns 0.0
*
* var mypmf = pmf.factory( 10.0 );
*
* y = mypmf( 10.0 );
* // returns 1.0
*/
declare var pmf: PMF;


// EXPORTS //

export = pmf;
