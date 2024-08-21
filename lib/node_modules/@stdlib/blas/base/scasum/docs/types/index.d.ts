/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Interface describing `scasum`.
*/
interface Routine {
	/**
	* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideX - `cx` stride length
	* @returns out
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
	*
	* var out = scasum( 5, cx, 1 );
	* // returns ~6.9
	*/
	( N: number, cx: Complex64Array, strideX: number ): number;

	/**
	* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideX - `cx` stride length
	* @param offsetX - starting index for `cx`
	* @returns out
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
	*
	* var out = scasum.ndarray( 5, cx, 1, 0 );
	* // returns ~6.9
	*/
	ndarray( N: number, cx: Complex64Array, strideX: number, offsetX: number ): number;
}

/**
* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
*
* @param N - number of indexed elements
* @param cx - input array
* @param strideX - `cx` stride length
* @returns out
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
*
* var out = scasum( 4, cx, 2 );
* // returns ~1.6
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
*
* var out = scasum.ndarray( 4, cx, 2, 0 );
* // returns ~1.6
*/
declare var scasum: Routine;


// EXPORTS //

export = scasum;
