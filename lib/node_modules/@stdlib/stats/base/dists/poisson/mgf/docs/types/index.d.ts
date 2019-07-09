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
* Evaluates the moment-generating function (MGF) of a Poisson distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a Poisson distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a Poisson distribution with mean parameter `lambda` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided a negative value for `lambda`, the function returns `NaN`.
	*
	* @param t - input value
	* @param lambda - mean parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 1.0, 1.5 );
	* // returns ~13.163
	*
	* @example
	* var y = mgf( 0.5, 0.5 );
	* // returns ~1.383
	*
	* @example
	* var y = mgf( NaN, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( -2.0, -1.0 );
	* // returns NaN
	*/
	( t: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a Poisson distribution with mean parameter `lambda`.
	*
	* @param lambda - mean parameter
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 2.0 );
	* var y = mymgf( 0.1 );
	* // returns ~1.234
	*/
	factory( lambda: number ): Unary;
}

/**
* Poisson distribution moment-generating function (MGF).
*
* @param t - input value
* @param lambda - mean parameter
* @returns evaluated MGF
*
* @example
* var v = mgf( 0.5, 0.5 );
* // returns ~1.383
*
* var mymgf = mgf.factory( 2.0 );
* y = mymgf( 0.1 );
* // returns ~1.234
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
