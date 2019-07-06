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
* Evaluates the moment-generating function (MGF) of an Erlang distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of an Erlang distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `t`.
	*
	* ## Notes
	*
	* -   If not provided a nonnegative integer for `k`, the function returns `NaN`.
	* -   If provided a non-positive value for `lambda`, the function returns `NaN`.
	*
	* @param t - input value
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.3, 1, 1.0 );
	* // returns ~1.429
	*
	* @example
	* var y = mgf( 2.0, 2, 3.0 );
	* // returns ~9.0
	*
	* @example
	* var y = mgf( -1.0, 2, 2.0 );
	* // returns ~0.444
	*
	* @example
	* var y = mgf( NaN, 1, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, 1, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, -2, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 0.5, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 1, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 1, -5.0 );
	* // returns NaN
	*/
	( t: number, k: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of an Erlang distribution with shape parameter `k` and rate parameter `lambda`.
	*
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @returns MGF
	*
	* @example
	* var myMGF = mgf.factory( 2, 0.5 );
	*
	* var y = myMGF( 0.2 );
	* // returns ~2.778
	*
	* y = myMGF( -0.5 );
	* // returns 0.25
	*/
	factory( k: number, lambda: number ): Unary;
}

/**
* Erlang distribution moment-generating function (MGF).
*
* @param t - input value
* @param k - shape parameter
* @param lambda - rate parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.3, 1, 1.0 );
* // returns ~1.429
*
* var myMGF = mgf.factory( 2, 0.5 );
*
* y = myMGF( 0.2 );
* // returns ~2.778
*
* y = myMGF( -0.5 );
* // returns 0.25
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
