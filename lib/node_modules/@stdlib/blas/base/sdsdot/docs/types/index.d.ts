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
* Interface describing `sdsdot`.
*/
interface Routine {
	/**
	* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
	*
	* @param N - number of values over which to compute the dot product
	* @param scalar - scalar constant added to dot product
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product of `x` and `y`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = sdsdot( x.length, 0.0, x, 1, y, 1 );
	* // returns -5.0
	*/
	( N: number, scalar: number, x: Float32Array, strideX: number, y: Float32Array, strideY: number ): number; // tslint:disable-line:max-line-length

	/**
	* Computes the dot product of two single-precision floating-point vectors using alternative indexing semantics and with extended accumulation.
	*
	* @param N - number of values over which to compute the dot product
	* @param scalar - scalar constant added to dot product
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns dot product of `x` and `y`
	*
	* @example
	* var Float32Array = require( `@stdlib/array/float32` );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	ndarray( N: number, scalar: number, x: Float32Array, strideX: number, offsetX: number, y: Float32Array, strideY: number, offsetY: number ): number; // tslint:disable-line:max-line-length
}

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @param N - number of values over which to compute the dot product
* @param scalar - scalar constant added to dot product
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @returns dot product of `x` and `y`
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdsdot( x.length, 0.0, x, 1, y, 1 );
* // returns -5.0
*
* @example
* var Float32Array = require( `@stdlib/array/float32` );
*
* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
*
* var z = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
* // returns -5.0
*/
declare var sdsdot: Routine;


// EXPORTS //

export = sdsdot;
