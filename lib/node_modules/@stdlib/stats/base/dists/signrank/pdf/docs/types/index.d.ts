/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Evaluates the probability density function (PDF) of the Wilcoxon signed rank test statistic.
*
* @param x - input value
* @returns evaluated PDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the probability density function (PDF) of the Wilcoxon signed rank test statistic.
*/
interface PDF {
	/**
	* Evaluates the probability density function (PDF) of the Wilcoxon signed rank test statistic.
	*
	* ## Notes
	*
	* -   If provided a negative value for `x`, the function returns `NaN`.
	* -   If not provided a positive integer for `n`, the function returns `NaN`.
	*
	* @param x - input value
	* @param n - number of observations
	* @returns evaluated PDF
	*
	* @example
	* var y = pdf( 7.0, 9 );
	* // returns ~0.01
	*
	* @example
	* var y = pdf( 7.0, 6 );
	* // returns ~0.063
	*
	* @example
	* var y = pdf( -1.0, 40 );
	* // returns 0.0
	*
	* @example
	* var y = pdf( NaN, 10 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, -1 );
	* // returns NaN
	*
	* @example
	* var y = pdf( 2.0, 1.8 );
	* // returns NaN
	*/
	( x: number, n: number ): number;

	/**
	* Returns a function for evaluating the probability density function (PDF) of the Wilcoxon signed rank test statistic.
	*
	* @param n - number of observations
	* @returns PDF
	*
	* @example
	* var mypdf = pdf.factory( 8 );
	* var y = mypdf( 4.0 );
	* // returns ~0.008
	*
	* y = mypdf( 17.0 );
	* // returns ~0.051
	*/
	factory( n: number ): Unary;
}

/**
* Wilcoxon signed rank test statistic probability density function (PDF).
*
* @param x - input value
* @param n - number of observations
* @returns evaluated PDF
*
* @example
* var y = pdf( 7.0, 9 );
* // returns ~0.01
*
* var mypdf = pdf.factory( 8 );
* var y = mypdf( 4.0 );
* // returns ~0.008
*/
declare var pdf: PDF;


// EXPORTS //

export = pdf;
