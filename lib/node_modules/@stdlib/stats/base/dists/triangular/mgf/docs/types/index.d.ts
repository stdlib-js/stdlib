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
* Evaluates the moment-generating function (MGF) for a triangular distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a triangular distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a triangular distribution with lower limit `a`, upper limit `b`, and mode `c` at a value `t`.
	*
	* ## Notes
	*
	* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
	*
	* @param t - input value
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.5, -1.0, 1.0, 0.0 );
	* // returns ~1.021
	*
	* @example
	* var y = mgf( 0.5, -1.0, 1.0, 0.5 );
	* // returns ~1.111
	*
	* @example
	* var y = mgf( -0.3, -20.0, 0.0, -2.0 );
	* // returns ~24.334
	*
	* @example
	* var y = mgf( -2.0, -1.0, 1.0, 0.0 );
	* // returns ~1.381
	*
	* @example
	* var y = mgf( NaN, 0.0, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN, 1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, 0.0, NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.5, 1.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.5, 1.0, 0.0, 1.5 );
	* // returns NaN
	*/
	( t: number, a: number, b: number, c: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) for a triangular distribution with lower limit `a`, upper limit `b`, and mode `c`.
	*
	* @param a - lower limit
	* @param b - upper limit
	* @param c - mode
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 0.0, 2.0, 1.0 );
	* var y = mymgf( -1.0 );
	* // returns ~0.3996
	*
	* y = mymgf( 2.0 );
	* // returns ~10.205
	*/
	factory( a: number, b: number, c: number ): Unary;
}

/**
* Triangular distribution moment-generating function (MGF).
*
* @param t - input value
* @param a - lower limit
* @param b - upper limit
* @param c - mode
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.5, -1.0, 1.0, 0.0 );
* // returns ~1.021
*
* y = mgf( 0.5, -1.0, 1.0, 0.5 );
* // returns ~1.111
*
* y = mgf( -0.3, -20.0, 0.0, -2.0 );
* // returns ~24.334
*
* y = mgf( -2.0, -1.0, 1.0, 0.0 );
* // returns ~1.381
*
* var mymgf = mgf.factory( 0.0, 2.0, 1.0 );
* y = mymgf( -1.0 );
* // returns ~0.3996
*
* y = mymgf( 2.0 );
* // returns ~10.205
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
