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
* Evaluates the moment-generating function (MGF) for a Weibull distribution.
*
* @param t - input value
* @returns evaluated MGF
*/
type Unary = ( t: number ) => number;

/**
* Interface for the moment-generating function (MGF) of a Weibull distribution.
*/
interface MGF {
	/**
	* Evaluates the moment-generating function (MGF) for a Weibull distribution with shape `k` and scale `lambda` at a value `t`.
	*
	* ## Notes
	*
	* -   If provided a nonpositive value for `lambda` or `k`, the function returns `NaN`.
	*
	* @param t - input value
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns evaluated MGF
	*
	* @example
	* var y = mgf( 1.0, 1.0, 0.5 );
	* // returns ~2.0
	*
	* @example
	* var y = mgf( -1.0, 4.0, 4.0 );
	* // returns ~0.019
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
	* var y = mgf( 0.2, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 0.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 0.5, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = mgf( 0.2, 0.5, 0.0 );
	* // returns NaN
	*/
	( t: number, alpha: number, beta: number ): number;

	/**
	* Returns a function for evaluating the moment-generating function (MGF) of a Weibull distribution with shape `k` and scale `lambda`.
	*
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns MGF
	*
	* @example
	* var myMGF = mgf.factory( 8.0, 10.0 );
	*
	* var y = myMGF( 0.8 );
	* // returns ~3150.149
	*
	* y = myMGF( 0.08 );
	* // returns ~2.137
	*/
	factory( alpha: number, beta: number ): Unary;
}

/**
* Weibull distribution moment-generating function (MGF).
*
* @param t - input value
* @param k - shape parameter
* @param lambda - scale parameter
* @returns evaluated MGF
*
* @example
* var y = mgf( 1.0, 1.0, 0.5 );
* // returns ~2.0
*
* y = mgf( -1.0, 4.0, 4.0 );
* // returns ~0.019
*
* var myMGF = mgf.factory( 8.0, 10.0 );
*
* y = myMGF( 0.8 );
* // returns ~3150.149
*
* y = myMGF( 0.08 );
* // returns ~2.137s
*/
declare var mgf: MGF;


// EXPORTS //

export = mgf;
