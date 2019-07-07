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
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Student's t distribution.
*
* @param x - input value
* @returns evaluated logCDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the logarithm of the cumulative distribution function (CDF) of a Student's t distribution.
*/
interface LogCDF {
	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided a non-positive value for `v`, the function returns `NaN`.
	*
	* @param x - input value
	* @param v - degrees of freedom
	* @returns evaluated logCDF
	*
	* @example
	* var y = logcdf( 2.0, 0.1 );
	* // returns ~-0.493
	*
	* @example
	* var y = logcdf( 1.0, 2.0 );
	* // returns ~-0.237
	*
	* @example
	* var y = logcdf( -1.0, 4.0 );
	* // returns ~-1.677
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
	* var y = logcdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, v: number ): number;

	/**
	* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a Student's t distribution with degrees of freedom `v`.
	*
	* @param v - degrees of freedom
	* @returns logCDF
	*
	* @example
	* var mylogcdf = logcdf.factory( 0.5 );
	* var y = mylogcdf( 3.0 );
	* // returns ~-0.203
	*
	* y = mylogcdf( 1.0 );
	* // returns ~-0.358
	*/
	factory( v: number ): Unary;
}

/**
* Student's t distribution logarithm of cumulative distribution function (CDF).
*
* @param x - input value
* @param v - degrees of freedom
* @returns evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.1 );
* // returns ~-0.493
*
* y = logcdf( 1.0, 2.0 );
* // returns ~-0.237
*
* y = logcdf( -1.0, 4.0 );
* // returns ~-1.677
*
* var mylogcdf = logcdf.factory( 0.5 );
* y = mylogcdf( 3.0 );
* // returns ~-0.203
*/
declare var logCDF: LogCDF;


// EXPORTS //

export = logCDF;
