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
* Evaluates the moment-generating function (MGF) for a Laplace (double exponential) distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a Laplace (double exponential) distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a Laplace (double exponential) distribution with location parameter `mu` and scale parameter `b` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided `b <= 0`, the function returns `NaN`.
	*
	* @param t - input value
	* @param mu - mean
	* @param b - scale parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.5, 0.0, 1.0 );
	* // returns ~1.333
	*
	* @example
	* var y = mgf( 0.0, 0.0, 1.0 );
	* // returns 1.0
	*
	* @example
	* var y = mgf( -1.0, 4.0, 0.2 );
	* // returns ~0.019
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
	*
	* @example
	* var y = mgf( 1.0, 0.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( -0.5, 0.0, 4.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, 0.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, 0.0, -1.0 );
	* // returns NaN
	*/
	( t: number, mu: number, b: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a Laplace (double exponential) distribution with location parameter `mu` and scale parameter `b`.
	*
	* @param mu - mean
	* @param b - scale parameter
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 4.0, 2.0 );
	*
	* var y = mymgf( 0.2 );
	* // returns ~2.649
	*
	* y = mymgf( 0.4 );
	* // returns ~13.758
	*/
	factory( mu: number, b: number ): Unary;
}

/**
* Laplace distribution moment-generating function (MGF).
*
* @param t - input value
* @param mu - location parameter
* @param b - scale parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.5, 0.0, 1.0 );
* // returns ~1.333
*
* y = mgf( 0.0, 0.0, 1.0 );
* // returns 1.0
*
* y = mgf( -1.0, 4.0, 0.2 );
* // returns ~0.019
*
* var mymgf = mgf.factory( 4.0, 2.0 );
*
* y = mymgf( 0.2 );
* // returns ~2.649
*
* y = mymgf( 0.4 );
* // returns ~13.758
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
