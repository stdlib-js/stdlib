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
* Evaluates the moment-generating function (MGF) for a beta distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a beta distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `t`.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	*
	* @param t - input value
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.5, 1.0, 1.0 );
	* // returns ~1.297
	*
	* @example
	* var y = mgf( 0.5, 2.0, 4.0 );
	* // returns ~1.186
	*
	* @example
	* var y = mgf( 3.0, 2.0, 2.0 );
	* // returns ~5.575
	*
	* @example
	* var y = mgf( -0.8, 4.0, 4.0 );
	* // returns ~0.676
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
	* var y = mgf( 2.0, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, 0.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, 0.5, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, 0.5, 0.0 );
	* // returns NaN
	*/
	( t: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns MGF
	*
	* @example
	* var myMGF = mgf.factory( 0.5, 0.5 );
	*
	* var y = myMGF( 0.8 );
	* // returns ~1.552
	*
	* y = myMGF( 0.3 );
	* // returns ~1.168
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Beta distribution moment-generating function (MGF).
*
* @param t - input value
* @param alpha - first shape parameter
* @param beta - second shape parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.5, 1.0, 1.0 );
* // returns ~1.297
*
* y = mgf( 0.5, 2.0, 4.0 );
* // returns ~1.186
*
* y = mgf( 3.0, 2.0, 2.0 );
* // returns ~5.575
*
* y = mgf( -0.8, 4.0, 4.0 );
* // returns ~0.676
*
* var myMGF = mgf.factory( 0.5, 0.5 );
*
* y = myMGF( 0.8 );
* // returns ~1.522
*
* y = myMGF( 0.3 );
* // returns ~1.168
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
