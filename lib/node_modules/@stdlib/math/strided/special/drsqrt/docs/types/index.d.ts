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
* Interface describing `drsqrt`.
*/
interface Routine {
	/**
	* Computes the reciprocal square root for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* drsqrt( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ Infinity, 0.5, ~0.333, ~0.289, ~0.204 ]
	*/
	( N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number ): Float64Array; // tslint:disable-line:max-line-length

	/**
	* Computes the reciprocal square root for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y` using alternative indexing semantics.
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
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
	* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* drsqrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ Infinity, 0.5, ~0.333, ~0.289, ~0.204 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number ): Float64Array; // tslint:disable-line:max-line-length
}

/**
* Computes the reciprocal square root for each element in a double-precision floating-point strided array `x` and assigns the results to elements in a double-precision floating-point strided array `y`.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @returns `y`
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* drsqrt( x.length, x, 1, y, 1 );
* // y => <Float64Array>[ Infinity, 0.5, ~0.333, ~0.289, ~0.204 ]
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var x = new Float64Array( [ 0.0, 4.0, 9.0, 12.0, 24.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* drsqrt.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ Infinity, 0.5, ~0.333, ~0.289, ~0.204 ]
*/
declare var drsqrt: Routine;


// EXPORTS //

export = drsqrt;
