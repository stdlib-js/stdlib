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
* Evaluates the moment-generating function (MGF) of a logistic distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a logistic distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a logistic distribution with mean `mu` and scale parameter `s` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided `s < 0`, the function returns `NaN`.
	*
	* @param t - input value
	* @param mu - mean
	* @param s - scale parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.9, 0.0, 1.0 );
	* // returns ~9.15
	*
	* @example
	* var y = mgf( 0.1, 4.0, 4.0 );
	* // returns ~1.971
	*
	* @example
	* var y = mgf( -0.2, 4.0, 4.0 );
	* // returns ~1.921
	*
	* @example
	* var y = mgf( 0.5, 0.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.5, 0.0, 4.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( NaN, 0.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, 0.0, NaN );
	* // returns NaN
	*/
	( t: number, mu: number, s: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a logistic distribution with mean `mu` and scale parameter `s`.
	*
	* @param mu - mean
	* @param s - scale parameter
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 10.0, 0.5 );
	*
	* var y = mymgf( 0.5 );
	* // returns ~164.846
	*
	* y = mymgf( 2.0 );
	* // returns Infinity
	*/
	factory( mu: number, s: number ): Unary;
}

/**
* Gamma distribution moment-generating function (MGF).
*
* @param t - input value
* @param mu - mean
* @param s - scale parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.9, 0.0, 1.0 );
* // returns ~9.15
*
* y = mgf( 0.1, 4.0, 4.0 );
* // returns ~1.971
*
* y = mgf( -0.2, 4.0, 4.0 );
* // returns ~1.921
*
* var mymgf = mgf.factory( 10.0, 0.5 );
*
* y = mymgf( 0.5 );
* // returns ~164.846
*
* y = mymgf( 2.0 );
* // returns Infinity
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
