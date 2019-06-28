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
* Evaluates the logarithm of the cumulative distribution function (CDF) for a logistic distribution.
*
* @param x - input value
* @returns evaluated logarithm of CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a logistic distribution.
*/
interface LogCDF {
	/**
	* Evaluates the logarithm of the cumulative distribution function (CDF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `s < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 2.0, 0.0, 1.0 );
	* // returns ~-0.127
	*
	* @example
	* var y = logcdf( 5.0, 10.0, 3.0 );
	* // returns ~-1.84
	*
	* @example
	* var y = logcdf( 2.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 2, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( NaN, 0.0, 1.0 );
	* // returns NaN
	*/
	( x: number, mu: number, beta: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the cumulative distribution function (CDF) for a logistic distribution with location parameter `mu` and scale parameter `s`.
	*
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 3.0, 1.5 );
	*
	* var y = mylogcdf( 1.0 );
	* // returns ~-1.567
	*
	* y = mylogcdf( 4.0 );
	* // returns ~-0.414
	*/
	factory( mu: number, beta: number ): Unary;
}

/**
* Logistic distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - location parameter
* @param s - scale parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 10.0, 0.0, 3.0 );
* // returns ~-0.036
*
* y = logcdf( 0.0, 0.0, 3.0 );
* // returns ~-1
*
* var mylogcdf = logcdf.factory( 2.0, 3.0 );
* y = mylogcdf( 10.0 );
* // returns ~-0.069
*
* y = mylogcdf( 2.0 );
* // returns ~-1
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
