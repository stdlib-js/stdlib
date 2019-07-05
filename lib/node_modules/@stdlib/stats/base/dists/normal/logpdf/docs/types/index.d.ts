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
* Evaluates the natural logarithm of the probability density function (logPDF) for a normal distribution.
*
* @param x - input value
* @returns evaluated logPDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the probability density function (logPDF) of a normal distribution.
*/
interface LogPDF {
	/**
	* Evaluates the natural logarithm of the probability density function (PDF) for a normal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns logarithm of probability density function
	*
	* @example
	* var y = logpdf( 2.0, 0.0, 1.0 );
	* // returns ~-2.919
	*
	* @example
	* var y = logpdf( -1.0, 4.0, 2.0 );
	* // returns ~-4.737
	*
	* @example
	* var y = logpdf( NaN, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 0.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative standard deviation:
	* var y = logpdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logpdf( 2.0, 8.0, 0.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logpdf( 8.0, 8.0, 0.0 );
	* // returns Infinity
	*/
	( x: number, mu: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a normal distribution.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns logPDF
	*
	* @example
	* var mylogpdf = logpdf.factory( 10.0, 2.0 );
	* var y = mylogpdf( 10.0 );
	* // returns ~-1.612
	*
	* y = mylogpdf( 5.0 );
	* // returns ~-4.737
	*/
	factory( mu: number, sigma: number ): Unary;
}

/**
* Normal distribution natural logarithm of probability density function (logPDF).
*
* @param x - input value
* @param mu - mean
* @param sigma - standard deviation
* @returns evaluated logPDF
*
* @example
* var y = logpdf( 2.0, 0.0, 1.0 );
* // returns ~-2.919
*
* var mylogpdf = logpdf.factory( 10.0, 2.0 );
* y = mylogpdf( 10.0 );
* // returns ~-1.612
*/
declare var logPDF: LogPDF;


// EXPORTS //

export = logPDF;
