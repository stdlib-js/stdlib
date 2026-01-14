/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

/**
* Evaluates a normalized Hermite polynomial using single-precision floating-point arithmetic.
*
* @param x - value at which to evaluate a normalized Hermite polynomial
* @returns result
*/
type PolynomialFunction = ( x: number ) => number;

/**
* Interface for evaluating normalized Hermite polynomials.
*/
interface NormHermitePoly {
	/**
	* Evaluates a normalized Hermite polynomial using single-precision floating-point arithmetic.
	*
	* @param n - nonnegative polynomial degree
	* @param x - evaluation point
	* @returns function value
	*
	* @example
	* var v = normhermitepolyf( 1, 0.5 );
	* // returns 0.5
	*
	* @example
	* var v = normhermitepolyf( 0, 0.5 );
	* // returns 1.0
	*
	* @example
	* var v = normhermitepolyf( 2, 0.5 );
	* // returns -0.75
	*
	* @example
	* var v = normhermitepolyf( -1, 0.5 );
	* // returns NaN
	*/
	( n: number, x: number ): number;

	/**
	* Returns a function for evaluating a normalized Hermite polynomial using single-precision floating-point arithmetic.
	*
	* @param n - polynomial degree
	* @returns function for evaluating a normalized Hermite polynomial
	*
	* @example
	* var polyval = normhermitepolyf.factory( 2 );
	*
	* var v = polyval( 0.5 );
	* // returns -0.75
	*/
	factory( n: number ): PolynomialFunction;
}

/**
* Evaluates a normalized Hermite polynomial using single-precision floating-point arithmetic.
*
* @param n - nonnegative polynomial degree
* @param x - evaluation point
* @returns function value
*
* @example
* var v = normhermitepolyf( 1, 0.5 );
* // returns 0.5
*
* @example
* var polyval = normhermitepolyf.factory( 2 );
*
* var v = polyval( 0.5 );
* // returns -0.75
*/
declare var normhermitepolyf: NormHermitePoly;


// EXPORTS //

export = normhermitepolyf;
