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
* Evaluates the cumulative distribution function (CDF) for an exponential distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of an exponential distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for an exponential distribution with rate parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - rate parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 0.1 );
	* // returns ~0.181
	*
	* @example
	* var y = cdf( 1.0, 2.0 );
	* // returns ~0.865
	*
	* @example
	* var y = cdf( -1.0, 4.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative rate parameter:
	* var y = cdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for an exponential distribution with rate parameter `lambda`.
	*
	* @param lambda - rate parameter
	* @returns CDF
	*
	* @example
	* var myCDF = cdf.factory( 0.5 );
	* var y = myCDF( 3.0 );
	* // returns ~0.777
	*
	* y = myCDF( 1.0 );
	* // returns ~0.393
	*/
	factory( lambda: number ): Unary;
}

/**
* Exponential distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param lambda - rate parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.1 );
* // returns ~0.181
*
* var myCDF = cdf.factory( 0.5 );
* y = myCDF( 3.0 );
* // returns ~0.777
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
