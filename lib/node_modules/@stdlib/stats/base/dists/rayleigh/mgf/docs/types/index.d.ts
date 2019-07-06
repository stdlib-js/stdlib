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
* Evaluates the moment-generating function (MGF) of a Rayleigh distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a Rayleigh distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a Rayleigh distribution with scale parameter `sigma` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided `sigma < 0`, the function returns `NaN`.
	*
	* @param t - input value
	* @param sigma - scale parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 1.0, 3.0 );
	* // returns ~678.508
	*
	* @example
	* var y = mgf( 1.0, 2.0 );
	* // returns ~38.65
	*
	* @example
	* var y = mgf( -1.0, 4.0 );
	* // returns ~-0.947
	*
	* @example
	* var y = mgf( NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.5, -1.0 );
	* // returns NaN
	*/
	( t: number, sigma: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a Rayleigh distribution with scale parameter `sigma`.
	*
	* @param sigma - scale parameter
	* @returns MGF
	*
	* @example
	* var myMGF = mgf.factory( 0.5 );
	* var y = myMGF( 1.0 );
	* // returns ~2.715
	*
	* y = myMGF( 0.5 );
	* // returns ~1.888
	*/
	factory( sigma: number ): Unary;
}

/**
* Rayleigh distribution moment-generating function (MGF).
*
* @param t - input value
* @param sigma - scale parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 1.0, 3.0 );
* // returns ~678.508
*
* y = mgf( 1.0, 2.0 );
* // returns ~38.65
*
* y = mgf( -1.0, 4.0 );
* // returns ~-0.947
*
* var myMGF = mgf.factory( 0.5 );
*
* y = myMGF( 1.0 );
* // returns ~2.715
*
* y = myMGF( 0.5 );
* // returns ~1.888
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
