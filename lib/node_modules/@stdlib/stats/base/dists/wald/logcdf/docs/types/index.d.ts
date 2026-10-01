/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Wald distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the cumulative distribution function (CDF) of a Wald distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Wald distribution with mean `mu` and shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `mu <= 0` or `lambda < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - mean
	* @param lambda - shape parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 2.0, 1.0, 1.0 );
	* // returns ~-0.122
	*
	* @example
	* var y = logcdf( 0.5, 2.0, 3.0 );
	* // returns ~-2.897
	*
	* @example
	* var y = logcdf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* // Nonpositive mean:
	* var y = logcdf( 2.0, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* // Negative shape parameter:
	* var y = logcdf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* // Degenerate distribution when `lambda = 0.0`:
	* var y = logcdf( 2.0, 8.0, 0.0 );
	* // returns -Infinity
	*/
	( x: number, mu: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a Wald distribution.
	*
	* @param mu - mean
	* @param lambda - shape parameter
	* @returns function to evaluate the natural logarithm of the cumulative distribution function
	*
	* @example
	* var mylogcdf = logcdf.factory( 10.0, 2.0 );
	* var y = mylogcdf( 10.0 );
	* // returns ~-0.253
	*
	* y = mylogcdf( 12.0 );
	* // returns ~-0.213
	*/
	factory( mu: number, lambda: number ): Unary;
}

/**
* Wald distribution natural logarithm of the cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - mean
* @param lambda - shape parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 1.0, 1.0 );
* // returns ~-0.122
*
* var mylogcdf = logcdf.factory( 10.0, 2.0 );
* y = mylogcdf( 10.0 );
* // returns ~-0.253
*/
declare var logcdf: LogCDF;


// EXPORTS //

export = logcdf;
