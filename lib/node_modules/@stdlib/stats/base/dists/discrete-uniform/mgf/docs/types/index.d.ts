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
* Evaluates the moment-generating function (MGF) for a discrete uniform distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a discrete uniform distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) of a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `t`.
	*
	* ## Notes
	*
	* -   If `a > b`, the function returns `NaN`.
	* -   If `a` or `b` is not an integer value, the function returns `NaN`.
	*
	* @param t - input value
	* @param a - minimum support
	* @param b - maximum support
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 2.0, 0, 4 );
	* // returns ~689.475
	*
	* @example
	* var y = mgf( -0.2, 0, 4 );
	* // returns ~0.697
	*
	* @example
	* var y = mgf( 2.0, 0, 1 );
	* // returns ~4.195
	*
	* @example
	* var y = mgf( 0.5, 3, 3 );
	* // returns ~4.482
	*
	* @example
	* var y = mgf( 0.5, 3, 2 );
	* // returns NaN
	*
	* @example
	* var y = mgf( NaN, 0, 1 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN, 1 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, 0, NaN );
	* // returns NaN
	*/
	( t: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a discrete uniform distribution with minimum support `a` and maximum support `b`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 6, 7 );
	* var y = mymgf( 0.1 );
	* // returns ~1.918
	*
	* y = mymgf( 1.1 );
	* // returns ~1471.722
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Discrete uniform distribution moment-generating function (MGF).
*
* @param t - input value
* @param a - minimum support
* @param b - maximum support
* @returns evaluated MGF
*
* @example
* var y = mgf( 2.0, 0, 4 );
* // returns ~689.475
*
* y = mgf( -0.2, 0, 4 );
* // returns ~0.697
*
* y = mgf( 2.0, 0, 1 );
* // returns ~4.195
*
* var mymgf = mgf.factory( 6, 7 );
* y = mymgf( 0.1 );
* // returns ~1.918
*
* y = mymgf( 1.1 );
* // returns ~1471.722
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
