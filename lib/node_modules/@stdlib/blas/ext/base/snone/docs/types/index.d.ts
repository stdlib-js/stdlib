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
* Interface describing `snone`.
*/
interface Routine {
	/**
	* Tests whether every element in a single-precision floating-point strided array is falsy.
	*
	* ## Notes
	*
	* -   The function explicitly treats `NaN` values as falsy.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns boolean indicating whether all elements are falsy
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	*
	* var v = snone( x.length, x, 1 );
	* // returns false
	*/
	( N: number, x: Float32Array, strideX: number ): boolean;

	/**
	* Tests whether every element in a single-precision floating-point strided array is falsy using alternative indexing semantics.
	*
	* ## Notes
	*
	* -   The function explicitly treats `NaN` values as falsy.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns boolean indicating whether all elements are falsy
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	*
	* var v = snone.ndarray( x.length, x, 1, 0 );
	* // returns false
	*/
	ndarray( N: number, x: Float32Array, strideX: number, offsetX: number ): boolean;
}

/**
* Tests whether every element in a single-precision floating-point strided array is falsy.
*
* ## Notes
*
* -   The function explicitly treats `NaN` values as falsy.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns boolean indicating whether all elements are falsy
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
*
* var v = snone( x.length, x, 1 );
* // returns false
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
*
* var v = snone.ndarray( x.length, x, 1, 0 );
* // returns false
*/
declare var snone: Routine;


// EXPORTS //

export = snone;
