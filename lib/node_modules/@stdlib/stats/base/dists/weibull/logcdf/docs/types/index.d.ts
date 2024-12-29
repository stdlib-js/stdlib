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

// TypeScript Version: 4.1

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Weibull distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a Weibull distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Weibull distribution with shape parameter `k` and scale parameter `lambda` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a non-positive value for `lambda` or `k`, the function returns `NaN`.
	*
	* @param x - input value
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns natural logarithm of CDF
	*
	* @example
	* var y = logcdf( 2.0, 1.0, 1.0 );
	* // returns ~-0.145
	*
	* @example
	* var y = logcdf( -1.0, 2.0, 2.0 );
	* // returns -Infinity
	*
	* @example
	* var y = logcdf( +Infinity, 4.0, 2.0 );
	* // returns 0.0
	*
	* @example
	* var y = logcdf( -Infinity, 4.0, 2.0 );
	* // returns -Infinity
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
	* var y = logcdf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*/
	( x: number, k: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a Weibull distribution.
	*
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 2.0, 10.0 );
	* var y = mylogcdf( 12.0 );
	* // returns ~-0.27
	*
	* y = mylogcdf( 8.0 );
	* // returns ~-0.749
	*/
	factory( k: number, lambda: number ): Unary;
}

/**
* Weibull distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param k - shape parameter
* @param lambda - scale parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 1.0, 1.0 );
* // returns ~-0.145
*
* var mylogcdf = logcdf.factory( 2.0, 10.0 );
* y = mylogcdf( 12.0 );
* // returns ~-0.27
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
