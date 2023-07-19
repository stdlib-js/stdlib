/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/**
* Evaluates a normalized Hermite polynomial.
*
* @param x - value at which to evaluate a normalized Hermite polynomial
* @returns result
*/
type EvaluationFunction = ( x: number ) => number;

/**
* Interface for evaluating normalized Hermite polynomials.
*/
interface NormHermitePoly {
	/**
	* Evaluates a normalized Hermite polynomial.
	*
	* @param n - nonnegative polynomial degree
	* @param x - evaluation point
	* @returns function value
	*
	* @example
	* var v = normhermitepoly( 1, 0.5 );
	* // returns 0.5
	*
	* @example
	* var v = normhermitepoly( 0, 0.5 );
	* // returns 1.0
	*
	* @example
	* var v = normhermitepoly( 2, 0.5 );
	* // returns -0.75
	*
	* @example
	* var v = normhermitepoly( -1, 0.5 );
	* // returns NaN
	*/
	( n: number, x: number ): number;

	/**
	* Returns a function for evaluating a normalized Hermite polynomial.
	*
	* @param n - polynomial degree
	* @returns function for evaluating a normalized Hermite polynomial
	*
	* @example
	* var polyval = normhermitepoly.factory( 2 );
	*
	* var v = polyval( 0.5 );
	* // returns -0.75
	*/
	factory( n: number ): EvaluationFunction;
}

/**
* Evaluates a normalized Hermite polynomial.
*
* @param n - nonnegative polynomial degree
* @param x - evaluation point
* @returns function value
*
* @example
* var v = normhermitepoly( 1, 0.5 );
* // returns 0.5
*
* @example
* var polyval = normhermitepoly.factory( 2 );
*
* var v = polyval( 0.5 );
* // returns -0.75
*/
declare var normhermitepoly: NormHermitePoly;


// EXPORTS //

export = normhermitepoly;
