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
* Evaluates the cumulative distribution function (CDF) for a Student's t distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Student's t distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a non-positive value for `v`, the function returns `NaN`.
	*
	* @param x - input value
	* @param v - degrees of freedom
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 0.1 );
	* // returns ~0.611
	*
	* @example
	* var y = cdf( 1.0, 2.0 );
	* // returns ~0.789
	*
	* @example
	* var y = cdf( -1.0, 4.0 );
	* // returns ~0.187
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
	* var y = cdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, v: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Student's t distribution with degrees of freedom `v`.
	*
	* @param v - degrees of freedom
	* @returns CDF
	*
	* @example
	* var mycdf = cdf.factory( 0.5 );
	* var y = mycdf( 3.0 );
	* // returns ~0.816
	*
	* y = mycdf( 1.0 );
	* // returns ~0.699
	*/
	factory( v: number ): Unary;
}

/**
* Student's t distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param v - degrees of freedom
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.1 );
* // returns ~0.611
*
* y = cdf( 1.0, 2.0 );
* // returns ~0.789
*
* y = cdf( -1.0, 4.0 );
* // returns ~0.187
*
* var mycdf = cdf.factory( 0.5 );
* y = mycdf( 3.0 );
* // returns ~0.816
*
* y = mycdf( 1.0 );
* // returns ~0.699
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
