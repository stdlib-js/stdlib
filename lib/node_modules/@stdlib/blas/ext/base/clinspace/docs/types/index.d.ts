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

import { Complex64Array } from '@stdlib/types/array';
import { Complex64 } from '@stdlib/types/complex';

/**
* Interface describing `clinspace`.
*/
interface Routine {
	/**
	* Fills a single-precision complex floating-point strided array with linearly spaced values over a specified interval.
	*
	* @param N - number of indexed elements
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var strt = new Complex64( 0.0, 0.0 );
	* var stp = new Complex64( 4.0, 2.0 );
	*
	* clinspace( x.length, strt, stp, true, x, 1 );
	* // x => <Complex64Array>[ 0.0, 0.0, 2.0, 1.0, 4.0, 2.0 ]
	*/
	( N: number, start: Complex64, stop: Complex64, endpoint: boolean, x: Complex64Array, strideX: number ): Complex64Array;

	/**
	* Fills a single-precision complex floating-point strided array with linearly spaced values over a specified interval using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var strt = new Complex64( 0.0, 0.0 );
	* var stp = new Complex64( 4.0, 2.0 );
	*
	* clinspace.ndarray( x.length, strt, stp, true, x, 1, 0 );
	* // x => <Complex64Array>[ 0.0, 0.0, 2.0, 1.0, 4.0, 2.0 ]
	*/
	ndarray( N: number, start: Complex64, stop: Complex64, endpoint: boolean, x: Complex64Array, strideX: number, offsetX: number ): Complex64Array;
}

/**
* Fills a single-precision complex floating-point strided array with linearly spaced values over a specified interval.
*
* @param N - number of indexed elements
* @param start - start of interval
* @param stop - end of interval
* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 4.0, 2.0 );
*
* clinspace( x.length, strt, stp, true, x, 1 );
* // x => <Complex64Array>[ 0.0, 0.0, 2.0, 1.0, 4.0, 2.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 6.0, 3.0 );
*
* clinspace( x.length, strt, stp, false, x, 1 );
* // x => <Complex64Array>[ 0.0, 0.0, 2.0, 1.0, 4.0, 2.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 4.0, 2.0 );
*
* clinspace.ndarray( x.length, strt, stp, true, x, 1, 0 );
* // x => <Complex64Array>[ 0.0, 0.0, 2.0, 1.0, 4.0, 2.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var strt = new Complex64( 0.0, 0.0 );
* var stp = new Complex64( 6.0, 3.0 );
*
* clinspace.ndarray( x.length, strt, stp, false, x, 1, 0 );
* // x => <Complex64Array>[ 0.0, 0.0, 2.0, 1.0, 4.0, 2.0 ]
*/
declare var clinspace: Routine;


// EXPORTS //

export = clinspace;
