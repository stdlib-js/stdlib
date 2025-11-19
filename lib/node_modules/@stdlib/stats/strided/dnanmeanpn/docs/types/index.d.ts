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
* Interface describing `dnanmeanpn`.
*/
interface Routine {
	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = dnanmeanpn( x.length, x, 1 );
	* // returns ~0.3333
	*/
	( N: number, x: Float64Array, strideX: number ): number;

	/**
	* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns arithmetic mean
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = dnanmeanpn.ndarray( x.length, x, 1, 0 );
	* // returns ~0.3333
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number ): number;
}

/**
* Computes the arithmetic mean of a double-precision floating-point strided array, ignoring `NaN` values and using a two-pass error correction algorithm.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns arithmetic mean
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = dnanmeanpn( x.length, x, 1 );
* // returns ~0.3333
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = dnanmeanpn.ndarray( x.length, x, 1, 0 );
* // returns ~0.3333
*/
declare var dnanmeanpn: Routine;


// EXPORTS //

export = dnanmeanpn;
