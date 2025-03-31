/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Interface describing `dstdevwd`.
*/
interface Routine {
	/**
	* Computes the standard deviation of a double-precision floating-point strided array using Welford's algorithm.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = dstdevwd( x.length, 1, x, 1 );
	* // returns ~2.0817
	*/
	( N: number, correction: number, x: Float64Array, strideX: number ): number;

	/**
	* Computes the standard deviation of a double-precision floating-point strided array using Welford's algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param correction - degrees of freedom adjustment
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns standard deviation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = dstdevwd.ndarray( x.length, 1, x, 1, 0 );
	* // returns ~2.0817
	*/
	ndarray( N: number, correction: number, x: Float64Array, strideX: number, offsetX: number ): number;
}

/**
* Computes the standard deviation of a double-precision floating-point strided array using Welford's algorithm.
*
* @param N - number of indexed elements
* @param correction - degrees of freedom adjustment
* @param x - input array
* @param strideX - stride length
* @returns standard deviation
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dstdevwd( x.length, 1, x, 1 );
* // returns ~2.0817
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = dstdevwd.ndarray( x.length, 1, x, 1, 0 );
* // returns ~2.0817
*/
declare var dstdevwd: Routine;


// EXPORTS //

export = dstdevwd;
