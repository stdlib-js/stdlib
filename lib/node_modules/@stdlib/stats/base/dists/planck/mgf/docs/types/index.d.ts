/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Evaluates the moment-generating function (MGF) of a Planck distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a Planck distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a Planck distribution with shape parameter `lambda` at a value `t`.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	*
	* @param t - input value
	* @param lambda - shape parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.2, 0.5 );
	* // returns ~1.5181
	*
	* @example
	* var y = mgf( 0.4, 1.5 );
	* // returns ~1.1645
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
	* var y = mgf( 2.0, -1.0 );
	* // returns NaN
	*/
	( t: number, lambda: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a Planck distribution with shape parameter `lambda`.
	*
	* @param lambda - shape parameter
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 0.8 );
	* var y = mymgf( -0.2 );
	* // returns ~0.8711
	*/
	factory( lambda: number ): Unary;
}

/**
* Planck distribution moment-generating function (MGF).
*
* @param t - input value
* @param lambda - shape parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.2, 0.5 );
* // returns ~1.5181
*
* y = mgf( 0.4, 1.5 );
* // returns ~1.1645
*
* var mymgf = mgf.factory( 0.8 );
* y = mymgf( -0.2 );
* // returns ~0.8711
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
