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

import { Complex128Array } from '@stdlib/types/array';

/**
* Interface describing `dznrm2`.
*/
interface Routine {
	/**
	* Computes the L2-norm of a complex double-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param zx - input array
	* @param strideX - stride length for `zx`
	* @returns L2-norm
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var zx = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
	*
	* var norm = dznrm2( 4, zx, 1 );
	* // returns ~0.8
	*/
	( N: number, zx: Complex128Array, strideX: number ): number;

	/**
	* Computes the L2-norm of a complex double-precision floating-point vector using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param zx - input array
	* @param strideX - stride length for `zx`
	* @param offsetX - starting index for `zx`
	* @returns L2-norm
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var zx = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
	*
	* var norm = dznrm2.ndarray( 4, zx, 1, 0 );
	* // returns ~0.8
	*/
	ndarray( N: number, zx: Complex128Array, strideX: number, offsetX: number ): number;
}

/**
* Computes the L2-norm of a complex double-precision floating-point vector.
*
* @param N - number of indexed elements
* @param zx - input array
* @param strideX - stride length for `zx`
* @returns L2-norm
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 3.0, -4.0, 0.0, 0.0, 5.0, -6.0 ] );
*
* var norm = dznrm2( 2, zx, 2 );
* // returns ~9.3
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
*
* var norm = dznrm2.ndarray( 2, zx, 1, 1 );
* // returns ~9.3
*/
declare var dznrm2: Routine;


// EXPORTS //

export = dznrm2;
