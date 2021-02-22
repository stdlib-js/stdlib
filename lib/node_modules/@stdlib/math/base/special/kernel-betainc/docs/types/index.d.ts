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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

/**
* Interface describing `kernalBetaInc`.
*/
interface Routine {
	/**
	* Evaluates the incomplete beta function and its first derivative.
	*
	* ## Notes
	*
	* -   The `regularized` and `upper` parameters specify whether to evaluate the non-regularized and/or upper incomplete beta functions, respectively.
	* -   If provided `x < 0` or `x > 1`, the function returns `[ NaN, NaN ]`.
	* -   If provided `a < 0` or `b < 0`, the function returns `[ NaN, NaN ]`.
	*
	* @param x - function input
	* @param a - function parameter
	* @param b - function parameter
	* @param invert - boolean indicating if the function should return the upper tail of the incomplete beta function instead
	* @param normalized - boolean indicating if the function should evaluate the regularized boolean beta function
	* @returns function value and first derivative
	*
	* @example
	* var out = kernelBetainc( 0.5, 2.0, 2.0, false, false );
	* // returns [ ~0.083, ~1.5 ]
	*
	* @example
	* var out = kernelBetainc( 0.2, 1.0, 2.0, true, false );
	* // returns [ 0.36, 1.6 ]
	*/
	( x: number, a: number, b: number, invert: boolean, normalized: boolean ): Collection; // tslint-disable-line max-line-length

	/**
	* Evaluates the incomplete beta function and its first derivative and assigns results to a provided output array.
	*
	* ## Notes
	*
	* -   The `regularized` and `upper` parameters specify whether to evaluate the non-regularized and/or upper incomplete beta functions, respectively.
	* -   If provided `x < 0` or `x > 1`, the function returns `[ NaN, NaN ]`.
	* -   If provided `a < 0` or `b < 0`, the function returns `[ NaN, NaN ]`.
	*
	* @param x - function input
	* @param a - function parameter
	* @param b - function parameter
	* @param invert - boolean indicating if the function should return the upper tail of the incomplete beta function instead
	* @param normalized - boolean indicating if the function should evaluate the regularized boolean beta function
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns function value and first derivative
	*
	* @example
	* var arr = [ 0.0, 0.0 ];
	* var out = kernelBetainc.assign( 0.2, 1.0, 2.0, true, true, arr, 1, 0 );
	* // returns [ 0.64, 1.6 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign( x: number, a: number, b: number, invert: boolean, normalized: boolean, out: Collection, stride: number, offset: number ): Collection; // tslint-disable-line max-line-length
}

/**
* Evaluates the incomplete beta function and its first derivative.
*
* ## Notes
*
* -   The `regularized` and `upper` parameters specify whether to evaluate the non-regularized and/or upper incomplete beta functions, respectively.
* -   If provided `x < 0` or `x > 1`, the function returns `[ NaN, NaN ]`.
* -   If provided `a < 0` or `b < 0`, the function returns `[ NaN, NaN ]`.
*
* @param x - function input
* @param a - function parameter
* @param b - function parameter
* @param invert - boolean indicating if the function should return the upper tail of the incomplete beta function instead
* @param normalized - boolean indicating if the function should evaluate the regularized boolean beta function
* @returns function value and first derivative
*
* @example
* var out = kernelBetainc( 0.5, 2.0, 2.0, false, false );
* // returns [ ~0.083, ~1.5 ]
*
* @example
* var out = kernelBetainc( 0.2, 1.0, 2.0, true, false );
* // returns [ 0.36, 1.6 ]
*
* @example
* var arr = [ 0.0, 0.0 ];
* var out = kernelBetainc.assign( 0.2, 1.0, 2.0, true, true, arr, 1, 0 );
* // returns [ 0.64, 1.6 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare var kernelBetainc: Routine;


// EXPORTS //

export = kernelBetainc;
