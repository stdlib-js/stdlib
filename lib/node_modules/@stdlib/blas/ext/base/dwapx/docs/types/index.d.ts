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

/**
* Interface describing `dwapx`.
*/
interface Routine {
	/**
	* Adds a scalar constant to each element in a double-precision floating-point strided array `x` and assigns the results to a double-precision floating-point strided array `w`.
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
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dwapx( x.length, 5.0, x, 1, w, 1 );
	* // w => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*/
	( N: number, alpha: number, x: Float64Array, strideX: number, w: Float64Array, strideW: number ): Float64Array;

	/**
	* Adds a scalar constant to each element in a double-precision floating-point strided array `x` and assigns the results to a double-precision floating-point strided array `w` using alternative indexing semantics.
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
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dwapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, 0 );
	* // w => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
	*/
	ndarray( N: number, alpha: number, x: Float64Array, strideX: number, offsetX: number, w: Float64Array, strideW: number, offsetW: number ): Float64Array;
}

/**
* Adds a scalar constant to each element in a double-precision floating-point strided array `x` and assigns the results to a double-precision floating-point strided array `w`.
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
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dwapx( x.length, 5.0, x, 1, w, 1 );
* // w => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dwapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, 0 );
* // w => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
*/
declare var dwapx: Routine;


// EXPORTS //

export = dwapx;
