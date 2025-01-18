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
* Interface describing `zrot`.
*/
interface Routine {
	/**
	* Applies a plane rotation with real cosine and complex sine.
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
	* var Complex128 = require( '@stdlib/complex/float64' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var s = new Complex128( 0.3, 0.4 );
	*
	* zrot( zx.length, zx, 1, zy, 1, 0.8, s );
	*
	* var z = zy.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns ~-1.1
	*
	* var im = imag( z );
	* // returns ~-0.2
	*
	* z = zx.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns ~0.8
	*
	* im = imag( z );
	* // returns ~1.6
	*/
	( N: number, zx: Complex128Array, strideX: number, zy: Complex128Array, strideY: number, c: number, s: Complex128 ): Complex128Array;

	/**
	* Applies a plane rotation with real cosine and complex sine using alternative indexing semantics.
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
	* var Complex128 = require( '@stdlib/complex/float64' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var s = new Complex128( 0.3, 0.4 );
	*
	* zrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, s );
	*
	* var z = zy.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns ~-1.1
	*
	* var im = imag( z );
	* // returns ~-0.2
	*
	* z = zx.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns ~0.8
	*
	* im = imag( z );
	* // returns ~1.6
	*/
	ndarray( N: number, zx: Complex128Array, strideX: number, offsetX: number, zy: Complex128Array, strideY: number, offsetY: number, c: number, s: Complex128 ): Complex128Array;
}

/**
* Applies a plane rotation with real cosine and complex sine.
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
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex128( 0.3, 0.4 );
*
* zrot( 2, zx, 2, zy, 1, 0.8, s );
*
* var z = zy.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns ~-1.1
*
* var im = imag( z );
* // returns ~-0.2
*
* z = zx.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns ~0.8
*
* im = imag( z );
* // returns ~1.6
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex128( 0.3, 0.4 );
*
* zrot.ndarray( 2, zx, 2, 0, zy, 1, 0, 0.8, s );
*
* var z = zy.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns ~-1.1
*
* var im = imag( z );
* // returns ~-0.2
*
* z = zx.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns ~0.8
*
* im = imag( z );
* // returns ~1.6
*/
declare var zrot: Routine;


// EXPORTS //

export = zrot;
