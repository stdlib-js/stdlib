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
import { Complex64 } from '@stdlib/types/complex';

/**
* Interface describing `caxpy`.
*/
interface Routine {
	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param ca - scalar constant
	* @param cx - first input array
	* @param strideX - `cx` stride length
	* @param cy - second input array
	* @param strideY - `cy` stride length
	* @returns second input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var ca = new Complex64( 2.0, 2.0 );
	*
	* caxpy( cx.length, ca, cx, 1, cy, 1 );
	* // cy => <Complex64Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
	*/
	( N: number, ca: Complex64, cx: Complex64Array, strideX: number, cy: Complex64Array, strideY: number ): Complex64Array;

	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param ca - scalar constant
	* @param cx - first input array
	* @param strideX - `cx` stride length
	* @param offsetX - starting index for `cx`
	* @param cy - second input array
	* @param strideY - `cy` stride length
	* @param offsetY - starting index for `cy`
	* @returns second input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var ca = new Complex64( 2.0, 2.0 );
	*
	* caxpy.ndarray( cx.length, ca, cx, 1, 0, cy, 1, 0 );
	* // cy => <Complex64Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
	*/
	ndarray( N: number, ca: Complex64, cx: Complex64Array, strideX: number, offsetX: number, cy: Complex64Array, strideY: number, offsetY: number ): Complex64Array;
}

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector.
*
* @param N - number of indexed elements
* @param ca - scalar constant
* @param cx - first input array
* @param strideX - `cx` stride length
* @param cy - second input array
* @param strideY - `cy` stride length
* @returns second input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var ca = new Complex64( 2.0, 2.0 );
*
* caxpy( 2, ca, cx, 2, cy, 2 );
* // cy => <Complex64Array>[ -1.0, 7.0, 1.0, 1.0, -1.0, 23.0, 1.0, 1.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var ca = new Complex64( 2.0, 2.0 );
*
* caxpy.ndarray( 3, ca, cx, 1, 1, cy, 1, 1 );
* // cy => <Complex64Array>[ 1.0, 1.0, -1.0, 15.0, -1.0, 23.0, -1.0, 31.0 ]
*/
declare var caxpy: Routine;


// EXPORTS //

export = caxpy;
