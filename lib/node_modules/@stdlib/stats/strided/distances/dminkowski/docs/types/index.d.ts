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
* Interface describing `dminkowski`.
*/
interface Routine {
	/**
	* Computes the Minkowski distance between two double-precision floating-point strided arrays.
	*
	* @param N - number of indexed elements
	* @param p - order of the Minkowski norm
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns Minkowski distance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = dminkowski( x.length, 3, x, 1, y, 1 );
	* // returns ~11.543
	*/
	( N: number, p: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number ): number;

	/**
	* Computes the Minkowski distance between two double-precision floating-point strided arrays using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param p - order of the Minkowski norm
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns Minkowski distance
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, 0 );
	* // returns ~11.543
	*/
	ndarray( N: number, p: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number ): number;
}

/**
* Computes the Minkowski distance between two double-precision floating-point strided arrays.
*
* @param N - number of indexed elements
* @param p - order of the Minkowski norm
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @returns Minkowski distance
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = dminkowski( x.length, 3, x, 1, y, 1 );
* // returns ~11.543
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, 0 );
* // returns ~11.543
*/
declare var dminkowski: Routine;


// EXPORTS //

export = dminkowski;
