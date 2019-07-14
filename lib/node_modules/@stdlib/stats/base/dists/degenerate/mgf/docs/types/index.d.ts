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
* Evaluates the moment-generating function (MGF) of a degenerate distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a degenerate distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a degenerate distribution centered at `mu`.
	*
	* @param t - input value
	* @param mu - value at which to center the distribution
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 1.0, 1.0 );
	* // returns ~2.718
	*
	* @example
	* var y = mgf( 2.0, 3.0 );
	* // returns ~403.429
	*
	* @example
	* var y = mgf( NaN, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN );
	* // returns NaN
	*/
	( t: number, mu: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a degenerate distribution centered at a provided mean value.
	*
	* @param mu - value at which to center the distribution
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 2.0 );
	*
	* var y = mymgf( 0.0 );
	* // returns 1.0
	*
	* y = mymgf( 2.0 );
	* // returns ~54.598
	*/
	factory( mu: number ): Unary;
}

/**
* Degenerate distribution moment-generating function (MGF).
*
* @param t - input value
* @param mu - value at which to center the distribution
* @returns evaluated MGF
*
* @example
* var y = mgf( 2.0, 0.0 );
* // returns 1.0
*
* var mymgf = mgf.factory( 10.0 );
*
* y = mymgf( 0.1 );
* // returns ~2.718
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
