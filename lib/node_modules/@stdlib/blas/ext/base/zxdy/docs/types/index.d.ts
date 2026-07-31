/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Interface describing `zxdy`.
*/
interface Routine {
	/**
	* Divides elements of a double-precision complex floating-point strided array `x` by the corresponding elements of a double-precision complex floating-point strided array `y` and assigns the results to `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 ] );
	* var y = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );
	*
	* zxdy( x.length, x, 1, y, 1 );
	* // y => <Complex128Array>[ 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
	*/
	( N: number, x: Complex128Array, strideX: number, y: Complex128Array, strideY: number ): Complex128Array;

	/**
	* Divides elements of a double-precision complex floating-point strided array `x` by the corresponding elements of a double-precision complex floating-point strided array `y` and assigns the results to `y` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting `x` index
	* @param y - output array
	* @param strideY - `y` stride length
	* @param offsetY - starting `y` index
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 ] );
	* var y = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );
	*
	* zxdy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Complex128Array>[ 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
	*/
	ndarray( N: number, x: Complex128Array, strideX: number, offsetX: number, y: Complex128Array, strideY: number, offsetY: number ): Complex128Array;
}

/**
* Divides elements of a double-precision complex floating-point strided array `x` by the corresponding elements of a double-precision complex floating-point strided array `y` and assigns the results to `y`.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - output array
* @param strideY - `y` stride length
* @returns output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 ] );
* var y = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );
*
* zxdy( x.length, x, 1, y, 1 );
* // y => <Complex128Array>[ 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 4.0, 6.0, 12.0, 8.0, 16.0, 8.0 ] );
* var y = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 4.0, 4.0 ] );
*
* zxdy.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Complex128Array>[ 5.0, 1.0, 5.0, -1.0, 3.0, -1.0 ]
*/
declare var zxdy: Routine;


// EXPORTS //

export = zxdy;
