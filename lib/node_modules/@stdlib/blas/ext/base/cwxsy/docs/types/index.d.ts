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

import { Complex64Array } from '@stdlib/types/array';

/**
* Interface describing `cwxsy`.
*/
interface Routine {
	/**
	* Subtracts elements of a single-precision complex floating-point strided array `y` from the corresponding elements of a single-precision complex floating-point strided array `x` and assigns the results to elements in a single-precision complex floating-point strided array `w`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param w - output array
	* @param strideW - `w` stride length
	* @returns output array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 1.0, 3.0, -2.0, 1.0, 3.0, 4.0 ] );
	* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* cwxsy( x.length, x, 1, y, 1, w, 1 );
	* // w => <Complex64Array>[ 0.0, -1.0, 5.0, 3.0, 2.0, 2.0 ]
	*/
	( N: number, x: Complex64Array, strideX: number, y: Complex64Array, strideY: number, w: Complex64Array, strideW: number ): Complex64Array;

	/**
	* Subtracts elements of a single-precision complex floating-point strided array `y` from the corresponding elements of a single-precision complex floating-point strided array `x` and assigns the results to elements in a single-precision complex floating-point strided array `w` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param w - output array
	* @param strideW - `w` stride length
	* @param offsetW - starting index for `w`
	* @returns output array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 1.0, 3.0, -2.0, 1.0, 3.0, 4.0 ] );
	* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* cwxsy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	* // w => <Complex64Array>[ 0.0, -1.0, 5.0, 3.0, 2.0, 2.0 ]
	*/
	ndarray( N: number, x: Complex64Array, strideX: number, offsetX: number, y: Complex64Array, strideY: number, offsetY: number, w: Complex64Array, strideW: number, offsetW: number ): Complex64Array;
}

/**
* Subtracts elements of a single-precision complex floating-point strided array `y` from the corresponding elements of a single-precision complex floating-point strided array `x` and assigns the results to elements in a single-precision complex floating-point strided array `w`.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @param w - output array
* @param strideW - `w` stride length
* @returns output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 1.0, 3.0, -2.0, 1.0, 3.0, 4.0 ] );
* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cwxsy( x.length, x, 1, y, 1, w, 1 );
* // w => <Complex64Array>[ 0.0, -1.0, 5.0, 3.0, 2.0, 2.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 1.0, 3.0, -2.0, 1.0, 3.0, 4.0 ] );
* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cwxsy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => <Complex64Array>[ 0.0, -1.0, 5.0, 3.0, 2.0, 2.0 ]
*/
declare var cwxsy: Routine;


// EXPORTS //

export = cwxsy;
