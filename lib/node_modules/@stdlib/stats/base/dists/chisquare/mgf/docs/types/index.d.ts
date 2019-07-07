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
* Evaluates the moment-generating function (MGF) of a chi-squared distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a chi-squared distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a chi-squared distribution with degrees of freedom `k` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided `k < 0`, the function returns `NaN`.
	*
	* @param t - input value
	* @param k - degrees of freedom
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.4, 2 );
	* // returns ~5.0
	*
	* @example
	* var y = mgf( -1.0, 5.0 );
	* // returns ~0.0642
	*
	* @example
	* var y = mgf( 0.0, 10.0 );
	* // returns 1.0
	*/
	( t: number, k: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a chi-squared distribution with degrees of freedom `k`.
	*
	* @param k - degrees of freedom
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 1.0 );
	*
	* var y = mymgf( 0.2 );
	* // returns ~1.291
	*
	* y = mymgf( 0.4 );
	* // returns ~2.236
	*/
	factory( k: number ): Unary;
}

/**
* Chi-squared distribution moment-generating function (MGF).
*
* @param t - input value
* @param k - degrees of freedom
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.4, 2 );
* // returns ~5.0
*
* y = mgf( -1.0, 5.0 );
* // returns ~0.0642
*
* y = mgf( 0.0, 10.0 );
* // returns 1.0
*
* var mymgf = mgf.factory( 1.0 );
*
* var y = mymgf( 0.2 );
* // returns ~1.291
*
* y = mymgf( 0.4 );
* // returns ~2.236
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
