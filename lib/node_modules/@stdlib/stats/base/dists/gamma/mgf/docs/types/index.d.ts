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
* Evaluates the moment-generating function (MGF) of a gamma distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a gamma distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a gamma distribution.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param t - input value
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.5, 0.5, 1.0 );
	* // returns ~1.414
	*
	* @example
	* var y = mgf( 0.1, 1.0, 1.0 );
	* // returns ~1.111
	*
	* @example
	* var y = mgf( -1.0, 4.0, 2.0 );
	* // returns ~0.198
	*
	* @example
	* var y = mgf( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, 1.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, 4.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, -0.5, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, 1.0, 0.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, 1.0, -1.0 );
	* // returns NaN
	*/
	( t: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a gamma distribution with shape `alpha` and rate `beta`.
	*
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @returns MGF
	*
	* @example
	* var mymgf = mgf.factory( 3.0, 1.5 );
	*
	* var y = mymgf( 1.0 );
	* // returns ~27.0
	*
	* y = mymgf( 0.5 );
	* // returns ~3.375
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Gamma distribution moment-generating function (MGF).
*
* @param t - input value
* @param alpha - shape parameter
* @param beta - rate parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.5, 0.5, 1.0 );
* // returns ~1.414
*
* y = mgf( 0.1, 1.0, 1.0 );
* // returns ~1.111
*
* y = mgf( -1.0, 4.0, 2.0 );
* // returns ~0.198
*
* var mymgf = mgf.factory( 3.0, 1.5 );
*
* y = mymgf( 1.0 );
* // returns ~26.999
*
* y = mymgf( 0.5 );
* // returns ~3.375
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
