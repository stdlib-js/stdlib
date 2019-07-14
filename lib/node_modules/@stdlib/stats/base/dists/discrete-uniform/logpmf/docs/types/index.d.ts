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
* Evaluates the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution.
*
* @param x - input value
* @returns evaluated natural logarithm of the PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability mass function (logPMF) of a discrete uniform distribution.
*/
interface LogPMF {
	/**
	* Evaluates the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
	*
	* ## Notes
	*
	* -   If `a > b`, the function returns `NaN`.
	* -   If `a` or `b` is not an integer value, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated logPMF
	*
	* @example
	* var y = logpmf( 2.0, 0, 4 );
	* // returns ~-1.609
	*
	* @example
	* var y = logpmf( 5.0, 0, 4 );
	* // returns -Infinity
	*
	* @example
	* var y = logpmf( 2, 0, 8 );
	* // returns ~-2.197
	*
	* @example
	* var y = logpmf( NaN, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 0.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpmf( 2.0, 3.0, 1.0 );
	* // returns NaN
	*/
	( x: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns logPMF
	*
	* @example
	* var myLogPMF = logpmf.factory( 0, 10 );
	* var y = myLogPMF( 2.0 );
	* // returns ~-2.398
	*
	* y = myLogPMF( 12.0 );
	* // returns -Infinity
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Discrete uniform distribution natural logarithm of the probability mass function (logPMF).
*
* @param x - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated logPMF
*
* @example
* var y = logpmf( 3.0, 2, 6 );
* // returns ~-1.609
*
* var myLogPMF = logpmf.factory( 6, 7 );
* y = myLogPMF( 7.0 );
* // returns ~-0.693
*
* y = myLogPMF( 5.0 );
* // returns -Infinity
*/
declare var logPMF: LogPMF;


// EXPORTS //

export = logPMF;
