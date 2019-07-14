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
* Evaluates the natural logarithm of the probability mass function (PMF) for a Poisson distribution.
*
* @param x - input value
* @returns evaluated PMF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability mass function (PMF) of a Poisson distribution.
*/
interface LogPMF {
	/**
	* Evaluates the natural logarithm of the probability mass function (PMF) for a Poisson distribution with mean parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - mean parameter
	* @returns evaluated logPMF
	*
	* @example
	* var y = logpmf( 4.0, 3.0 );
	* // returns ~-1.784
	*
	* @example
	* var y = logpmf( 1.0, 3.0 );
	* // returns ~-1.901
	*
	* @example
	* var y = logpmf( -1.0, 2.0 );
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
	* // Invalid mean parameter:
	* var y = logpmf( 2.0, -0.5 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability mass function (PMF) for a Poisson distribution with mean parameter `lambda`.
	*
	* @param lambda - mean parameter
	* @returns logPMF
	*
	* @example
	* var mylogpmf = logpmf.factory( 1.0 );
	* var y = mylogpmf( 3.0 );
	* // returns ~-2.792
	*
	* y = mylogpmf( 1.0 );
	* // returns ~-1.0
	*/
	factory( lambda: number ): Unary;
}

/**
* Poisson distribution natural logarithm of probability mass function (PMF).
*
* @param x - input value
* @param lambda - mean parameter
* @returns evaluated logPMF
*
* @example
* var y = logpmf( 4.0, 3.0 );
* // returns ~-1.784
*
* y = logpmf( 1.0, 3.0 );
* // returns ~-1.901
*
* y = logpmf( -1.0, 2.0 );
* // returns -Infinity
*
* var mylogpmf = logpmf.factory( 1.0 );
* y = mylogpmf( 3.0 );
* // returns ~-2.797
*
* y = mylogpmf( 1.0 );
* // returns ~-1.0
*/
declare var logPMF: LogPMF;


// EXPORTS //

export = logPMF;
