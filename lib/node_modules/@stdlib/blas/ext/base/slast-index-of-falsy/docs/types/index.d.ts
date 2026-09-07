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
* Interface describing `slastIndexOfFalsy`.
*/
interface Routine {
	/**
	* Returns the index of the last falsy element in a single-precision floating-point strided array.
	*
	* ## Notes
	*
	* -   If unable to find a falsy element, the function returns `-1`.
	* -   The function explicitly treats `NaN` values as falsy.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns index
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 0.0, 3.0 ] );
	*
	* var idx = slastIndexOfFalsy( x.length, x, 1 );
	* // returns 2
	*/
	( N: number, x: Float32Array, strideX: number ): number;

	/**
	* Returns the index of the last falsy element in a single-precision floating-point strided array using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   If unable to find a falsy element, the function returns `-1`.
	* -   The function explicitly treats `NaN` values as falsy.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns index
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 0.0, 3.0 ] );
	*
	* var idx = slastIndexOfFalsy.ndarray( x.length, x, 1, 0 );
	* // returns 2
	*/
	ndarray( N: number, x: Float32Array, strideX: number, offsetX: number ): number;
}

/**
* Returns the index of the last falsy element in a single-precision floating-point strided array.
*
* ## Notes
*
* -   If unable to find a falsy element, the function returns `-1`.
* -   The function explicitly treats `NaN` values as falsy.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns index
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 0.0, 3.0 ] );
*
* var idx = slastIndexOfFalsy( x.length, x, 1 );
* // returns 2
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 0.0, 3.0 ] );
*
* var idx = slastIndexOfFalsy.ndarray( x.length, x, 1, 0 );
* // returns 2
*/
declare var slastIndexOfFalsy: Routine;


// EXPORTS //

export = slastIndexOfFalsy;
