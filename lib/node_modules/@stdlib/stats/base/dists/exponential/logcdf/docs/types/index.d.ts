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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for an exponential distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of an exponential distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for an exponential distribution with rate parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - rate parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 2.0, 0.1 );
	* // returns ~-1.708
	*
	* @example
	* var y = logcdf( 1.0, 2.0 );
	* // returns ~-0.145
	*
	* @example
	* var y = logcdf( -1.0, 4.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logcdf( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative rate parameter:
	* var y = logcdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for an exponential distribution with rate parameter `lambda`.
	*
	* @param lambda - rate parameter
	* @returns logCDF
	*
	* @example
	* var mylogCDF = logcdf.factory( 0.5 );
	* var y = mylogCDF( 3.0 );
	* // returns ~-0.252
	*
	* y = mylogCDF( 1.0 );
	* // returns ~-0.933
	*/
	factory( lambda: number ): Unary;
}

/**
* Exponential distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param lambda - rate parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.1 );
* // returns ~-1.708
*
* var mylogCDF = logcdf.factory( 0.5 );
* y = mylogCDF( 3.0 );
* // returns ~-0.252
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
