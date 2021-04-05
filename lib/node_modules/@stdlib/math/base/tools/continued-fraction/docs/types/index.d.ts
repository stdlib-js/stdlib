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
* Interface defining function options.
*/
interface Options {
	/**
	* Maximum number of iterations (default: 1000).
	*/
	maxIter?: number;

	/**
	* Further terms are only added as long as the next term is greater than current term times the tolerance (default: 2.22e-16).
	*/
	tolerance?: number;

	/**
	* Boolean indicating whether to keep the leading b term (default: false).
	*/
	keep?: boolean;
}

/**
* Evaluates the continued fraction approximation for the supplied series generator using the modified Lentz algorithm.
*
* ## References
*
* -   Lentz, William J. 1976. "Generating bessel functions in Mie scattering calculations using continued fractions." _Applied Optics_ 15 (3): 668–71. doi:[10.1364/AO.15.000668](https://doi.org/10.1364/AO.15.000668).
*
* @param generator - function returning terms of continued fraction expansion
* @param options - function options
* @param options.maxIter - maximum number of iterations (default: 1000)
* @param options.tolerance - further terms are only added as long as the next term is greater than current term times the tolerance (default: 2.22e-16)
* @param options.keep - whether to keep the leading b term (default: false)
* @returns value of continued fraction
*
* @example
* // Continued fraction for (e-1)^(-1):
* var gen = generator();
* var out = continuedFraction( gen );
* // returns ~0.582
*
* function* generator() {
*    var i = 0;
*    while ( true ) {
*        i++;
*        yield [ i, i ];
*    }
* }
*/
declare function continuedFraction( generator: Function, options?: Options ): number; // tslint:disable-line:max-line-length


// EXPORTS //

export = continuedFraction;
