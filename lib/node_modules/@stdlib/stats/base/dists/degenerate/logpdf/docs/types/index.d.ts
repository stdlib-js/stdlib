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
* Evaluates the natural logarithm of the probability density function (logPDF) for a degenerate distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a degenerate distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (logPDF) for a degenerate distribution centered at `mu`.
	*
	* @param x - input value
	* @param mu - constant value of the distribution
	* @returns natural logarithm of probability density function
	*
	* @example
	* var y = logpdf( 2.0, 3.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 3.0, 3.0 );
	* // returns Infinity
	*
	* @example
	* var y = logpdf( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, NaN );
	* // returns NaN
	*/
	( x: number, mu: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (logPDF) of a degenerate distribution centered at a provided mean value.
	*
	* @param mu - value at which to center the distribution
	* @returns function to evaluate the natural logarithm of the probability density function
	*
	* @example
	* var mylogpdf = logpdf.factory( 5.0 );
	*
	* var y = mylogpdf( 0.0 );
	* // returns -Infinity
	*
	* y = mylogpdf( 5.0 );
	* // returns Infinity
	*/
	factory( mu: number ): Unary;
}

/**
* Degenerate distribution natural logarithm of probability density function (logPDF).
*
* @param x - input value
* @param mu - value at which to center the distribution
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.0 );
* // returns -Infinity
*
* var mylogpdf = logpdf.factory( 10.0 );
*
* y = mylogpdf( 10.0 );
* // returns Infinity
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
