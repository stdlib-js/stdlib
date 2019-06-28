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
* Evaluates the moment-generating function (MGF) for a raised cosine distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a raised cosine distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a raised cosine distribution with location parameter `mu` and scale parameter `s` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided `s < 0`, the function returns `NaN`.
	*
	* @param t - input value
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 0.5, 0.0, 1.0 );
	* // returns ~1.016
	*
	* @example
	* var y = mgf( 1.2, 0.0, 1.0 );
	* // returns ~1.098
	*
	* @example
	* var y = mgf( -0.9, 0.0, 3.0);
	* // returns ~1.578
	*
	* @example
	* var y = mgf( 2.0, 0.0, NaN );
	* // returns NaN
	*
	* @example
	* var y = mgf( 2.0, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( NaN, 0.0, 1.0 );
	* // returns NaN
	*/
	( t: number, mu: number, s: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) for a raised cosine distribution with location parameter `mu` and scale parameter `s`.
	*
	* @param mu - location parameter
	* @param s - scale parameter
	* @returns MGF
	*
	* @example
	* var myMGF = mgf.factory( 3.0, 1.5 );
	*
	* var y = myMGF( 1.9 );
	* // returns ~495.57
	*
	* y = myMGF( -1.0 );
	* // returns ~0.058
	*/
	factory( mu: number, s: number ): Unary;
}

/**
* Raised cosine distribution moment-generating function (MGF).
*
* @param t - input value
* @param mu - location parameter
* @param s - scale parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 0.5, 0.0, 1.0 );
* // returns ~1.016
*
* var myMGF = mgf.factory( 3.0, 1.5 );
*
* y = myMGF( 1.0 );
* // returns ~23.219
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
