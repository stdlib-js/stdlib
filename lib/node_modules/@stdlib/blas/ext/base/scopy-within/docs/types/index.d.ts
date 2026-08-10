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
* Interface describing `scopyWithin`.
*/
interface Routine {
	/**
	* Performs an in-place copy of elements within a single-precision floating-point strided array.
	*
	* ## Notes
	*
	* -   If the `start` and `target` index ranges do not overlap, the `workspace` array is unused and thus ignored.
	*
	* @param N - number of indexed elements
	* @param target - target index
	* @param start - source start index (inclusive)
	* @param end - source end index (exclusive)
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param workspace - workspace array
	* @param strideW - stride length for `workspace`
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var w = new Float32Array( x.length );
	*
	* scopyWithin( x.length, 3, 1, 4, x, 1, w, 1 );
	* // x => <Float32Array>[ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ]
	*/
	( N: number, target: number, start: number, end: number, x: Float32Array, strideX: number, workspace: Float32Array, strideW: number ): Float32Array;

	/**
	* Performs an in-place copy of elements within a single-precision floating-point strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If the `start` and `target` index ranges do not overlap, the `workspace` array is unused and thus ignored.
	*
	* @param N - number of indexed elements
	* @param target - target index
	* @param start - source start index (inclusive)
	* @param end - source end index (exclusive)
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param workspace - workspace array
	* @param strideW - stride length for `workspace`
	* @param offsetW - starting index for `workspace`
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var w = new Float32Array( x.length );
	*
	* scopyWithin.ndarray( x.length, 3, 1, 4, x, 1, 0, w, 1, 0 );
	* // x => <Float32Array>[ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ]
	*/
	ndarray( N: number, target: number, start: number, end: number, x: Float32Array, strideX: number, offsetX: number, workspace: Float32Array, strideW: number, offsetW: number ): Float32Array;
}

/**
* Performs an in-place copy of elements within a single-precision floating-point strided array.
*
* ## Notes
*
* -   If the `start` and `target` index ranges do not overlap, the `workspace` array is unused and thus ignored.
*
* @param N - number of indexed elements
* @param target - target index
* @param start - source start index (inclusive)
* @param end - source end index (exclusive)
* @param x - input array
* @param strideX - stride length for `x`
* @param workspace - workspace array
* @param strideW - stride length for `workspace`
* @returns `x`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var w = new Float32Array( x.length );
*
* scopyWithin( x.length, 3, 1, 4, x, 1, w, 1 );
* // x => <Float32Array>[ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var w = new Float32Array( x.length );
*
* scopyWithin.ndarray( x.length, 3, 1, 4, x, 1, 0, w, 1, 0 );
* // x => <Float32Array>[ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ]
*/
declare var scopyWithin: Routine;


// EXPORTS //

export = scopyWithin;
