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

/**
* Interface describing `slinspace`.
*/
interface Routine {
	/**
	* Fills a single-precision floating-point strided array with linearly spaced values over a specified interval.
	*
	* @param N - number of indexed elements
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* slinspace( x.length, 0.0, 7.0, true, x, 1 );
	* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
	*/
	( N: number, start: number, stop: number, endpoint: boolean, x: Float32Array, strideX: number ): Float32Array;

	/**
	* Fills a single-precision floating-point strided array with linearly spaced values over a specified interval using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param start - start of interval
	* @param stop - end of interval
	* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* slinspace.ndarray( x.length, 0.0, 7.0, true, x, 1, 0 );
	* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
	*/
	ndarray( N: number, start: number, stop: number, endpoint: boolean, x: Float32Array, strideX: number, offsetX: number ): Float32Array;
}

/**
* Fills a single-precision floating-point strided array with linearly spaced values over a specified interval.
*
* @param N - number of indexed elements
* @param start - start of interval
* @param stop - end of interval
* @param endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* slinspace( x.length, 0.0, 7.0, true, x, 1 );
* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* slinspace( x.length, 0.0, 8.0, false, x, 1 );
* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* slinspace.ndarray( x.length, 0.0, 7.0, true, x, 1, 0 );
* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* slinspace.ndarray( x.length, 0.0, 8.0, false, x, 1, 0 );
* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/
declare var slinspace: Routine;


// EXPORTS //

export = slinspace;
