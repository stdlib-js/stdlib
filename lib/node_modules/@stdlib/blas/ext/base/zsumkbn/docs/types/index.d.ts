/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Interface describing `zsumkbn`.
*/
interface Routine {
	/**
	* Computes the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, -2.0, 2.0, 3.0 ] );
	*
	* var v = zsumkbn( x.length, x, 1 );
	* // returns <Complex128>[ 3.0, 1.0 ]
	*/
	( N: number, x: Complex128Array, strideX: number ): Complex128;

	/**
	* Computes the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm and alternative indexing semantics.
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
	* var x = new Complex128Array( [ 1.0, -2.0, 2.0, 3.0 ] );
	*
	* var v = zsumkbn.ndarray( x.length, x, 1, 0 );
	* // returns <Complex128>[ 3.0, 1.0 ]
	*/
	ndarray( N: number, x: Complex128Array, strideX: number, offsetX: number ): Complex128;
}

/**
* Computes the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns sum
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = zsumkbn( x.length, x, 1 );
* // returns <Complex128>[ 3.0, 1.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = zsumkbn.ndarray( x.length, x, 1, 0 );
* // returns <Complex128>[ 3.0, 1.0 ]
*/
declare var zsumkbn: Routine;


// EXPORTS //

export = zsumkbn;
