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
import { Complex128 } from '@stdlib/types/complex';

/**
* Interface describing `zaxpy`.
*/
interface Routine {
	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant and adds the result to a double-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param za - scalar constant
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @returns second input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var za = new Complex128( 2.0, 2.0 );
	*
	* zaxpy( zx.length, za, zx, 1, zy, 1 );
	* // zy => <Complex128Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
	*/
	( N: number, za: Complex128, zx: Complex128Array, strideX: number, zy: Complex128Array, strideY: number ): Complex128Array;

	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant and adds the result to a double-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param za - scalar constant
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param offsetX - starting index for `zx`
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @param offsetY - starting index for `zy`
	* @returns second input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var za = new Complex128( 2.0, 2.0 );
	*
	* zaxpy.ndarray( zx.length, za, zx, 1, 0, zy, 1, 0 );
	* // zy => <Complex128Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
	*/
	ndarray( N: number, za: Complex128, zx: Complex128Array, strideX: number, offsetX: number, zy: Complex128Array, strideY: number, offsetY: number ): Complex128Array;
}

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant and adds the result to a double-precision complex floating-point vector.
*
* @param N - number of indexed elements
* @param za - scalar constant
* @param zx - first input array
* @param strideX - `zx` stride length
* @param zy - second input array
* @param strideY - `zy` stride length
* @returns second input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var za = new Complex128( 2.0, 2.0 );
*
* zaxpy( 2, za, zx, 2, zy, 2 );
* // zy => <Complex128Array>[ -1.0, 7.0, 1.0, 1.0, -1.0, 23.0, 1.0, 1.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var za = new Complex128( 2.0, 2.0 );
*
* zaxpy.ndarray( 3, za, zx, 1, 1, zy, 1, 1 );
* // zy => <Complex128Array>[ 1.0, 1.0, -1.0, 15.0, -1.0, 23.0, -1.0, 31.0 ]
*/
declare var zaxpy: Routine;


// EXPORTS //

export = zaxpy;
