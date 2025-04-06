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
* Interface describing `ssort2ins`.
*/
interface Routine {
	/**
	* Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @returns first input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ssort2ins( x.length, 1, x, 1, y, 1 );
	*
	* console.log( x );
	* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*/
	( N: number, order: number, x: Float32Array, strideX: number, y: Float32Array, strideY: number ): Float32Array;

	/**
	* Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - first input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - stride length for `y`
	* @param offsetY - starting index for `y`
	* @returns first input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	*
	* ssort2ins.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
	*
	* console.log( x );
	* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*
	* console.log( y );
	* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
	*/
	ndarray( N: number, order: number, x: Float32Array, strideX: number, offsetX: number, y: Float32Array, strideY: number, offsetY: number ): Float32Array;
}

/**
* Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.
*
* @param N - number of indexed elements
* @param order - sort order
* @param x - first input array
* @param strideX - stride length for `x`
* @param y - second input array
* @param strideY - stride length for `y`
* @returns first input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* ssort2ins( x.length, 1, x, 1, y, 1 );
*
* console.log( x );
* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
* var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
*
* ssort2ins.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
*/
declare var ssort2ins: Routine;


// EXPORTS //

export = ssort2ins;
