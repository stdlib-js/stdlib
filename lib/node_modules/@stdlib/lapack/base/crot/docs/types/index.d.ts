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

import { Complex64Array } from '@stdlib/types/array';
import { Complex64 } from '@stdlib/types/complex';

/**
* Interface describing `crot`.
*/
interface Routine {
	/**
	* Applies a plane rotation with real cosine and complex sine.
	*
	* @param N - number of indexed elements
	* @param cx - first input array
	* @param strideCX - `cx` stride length
	* @param cy - second input array
	* @param strideCY - `cy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `cy`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var s = new Complex64( 0.3, 0.4 );
	*
	* crot( cx.length, cx, 1, cy, 1, 0.8, s );
	*
	* var z = cy.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns ~-1.1
	*
	* var im = imagf( z );
	* // returns ~-0.2
	*
	* z = cx.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns ~0.8
	*
	* im = imagf( z );
	* // returns ~1.6
	*/
	( N: number, cx: Complex64Array, strideCX: number, cy: Complex64Array, strideCY: number, c: number, s: Complex64 ): Complex64Array;

	/**
	* Applies a plane rotation with real cosine and complex sine using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param cx - first input array
	* @param strideCX - `cx` stride length
	* @param offsetCX - starting index for `cx`
	* @param cy - second input array
	* @param strideCY - `cy` stride length
	* @param offsetCY - starting index for `cy`
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `cy`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	* var s = new Complex64( 0.3, 0.4 );
	*
	* crot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, s );
	*
	* var z = cy.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns ~-1.1
	*
	* var im = imagf( z );
	* // returns ~-0.2
	*
	* z = cx.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns ~0.8
	*
	* im = imagf( z );
	* // returns ~1.6
	*/
	ndarray( N: number, cx: Complex64Array, strideCX: number, offsetCX: number, cy: Complex64Array, strideCY: number, offsetCY: number, c: number, s: Complex64 ): Complex64Array;
}

/**
* Applies a plane rotation with real cosine and complex sine.
*
* @param N - number of indexed elements
* @param cx - first input array
* @param strideCX - `cx` stride length
* @param cy - second input array
* @param strideCY - `cy` stride length
* @param c - cosine of the angle of rotation
* @param s - sine of the angle of rotation
* @returns `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex64( 0.3, 0.4 );
*
* crot( 2, cx, 2, cy, 1, 0.8, s );
*
* var z = cy.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns ~-1.1
*
* var im = imagf( z );
* // returns ~-0.2
*
* z = cx.get( 0 );
* // returns <Complex64>
*
* re = realf( z );
* // returns ~0.8
*
* im = imagf( z );
* // returns ~1.6
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex64( 0.3, 0.4 );
*
* crot.ndarray( 2, cx, 2, 0, cy, 1, 0, 0.8, s );
*
* var z = cy.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns ~-1.1
*
* var im = imagf( z );
* // returns ~-0.2
*
* z = cx.get( 0 );
* // returns <Complex64>
*
* re = realf( z );
* // returns ~0.8
*
* im = imagf( z );
* // returns ~1.6
*/
declare var crot: Routine;


// EXPORTS //

export = crot;
