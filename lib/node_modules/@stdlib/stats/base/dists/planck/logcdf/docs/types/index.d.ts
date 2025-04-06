/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Planck distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a Planck distribution.
*/
interface LogCDF {
	/**
	* Evaluates the logarithm of the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param lambda - shape parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 2.0, 0.5 );
	* // returns ~-0.2525
	*
	* @example
	* var y = logcdf( 2.0, 1.5 );
	* // returns ~-0.0112
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
	* // Invalid shape parameter
	* var y = logcdf( 2.0, -1.4 );
	* // returns NaN
	*/
	( x: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda`.
	*
	* @param lambda - shape parameter
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 1.5 );
	* var y = mylogcdf( 3.0 );
	* // returns ~-0.0025
	*
	* y = mylogcdf( 1.0 );
	* // returns ~-0.0511
	*/
	factory( lambda: number ): Unary;
}

/**
* Evaluates the logarithm of the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda`.
*
* @param x - input value
* @param lambda - shape parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.5 );
* // returns ~-0.2525
*
* y = logcdf( 2.0, 1.5 );
* // returns ~-0.0112
*
* var mylogcdf = logcdf.factory( 1.5 );
* y = mylogcdf( 3.0 );
* // returns ~-0.0025
*
* y = mylogcdf( 1.0 );
* // returns ~-0.0511
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
