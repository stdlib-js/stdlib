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
* Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution.
*
* @param x - input value
* @returns evaluated CDF
*/
type Unary = ( x: number ) => number;

/**
* Interface for the cumulative distribution function (CDF) of a Rayleigh distribution.
*/
interface CDF {
	/**
	* Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
	*
	* ## Notes
	*
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param x - input value
	* @param sigma - scale parameter
	* @returns evaluated CDF
	*
	* @example
	* var y = cdf( 2.0, 3.0 );
	* // returns ~0.199
	*
	* @example
	* var y = cdf( 1.0, 2.0 );
	* // returns ~0.118
	*
	* @example
	* var y = cdf( -1.0, 4.0 );
	* // returns 0.0
	*
	* @example
	* var y = cdf( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = cdf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* // Negative scale parameter:
	* var y = cdf( 2.0, -1.0 );
	* // returns NaN
	*/
	( x: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma`.
	*
	* @param sigma - scale parameter
	* @returns CDF
	*
	* @example
	* var myCDF = cdf.factory( 2.0 );
	* var y = myCDF( 3.0 );
	* // returns ~0.675
	*
	* y = myCDF( 1.0 );
	* // returns ~0.118
	*/
	factory( sigma: number ): Unary;
}

/**
* Rayleigh distribution cumulative distribution function (CDF).
*
* @param x - input value
* @param sigma - scale parameter
* @returns evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.0, 1.0 );
* // returns 1.0
*
* var myCDF = cdf.factory( 10.0, 2.0 );
* y = myCDF( 10.0 );
* // returns ~0.393
*/
declare var cdf: CDF;


// EXPORTS //

export = cdf;
