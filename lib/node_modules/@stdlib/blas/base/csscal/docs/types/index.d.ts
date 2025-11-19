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
* Interface describing `csscal`.
*/
interface Routine {
	/**
	* Scales a single-precision complex floating-point vector by a single-precision floating-point constant.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* csscal( 3, 2.0, x, 1 );
	* // x => <Complex64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
	*/
	( N: number, alpha: number, x: Complex64Array, strideX: number ): Complex64Array;

	/**
	* Scales a single-precision complex floating-point vector by a single-precision floating-point constant.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* csscal.ndarray( 3, 2.0, x, 1, 0 );
	* // x => <Complex64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
	*/
	ndarray( N: number, alpha: number, x: Complex64Array, strideX: number, offsetX: number ): Complex64Array;
}

/**
* Scales a single-precision complex floating-point vector by a single-precision floating-point constant.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - `x` stride length
* @returns input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* csscal( 3, 2.0, x, 1 );
* // x => <Complex64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* csscal.ndarray( 2, 2.0, x, 1, 1 );
* // x => <Complex64Array>[ 1.0, 2.0, 6.0, 8.0, 10.0, 12.0 ]
*/
declare var csscal: Routine;


// EXPORTS //

export = csscal;
