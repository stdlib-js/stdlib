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
* Interface describing `cxmy`.
*/
interface Routine {
	/**
	* Multiplies elements of a single-precision complex floating-point strided array `x` by the corresponding elements of a single-precision complex floating-point strided array `y` and assigns the results to `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	*
	* cxmy( x.length, x, 1, y, 1 );
	* // y => <Complex64Array>[ -4.0, 7.0, -8.0, 31.0, -12.0, 71.0 ]
	*/
	( N: number, x: Complex64Array, strideX: number, y: Complex64Array, strideY: number ): Complex64Array;

	/**
	* Multiplies elements of a single-precision complex floating-point strided array `x` by the corresponding elements of a single-precision complex floating-point strided array `y` and assigns the results to `y` using alternative indexing semantics.
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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	*
	* cxmy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Complex64Array>[ -4.0, 7.0, -8.0, 31.0, -12.0, 71.0 ]
	*/
	ndarray( N: number, x: Complex64Array, strideX: number, offsetX: number, y: Complex64Array, strideY: number, offsetY: number ): Complex64Array;
}

/**
* Multiplies elements of a single-precision complex floating-point strided array `x` by the corresponding elements of a single-precision complex floating-point strided array `y` and assigns the results to `y`.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - output array
* @param strideY - `y` stride length
* @returns output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
*
* cxmy( x.length, x, 1, y, 1 );
* // y => <Complex64Array>[ -4.0, 7.0, -8.0, 31.0, -12.0, 71.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
*
* cxmy.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Complex64Array>[ -4.0, 7.0, -8.0, 31.0, -12.0, 71.0 ]
*/
declare var cxmy: Routine;


// EXPORTS //

export = cxmy;
