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

// TypeScript Version: 2.0

/**
* Interface describing `sdeg2rad`.
*/
interface Routine {
	/**
	* Converts each element in a single-precision floating-point strided array `x` from degrees to radians and assigns the results to elements in a single-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* sdeg2rad( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
	*/
	( N: number, x: Float32Array, strideX: number, y: Float32Array, strideY: number ): Float32Array; // tslint:disable-line:max-line-length

	/**
	* Converts each element in a single-precision floating-point strided array `x` from degrees to radians and assigns the results to elements in a single-precision floating-point strided array `y` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns `y`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
	* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* sdeg2rad.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
	*/
	ndarray( N: number, x: Float32Array, strideX: number, offsetX: number, y: Float32Array, strideY: number, offsetY: number ): Float32Array; // tslint:disable-line:max-line-length
}

/**
* Converts each element in a single-precision floating-point strided array `x` from degrees to radians and assigns the results to elements in a single-precision floating-point strided array `y`.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* sdeg2rad( x.length, x, 1, y, 1 );
* // y => <Float32Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* sdeg2rad.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 0.0, ~0.524, ~0.785, ~1.047, ~1.571 ]
*/
declare var sdeg2rad: Routine;


// EXPORTS //

export = sdeg2rad;
