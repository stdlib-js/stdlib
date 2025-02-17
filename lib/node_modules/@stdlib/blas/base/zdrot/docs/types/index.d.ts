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
* Interface describing `zdrot`.
*/
interface Routine {
	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `zy`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* zdrot( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
	* // zx => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
	* // zy => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
	*/
	( N: number, zx: Complex128Array, strideX: number, zy: Complex128Array, strideY: number, c: number, s: number ): Complex128Array;

	/**
	* Applies a plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param offsetX - starting index for `zx`
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @param offsetY - starting index for `zy`
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `zy`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
	* // zx => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
	* // zy => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
	*/
	ndarray( N: number, zx: Complex128Array, strideX: number, offsetX: number, zy: Complex128Array, strideY: number, offsetY: number, c: number, s: number ): Complex128Array;
}

/**
* Applies a plane rotation.
*
* @param N - number of indexed elements
* @param zx - first input array
* @param strideX - `zx` stride length
* @param zy - second input array
* @param strideY - `zy` stride length
* @param c - cosine of the angle of rotation
* @param s - sine of the angle of rotation
* @returns `zy`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zdrot( 2, zx, 2, zy, 1, 0.8, 0.6 );
* // zx => <Complex128Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
* // zy => <Complex128Array>[ ~-0.6, ~-1.2, -3.0, ~-3.6, 0.0, 0.0, 0.0, 0.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zdrot.ndarray( 2, zx, 2, 0, zy, 1, 0, 0.8, 0.6 );
* // zx => <Complex128Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
* // zy => <Complex128Array>[ ~-0.6, ~-1.2, -3.0, ~-3.6, 0.0, 0.0, 0.0, 0.0 ]
*/
declare var zdrot: Routine;


// EXPORTS //

export = zdrot;
