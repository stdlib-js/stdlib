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
* Interface describing `csrot`.
*/
interface Routine {
	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param cx - first input array
	* @param strideX - `cx` stride length
	* @param cy - second input array
	* @param strideY - `cy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `cy`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* csrot( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
	* // cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
	* // cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
	*/
	( N: number, cx: Complex64Array, strideX: number, cy: Complex64Array, strideY: number, c: number, s: number ): Complex64Array;

	/**
	* Applies a plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param cx - first input array
	* @param strideX - `cx` stride length
	* @param offsetX - starting index for `cx`
	* @param cy - second input array
	* @param strideY - `cy` stride length
	* @param offsetY - starting index for `cy`
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `cy`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
	* // cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
	* // cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
	*/
	ndarray( N: number, cx: Complex64Array, strideX: number, offsetX: number, cy: Complex64Array, strideY: number, offsetY: number, c: number, s: number ): Complex64Array;
}

/**
* Applies a plane rotation.
*
* @param N - number of indexed elements
* @param cx - first input array
* @param strideX - `cx` stride length
* @param cy - second input array
* @param strideY - `cy` stride length
* @param c - cosine of the angle of rotation
* @param s - sine of the angle of rotation
* @returns `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* csrot( 2, cx, 2, cy, 1, 0.8, 0.6 );
* // cx => <Complex64Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
* // cy => <Complex64Array>[ ~-0.6, ~-1.2, -3.0, ~-3.6, 0.0, 0.0, 0.0, 0.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* csrot.ndarray( 2, cx, 2, 0, cy, 1, 0, 0.8, 0.6 );
* // cx => <Complex64Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
* // cy => <Complex64Array>[ ~-0.6, ~-1.2, -3.0, ~-3.6, 0.0, 0.0, 0.0, 0.0 ]
*/
declare var csrot: Routine;


// EXPORTS //

export = csrot;
