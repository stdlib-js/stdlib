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
* Evaluates the probability mass function (PMF) for a Poisson distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability mass function (PMF) of a Poisson distribution.
*/
interface PMF {
	/**
	* Evaluates the probability mass function (PMF) for a Poisson distribution with mean parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - mean parameter
	* @returns evaluated PMF
	*
	* @example
	* var y = pmf( 4.0, 3.0 );
	* // returns ~0.168
	*
	* @example
	* var y = pmf( 1.0, 3.0 );
	* // returns ~0.149
	*
	* @example
	* var y = pmf( -1.0, 2.0 );
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
	* // Invalid mean parameter:
	* var y = pmf( 2.0, -0.5 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the probability mass function (PMF) for a Poisson distribution with mean parameter `lambda`.
	*
	* @param lambda - mean parameter
	* @returns PMF
	*
	* @example
	* var mypmf = pmf.factory( 1.0 );
	* var y = mypmf( 3.0 );
	* // returns ~0.061
	*
	* y = mypmf( 1.0 );
	* // returns ~0.368
	*/
	factory( lambda: number ): Unary;
}

/**
* Poisson distribution probability mass function (PMF).
*
* @param x - input value
* @param lambda - mean parameter
* @returns evaluated PMF
*
* @example
* var y = pmf( 4.0, 3.0 );
* // returns ~0.168
*
* y = pmf( 1.0, 3.0 );
* // returns ~0.149
*
* y = pmf( -1.0, 2.0 );
* // returns 0.0
*
* var mypmf = pmf.factory( 1.0 );
* y = mypmf( 3.0 );
* // returns ~0.061
*
* y = mypmf( 1.0 );
* // returns ~0.368
*/
declare var pmf: PMF;


// EXPORTS //

export = pmf;
