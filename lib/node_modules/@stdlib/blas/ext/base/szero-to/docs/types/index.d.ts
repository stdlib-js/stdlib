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
* Interface describing `szeroTo`.
*/
interface Routine {
	/**
	* Fills a single-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* szeroTo( x.length, x, 1 );
	* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0 ]
	*/
	( N: number, x: Float32Array, strideX: number ): Float32Array;

	/**
	* Fills a single-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* szeroTo.ndarray( x.length, x, 1, 0 );
	* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0 ]
	*/
	ndarray( N: number, x: Float32Array, strideX: number, offsetX: number ): Float32Array;
}

/**
* Fills a single-precision floating-point strided array with linearly spaced numeric elements which increment by `1` starting from zero.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* szeroTo( x.length, x, 1 );
* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* szeroTo.ndarray( x.length, x, 1, 0 );
* // x => <Float32Array>[ 0.0, 1.0, 2.0, 3.0 ]
*/
declare var szeroTo: Routine;


// EXPORTS //

export = szeroTo;
