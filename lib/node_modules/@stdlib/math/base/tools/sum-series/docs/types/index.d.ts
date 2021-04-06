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
	* Maximum number of terms to be added (default: 1000000).
	*/
	maxTerms?: number;

	/**
	* Further terms are only added as long as the next term is greater than current term times the tolerance (default: 2.22e-16).
	*/
	tolerance?: number;

	/**
	* Initial value of the resulting sum (default: 0).
	*/
	initialValue?: number;
}

/**
* Sum the elements of the series given by the supplied function.
*
* @param generator - series function
* @param options - function options
* @param options.maxTerms - maximum number of terms to be added (default: 1000000)
* @param options.tolerance - further terms are only added as long as the next term is greater than current term times the tolerance (default: 2.22e-16)
* @param options.initialValue - initial value of the resulting sum (default: 0)
* @returns sum of all series terms
*
* @example
* var pow = require( `@stdlib/math/base/special/pow` );
* var gen = geometricSeriesGenerator( 0.9 );
* var out = sumSeries( gen );
* // returns 10.0
*
* function* geometricSeriesGenerator( x ) {
*     var exponent = 0;
*     while ( true ) {
*         yield pow( x, exponent );
*         exponent += 1;
*     }
* }
*/
declare function sumSeries( generator: Function, options?: Options ): number;


// EXPORTS //

export = sumSeries;
