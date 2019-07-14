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
* Evaluates the natural logarithm of the probability mass function (PMF) for a geometric distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability mass function (PMF) of a geometric distribution.
*/
interface LogPMF {
	/**
	* Evaluates the logarithm of the probability mass function (PMF) for a geometric distribution with success probability `p` at a value `x`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param x - input value
	* @param p - success probability
	* @returns logarithm of PMF
	*
	* @example
	* var y = logpmf( 4.0, 0.3 );
	* // returns ~-2.631
	*
	* @example
	* var y = logpmf( 2.0, 0.7 );
	* // returns ~-2.765
	*
	* @example
	* var y = logpmf( -1.0, 0.5 );
	* // returns -Infinity
	*
	* @example
	* var y = logpmf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpmf( NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* // Invalid success probability:
	* var y = logpmf( 2.0, 1.5 );
	* // returns NaN
	*/
	( x: number, p: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability mass function (PMF) for a geometric distribution with success probability `p`.
	*
	* @param p - success probability
	* @returns logPMF
	*
	* @example
	* var mylogpmf = logpmf.factory( 0.5 );
	* var y = mylogpmf( 3.0 );
	* // returns ~-2.773
	*
	* y = mylogpmf( 1.0 );
	* // returns ~-1.386
	*/
	factory( p: number ): Unary;
}

/**
* Geometric distribution natural logarithm of probability mass function (PMF).
*
* @param x - input value
* @param p - success probability
* @returns evaluated logPMF
*
* @example
* var y = logpmf( 4.0, 0.3 );
* // returns ~-2.631
*
* y = logpmf( 2.0, 0.7 );
* // returns ~-2.765
*
* var mylogpmf = logpmf.factory( 0.5 );
* y = mylogpmf( 3.0 );
* // returns ~-2.773
*
* y = mylogpmf( 1.0 );
* // returns ~-1.386
*/
declare var logPMF: LogPMF;


// EXPORTS //

export = logPMF;
