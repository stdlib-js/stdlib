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
* Evaluates the moment-generating function (MGF) of an exponential distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of an exponential distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for an exponential distribution with rate parameter `lambda` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param t - input value
	* @param lambda - rate parameter
	* @returns evaluated MGF
	*
	* @example
	* var v = mgf( 2.0, 3.0 );
	* // returns 3.0
	*
	* @example
	* var v = mgf( 0.4, 1.2 );
	* // returns 1.5
	*
	* @example
	* var v = mgf( 0.8, 1.6 );
	* // returns 2.0
	*
	* @example
	* var v = mgf( 4.0, 3.0 );
	* // returns NaN
	*
	* @example
	* var v = mgf( NaN, 3.0 );
	* // returns NaN
	*
	* @example
	* var v = mgf( 2.0, NaN );
	* // returns NaN
	*/
	( t: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of an exponential distribution with rate parameter `lambda`.
	*
	* @param lambda - rate parameter
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 4.0 );
	* var y = mymgf( 3.0 );
	* // returns 4.0
	*
	* y = mymgf( 0.5 );
	* // returns ~1.143
	*/
	factory( lambda: number ): Unary;
}

/**
* Exponential distribution moment-generating function (MGF).
*
* @param t - input value
* @param lambda - rate parameter
* @returns evaluated MGF
*
* @example
* var v = mgf( 2.0, 3.0 );
* // returns 3.0
*
* var mymgf = mgf.factory( 4.0 );
* v = mymgf( 3.0 );
* // returns 4.0
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
