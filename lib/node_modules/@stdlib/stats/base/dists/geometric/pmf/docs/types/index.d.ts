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
* Evaluates the probability mass function (PMF) for a geometric distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability mass function (PMF) of a geometric distribution.
*/
interface PMF {
	/**
	* Evaluates the probability mass function (PMF) for a geometric distribution with success probability `p` at a value `x`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param x - input value
	* @param p - success probability
	* @returns evaluated PMF
	*
	* @example
	* var y = pmf( 4.0, 0.3 );
	* // returns ~0.072
	*
	* @example
	* var y = pmf( 2.0, 0.7 );
	* // returns ~0.063
	*
	* @example
	* var y = pmf( -1.0, 0.5 );
	* // returns 0.0
	*
	* @example
	* var y = pmf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pmf( NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* // Invalid success probability:
	* var y = pmf( 2.0, 1.5 );
	* // returns NaN
	*/
	( x: number, p: number ): number;

	/**
	* Returns a function for evaluating the probability mass function (PMF) for a geometric distribution with success probability `p`.
	*
	* @param p - success probability
	* @returns PMF
	*
	* @example
	* var mypmf = pmf.factory( 0.5 );
	* var y = mypmf( 3.0 );
	* // returns 0.0625
	*
	* y = mypmf( 1.0 );
	* // returns 0.25
	*/
	factory( p: number ): Unary;
}

/**
* Geometric distribution probability mass function (PMF).
*
* @param x - input value
* @param p - success probability
* @returns evaluated PMF
*
* @example
* var y = pmf( 4.0, 0.3 );
* // returns ~0.072
*
* y = pmf( 2.0, 0.7 );
* // returns ~0.063
*
* y = pmf( -1.0, 0.5 );
* // returns 0.0
*
* var mypmf = pmf.factory( 0.5 );
* y = mypmf( 3.0 );
* // returns 0.0625
*
* y = mypmf( 1.0 );
* // returns 0.25
*/
declare var pmf: PMF;


// EXPORTS //

export = pmf;
