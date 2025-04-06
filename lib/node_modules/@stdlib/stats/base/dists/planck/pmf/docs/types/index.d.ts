/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluates the probability mass function (PMF) for a Planck distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability mass function (PMF) of a Planck distribution.
*/
interface PMF {
	/**
	* Evaluates the probability mass function (PMF) for a Planck distribution with shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - shape parameter
	* @returns evaluated PMF
	*
	* @example
	* var y = pmf( 4.0, 0.3 );
	* // returns ~0.0781
	*
	* @example
	* var y = pmf( 2.0, 1.7 );
	* // returns ~0.0273
	*
	* @example
	* var y = pmf( -1.0, 2.5 );
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
	* // Invalid shape parameter:
	* var y = pmf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the probability mass function (PMF) for a Planck distribution with shape parameter `lambda`.
	*
	* @param lambda - shape parameter
	* @returns PMF
	*
	* @example
	* var pmf = factory( 0.5 );
	* var y = pmf( 3.0 );
	* // returns ~0.0879
	*
	* y = pmf( 1.0 );
	* // returns ~0.2386
	*/
	factory( lambda: number ): Unary;
}

/**
* Planck distribution probability mass function (PMF).
*
* @param x - input value
* @param lambda - shape parameter
* @returns evaluated PMF
*
* @example
* var y = pmf( 4.0, 0.3 );
* // returns ~0.0781
*
* y = pmf( 2.0, 1.7 );
* // returns ~0.0273
*
* y = pmf( -1.0, 0.5 );
* // returns 0.0
*
* var mypmf = pmf.factory( 0.5 );
* y = mypmf( 3.0 );
* // returns ~0.0878
*
* y = mypmf( 1.0 );
* // returns ~0.2387
*/
declare var pmf: PMF;


// EXPORTS //

export = pmf;
