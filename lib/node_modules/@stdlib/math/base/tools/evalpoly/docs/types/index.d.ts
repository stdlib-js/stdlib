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

/**
* Evaluates a polynomial.
*
* @param x - value at which to evaluate a polynomial
* @returns evaluated polynomial
*/
type EvaluationFunction = ( x: number ) => number;

/**
* Interface for evaluating polynomials.
*/
interface EvalPoly {
	/**
	* Evaluates a polynomial.
	*
	* ## Notes
	*
	* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
	*
	* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
	*
	*
	* @param c - polynomial coefficients sorted in ascending degree
	* @param x - value at which to evaluate the polynomial
	* @returns evaluated polynomial
	*
	* @example
	* var v = evalpoly( [3.0,2.0,1.0], 10.0 ); // 3*10^0 + 2*10^1 + 1*10^2
	* // returns 123.0
	*/
	( c: Array<number>, x: number ): number;

	/**
	* Generates a function for evaluating a polynomial.
	*
	* ## Notes
	*
	* -   The compiled function uses [Horner's rule][horners-method] for efficient computation.
	*
	* [horners-method]: http://en.wikipedia.org/wiki/Horner%27s_method
	*
	*
	* @param c - polynomial coefficients sorted in ascending degree
	* @returns function for evaluating a polynomial
	*
	* @example
	* var polyval = evalpoly.factory( [3.0,2.0,1.0] );
	*
	* var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
	* // returns 123.0
	*
	* v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
	* // returns 38.0
	*/
	factory( c: Array<number> ): EvaluationFunction;
}

/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
*
* @param c - polynomial coefficients sorted in ascending degree
* @param x - value at which to evaluate the polynomial
* @returns evaluated polynomial
*
* @example
* var v = evalpoly( [3.0,2.0,1.0], 10.0 ); // 3*10^0 + 2*10^1 + 1*10^2
* // returns 123.0
*
* @example
* var polyval = evalpoly.factory( [3.0,2.0,1.0] );
*
* var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
* // returns 123.0
*
* v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
* // returns 38.0
*/
declare var evalpoly: EvalPoly;


// EXPORTS //

export = evalpoly;
