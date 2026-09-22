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
* Interface describing `dwxmy`.
*/
interface Routine {
	/**
	* Multiplies elements of a double-precision floating-point strided array `x` by the corresponding elements of a double-precision floating-point strided array `y` and assigns the results to elements in a double-precision floating-point strided array `w`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param w - output array
	* @param strideW - `w` stride length
	* @returns `w`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dwxmy( x.length, x, 1, y, 1, w, 1 );
	* // w => <Float64Array>[ 2.0, 6.0, 12.0, 20.0, 30.0 ]
	*/
	( N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number, w: Float64Array, strideW: number ): Float64Array;

	/**
	* Multiplies elements of a double-precision floating-point strided array `x` by the corresponding elements of a double-precision floating-point strided array `y` and assigns the results to elements in a double-precision floating-point strided array `w` using alternative indexing semantics.
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
	* @returns `w`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* dwxmy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	* // w => <Float64Array>[ 2.0, 6.0, 12.0, 20.0, 30.0 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number, w: Float64Array, strideW: number, offsetW: number ): Float64Array;
}

/**
* Multiplies elements of a double-precision floating-point strided array `x` by the corresponding elements of a double-precision floating-point strided array `y` and assigns the results to elements in a double-precision floating-point strided array `w`.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @param w - output array
* @param strideW - `w` stride length
* @returns `w`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dwxmy( x.length, x, 1, y, 1, w, 1 );
* // w => <Float64Array>[ 2.0, 6.0, 12.0, 20.0, 30.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dwxmy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => <Float64Array>[ 2.0, 6.0, 12.0, 20.0, 30.0 ]
*/
declare var dwxmy: Routine;


// EXPORTS //

export = dwxmy;
