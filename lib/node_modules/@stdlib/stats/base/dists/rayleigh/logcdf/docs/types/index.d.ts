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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Rayleigh distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a Rayleigh distribution.
*/
interface LogCDF {
	/**
	* Evaluates the logarithm of the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 2.0, 3.0 );
	* // returns ~-1.613
	*
	* @example
	* var y = logcdf( 1.0, 2.0 );
	* // returns ~-2.141
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
	* // Negative scale parameter:
	* var y = logcdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the logarithm of the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma`.
	*
	* @param sigma - scale parameter
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 2.0 );
	* var y = mylogcdf( 3.0 );
	* // returns ~-0.393
	*
	* y = mylogcdf( 1.0 );
	* // returns ~-2.141
	*/
	factory( sigma: number ): Unary;
}

/**
* Rayleigh distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param sigma - scale parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 5.0 );
* // returns ~-2.564
*
* var mylogcdf = logcdf.factory( 0.5 );
* y = mylogcdf( 1.0 );
* // returns ~-0.145
*
* y = mylogcdf( 0.5 );
* // returns ~-0.934
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
