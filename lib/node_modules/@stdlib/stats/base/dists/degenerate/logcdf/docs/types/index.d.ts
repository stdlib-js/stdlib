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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a degenerate distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a degenerate distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (logCDF) for a degenerate distribution with mean `mu`.
	*
	* @param x - input value
	* @param mu - constant value of distribution
	* @returns natural logarithm of cumulative distribution function
	*
	* @example
	* var y = logcdf( 2.0, 3.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logcdf( 4.0, 3.0 );
	* // returns 0.0
	*
	* @example
	* var y = logcdf( 3.0, 3.0 );
	* // returns 0.0
	*
	* @example
	* var y = logcdf( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, NaN );
	* // returns NaN
	*/
	( x: number, mu: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (logCDF) of a degenerate distribution centered at a provided mean value.
	*
	* @param mu - value at which to center the distribution
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 5.0 );
	*
	* var y = mylogcdf( 3.0 );
	* // returns -Infinity
	*
	* y = mylogcdf( 6.0 );
	* // returns 0.0
	*
	* y = mylogcdf( NaN );
	* // returns NaN
	*/
	factory( mu: number ): Unary;
}

/**
* Degenerate distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param mu - constant value of distribution
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 5.0 );
* // returns -Infinity
*
* var mylogcdf = logcdf.factory( 5.0 );
*
* y = mylogcdf( 3.0 );
* // returns -Infinity
*
* y = mylogcdf( 6.0 );
* // returns 0.0
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
