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
* Evaluates the moment-generating function (MGF) of a geometric distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a geometric distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a geometric distribution with success probability `p` at a value `t`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	*
	* @param t - input value
	* @param p - success probability
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.2, 0.5 );
	* // returns ~1.569
	*
	* @example
	* var y = mgf( 0.4, 0.5 );
	* // returns ~2.936
	*
	* @example
	* // Case: t >= -ln(1-p)
	* var y = mgf( 0.8, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( -2.0, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 2.0 );
	* // returns NaN
	*/
	( t: number, p: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a geometric distribution with success probability `p`.
	*
	* @param p - success probability
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 0.8 );
	* var y = mymgf( -0.2 );
	* // returns ~0.783
	*/
	factory( p: number ): Unary;
}

/**
* Geometric distribution moment-generating function (MGF).
*
* @param t - input value
* @param p - success probability
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.2, 0.5 );
* // returns ~1.569
*
* y = mgf( 0.4, 0.5 );
* // returns ~2.936
*
* var mymgf = mgf.factory( 0.8 );
* y = mymgf( -0.2 );
* // returns ~0.783
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
