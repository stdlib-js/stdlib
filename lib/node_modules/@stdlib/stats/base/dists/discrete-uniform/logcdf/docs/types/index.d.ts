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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a discrete uniform distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a discrete uniform distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
	*
	* ## Notes
	*
	* -   If `a > b`, the function returns `NaN`.
	* -   If `a` or `b` is not an integer value, the function returns `NaN`.
	*
	* @param x - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 9.0, 0, 10 );
	* // returns ~-0.095
	*
	* @example
	* var y = logcdf( 0.5, 0, 2 );
	* // returns ~-1.099
	*
	* @example
	* var y = logcdf( +Infinity, 2, 4 );
	* // returns 0.0
	*
	* @example
	* var y = logcdf( -Infinity, 2, 4 );
	* // returns -Infinity
	*
	* @example
	* var y = logcdf( NaN, 0, 1 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, NaN, 1 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, 0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 2.0, 1, 0 );
	* // returns NaN
	*/
	( x: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 0, 10 );
	* var y = mylogcdf( 0.5 );
	* // returns ~-2.398
	*
	* y = mylogcdf( 8.0 );
	* // returns ~-0.201
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Discrete uniform distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 3.0, 0, 4 );
* // returns ~-0.223
*
* var mylogcdf = logcdf.factory( 0, 10 );
* y = mylogcdf( 0.5 );
* // returns ~-2.398
*
* y = mylogcdf( 8.0 );
* // returns ~-0.201
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
