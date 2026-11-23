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

import { Complex128Array } from '@stdlib/types/array';
import { Complex128 } from '@stdlib/types/complex';

/**
* Interface describing `zlogspace`.
*/
interface Routine {
	/**
	* Fills a double-precision complex floating-point strided array with logarithmically spaced values over a specified interval.
	*
	* @param N - number of indexed elements
	* @param base - base of the logarithmic scale
	* @param start - exponent of the starting value
	* @param stop - exponent of the final value
	* @param endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var strt = new Complex128( 0.0, 0.0 );
	* var stp = new Complex128( 2.0, 0.0 );
	*
	* zlogspace( x.length, 10.0, strt, stp, true, x, 1 );
	* // x => <Complex128Array>[ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0 ]
	*/
	( N: number, base: number, start: Complex128, stop: Complex128, endpoint: boolean, x: Complex128Array, strideX: number ): Complex128Array;

	/**
	* Fills a double-precision complex floating-point strided array with logarithmically spaced values over a specified interval using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param base - base of the logarithmic scale
	* @param start - exponent of the starting value
	* @param stop - exponent of the final value
	* @param endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var strt = new Complex128( 0.0, 0.0 );
	* var stp = new Complex128( 2.0, 0.0 );
	*
	* zlogspace.ndarray( x.length, 10.0, strt, stp, true, x, 1, 0 );
	* // x => <Complex128Array>[ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0 ]
	*/
	ndarray( N: number, base: number, start: Complex128, stop: Complex128, endpoint: boolean, x: Complex128Array, strideX: number, offsetX: number ): Complex128Array;
}

/**
* Fills a double-precision complex floating-point strided array with logarithmically spaced values over a specified interval.
*
* @param N - number of indexed elements
* @param base - base of the logarithmic scale
* @param start - exponent of the starting value
* @param stop - exponent of the final value
* @param endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex128( 0.0, 0.0 );
* var stp = new Complex128( 2.0, 0.0 );
*
* zlogspace( x.length, 10.0, strt, stp, true, x, 1 );
* // x => <Complex128Array>[ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex128( 0.0, 0.0 );
* var stp = new Complex128( 2.0, 0.0 );
*
* zlogspace( x.length, 10.0, strt, stp, false, x, 1 );
* // x => <Complex128Array>[ 1.0, 0.0, 10.0, 0.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex128( 0.0, 0.0 );
* var stp = new Complex128( 2.0, 0.0 );
*
* zlogspace.ndarray( x.length, 10.0, strt, stp, true, x, 1, 0 );
* // x => <Complex128Array>[ 1.0, 0.0, 10.0, 0.0, 100.0, 0.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex128( 0.0, 0.0 );
* var stp = new Complex128( 2.0, 0.0 );
*
* zlogspace.ndarray( x.length, 10.0, strt, stp, false, x, 1, 0 );
* // x => <Complex128Array>[ 1.0, 0.0, 10.0, 0.0 ]
*/
declare var zlogspace: Routine;


// EXPORTS //

export = zlogspace;
