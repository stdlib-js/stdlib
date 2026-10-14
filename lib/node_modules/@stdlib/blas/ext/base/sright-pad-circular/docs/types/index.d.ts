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
* Interface describing `srightPadCircular`.
*/
interface Routine {
	/**
	* Appends elements to a single-precision floating-point strided array by circularly repeating existing elements.
	*
	* @param N - number of indexed elements in `x`
	* @param k - number of elements to pad
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* srightPadCircular( x.length, 2, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 1.0, 2.0 ]
	*/
	( N: number, k: number, x: Float32Array, strideX: number, y: Float32Array, strideY: number ): Float32Array;

	/**
	* Appends elements to a single-precision floating-point strided array by circularly repeating existing elements using alternative indexing semantics.
	*
	* @param N - number of indexed elements in `x`
	* @param k - number of elements to pad
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - output array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 1.0, 2.0 ]
	*/
	ndarray( N: number, k: number, x: Float32Array, strideX: number, offsetX: number, y: Float32Array, strideY: number, offsetY: number ): Float32Array;
}

/**
* Appends elements to a single-precision floating-point strided array by circularly repeating existing elements.
*
* @param N - number of indexed elements in `x`
* @param k - number of elements to pad
* @param x - input array
* @param strideX - stride length for `x`
* @param y - output array
* @param strideY - stride length for `y`
* @returns output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* srightPadCircular( x.length, 2, x, 1, y, 1 );
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 1.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 1.0, 2.0, 3.0, 1.0, 2.0 ]
*/
declare var srightPadCircular: Routine;


// EXPORTS //

export = srightPadCircular;
