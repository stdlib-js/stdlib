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
* Interface describing `scnrm2`.
*/
interface Routine {
	/**
	* Computes the L2-norm of a complex single-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideX - stride length for `cx`
	* @returns L2-norm
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
	*
	* var norm = scnrm2( 4, cx, 1 );
	* // returns ~0.8
	*/
	( N: number, cx: Complex64Array, strideX: number ): number;

	/**
	* Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideX - stride length for `cx`
	* @param offsetX - starting index for `cx`
	* @returns L2-norm
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
	*
	* var norm = scnrm2.ndarray( 4, cx, 1, 0 );
	* // returns ~0.8
	*/
	ndarray( N: number, cx: Complex64Array, strideX: number, offsetX: number ): number;
}

/**
* Computes the L2-norm of a complex single-precision floating-point vector.
*
* @param N - number of indexed elements
* @param cx - input array
* @param strideX - stride length for `cx`
* @returns L2-norm
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
*
* var norm = scnrm2( 4, cx, 2 );
* // returns ~0.8
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
*
* var norm = scnrm2.ndarray( 4, cx, 2, 0 );
* // returns ~0.8
*/
declare var scnrm2: Routine;


// EXPORTS //

export = scnrm2;
