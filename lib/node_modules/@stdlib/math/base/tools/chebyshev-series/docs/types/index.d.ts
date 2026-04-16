/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import { Collection } from '@stdlib/types/array';

/**
* Evaluates a Chebyshev series using double-precision floating-point arithmetic.
*
* @param x - value at which to evaluate a Chebyshev series
* @returns evaluated Chebyshev series
*/
type ChebyshevSeriesFunction = ( x: number ) => number;

/**
* Interface for evaluating Chebyshev series.
*/
interface ChebyshevSeries {
	/**
	* Evaluates a Chebyshev series using double-precision floating-point arithmetic.
	*
	* ## Notes
	*
	* -   The implementation uses [Clenshaw's recurrence algorithm][clenshaw].
	* -   The function evaluates Chebyshev polynomials at `x/2`.
	*
	* [clenshaw]: https://en.wikipedia.org/wiki/Clenshaw_algorithm
	*
	* @param x - value at which to evaluate the Chebyshev series (expected to be in `[-2, 2]`)
	* @param c - Chebyshev series coefficients ordered in descending degree
	* @returns evaluated Chebyshev series
	*
	* @example
	* var v = chebyshevSeries( 1.0, [ 1.0, 0.5 ] ); // 1*T_0(1/2) + 0.5*T_1(1/2)
	* // returns 0.75
	*/
	( x: number, c: Collection<number> ): number;

	/**
	* Generates a function for evaluating a Chebyshev series using double-precision floating-point arithmetic.
	*
	* ## Notes
	*
	* -   The compiled function uses [Clenshaw's recurrence algorithm][clenshaw].
	* -   The function evaluates Chebyshev polynomials at `x/2`.
	*
	* [clenshaw]: https://en.wikipedia.org/wiki/Clenshaw_algorithm
	*
	* @param c - Chebyshev series coefficients ordered in descending degree
	* @returns function for evaluating a Chebyshev series
	*
	* @example
	* var evaluate = chebyshevSeries.factory( [ 1.0, 0.5 ] );
	*
	* var v = evaluate( 1.0 );
	* // returns 0.75
	*/
	factory( c: Collection<number> ): ChebyshevSeriesFunction;
}

/**
* Evaluates a Chebyshev series using double-precision floating-point arithmetic.
*
* ## Notes
*
* -   The implementation uses [Clenshaw's recurrence algorithm][clenshaw].
* -   The function evaluates Chebyshev polynomials at `x/2`.
*
* [clenshaw]: https://en.wikipedia.org/wiki/Clenshaw_algorithm
*
* @param x - value at which to evaluate the Chebyshev series (expected to be in `[-2, 2]`)
* @param c - Chebyshev series coefficients ordered in descending degree
* @returns evaluated Chebyshev series
*
* @example
* var v = chebyshevSeries( 1.0, [ 1.0, 0.5 ] ); // 1*T_0(1/2) + 0.5*T_1(1/2)
* // returns 0.75
*
* @example
* var evaluate = chebyshevSeries.factory( [ 1.0, 0.5 ] ); // 1*T_0(1/2) + 0.5*T_1(1/2)
*
* var v = evaluate( 1.0 );
* // returns 0.75
*/
declare var chebyshevSeries: ChebyshevSeries;


// EXPORTS //

export = chebyshevSeries;
