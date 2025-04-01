/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Evaluates the natural logarithm of the probability mass function (PMF) for a Planck distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability mass function (PMF) of a Planck distribution.
*/
interface LogPMF {
	/**
	* Evaluates the logarithm of the probability mass function (PMF) for a Planck distribution with shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - shape parameter
	* @returns logarithm of PMF
	*
	* @example
	* var y = logpmf( 4.0, 0.3 );
	* // returns ~-2.5502
	*
	* @example
	* var y = logpmf( 2.0, 1.7 );
	* // returns ~-3.6017
	*
	* @example
	* var y = logpmf( -1.0, 2.5 );
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
	* // Invalid shape parameter:
	* var y = logpmf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the probability mass function (PMF) for a Planck distribution with shape parameter `lambda`.
	*
	* @param lambda - shape parameter
	* @returns logPMF
	*
	* @example
	* var mylogpmf = logpmf.factory( 0.5 );
	* var y = mylogpmf( 3.0 );
	* // returns ~-2.4327
	*
	* y = mylogpmf( 1.0 );
	* // returns ~-1.4327
	*/
	factory( lambda: number ): Unary;
}

/**
* Evaluates the natural logarithm of the probability mass function (PMF) for a Planck distribution.
*
* @param x - input value
* @param lambda - shape parameter
* @returns evaluated logPMF
*
* @example
* var y = logpmf( 4.0, 0.3 );
* // returns ~-2.5502
*
* y = logpmf( 2.0, 1.7 );
* // returns ~-3.6017
*
* var mylogpmf = logpmf.factory( 0.5 );
* y = mylogpmf( 3.0 );
* // returns ~-2.4327
*
* y = mylogpmf( 1.0 );
* // returns ~-1.4327
*/
declare var logPMF: LogPMF;


// EXPORTS //

export = logPMF;
