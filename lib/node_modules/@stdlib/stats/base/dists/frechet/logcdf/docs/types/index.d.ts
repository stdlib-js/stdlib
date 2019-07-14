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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Fréchet distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a Fréchet distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `alpha <= 0` or `s <= 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 10.0, 2.0, 3.0, 2.0 );
	* // returns ~-0.141
	*
	* @example
	* var y = logcdf( -2.5, 1.0, 3.0, -3.0 );
	* // returns -6.0
	*
	* @example
	* var y = logcdf( 0.0, 2.0, 1.0, -1.0 );
	* // returns -1.0
	*
	* @example
	* var y = logcdf( NaN, 2.0, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, NaN, 1.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, 2.0, NaN, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, 2.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, -1.0, 1.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = logcdf( 0.0, 1.0, -1.0, 0.0 );
	* // returns NaN
	*/
	( x: number, alpha: number, s: number, m: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
	*
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 3.0, 3.0, 5.0 );
	*
	* var y = mylogcdf( 10.0 );
	* // returns ~-0.216
	*
	* y = mylogcdf( 7.0 );
	* // returns ~-3.375
	*/
	factory( alpha: number, s: number, m: number ): Unary;
}

/**
* Fréchet distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param alpha - shape parameter
* @param s - scale parameter
* @param m - location parameter
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 10.0, 2.0, 3.0, 5.0 );
* // returns ~-0.36
*
* y = logcdf( 3.8, 2.0, 3.0, 2.0 );
* // returns ~-2.778
*
* var mylogcdf = logcdf.factory( 3.0, 3.0, 5.0 );
* y = mylogcdf( 10.0 );
* // returns ~-0.216
*
* y = mylogcdf( 7.0 );
* // returns ~-3.381
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
