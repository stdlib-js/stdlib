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
* Evaluates the probability mass function (PMF) for a discrete uniform distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability mass function (PMF) of a discrete uniform distribution.
*/
interface PMF {
	/**
	* Evaluates the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
	*
	* ## Notes
	*
	* -   If `a > b`, the function returns `NaN`.
	* -   If `a` or `b` is not an integer value, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated PMF
	*
	* @example
	* var y = pmf( 2.0, 0, 4 );
	* // returns ~0.2
	*
	* @example
	* var y = pmf( 5.0, 0, 4 );
	* // returns 0.0
	*
	* @example
	* var y = pmf( 2, 0, 8 );
	* // returns ~0.111
	*
	* @example
	* var y = pmf( NaN, 0, 1 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 0.0, NaN, 1 );
	* // returns NaN
	*
	* @example
	* var y = pmf( 0.0, 0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pmf( 2.0, 3, 1 );
	* // returns NaN
	*/
	( x: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns PMF
	*
	* @example
	* var myPMF = pmf.factory( 0, 10 );
	* var y = myPMF( 2.0 );
	* // returns ~0.091
	*
	* y = myPMF( 12.0 );
	* // returns 0.0
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Discrete uniform distribution probability mass function (PMF).
*
* @param x - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated PMF
*
* @example
* var y = pmf( 3.0, 2, 6 );
* // returns ~0.2
*
* var myPMF = pmf.factory( 6, 7 );
* y = myPMF( 7.0 );
* // returns 0.5
*
* y = myPMF( 5.0 );
* // returns 0.0
*/
declare var pmf: PMF;


// EXPORTS //

export = pmf;
