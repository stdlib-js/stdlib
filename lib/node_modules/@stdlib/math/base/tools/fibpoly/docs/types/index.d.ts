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
* Evaluates a Fibonacci polynomial.
*
* @param x - value at which to evaluate a Fibonacci polynomial
* @returns result
*/
type EvaluationFunction = ( x: number ) => number;

/**
* Interface for evaluating Fibonacci polynomials.
*/
interface Fibpoly {
	/**
	* Evaluates a Fibonacci polynomial.
	*
	* @param n - Fibonacci polynomial to evaluate
	* @param x - value at which to evaluate a Fibonacci polynomial
	* @returns result
	*
	* @example
	* var v = fibpoly( 5, 1.0 );
	* // returns 5.0
	*/
	( n: number, x: number ): number;

	/**
	* Returns a function for evaluating a Fibonacci polynomial.
	*
	* @param n - Fibonacci polynomial to evaluate
	* @returns function for evaluating a Fibonacci polynomial
	*
	* @example
	* var fibpolyval = fibpoly.factory( 5 );
	*
	* var v = fibpolyval( 1.0 );
	* // returns 5.0
	*
	* v = fibpolyval( 2.0 );
	* // returns 29.0
	*/
	factory( n: number ): EvaluationFunction;
}

/**
* Evaluates a Fibonacci polynomial.
*
* @param n - Fibonacci polynomial to evaluate
* @param x - value at which to evaluate a Fibonacci polynomial
* @returns result
*
* @example
* var v = fibpoly( 5, 1.0 );
* // returns 5.0
*
* @example
* var fibpolyval = fibpoly.factory( 5 );
*
* var v = fibpolyval( 1.0 );
* // returns 5.0
*
* v = fibpolyval( 2.0 );
* // returns 29.0
*/
declare var fibpoly: Fibpoly;


// EXPORTS //

export = fibpoly;
