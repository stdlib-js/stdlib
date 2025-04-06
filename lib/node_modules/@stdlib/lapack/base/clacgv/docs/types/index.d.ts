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

/**
* Interface describing `clacgv`.
*/
interface Routine {
	/**
	* Conjugates each element in a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideCX - `cx` stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* clacgv( 3, cx, 1 );
	*
	* var z = cx.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns -2.0
	*/
	( N: number, cx: Complex64Array, strideCX: number ): Complex64Array;

	/**
	* Conjugates each element in a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideCX - `cx` stride length
	* @param offsetCX - starting index for `cx`
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* clacgv.ndarray( 3, cx, 1, 0 );
	*
	* var z = cx.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns -2.0
	*/
	ndarray( N: number, cx: Complex64Array, strideCX: number, offsetCX: number ): Complex64Array;
}

/**
* Conjugates each element in a single-precision complex floating-point vector.
*
* @param N - number of indexed elements
* @param cx - input array
* @param strideCX - `cx` stride length
* @returns input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* clacgv( 3, cx, 1 );
*
* var z = cx.get( 1 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns -4.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* clacgv.ndarray( 2, cx, 1, 1 );
*
* var z = cx.get( 1 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns 3.0
*
* var im = imagf( z );
* // returns -4.0
*/
declare var clacgv: Routine;


// EXPORTS //

export = clacgv;
