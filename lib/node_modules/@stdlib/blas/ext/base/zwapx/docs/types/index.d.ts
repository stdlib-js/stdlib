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
* Interface describing `zwapx`.
*/
interface Routine {
	/**
	* Adds a scalar constant to each element in a double-precision complex floating-point strided array `x` and assigns the results to elements in a double-precision complex floating-point strided array `w`.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param w - output array
	* @param strideW - `w` stride length
	* @returns `w`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var alpha = new Complex128( 5.0, 3.0 );
	*
	* zwapx( x.length, alpha, x, 1, w, 1 );
	* // w => <Complex128Array>[ 6.0, 5.0, 8.0, 7.0, 10.0, 9.0, 12.0, 11.0 ]
	*/
	( N: number, alpha: Complex128, x: Complex128Array, strideX: number, w: Complex128Array, strideW: number ): Complex128Array;

	/**
	* Adds a scalar constant to each element in a double-precision complex floating-point strided array `x` and assigns the results to elements in a double-precision complex floating-point strided array `w` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param w - output array
	* @param strideW - `w` stride length
	* @param offsetW - starting index for `w`
	* @returns `w`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* var alpha = new Complex128( 5.0, 3.0 );
	*
	* zwapx.ndarray( x.length, alpha, x, 1, 0, w, 1, 0 );
	* // w => <Complex128Array>[ 6.0, 5.0, 8.0, 7.0, 10.0, 9.0, 12.0, 11.0 ]
	*/
	ndarray( N: number, alpha: Complex128, x: Complex128Array, strideX: number, offsetX: number, w: Complex128Array, strideW: number, offsetW: number ): Complex128Array;
}

/**
* Adds a scalar constant to each element in a double-precision complex floating-point strided array `x` and assigns the results to elements in a double-precision complex floating-point strided array `w`.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - `x` stride length
* @param w - output array
* @param strideW - `w` stride length
* @returns `w`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var alpha = new Complex128( 5.0, 3.0 );
*
* zwapx( x.length, alpha, x, 1, w, 1 );
* // w => <Complex128Array>[ 6.0, 5.0, 8.0, 7.0, 10.0, 9.0, 12.0, 11.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* var alpha = new Complex128( 5.0, 3.0 );
*
* zwapx.ndarray( x.length, alpha, x, 1, 0, w, 1, 0 );
* // w => <Complex128Array>[ 6.0, 5.0, 8.0, 7.0, 10.0, 9.0, 12.0, 11.0 ]
*/
declare var zwapx: Routine;


// EXPORTS //

export = zwapx;
