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
* Evaluates a Lucas polynomial.
*
* @param x - value at which to evaluate a Lucas polynomial
* @returns result
*/
type EvaluationFunction = ( x: number ) => number;

/**
* Interface for evaluating Lucas polynomials.
*/
interface Lucaspoly {
	/**
	* Evaluates a Lucas polynomial.
	*
	* @param n - Lucas polynomial to evaluate
	* @param x - value at which to evaluate a Lucas polynomial
	* @returns result
	*
	* @example
	* var v = lucaspoly( 5, 1.0 );
	* // returns 11.0
	*/
	( n: number, x: number ): number;

	/**
	* Returns a function for evaluating a Lucas polynomial.
	*
	* @param n - Lucas polynomial to evaluate
	* @returns function for evaluating a Lucas polynomial
	*
	* @example
	* var polyval = lucaspoly.factory( 5 );
	*
	* var v = polyval( 1.0 );
	* // returns 11.0
	*
	* v = polyval( 2.0 );
	* // returns 82.0
	*/
	factory( n: number ): EvaluationFunction;
}

/**
* Evaluates a Lucas polynomial.
*
* @param n - Lucas polynomial to evaluate
* @param x - value at which to evaluate a Lucas polynomial
* @returns result
*
* @example
* var v = lucaspoly( 5, 1.0 );
* // returns 11.0
*
* @example
* var polyval = lucaspoly.factory( 5 );
*
* var v = polyval( 1.0 );
* // returns 11.0
*
* v = polyval( 2.0 );
* // returns 82.0
*/
declare var lucaspoly: Lucaspoly;


// EXPORTS //

export = lucaspoly;
