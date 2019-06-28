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
* Evaluates the natural logarithm of the cumulative distribution function (logCDF) for a Cauchy distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a Cauchy distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (logCDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `gamma <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 4.0, 0.0, 2.0 );
	* // returns ~-0.16
	*
	* @example
	* var y = logcdf( 1.0, 0.0, 2.0 );
	* // returns ~-0.435
	*
	* @example
	* var y = logcdf( 1.0, 3.0, 2.0 );
	* // returns ~-1.386
	*
	* @example
	* var y = logcdf( NaN, 0.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 1.0, 2.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 1.0, NaN, 3.0 );
	* // returns NaN
	*/
	( x: number, x0: number, gamma: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (logCDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma`.
	*
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 10.0, 2.0 );
	*
	* var y = mylogcdf( 10.0 );
	* // returns ~-0.693
	*
	* y = mylogcdf( 12.0 );
	* // returns ~-0.288
	*/
	factory( x0: number, gamma: number ): Unary;
}

/**
* Cauchy distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param x0 - location parameter
* @param gamma - scale parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.0, 1.0 );
* // returns ~-0.16
*
* var mylogcdf = logcdf.factory( 1.5, 3.0 );
*
* y = mylogcdf( 1.0 );
* // returns ~-0.805
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
