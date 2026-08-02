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
import { Complex128 } from '@stdlib/types/complex';

/**
* Interface describing `zaxpby`.
*/
interface Routine {
	/**
	* Multiplies a double-precision complex floating-point strided array `x` by a constant and adds the result to a double-precision complex floating-point strided array `y` multiplied by a constant.
	*
	* @param N - number of indexed elements
	* @param alpha - first scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param beta - second scalar constant
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
	* var y = new Complex128Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
	*
	* var alpha = new Complex128( 2.0, 1.0 );
	* var beta = new Complex128( 1.0, -1.0 );
	*
	* zaxpby( x.length, alpha, x, 1, beta, y, 1 );
	* // y => <Complex128Array>[ 3.0, 4.0, 9.0, 5.0, 3.0, -2.0 ]
	*/
	( N: number, alpha: Complex128, x: Complex128Array, strideX: number, beta: Complex128, y: Complex128Array, strideY: number ): Complex128Array;

	/**
	* Multiplies a double-precision complex floating-point strided array `x` by a constant and adds the result to a double-precision complex floating-point strided array `y` multiplied by a constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - first scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting `x` index
	* @param beta - second scalar constant
	* @param y - output array
	* @param strideY - `y` stride length
	* @param offsetY - starting `y` index
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
	* var y = new Complex128Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
	*
	* var alpha = new Complex128( 2.0, 1.0 );
	* var beta = new Complex128( 1.0, -1.0 );
	*
	* zaxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	* // y => <Complex128Array>[ 3.0, 4.0, 9.0, 5.0, 3.0, -2.0 ]
	*/
	ndarray( N: number, alpha: Complex128, x: Complex128Array, strideX: number, offsetX: number, beta: Complex128, y: Complex128Array, strideY: number, offsetY: number ): Complex128Array;
}

/**
* Multiplies a double-precision complex floating-point strided array `x` by a constant and adds the result to a double-precision complex floating-point strided array `y` multiplied by a constant.
*
* @param N - number of indexed elements
* @param alpha - first scalar constant
* @param x - input array
* @param strideX - `x` stride length
* @param beta - second scalar constant
* @param y - output array
* @param strideY - `y` stride length
* @returns output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex128Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var alpha = new Complex128( 2.0, 1.0 );
* var beta = new Complex128( 1.0, -1.0 );
*
* zaxpby( x.length, alpha, x, 1, beta, y, 1 );
* // y => <Complex128Array>[ 3.0, 4.0, 9.0, 5.0, 3.0, -2.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex128Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var alpha = new Complex128( 2.0, 1.0 );
* var beta = new Complex128( 1.0, -1.0 );
*
* zaxpby.ndarray( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
* // y => <Complex128Array>[ 3.0, 4.0, 9.0, 5.0, 3.0, -2.0 ]
*/
declare var zaxpby: Routine;


// EXPORTS //

export = zaxpby;
