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

/**
* Interface describing `zdscal`.
*/
interface Routine {
	/**
	* Scales a double-precision complex floating-point vector by a double-precision floating-point constant.
	*
	* @param N - number of indexed elements
	* @param za - scalar constant
	* @param zx - input array
	* @param strideZX - `zx` stride length
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* zdscal( 3, 2.0, zx, 1 );
	*
	* var z = zx.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 2.0
	*
	* var im = imag( z );
	* // returns 4.0
	*/
	( N: number, da: number, zx: Complex128Array, strideZX: number ): Complex128Array;

	/**
	* Scales a double-precision complex floating-point vector by a double-precision floating-point constant.
	*
	* @param N - number of indexed elements
	* @param da - scalar constant
	* @param zx - input array
	* @param strideZX - `zx` stride length
	* @param offsetZX - starting index for `zx`
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* zdscal.ndarray( 3, 2.0, zx, 1, 0 );
	*
	* var z = zx.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 2.0
	*
	* var im = imag( z );
	* // returns 4.0
	*/
	ndarray( N: number, da: number, zx: Complex128Array, strideZX: number, offsetZX: number ): Complex128Array;
}

/**
* Scales a double-precision complex floating-point vector by a double-precision floating-point constant.
*
* @param N - number of indexed elements
* @param da - scalar constant
* @param zx - input array
* @param strideZX - `zx` stride length
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* zdscal( 3, 2.0, zx, 1 );
*
* var z = zx.get( 1 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 6.0
*
* var im = imag( z );
* // returns 8.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* zdscal.ndarray( 2, 2.0, zx, 1, 1 );
*
* var z = zx.get( 1 );
* // returns <Complex128>
*
* var re = real( z );
* // returns 10.0
*
* var im = imag( z );
* // returns 12.0
*/
declare var zdscal: Routine;


// EXPORTS //

export = zdscal;
