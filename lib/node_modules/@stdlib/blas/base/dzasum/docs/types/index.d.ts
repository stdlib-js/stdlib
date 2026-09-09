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

/**
* Interface describing `dzasum`.
*/
interface Routine {
	/**
	* Computes the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
	*
	* var out = dzasum( 5, x, 1 );
	* // returns ~6.6
	*/
	( N: number, x: Complex128Array, strideX: number ): number;

	/**
	* Computes the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns sum
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
	*
	* var out = dzasum.ndarray( 5, x, 1, 0 );
	* // returns ~6.6
	*/
	ndarray( N: number, x: Complex128Array, strideX: number, offsetX: number ): number;
}

/**
* Computes the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns out
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
*
* var out = dzasum( 4, x, 2 );
* // returns ~1.6
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
*
* var out = dzasum.ndarray( 4, x, 2, 0 );
* // returns ~1.6
*/
declare var dzasum: Routine;


// EXPORTS //

export = dzasum;
