/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution.
*
* @param x - input value
* @returns evaluated logcdf
*/
type Unary = ( x: number ) => number;

/**
* Interface for the natural logarithm of the cumulative distribution function (CDF) of a lognormal distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution with mean `mu` and standard deviation `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns logarithm of cumulative distribution function
	*
	* @example
	* var y = logcdf( 2.0, 0.0, 1.0 );
	* // returns ~-0.2799
	*
	* @example
	* var y = logcdf( 13.0, 4.0, 2.0 );
	* // returns ~-1.442
	*
	* @example
	* var y = logcdf( NaN, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative standard deviation:
	* var y = logcdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 2.0, 8.0, 0.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logcdf( 8.0, 8.0, 0.0 );
	* // returns -Infinity
	*/
	( x: number, mu: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a lognormal distribution.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns logcdf
	*
	* @example
	* var mylogcdf = logcdf.factory( 10.0, 2.0 );
	* var y = mylogcdf( 10.0 );
	* // returns ~-9.732
	*
	* y = mylogcdf( 5.0 );
	* // returns ~-11.203
	*/
	factory( mu: number, sigma: number ): Unary;
}

/**
* Lognormal distribution natural logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - mean
* @param sigma - standard deviation
* @returns evaluated logcdf
*
* @example
* var y = logcdf( 2.0, 0.0, 1.0 );
* // returns ~-0.2799
*
* var mylogcdf = logcdf.factory( 10.0, 2.0 );
* y = mylogcdf( 10.0 );
* // returns ~-9.732
*/
declare var logcdf: LogCDF;


// EXPORTS //

export = logcdf;
