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
* Evaluates the logarithm of the probability density function (PDF) for an Erlang distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of an Erlang distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If not provided a nonnegative integer for `k`, the function returns `NaN`.
	* -   If provided a non-positive value for `lambda`, the function returns `NaN`.
	*
	* @param x - input value
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @returns evaluated logPDF
	*
	* @example
	* var y = logpdf( 0.1, 1, 1.0 );
	* // returns ~-0.1
	*
	* @example
	* var y = logpdf( 0.5, 2, 2.5 );
	* // returns ~-0.111
	*
	* @example
	* var y = logpdf( -1.0, 4, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( NaN, 1, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, 1, NaN );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, -2, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 0.5, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 0.0, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 0.0, 0.0, 2.0 );
	* // returns Infinity
	*
	* @example
	* var y = logpdf( 2.0, 1, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 1, -1.0 );
	* // returns NaN
	*/
	( x: number, k: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda`.
	*
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @returns logPDF
	*
	* @example
	* var myLogPDF = logpdf.factory( 6.0, 7.0 );
	* var y = myLogPDF( 7.0 );
	* // returns ~-32.382
	*/
	factory( k: number, lambda: number ): Unary;
}

/**
* Erlang distribution natural logarithm of the probability density function (logPDF).
*
* @param x - input value
* @param k - shape parameter
* @param lambda - rate parameter
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 0.5, 2, 2.5 );
* // returns ~-0.111
*
* var myLogPDF = logpdf.factory( 6, 7.0 );
* y = myLogPDF( 7.0 );
* // returns ~-1.864
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
