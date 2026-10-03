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

/**
* Interface describing `czeroTo`.
*/
interface Routine {
	/**
	* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* czeroTo( x.length, x, 1 );
	* // x => <Complex64Array>[ 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ]
	*/
	( N: number, x: Complex64Array, strideX: number ): Complex64Array;

	/**
	* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* czeroTo.ndarray( x.length, x, 1, 0 );
	* // x => <Complex64Array>[ 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ]
	*/
	ndarray( N: number, x: Complex64Array, strideX: number, offsetX: number ): Complex64Array;
}

/**
* Fills a single-precision complex floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* czeroTo( x.length, x, 1 );
* // x => <Complex64Array>[ 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* czeroTo.ndarray( x.length, x, 1, 0 );
* // x => <Complex64Array>[ 0.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ]
*/
declare var czeroTo: Routine;


// EXPORTS //

export = czeroTo;
