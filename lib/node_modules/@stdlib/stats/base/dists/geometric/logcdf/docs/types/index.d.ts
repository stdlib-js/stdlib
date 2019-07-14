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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a geometric distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a geometric distribution.
*/
interface LogCDF {
	/**
	* Evaluates the logarithm of the cumulative distribution function (CDF) for a geometric distribution with success probability `p` at a value `x`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param x - input value
	* @param p - success probability
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 2.0, 0.5 );
	* // returns ~-0.134
	*
	* @example
	* var y = logcdf( 2.0, 0.1 );
	* // returns ~-1.306
	*
	* @example
	* var y = logcdf( -1.0, 0.5 );
	* // returns -Infinity
	*
	* @example
	* var y = logcdf( NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Invalid probability
	* var y = logcdf( 2.0, 1.4 );
	* // returns NaN
	*/
	( x: number, p: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the cumulative distribution function (CDF) for a geometric distribution with success probability `p`.
	*
	* @param p - success probability
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 0.5 );
	* var y = mylogcdf( 3.0 );
	* // returns ~-0.065
	*
	* y = mylogcdf( 1.0 );
	* // returns ~-0.288
	*/
	factory( p: number ): Unary;
}

/**
* Geometric distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param p - success probability
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.5 );
* // returns ~-0.134
*
* y = logcdf( 2.0, 0.1 );
* // returns ~-1.306
*
* var mylogcdf = logcdf.factory( 0.5 );
* y = mylogcdf( 3.0 );
* // returns ~-0.065
*
* y = mylogcdf( 1.0 );
* // returns ~-0.288
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
