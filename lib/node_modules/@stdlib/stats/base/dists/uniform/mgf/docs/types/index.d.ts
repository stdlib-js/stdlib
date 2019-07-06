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
* Evaluates the moment-generating function (MGF) for a uniform distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a uniform distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) of a uniform distribution with minimum support `a` and maximum support `b` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided `a >= b`, the function returns `NaN`.
	*
	* @param t - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 2.0, 0.0, 4.0 );
	* // returns ~372.495
	*
	* @example
	* var y = mgf( -0.2, 0.0, 4.0 );
	* // returns ~0.688
	*
	* @example
	* var y = mgf( 2.0, 0.0, 1.0 );
	* // returns ~3.195
	*
	* @example
	* var y = mgf( 0.5, 3.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.5, 3.0, 3.0 );
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
	( t: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 6.0, 7.0 );
	* var y = mymgf( 0.1 );
	* // returns ~1.916
	*
	* y = mymgf( 1.1 );
	* // returns ~1339.321
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Uniform distribution moment-generating function (MGF).
*
* @param t - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated MGF
*
* @example
* var y = mgf( 2.0, 0.0, 4.0 );
* // returns ~372.495
*
* y = mgf( -0.2, 0.0, 4.0 );
* // returns ~0.688
*
* y = mgf( 2.0, 0.0, 1.0 );
* // returns ~3.195
*
* var mymgf = mgf.factory( 6.0, 7.0 );
* y = mymgf( 0.1 );
* // returns ~1.916
*
* y = mymgf( 1.1 );
* // returns ~1339.321
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
