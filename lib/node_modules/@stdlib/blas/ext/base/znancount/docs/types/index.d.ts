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
* Interface describing `znancount`.
*/
interface Routine {
	/**
	* Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns number of non-`NaN` elements
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, NaN, NaN, 3.0, 4.0 ] );
	*
	* var v = znancount( 3, x, 1 );
	* // returns 2
	*/
	( N: number, x: Complex128Array, strideX: number ): number;

	/**
	* Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns number of non-`NaN` elements
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, NaN, NaN, 3.0, 4.0 ] );
	*
	* var v = znancount.ndarray( 3, x, 1, 0 );
	* // returns 2
	*/
	ndarray( N: number, x: Complex128Array, strideX: number, offsetX: number ): number;
}

/**
* Computes the number of non-`NaN` elements in a double-precision complex floating-point strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns number of non-`NaN` elements
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, NaN, NaN, 3.0, 4.0 ] );
*
* var v = znancount( 3, x, 1 );
* // returns 2
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, NaN, NaN, 3.0, 4.0 ] );
*
* var v = znancount.ndarray( 3, x, 1, 0 );
* // returns 2
*/
declare var znancount: Routine;


// EXPORTS //

export = znancount;
